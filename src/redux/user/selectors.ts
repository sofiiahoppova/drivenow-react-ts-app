import { RootState } from "../store";

export const selectMe = (state: RootState) => state.user.user;
export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUserError = (state: RootState) => state.user.error;
export const selectIsInitialized = (state: RootState) =>
  state.user.isInitialized;
export const selectIsAuthenticated = (state: RootState) =>
  state.user.isAuthenticated;
