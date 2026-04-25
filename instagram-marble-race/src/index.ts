import { logger } from './utils/logger.js';
import { runDailyRace } from './jobs/dailyRun.js';

const main = async () => {
  logger.info('instagram-marble-race started. Use `npm run daily -- --once` for one execution.');
  if (process.argv.includes('--run-now')) {
    await runDailyRace();
  }
};

main().catch((error) => {
  logger.error('Fatal startup error', { error: error instanceof Error ? error.message : String(error) });
  process.exit(1);
});
