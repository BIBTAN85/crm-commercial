export const truncateUsername = (username: string, maxLength = 14): string => {
  if (username.length <= maxLength) return username;
  return `${username.slice(0, maxLength - 1)}…`;
};

export const fitParticipantsForScreen = (count: number): { laneGap: number; marbleRadius: number } => {
  if (count <= 12) return { laneGap: 130, marbleRadius: 28 };
  if (count <= 30) return { laneGap: 70, marbleRadius: 20 };
  return { laneGap: 45, marbleRadius: 14 };
};
