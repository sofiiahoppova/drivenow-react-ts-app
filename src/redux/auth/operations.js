import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../api/axiosInstance";
import { clearAuthHeader, setAuthHeader } from "../../api/utils";

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/register", credentials);
      setAuthHeader(data.data.accessToken);
      localStorage.setItem("accessToken", data.data.accessToken);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/logIn",
  async (credentials, thunkAPI) => {
    try {
      const data = await api.post("/login", credentials);
      setAuthHeader(data.data.accessToken);
      localStorage.setItem("accessToken", data.data.accessToken);
      return data.data.accessToken;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async (_, thunkAPI) => {
  try {
    await api.delete("/logout");
    clearAuthHeader();
    localStorage.clear("accessToken");
  } catch (error) {
    if (error.response) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
    return thunkAPI.rejectWithValue(error.message || "Unknown error");
  }
});

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (email, thunkAPI) => {
    try {
      const { data } = await api.post("/forgot-password", { email });
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post("/reset-password", credentials);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
