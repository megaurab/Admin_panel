import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequirement, editRequirement, deleteRequirement } from "../utils/store/requirementsSlice";
import { addBusinessType, editBusinessType, deleteBusinessType } from "../utils/store/buisnesstypeSlice";

const Requirements = ({ data }) => {
  const main = data;
  const [status, setStatus] = useState(false);
  const [requirement, setRequirement] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const requirementsList = useSelector((store) => store.requirements.data);
  const businessTypeList = useSelector((store) => store.buisnessType.data);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    if (data === "Requirements") {
      if (editingIndex !== null) {
        // Edit existing requirement
        dispatch(editRequirement({ index: editingIndex, newRequirement: requirement.trim() }));
        setEditingIndex(null);
      } else {
        // Add new requirement
        dispatch(addRequirement(requirement.trim()));
      }
      setRequirement(""); // Clear input after saving
    }
    if (data === "Buisness Type") {
      if (editingIndex !== null) {
        // Edit existing business type
        dispatch(editBusinessType({ index: editingIndex, newBusinessType: requirement.trim() }));
        setEditingIndex(null);
      } else {
        // Add new business type
        dispatch(addBusinessType(requirement.trim()));
      }
      setRequirement(""); // Clear input after saving
    }
  };

  const handleEdit = (index) => {
    if (data === "Requirements") {
      setRequirement(requirementsList[index]);
    } else if (data === "Buisness Type") {
      setRequirement(businessTypeList[index]);
    }
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    if (data === "Requirements") {
      dispatch(deleteRequirement(index));
    } else if (data === "Buisness Type") {
      dispatch(deleteBusinessType(index));
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
      <form className="w-[60%] h-[400px] flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow-lg mb-4 mt-10">
        <label className="italic mb-2 text-lg">{data}:</label>
        <input
          className="italic bg-slate-200 p-3 mb-4 w-full rounded-lg"
          placeholder="Enter requirements"
          value={requirement}
          onChange={(e) => setRequirement(e.target.value)}
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
            <button onClick={handleClick} className="italic mt-6 mr-2 p-2 bg-orange-300 rounded hover:scale-110 transition-all duration-300 ease-in-out">
              {editingIndex !== null ? "Update" : "Save"}
            </button>
          </div>
        </div>
      </form>

      {/* Display list of requirements or business types */}
      <div className="w-[60%] mt-4 mb-4 max-h-[300px] overflow-y-auto hide-scrollbar">
        <h3 className="text-lg font-bold mb-4 italic">{data}:</h3>
        <ul>
          {main === "Requirements" && requirementsList.map((req, index) => (
            <li key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded italic">
              <span>{req}</span>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:text-blue-700 italic font-semibold mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 italic font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
          {main === "Buisness Type" && businessTypeList.map((type, index) => (
            <li key={index} className="flex justify-between items-center mb-2 p-2 bg-gray-100 rounded italic">
              <span>{type}</span>
              <div>
                <button
                  onClick={() => handleEdit(index)}
                  className="text-blue-500 hover:text-blue-700 italic font-semibold mr-4"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-red-500 hover:text-red-700 italic font-semibold"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Requirements;
