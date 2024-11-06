import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./todoList";

const appStore = configureStore({
    reducer:{
        // enquiry:enqReducers,
        toDo:todoReducers,
    }
});

export default appStore;