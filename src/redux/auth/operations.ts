import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { api } from "@/api/axiosInstance";

import { clearAuthHeader, setAuthHeader } from "@/api/utils";

import {
  LogInCredentials,
  ResetPasswordCredentials,
  SignUpCredentials,
  SignUpResponse,
} from "@/types";

export const signUp = createAsyncThunk<
  SignUpResponse,
  SignUpCredentials,
  { rejectValue: string }
>("auth/signUp", async (credentials, thunkAPI) => {
  try {
    const { data } = await api.post("/register", credentials);
    setAuthHeader(data.data.accessToken);
    localStorage.setItem("accessToken", data.data.accessToken);
    return data;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const logIn = createAsyncThunk<
  string,
  LogInCredentials,
  { rejectValue: string }
>("auth/logIn", async (credentials, thunkAPI) => {
  try {
    const data = await api.post("/login", credentials);
    setAuthHeader(data.data.accessToken);
    localStorage.setItem("accessToken", data.data.accessToken);
    return data.data.accessToken;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const logOut = createAsyncThunk<void, void, { rejectValue: string }>(
  "auth/logOut",
  async (_, thunkAPI) => {
    try {
      await api.delete("/logout");
      clearAuthHeader();
      localStorage.clear();
    } catch (error: unknown | AxiosError) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(error.response?.data || error.message);
      }
      return thunkAPI.rejectWithValue("Unknown error");
    }
  }
);

export const forgotPassword = createAsyncThunk<
  void,
  string,
  { rejectValue: string }
>("auth/forgotPassword", async (email, thunkAPI) => {
  try {
    await api.post("/forgot-password", { email });
    return;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});

export const resetPassword = createAsyncThunk<
  void,
  ResetPasswordCredentials,
  { rejectValue: string }
>("auth/resetPassword", async (credentials, thunkAPI) => {
  try {
    await api.post("/reset-password", credentials);
    return;
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
    return thunkAPI.rejectWithValue("Unknown error");
  }
});
