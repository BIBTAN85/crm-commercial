export interface MarbleState {
  username: string;
  color: string;
  x: number;
  y: number;
  velocity: number;
}

export interface RaceResult {
  frames: MarbleState[][];
  winner: string;
}

const palette = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E06C', '#8F80FF', '#FCA17D', '#64B5F6'];

export const runRaceSimulation = (participants: string[], totalFrames = 450): RaceResult => {
  const marbles: MarbleState[] = participants.map((username, i) => ({
    username,
    color: palette[i % palette.length],
    x: 80,
    y: 260 + i * 48,
    velocity: 0
  }));

  const frames: MarbleState[][] = [];

  for (let frame = 0; frame < totalFrames; frame += 1) {
    for (const marble of marbles) {
      const accel = 0.2 + Math.random() * 0.35;
      const jitter = (Math.random() - 0.5) * 0.6;
      marble.velocity = Math.max(1.2, marble.velocity * 0.92 + accel + jitter);
      marble.x += marble.velocity;
    }

    marbles.sort((a, b) => a.y - b.y);
    for (let i = 1; i < marbles.length; i += 1) {
      const prev = marbles[i - 1];
      const current = marbles[i];
      if (current.y - prev.y < 38) {
        current.y = prev.y + 38;
      }
    }

    frames.push(marbles.map((m) => ({ ...m })));
  }

  const winner = [...marbles].sort((a, b) => b.x - a.x)[0]?.username ?? 'unknown';
  return { frames, winner };
};
