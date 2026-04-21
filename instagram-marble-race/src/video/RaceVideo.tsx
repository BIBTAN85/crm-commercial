import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { MarbleState } from './raceEngine.js';
import { truncateUsername } from './textLayout.js';

export interface RaceVideoProps {
  frames: MarbleState[][];
  winner: string;
}

export const RaceVideo: React.FC<RaceVideoProps> = ({ frames, winner }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const introOpacity = interpolate(frame, [0, 25, 55], [1, 1, 0], { extrapolateRight: 'clamp' });
  const finalOpacity = interpolate(frame, [durationInFrames - 80, durationInFrames - 30], [0, 1], { extrapolateLeft: 'clamp' });

  const current = frames[Math.min(frame, frames.length - 1)] ?? [];

  return (
    <AbsoluteFill style={{ backgroundColor: '#0B1020', color: '#fff', fontFamily: 'Inter, Arial' }}>
      <div style={{ position: 'absolute', top: 40, left: 54, fontSize: 42, fontWeight: 700 }}>Course des abonnés du jour</div>

      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: introOpacity, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64, fontWeight: 800 }}>
        Course des abonnés du jour
      </div>

      <div style={{ position: 'absolute', top: 180, left: 45, right: 45, bottom: 180, border: '2px solid rgba(255,255,255,0.15)', borderRadius: 24 }}>
        {current.map((marble) => (
          <React.Fragment key={marble.username}>
            <div
              style={{
                position: 'absolute',
                transform: `translate(${marble.x}px, ${marble.y}px)`,
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: marble.color,
                boxShadow: '0 0 12px rgba(255,255,255,.35)'
              }}
            />
            <div
              style={{
                position: 'absolute',
                transform: `translate(${marble.x - 28}px, ${marble.y - 24}px)`,
                color: '#fff',
                textShadow: '0 1px 6px rgba(0,0,0,.8)',
                fontSize: 18,
                width: 140,
                textAlign: 'center'
              }}
            >
              @{truncateUsername(marble.username)}
            </div>
          </React.Fragment>
        ))}
      </div>

      <div style={{ position: 'absolute', bottom: 70, left: 0, right: 0, textAlign: 'center', fontSize: 56, fontWeight: 800, opacity: finalOpacity }}>
        Le gagnant du jour : @{winner}
      </div>
    </AbsoluteFill>
  );
};
