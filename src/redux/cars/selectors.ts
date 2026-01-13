import { RootState } from "../store";

export const selectAllCars = (state: RootState) => state.cars.cars.entities;
export const selectPagination = (state: RootState) =>
  state.cars.cars.pagination;
export const selectCar = (state: RootState) => state.cars.car;
export const selectCarsStatus = (state: RootState) => state.cars.status;
export const selectCarsError = (state: RootState) => state.cars.error;
