import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars, fetchCarById } from "./operations";

const initialState = {
  cars: { entities: [], pagination: {} },
  car: null,
  status: "idle",
  error: null,
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCars.pending, (state, action) => {
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
        state.error = action.error.message;
      })
      .addCase(fetchCarById.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.car = action.payload.data;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
