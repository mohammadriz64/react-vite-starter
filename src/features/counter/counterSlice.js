import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count >= 0 && (state.count += 1);
    },
    decrement: (state) => {
      state.count !== 0 && (state.count -= 1);
    },
    incrementByValue: (state, action) => {
      state.count += action.payload;
    },
    decrementByValue: (state, action) => {
      state.count -= action.payload;
    },
  },
});

const {actions, reducer} = counterSlice; 
export const { increment, decrement, incrementByValue, decrementByValue } = actions;
export default reducer;
