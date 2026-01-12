import { CarBase } from "./car";
import { UserBase } from "./user";

export interface Booking {
  id: number;
  startDate: string;
  endDate: Date;
  carId: number;
  car: CarBase;
  plan: string;
  status: "pending";
  user: UserBase;
}
