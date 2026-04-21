export const captionBuilder = (participantsCount: number, winner: string): string => {
  return [
    'Voici la course du jour 🔥',
    `${participantsCount} participants se sont affrontés aujourd’hui.`,
    `Bravo à @${winner} 🎉`,
    'Commente GO pour avoir ta bille dans la prochaine course.'
  ].join('\n');
};
