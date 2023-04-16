import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      name: "Hello",
      age: 25,
      gender: "Male",
    },
    {
      name: "World",
      age: 27,
      gender: "Female",
    },
  ],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

const { actions, reducer } = cardSlice;
export const { addNewCard } = actions;
export default reducer;
