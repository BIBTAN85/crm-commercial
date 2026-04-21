export const initSchemaSql = `
CREATE TABLE IF NOT EXISTS participants_runs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  run_date TEXT NOT NULL,
  media_id TEXT NOT NULL,
  participants_count INTEGER NOT NULL,
  participants_json TEXT NOT NULL,
  winner_username TEXT,
  video_path TEXT,
  caption TEXT,
  published_at TEXT,
  status TEXT NOT NULL,
  error_message TEXT,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
`;

export type RunStatus = 'started' | 'rendered' | 'published' | 'failed' | 'dry-run';

export interface RunRecordInput {
  run_date: string;
  media_id: string;
  participants_count: number;
  participants_json: string;
  winner_username?: string;
  video_path?: string;
  caption?: string;
  published_at?: string;
  status: RunStatus;
  error_message?: string;
}
