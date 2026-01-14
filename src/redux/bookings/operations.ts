import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "@/api/axiosInstance";

export const fetchAllBookings = createAsyncThunk(
  "bookings/fetchAllBookings",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/bookings");
      console.log(data);
      return data.data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const createBooking = createAsyncThunk(
  "bookings/createBooking",
  async (params, thunkAPI) => {
    try {
      const { data } = await api.post("/bookings", params);
      console.log(data, data.data);
      return data.data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const deleteBooking = createAsyncThunk(
  "bookings/deleteBooking",
  async (bookingId: number, thunkAPI) => {
    try {
      const { data } = await api.delete(`/bookings/${bookingId}`);
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
