import React, { useRef, useState } from "react";
import ToDoItems from "./ToDoItems";

const ToDo = () => {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

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
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex flex-1 flex-col justify-center items-center rounded-3xl">
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
      <div className="w-full px-5">
        {todoList.map((item) => (
          <ToDoItems
            key={item.id}
            id={item.id}
            text={item.text}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default ToDo;
