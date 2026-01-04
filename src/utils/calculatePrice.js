export const calculatePrice = (car, days, plan) => {
  let dailyRate =
    days <= 6
      ? car.prices.dailyPrice
      : days <= 13
      ? car.prices.weekendPrice
      : days <= 29
      ? car.prices.weeklyPrice
      : car.prices.monthlyPrice;

  const base = dailyRate * days;

  const coveragePrice = plan === "full" ? base * 0.3 : 0;
  const deposit = plan === "full" ? 0 : 700;

  return {
    dailyRate,
    base,
    coveragePrice,
    deposit,
    total: base + coveragePrice + deposit,
  };
};
