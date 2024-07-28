import { createSlice } from "@reduxjs/toolkit";

export interface LoadingState {
  isLoading: boolean;
}

const initialState: LoadingState = {
  isLoading: false,
};
// userSlice
// cartSlice
// errorSlice
export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    startLoading: (state: LoadingState) => {
      state.isLoading = true;
    },
    stopLoading: (state: LoadingState) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
