import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoItems: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.todoItems.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoItems = state.todoItems.filter(todo => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      const todo = state.todoItems.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    }
  }
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
