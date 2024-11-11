import { createSlice } from "@reduxjs/toolkit";

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    enqItems: [],
  },
  reducers: {
    addEnquiry: (state, action) => {
      const index = state.enqItems.findIndex(
        (enquiry) => enquiry.id === action.payload.id
      );
      if (index !== -1) {
        // Update existing enquiry
        state.enqItems[index] = action.payload;
      } else {
        // Add new enquiry
        state.enqItems.push(action.payload);
      }
    },
    removeEnquiry: (state, action) => {
      state.enqItems = state.enqItems.filter(
        (enquiry) => enquiry.id !== action.payload
      );
    },
  },
});

export const { addEnquiry, removeEnquiry } = enquirySlice.actions;
export default enquirySlice.reducer;
