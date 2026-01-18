import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "../../api/axiosInstance";

import { User } from "@/types";

export const fetchUserMe = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("user/fetchUserMe", async (_, thunkAPI) => {
  try {
    const { data } = await api.get("/users/me");
    return data.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const updateUserMe = createAsyncThunk<
  User,
  Partial<User>,
  { rejectValue: string }
>("user/updateUserMe", async (credantials, thunkAPI) => {
  try {
    const { data } = await api.put("/users/me", credantials);
    return data.data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
