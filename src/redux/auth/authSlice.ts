import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  signUp,
  logIn,
  forgotPassword,
  resetPassword,
  logOut,
} from "./operations";
import { User } from "@/types";

interface AuthState {
  user: User | null;
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  status: "idle",
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
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
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(logIn.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(logIn.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(logOut.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
        state.token = null;
      })
      .addCase(logOut.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(forgotPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      })
      .addCase(resetPassword.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { setToken } = authSlice.actions;

export default authSlice.reducer;
