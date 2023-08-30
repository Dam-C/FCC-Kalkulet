import { createSlice } from "@reduxjs/toolkit";

const kalkulSlice = createSlice({
  name: "kalkul",
  initialState: {
    zeroOrDecimal: false,
    kalkulus: [],
    currentInput: "",
  },
  reducers: {
    getInput: (state, action) => {
      console.log(action);
      state.currentInput = state.currentInput + action.payload.kalkulValue;
      state.kalkulus = state.currentInput;
    },
    addToKalkulus: (state, action) => {
      state.kalkulus = [...state.kalkulus, action.payload, state.currentInput];
      state.currentInput = "";
    },
    doKalkulus: (state) => {
      state.currentInput = "";
    },
  },
});

export const { getInput, addToKalkulus, doKalkulus } = kalkulSlice.actions;

export default kalkulSlice;
