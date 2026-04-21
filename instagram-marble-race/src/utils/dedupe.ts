export const dedupeUsernames = (usernames: string[]): string[] => {
  const seen = new Set<string>();
  const result: string[] = [];
  for (const username of usernames) {
    const normalized = username.trim().toLowerCase();
    if (!normalized || seen.has(normalized)) continue;
    seen.add(normalized);
    result.push(normalized);
  }
  return result;
};
