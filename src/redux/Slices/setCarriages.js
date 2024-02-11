import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  getCarriageNumber: null,
};

const carriagesSetter = createSlice({
  name: "api/get/carriages",
  initialState,
  reducers: {
    setCarriages: (state, action) => {
      if (action.payload) {
        state.getCarriageNumber = action.payload;
      } else {
        state.getCarriageNumber = null;
      }
    },
  },
});

export const { setCarriages } = carriagesSetter.actions;

export default carriagesSetter.reducer;
