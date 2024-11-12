// businessTypeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const businessTypeSlice = createSlice({
  name: "businessType",
  initialState: {
    data: [], // Holds a list of business types
  },
  reducers: {
    addBusinessType: (state, action) => {
      state.data.push(action.payload);
    },
    editBusinessType: (state, action) => {
      const { index, newBusinessType } = action.payload;
      state.data[index] = newBusinessType;
    },
    deleteBusinessType: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  },
});

export const { addBusinessType, editBusinessType, deleteBusinessType } = businessTypeSlice.actions;
export default businessTypeSlice.reducer;
