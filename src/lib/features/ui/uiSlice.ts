import { createAppSlice } from "@/lib/createAppSlice";
import type { AppThunk } from "@/lib/store";
import type { PayloadAction } from "@reduxjs/toolkit";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export interface UiSliceState {
  isMenuOpen: Boolean;
}

const initialState: UiSliceState = {
  isMenuOpen: false,
};

export const uiSlice = createAppSlice({
  name: "ui",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: (create) => ({
    toggleMenu: create.reducer((state) => {
      state.isMenuOpen = !state.isMenuOpen;
    }),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectMenuState: (ui) => ui.isMenuOpen,
  },
});

// Action creators are generated for each case reducer function.
export const { toggleMenu } = uiSlice.actions;
export const { selectMenuState } = uiSlice.selectors;
