import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchUserMe, updateUserMe } from "./operations";
import { User } from "@/types";

interface UserState {
  user: User | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
}

const initialState: UserState = {
  user: null,
  status: "idle",
  error: null,
  isAuthenticated: false,
  isInitialized: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser: () => initialState,
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
    setInit(state, action: PayloadAction<boolean>) {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMe.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.isInitialized = true;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserMe.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
        state.isAuthenticated = false;
        state.isInitialized = true;
      })
      .addCase(updateUserMe.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
      })
      .addCase(updateUserMe.rejected, (state, action) => {
        state.status = "failed";
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export const { clearUser, setAuth, setInit } = userSlice.actions;

export default userSlice.reducer;
