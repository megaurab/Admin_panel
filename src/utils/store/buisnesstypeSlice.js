// businessTypeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const businessTypeSlice = createSlice({
  name: "businessType",
  initialState: {
    data: [],
  },
  reducers: {
    addBusinessType: (state, action) => {
      state.data.push(action.payload);
    },
    // Add more actions if necessary
  },
});

export const { setBusinessTypeData, addBusinessType } = businessTypeSlice.actions;
export default businessTypeSlice.reducer;
