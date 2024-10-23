import React, { useState } from "react";

const Requirements = ({data}) => {
  const [status, setStatus] = useState(false); // Status for the slide button

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <form className="w-[60%] h-[80%] flex flex-col justify-center items-center p-6 bg-gray-100 rounded-lg shadow-lg">
        <label className="italic mb-2 text-lg">{data}:</label>
        <input
          className="italic bg-slate-200 p-3 mb-4 w-full rounded-lg"
          placeholder="Enter requirements"
        />

        <label className="italic mb-2 text-lg">Description:</label>
        <textarea
          className="h-[150px] italic bg-slate-200 p-3 mb-4 w-full rounded-lg"
          placeholder="Enter description"
        ></textarea>

        <div className="flex justify-between w-full">
          <div className="flex items-center mt-6">
            <span className="mr-4 italic text-lg mb-1">
              {status ? "Active" : "Inactive"}
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={status}
                onChange={() => setStatus(!status)}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer-checked:bg-green-500 peer-checked:before:translate-x-full before:content-[''] before:absolute before:top-0.5 before:left-[2px] before:bg-white before:rounded-full before:h-5 before:w-5 before:transition-all"></div>
            </label>
          </div>
          <div>
            <button className="italic mt-6 mr-2 p-2 bg-orange-300 rounded hover:scale-110 transition-all duration-300 ease-in-out">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Requirements;
