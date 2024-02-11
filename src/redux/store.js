import { configureStore } from "@reduxjs/toolkit";
import setUserSlice from "./Slices/setUserGet";
import setDailySlice from "./Slices/dailySlice";
import setCarriages from "./Slices/setCarriages";

export const store = configureStore({
  reducer: {
    userMe: setUserSlice,
    dailyToday: setDailySlice,
    carriagesAll: setCarriages,
  },
});
