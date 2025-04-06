import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addTolist: (state, action) => [...state, action.payload],
    removeFromList: (state, action) => action.payload,
  },
});

export const { addTolist, removeFromList } = slice.actions
export default slice.reducer
