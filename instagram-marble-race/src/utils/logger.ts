import { env } from '../config/env.js';

type Level = 'debug' | 'info' | 'warn' | 'error';
const weight: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };

const canLog = (level: Level) => weight[level] >= weight[env.LOG_LEVEL];

const baseLog = (level: Level, message: string, context?: Record<string, unknown>) => {
  if (!canLog(level)) return;
  const payload = {
    ts: new Date().toISOString(),
    level,
    message,
    ...context
  };
  const line = JSON.stringify(payload);
  if (level === 'error') {
    console.error(line);
    return;
  }
  if (level === 'warn') {
    console.warn(line);
    return;
  }
  console.log(line);
};

export const logger = {
  debug: (message: string, context?: Record<string, unknown>) => baseLog('debug', message, context),
  info: (message: string, context?: Record<string, unknown>) => baseLog('info', message, context),
  warn: (message: string, context?: Record<string, unknown>) => baseLog('warn', message, context),
  error: (message: string, context?: Record<string, unknown>) => baseLog('error', message, context)
};
