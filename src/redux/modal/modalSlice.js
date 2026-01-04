import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false, component: null, props: {} };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(state, action) {
      state.isOpen = true;
      state.component = action.payload.component;
      state.props = action.payload.props;
    },
    setClose(state, action) {
      state.isOpen = false;
      state.component = null;
      state.props = null;
    },
  },
});

export const { setClose, setOpen } = modalSlice.actions;

export default modalSlice.reducer;
