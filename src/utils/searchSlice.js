import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addToCache: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { addToCache } = searchSlice.actions;

export default searchSlice.reducer;

/** cache view:
 * {
 *   "iphone": ["iphone 11", "iphone 14"]
 * }
 */
