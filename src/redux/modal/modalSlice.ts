import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ModalNames } from "@/types/modal";

interface ModalState {
  isOpen: boolean;
  component: ModalNames | null;
  props: Record<string, unknown> | null;
}

const initialState: ModalState = { isOpen: false, component: null, props: {} };

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen(
      state,
      action: PayloadAction<{
        component: ModalNames;
        props?: Record<string, unknown>;
      }>
    ) {
      state.isOpen = true;
      state.component = action.payload.component;
      state.props = action.payload.props ?? null;
    },
    setClose(state) {
      state.isOpen = false;
      state.component = null;
      state.props = null;
    },
  },
});

export const { setClose, setOpen } = modalSlice.actions;

export default modalSlice.reducer;
