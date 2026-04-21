import Database from 'better-sqlite3';
import { mkdirSync } from 'node:fs';
import { dirname } from 'node:path';
import { env } from '../config/env.js';
import { initSchemaSql, RunRecordInput } from './schema.js';

const dbPath = env.DATABASE_URL;
mkdirSync(dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.pragma('journal_mode = WAL');
db.exec(initSchemaSql);

const insertRunStmt = db.prepare(`
  INSERT INTO participants_runs (
    run_date, media_id, participants_count, participants_json,
    winner_username, video_path, caption, published_at, status, error_message
  ) VALUES (
    @run_date, @media_id, @participants_count, @participants_json,
    @winner_username, @video_path, @caption, @published_at, @status, @error_message
  )
`);

export const runRepository = {
  insertRun: (record: RunRecordInput) =>
    insertRunStmt.run({
      winner_username: null,
      video_path: null,
      caption: null,
      published_at: null,
      error_message: null,
      ...record
    }),
  close: () => db.close()
};
