import { configureStore } from "@reduxjs/toolkit";
import trackerSlice from "./pages/Home/store/slice";

const store = configureStore({
  reducer: {
    tracker: trackerSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
