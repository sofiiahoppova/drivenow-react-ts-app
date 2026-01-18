import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarById } from "./operations";
import { Car, Pagination } from "@/types";

interface CarsState {
  cars: {
    entities: Car[];
    pagination: Pagination;
  };
  car: Car | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: CarsState = {
  cars: { entities: [], pagination: {} as Pagination },
  car: null,
  status: "idle",
  error: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars.entities = action.payload.data;
        state.cars.pagination = action.payload.pagination;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(fetchCarById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default carsSlice.reducer;
