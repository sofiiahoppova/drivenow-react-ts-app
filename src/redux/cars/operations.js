import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axiosInstance";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (filters, thunkAPI) => {
    try {
      const { data } = await api.get("/cars", { params: { ...filters } });
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (carId, thunkAPI) => {
    try {
      const { data } = await api.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
