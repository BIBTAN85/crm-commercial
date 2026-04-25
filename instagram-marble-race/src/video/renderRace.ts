import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { runRaceSimulation } from './raceEngine.js';

interface RenderRaceResult {
  videoPath: string;
  winner: string;
  participants: string[];
}

const renderSimulationFile = (participants: string[], winner: string): string => {
  const filePath = resolve(env.OUTPUT_DIR, `race-${Date.now()}-simulation.json`);
  writeFileSync(filePath, JSON.stringify({ participants, winner, mode: 'simulation' }, null, 2), 'utf-8');
  return filePath;
};

export const renderRace = async (participants: string[]): Promise<RenderRaceResult> => {
  if (participants.length < 2) throw new Error('At least 2 participants are required to render a race.');

  mkdirSync(env.OUTPUT_DIR, { recursive: true });
  const { frames, winner } = runRaceSimulation(participants);

  if (env.RENDER_MODE === 'simulation') {
    const videoPath = renderSimulationFile(participants, winner);
    logger.warn('Render mode is simulation: generated metadata file instead of MP4.', { videoPath });
    return { videoPath, winner, participants };
  }

  try {
    const serveUrl = await bundle({ entryPoint: resolve('src/video/index.tsx') });
    const composition = await selectComposition({ serveUrl, id: 'MarbleRace', inputProps: { frames, winner } });

    const fileName = `race-${Date.now()}.mp4`;
    const videoPath = resolve(env.OUTPUT_DIR, fileName);

    await renderMedia({
      composition,
      serveUrl,
      codec: 'h264',
      outputLocation: videoPath,
      inputProps: { frames, winner }
    });

    logger.info('Race video rendered.', { videoPath, participants: participants.length, winner });
    return { videoPath, winner, participants };
  } catch (error) {
    if (!env.DRY_RUN) throw error;
    const videoPath = renderSimulationFile(participants, winner);
    logger.warn('Remotion render failed in DRY_RUN, fallback to simulation file.', {
      reason: error instanceof Error ? error.message : String(error),
      videoPath
    });
    return { videoPath, winner, participants };
  }
};
