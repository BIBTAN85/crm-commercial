import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  INSTAGRAM_BUSINESS_ACCOUNT_ID: z.string().min(1),
  INSTAGRAM_ACCESS_TOKEN: z.string().min(1),
  TARGET_MEDIA_ID: z.string().optional().default(''),
  DATABASE_URL: z.string().default('./data/marble-race.db'),
  OUTPUT_DIR: z.string().default('./renders'),
  ENTRY_KEYWORD: z.string().default('GO'),
  MAX_PARTICIPANTS: z.coerce.number().int().positive().default(150),
  DRY_RUN: z.coerce.boolean().default(true),
  COMMENTS_WINDOW_HOURS: z.coerce.number().int().positive().default(24),
  MOCK_PARTICIPANTS: z.string().optional().default(''),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  CRON_SCHEDULE: z.string().default('0 9 * * *')
});

export type Env = z.infer<typeof envSchema>;

export const env: Env = envSchema.parse(process.env);
