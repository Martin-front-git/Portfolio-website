'use client';
import { createSlice } from "@reduxjs/toolkit";

type MyReducerState = {
  value: number;
};

const initialState = {
  value: 0,
} as MyReducerState;

export const SkillsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const {increment,decrement} = SkillsSlice.actions;
export default SkillsSlice.reducer;
