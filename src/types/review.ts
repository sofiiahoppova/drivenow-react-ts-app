import { UserBase } from "./user";

export interface Review {
  id: number;
  rating: number;
  description: string;
  user: UserBase;
}
