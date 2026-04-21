import { mkdirSync } from 'node:fs';
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

export const renderRace = async (participants: string[]): Promise<RenderRaceResult> => {
  if (participants.length < 2) {
    throw new Error('At least 2 participants are required to render a race.');
  }

  mkdirSync(env.OUTPUT_DIR, { recursive: true });
  const { frames, winner } = runRaceSimulation(participants);

  const serveUrl = await bundle({
    entryPoint: resolve('src/video/index.tsx')
  });

  const composition = await selectComposition({
    serveUrl,
    id: 'MarbleRace',
    inputProps: { frames, winner }
  });

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
};
