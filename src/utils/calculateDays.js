export const calculateDays = (pickup, dropoff) => {
  const start = new Date(pickup);
  const end = new Date(dropoff);
  const diff = end - start;

  if (isNaN(diff) || diff <= 0) return 0;

  return diff / (1000 * 60 * 60 * 24);
};
