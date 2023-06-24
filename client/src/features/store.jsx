import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slices/selectedJob";

const store = configureStore({
  reducer: {
    selectedJob: jobSlice,
  },
});

export default store;
