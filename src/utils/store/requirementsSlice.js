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
    editRequirement: (state, action) => {
      const { index, newRequirement } = action.payload;
      state.data[index] = newRequirement;
    },
    deleteRequirement: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addRequirement, editRequirement, deleteRequirement } = requirementsSlice.actions;
export default requirementsSlice.reducer;
