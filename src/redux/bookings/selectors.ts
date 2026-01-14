import { RootState } from "../store";

export const selectBooking = (state: RootState) => state.bookings.booking;
export const selectBookings = (state: RootState) => state.bookings.bookings;
export const selectBookingStatus = (state: RootState) => state.bookings.status;
export const selectBookingError = (state: RootState) => state.bookings.error;
