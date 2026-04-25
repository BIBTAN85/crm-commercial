import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { instagramClient } from './client.js';
import { InstagramMedia } from './types.js';

export const getTargetMedia = async (): Promise<InstagramMedia> => {
  if (env.TARGET_MEDIA_ID) {
    logger.info('Using TARGET_MEDIA_ID from environment', { mediaId: env.TARGET_MEDIA_ID });
    return { id: env.TARGET_MEDIA_ID };
  }

  if (env.MOCK_PARTICIPANTS.trim()) {
    logger.info('MOCK_PARTICIPANTS detected, using synthetic target media id.');
    return { id: 'mock-media-id' };
  }

  const response = await instagramClient.get<{ data: InstagramMedia[] }>(`/${env.INSTAGRAM_BUSINESS_ACCOUNT_ID}/media`, {
    params: {
      fields: 'id,caption,timestamp,media_type',
      limit: 10
    }
  });

  const eligible = response.data.data.find((m) => m.media_type === 'VIDEO' || m.media_type === 'CAROUSEL_ALBUM' || m.media_type === 'IMAGE');
  if (!eligible) throw new Error('No eligible media found for target post selection.');

  logger.info('Automatically selected latest eligible media', { mediaId: eligible.id, mediaType: eligible.media_type });
  return eligible;
};
