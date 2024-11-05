import React from "react";

const ToDoItems = ({ text, id, deleteTodo }) => {
  return (
    <div className="flex items-center justify-between my-3 gap-2 w-full">
      <div className="flex flex-1 items-center cursor-pointer">
        <i className="bi bi-check2 w-7"></i>
        <p className="text-slate-700 ml-4 text-[17px] italic">{text}</p>
      </div>
      <div>
        <i
          className="bi bi-trash w-3.5 cursor-pointer"
          onClick={() => deleteTodo(id)} // Call deleteTodo with the current item's ID
        ></i>
      </div>
    </div>
  );
};

export default ToDoItems;
