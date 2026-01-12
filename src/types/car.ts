import { Review } from "./review";
import { Prices } from "./prices";

export interface CarBase {
  id: number;
  brand: string;
  model: string;
  carClass: string;
}

export interface Car extends CarBase {
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
