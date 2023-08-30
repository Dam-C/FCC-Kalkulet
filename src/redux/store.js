import { configureStore } from "@reduxjs/toolkit";
import kalkulSlice from "./kalkulSlice";

export const store = configureStore({
  reducer: {
    kalkul: kalkulSlice.reducer,
  },
});
