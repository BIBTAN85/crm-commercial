import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  INSTAGRAM_BUSINESS_ACCOUNT_ID: z.string().optional().default(''),
  INSTAGRAM_ACCESS_TOKEN: z.string().optional().default(''),
  TARGET_MEDIA_ID: z.string().optional().default(''),
  DATABASE_URL: z.string().default('./data/marble-race.db'),
  OUTPUT_DIR: z.string().default('./renders'),
  ENTRY_KEYWORD: z.string().default('GO'),
  MAX_PARTICIPANTS: z.coerce.number().int().positive().default(150),
  DRY_RUN: z.coerce.boolean().default(true),
  COMMENTS_WINDOW_HOURS: z.coerce.number().int().positive().default(24),
  MOCK_PARTICIPANTS: z.string().optional().default(''),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  CRON_SCHEDULE: z.string().default('0 9 * * *'),
  RENDER_MODE: z.enum(['remotion', 'simulation']).default('remotion'),
  PUBLIC_VIDEO_URL: z.string().url().optional().or(z.literal('')).default('')
}).superRefine((value, ctx) => {
  const mockEnabled = value.MOCK_PARTICIPANTS.trim().length > 0;
  if (!mockEnabled && !value.INSTAGRAM_ACCESS_TOKEN) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['INSTAGRAM_ACCESS_TOKEN'], message: 'Required without MOCK_PARTICIPANTS.' });
  }
  if (!mockEnabled && !value.INSTAGRAM_BUSINESS_ACCOUNT_ID) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ['INSTAGRAM_BUSINESS_ACCOUNT_ID'], message: 'Required without MOCK_PARTICIPANTS.' });
  }
});

export type Env = z.infer<typeof envSchema>;
export const env: Env = envSchema.parse(process.env);
