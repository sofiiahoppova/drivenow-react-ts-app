import { createSlice } from "@reduxjs/toolkit";
import { createBooking, deleteBooking, fetchAllBookings } from "./operations";
import { Booking } from "@/types";

interface BookingsState {
  bookings: Booking[];
  booking: Booking | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: BookingsState = {
  bookings: [],
  booking: null,
  status: "idle",
  error: null,
};

export const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBookings.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchAllBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload;
      })
      .addCase(fetchAllBookings.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(createBooking.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings.push(action.payload);
        state.booking = action.payload;
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(deleteBooking.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default bookingsSlice.reducer;
