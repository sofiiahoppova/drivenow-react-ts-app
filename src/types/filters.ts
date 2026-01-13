export interface Filters {
  brand: string;
  transmission: "automatic" | "manual";
  carClass: "economy" | "compact" | "midsize" | "SUV" | "premium";
  seats: number;
  page: number;
  perPage: number;
  startDate: string;
  endDate: string;
}
