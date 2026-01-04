import { createSlice } from "@reduxjs/toolkit";
import { createBooking, deleteBooking, fetchAllBookings } from "./operations";

const initialState = {
  bookings: [],
  booking: null,
  status: "idle",
  error: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBookings.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload.data;
      })
      .addCase(fetchAllBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createBooking.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings.push(action.payload.data);
        state.booking = action.payload.data;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteBooking.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default bookingsSlice.reducer;
