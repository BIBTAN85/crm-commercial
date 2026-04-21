import { accessSync } from 'node:fs';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { instagramClient } from './client.js';

interface PublishResult {
  creationId?: string;
  publishedMediaId?: string;
  dryRun: boolean;
}

export const publishReel = async (videoPath: string, caption: string, dryRun = env.DRY_RUN): Promise<PublishResult> => {
  if (dryRun) {
    logger.info('Dry-run mode enabled, skipping Instagram publish.', { videoPath });
    return { dryRun: true };
  }

  accessSync(videoPath);

  const createResponse = await instagramClient.post<{ id: string }>(
    `/${env.INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`,
    null,
    {
      params: {
        media_type: 'REELS',
        video_url: videoPath,
        caption
      }
    }
  );

  const creationId = createResponse.data.id;
  const publishResponse = await instagramClient.post<{ id: string }>(
    `/${env.INSTAGRAM_BUSINESS_ACCOUNT_ID}/media_publish`,
    null,
    { params: { creation_id: creationId } }
  );

  logger.info('Reel published on Instagram.', { mediaId: publishResponse.data.id });
  return {
    creationId,
    publishedMediaId: publishResponse.data.id,
    dryRun: false
  };
};
