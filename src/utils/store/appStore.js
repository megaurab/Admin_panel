import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./todoList";
import enquiryReducers from "./enquiryStore";
import buisnessTypeReducer from "./buisnesstypeSlice";
import requirementsReducer from "./requirementsSlice";

const appStore = configureStore({
    reducer:{
        enquiry:enquiryReducers,
        toDo:todoReducers,
        buisnessType:buisnessTypeReducer,
        requirements:requirementsReducer,
    }
});

export default appStore;