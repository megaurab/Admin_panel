import React, { useRef } from "react";
import ToDoItems from "./ToDoItems";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleComplete, removeTodo } from "../utils/store/todoList"; // Assuming these actions are in your store

const ToDo = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  // Get the todo list from Redux store
  const todoList = useSelector((state) => state.toDo.todoItems);

  // console.log(todoList);

  const add = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };

    // Dispatch the addTodo action with the newTodo item
    dispatch(addTodo(newTodo));

    // Clear the input field
    inputRef.current.value = "";
  };

  const handleDeleteTodo = (id) => {
    // Dispatch the deleteTodo action with the id of the to-do item to be deleted
    dispatch(removeTodo(id));
  };

  const handleToggleComplete = (id) => {
    // Dispatch the toggleComplete action with the id of the to-do item to toggle its completed status
    dispatch(toggleComplete(id));
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center rounded-3xl">
      <h1 className="italic font-semibold mt-10">To-do List</h1>
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600 italic"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-500 w-32 h-14 text-white text-lg font-medium italic cursor-pointer"
        >
          Add +
        </button>
      </div>

      {/* ---------todo list--------- */}
      <div className="w-full px-5 overflow-scroll max-h-[80vh] hide-scrollbar">
        {todoList.map((item) => (
          <ToDoItems
            key={item.id}
            id={item.id}
            text={item.text}
            isComplete={item.isComplete}
            deleteTodo={handleDeleteTodo}
            toggleComplete={handleToggleComplete}
          />
        ))}
      </div>
      {console.log()}
    </div>
  );
};

export default ToDo;
