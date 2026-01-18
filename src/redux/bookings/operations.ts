import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "@/api/axiosInstance";

import { Booking, BookingParams } from "@/types";

export const fetchAllBookings = createAsyncThunk<
  Booking[],
  void,
  { rejectValue: string }
>("bookings/fetchAllBookings", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/bookings");
    return data.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const createBooking = createAsyncThunk<
  Booking,
  BookingParams,
  { rejectValue: string }
>("bookings/createBooking", async (params, thunkAPI) => {
  try {
    const { data } = await api.post("/bookings", params);
    return data.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const deleteBooking = createAsyncThunk<
  void,
  number,
  { rejectValue: string }
>("bookings/deleteBooking", async (bookingId, thunkAPI) => {
  try {
    await api.delete(`/bookings/${bookingId}`);
    return;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
