import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:'todo',
    initialState:{
        todoItems:[]
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todoItems.push(action.payload);
        },
        removeTodo:(state,action)=>{
            state.todoItems.pop();
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;