import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cardReducer from "../features/card/cardSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    cardReducer,
  },
});
