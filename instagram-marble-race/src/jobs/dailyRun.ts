import cron from 'node-cron';
import { env } from '../config/env.js';
import { runRepository } from '../db/sqlite.js';
import { captionBuilder } from '../instagram/captionBuilder.js';
import { getComments } from '../instagram/getComments.js';
import { getParticipants } from '../instagram/getParticipants.js';
import { getTargetMedia } from '../instagram/getTargetMedia.js';
import { publishReel } from '../instagram/publishReel.js';
import { logger } from '../utils/logger.js';
import { toIsoDate } from '../utils/dates.js';
import { renderRace } from '../video/renderRace.js';

const parseMockParticipants = (): string[] =>
  env.MOCK_PARTICIPANTS.split(',').map((x) => x.trim()).filter(Boolean);

export const runDailyRace = async (): Promise<void> => {
  const runDate = toIsoDate();
  const mockParticipants = parseMockParticipants();

  try {
    const media = await getTargetMedia();
    const comments = mockParticipants.length ? [] : await getComments(media.id);
    const participants = mockParticipants.length ? mockParticipants : getParticipants(comments);

    if (participants.length < 2) {
      throw new Error(`Not enough participants (${participants.length}) after filtering.`);
    }

    const { videoPath, winner } = await renderRace(participants);
    const caption = captionBuilder(participants.length, winner);
    const publishResult = await publishReel(videoPath, caption);

    runRepository.insertRun({
      run_date: runDate,
      media_id: media.id,
      participants_count: participants.length,
      participants_json: JSON.stringify(participants),
      winner_username: winner,
      video_path: videoPath,
      caption,
      published_at: publishResult.dryRun ? undefined : new Date().toISOString(),
      status: publishResult.dryRun ? 'dry-run' : 'published'
    });

    logger.info('Daily run completed.', {
      runDate,
      mediaId: media.id,
      participants: participants.length,
      winner,
      dryRun: publishResult.dryRun
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    runRepository.insertRun({
      run_date: runDate,
      media_id: env.TARGET_MEDIA_ID || 'unknown',
      participants_count: 0,
      participants_json: '[]',
      status: 'failed',
      error_message: message
    });
    logger.error('Daily run failed.', { error: message });
    throw error;
  }
};

if (process.argv.includes('--once')) {
  runDailyRace()
    .finally(() => runRepository.close());
} else {
  cron.schedule(env.CRON_SCHEDULE, () => {
    runDailyRace().catch((error) => {
      logger.error('Scheduled run failed.', {
        error: error instanceof Error ? error.message : String(error)
      });
    });
  });

  logger.info('Daily race cron started.', { schedule: env.CRON_SCHEDULE });
}
