export const toIsoDate = (date = new Date()): string => date.toISOString().slice(0, 10);

export const getWindowStart = (hours: number): Date => {
  const date = new Date();
  date.setHours(date.getHours() - hours);
  return date;
};
