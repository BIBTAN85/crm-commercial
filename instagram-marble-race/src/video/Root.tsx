import React from 'react';
import { Composition } from 'remotion';
import { MarbleState } from './raceEngine.js';
import { RaceVideo } from './RaceVideo.js';

export const RemotionRoot: React.FC<{ frames: MarbleState[][]; winner: string }> = ({ frames, winner }) => {
  return (
    <Composition
      id="MarbleRace"
      component={RaceVideo as unknown as React.ComponentType<Record<string, unknown>>}
      durationInFrames={frames.length}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{ frames, winner }}
    />
  );
};
