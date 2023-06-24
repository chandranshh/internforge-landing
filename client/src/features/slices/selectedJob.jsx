import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedJob: {},
  _id: "",
  isSelect: false,
};

const selectedJobSlice = createSlice({
  name: "selectedJob",
  initialState,
  reducers: {
    setSelectedJob: (state, action) => {
      state.selectedJob = action.payload;
      state._id = action.payload._id;
      state.isSelect = true;
    },
  },
});

export const { setSelectedJob } = selectedJobSlice.actions;

export default selectedJobSlice.reducer;
