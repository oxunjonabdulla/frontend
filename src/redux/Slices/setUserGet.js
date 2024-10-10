import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "auth/check/user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      if (action.payload) state.user = action.payload;
      else state.user = null;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
