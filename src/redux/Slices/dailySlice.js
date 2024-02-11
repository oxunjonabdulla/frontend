import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const dailSlice = createSlice({
  name: "api/get/daily/setDaily",
  initialState,
  reducers: {
    setDaily: (state, action) => {
      if (action.payload) {
        state.data = action.payload;
      } else {
        state.data = null;
      }
    },
  },
});

export const { setDaily } = dailSlice.actions;

export default dailSlice.reducer;
