import { env } from '../config/env.js';
import { getWindowStart } from '../utils/dates.js';
import { dedupeUsernames } from '../utils/dedupe.js';
import { InstagramComment } from './types.js';

export interface ParticipantsOptions {
  keyword?: string;
  maxParticipants?: number;
  windowHours?: number;
}

const hasKeyword = (text: string, keyword: string) =>
  text.toLowerCase().includes(keyword.trim().toLowerCase());

export const getParticipants = (comments: InstagramComment[], options: ParticipantsOptions = {}): string[] => {
  const keyword = options.keyword ?? env.ENTRY_KEYWORD;
  const max = options.maxParticipants ?? env.MAX_PARTICIPANTS;
  const windowHours = options.windowHours ?? env.COMMENTS_WINDOW_HOURS;
  const windowStart = getWindowStart(windowHours);

  const usernames = comments
    .filter((comment) => Boolean(comment?.username?.trim()))
    .filter((comment) => Boolean(comment?.text?.trim()))
    .filter((comment) => hasKeyword(comment.text, keyword))
    .filter((comment) => new Date(comment.timestamp) >= windowStart)
    .map((comment) => comment.username);

  return dedupeUsernames(usernames).slice(0, max);
};
