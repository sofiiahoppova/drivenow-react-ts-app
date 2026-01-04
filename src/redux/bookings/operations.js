import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axiosInstance";

export const fetchAllBookings = createAsyncThunk(
  "bookings/fetchAllBookings",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/bookings");
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (params, thunkAPI) => {
    try {
      const { data } = await api.post("/bookings", params);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (bookingId, thunkAPI) => {
    try {
      const { data } = await api.delete(`/bookings/${bookingId}`);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
