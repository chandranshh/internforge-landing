import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedJob: {},
  _id: "",
};

const selectedJobSlice = createSlice({
  name: "selectedJob",
  initialState,
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
    },
  },
});

export const { setSelectedJob } = selectedJobSlice.actions;

export default selectedJobSlice.reducer;
