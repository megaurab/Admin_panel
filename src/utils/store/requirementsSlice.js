// requirementsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const requirementsSlice = createSlice({
  name: "requirements",
  initialState: {
    data: [], // Holds a list of requirement names
  },
  reducers: {
    addRequirement: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addRequirement } = requirementsSlice.actions;
export default requirementsSlice.reducer;
