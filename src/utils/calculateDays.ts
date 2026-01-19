export const calculateDays = (pickup: string, dropoff: string) => {
  const start = new Date(pickup);
  const end = new Date(dropoff);
  const diff = parseInt(end.toString()) - parseInt(start.toString());

  if (isNaN(diff) || diff <= 0) return 0;

  return diff / (1000 * 60 * 60 * 24);
};
