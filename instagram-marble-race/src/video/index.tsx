import React from 'react';
import { registerRoot } from 'remotion';
import { RemotionRoot } from './Root.js';

const Root: React.FC = () => {
  const props = (globalThis as { RemotionInputProps?: { frames: []; winner: string } }).RemotionInputProps;
  const frames = props?.frames ?? [];
  const winner = props?.winner ?? 'unknown';
  return <RemotionRoot frames={frames} winner={winner} />;
};

registerRoot(Root);
