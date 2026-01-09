import { Review } from "./review";
import { Prices } from "./prices";

export interface Car {
  id: number;
  brand: string;
  model: string;
  carClass: string;
  transmission: string;
  fuelType: string;
  year: number;
  seats: number;
  consumption: number;
  averageRating: number;
  reviewCount: number;
  reviews: Review[];
  prices: Prices;
}
