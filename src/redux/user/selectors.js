export const selectMe = (state) => state.user.user;
export const selectUserStatus = (state) => state.user.status;
export const selectUserError = (state) => state.user.error;
export const selectIsInitialized = (state) => state.user.isInitialized;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
