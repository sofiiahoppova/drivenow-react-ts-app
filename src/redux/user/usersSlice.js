import { createSlice } from "@reduxjs/toolkit";
import { fetchUserMe, updateUserMe } from "./operations";

const initialState = {
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
    setAuth(state, action) {
      state.isAuthenticated = action.payload;
    },
    setInit(state, action) {
      state.isInitialized = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMe.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
        state.isInitialized = true;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.isAuthenticated = false;
        state.isInitialized = true;
      })
      .addCase(updateUserMe.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(updateUserMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearUser, setAuth, setInit } = userSlice.actions;

export default userSlice.reducer;
