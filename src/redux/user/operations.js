import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axiosInstance";

export const fetchUserMe = createAsyncThunk(
  "user/fetchUserMe",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/users/me");
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const updateUserMe = createAsyncThunk(
  "user/updateUserMe",
  async (credantials, thunkAPI) => {
    try {
      const { data } = await api.put("/users/me", credantials);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
