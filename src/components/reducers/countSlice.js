import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: { count: 1 },
  reducers: {
    plusCounter: (state, payload) => {
      state.count += 1;
    },
    minusCounter: (state, payload) => {
      state.count -= 1;
    },
    resetCounter: (state, payload) => {
      state.count = 0;
    },
  },
});
export const { plusCounter, minusCounter, resetCounter } = countSlice.actions;
export default countSlice.reducer;
