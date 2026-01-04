import { createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  logIn,
  forgotPassword,
  resetPassword,
  logOut,
} from "./operations";

const initialState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data.user;
        state.token = action.payload.data.accessToken;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logIn.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(logOut.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = null;
        state.token = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(forgotPassword.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(resetPassword.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
