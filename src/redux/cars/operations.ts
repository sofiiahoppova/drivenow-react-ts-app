import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "@/api/axiosInstance";

import { Filters } from "@/types";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (filters: Filters, thunkAPI) => {
    try {
      const { data } = await api.get("/cars", { params: { ...filters } });
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (carId: string, thunkAPI) => {
    try {
      const { data } = await api.get(`/cars/${carId}`);
      return data;
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);
