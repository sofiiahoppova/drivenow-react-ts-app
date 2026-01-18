import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "@/api/axiosInstance";

import { Car, FetchCarsResponse, Filters } from "@/types";

export const fetchAllCars = createAsyncThunk<
  FetchCarsResponse,
  Filters,
  { rejectValue: string }
>("cars/fetchAllCars", async (filters, thunkAPI) => {
  try {
    const { data } = await api.get("/cars", { params: { ...filters } });
    return data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const fetchCarById = createAsyncThunk<
  Car,
  string,
  { rejectValue: string }
>("cars/fetchCarById", async (carId, thunkAPI) => {
  try {
    const { data } = await api.get(`/cars/${carId}`);
    return data.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
