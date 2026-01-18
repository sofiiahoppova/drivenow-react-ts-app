import { CarBase } from "./car";
import { User, UserBase } from "./user";

export interface Booking {
  id: number;
  startDate: string;
  endDate: string;
  carId: number;
  car: CarBase;
  plan: string;
  status: "pending";
  user: UserBase;
}

export interface BookingParams {
  plan: "basicPlan" | "fullCoverage";
  carId: number;
  startDate: string;
  endDate: string;
  user: User;
}
