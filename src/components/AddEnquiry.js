import React from "react";
import { requirements } from "./Requirements";

const AddEnquiry = () => {
  return (
    <div className="flex-1 p-8 rounded-xl flex flex-col items-center overflow-scroll hide-scrollbar">
      {/* Form Heading */}
      <div className="w-full flex justify-center shadow-md rounded-3xl mb-2 bg-white">
        <h2 className="text-xl font-semibold mb-6 mt-6 italic">
          Add New Entry
        </h2>
      </div>
      {/* Form Container */}
      <form className="w-full bg-white shadow-md rounded-3xl p-16">
        <div className="grid grid-cols-2 gap-6 mb-4">
          {/* Company Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Company name</label>
            <input
              type="text"
              placeholder="Enter Company name"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Phone no</label>
            <input
              type="text"
              placeholder="Enter Phone no"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" />
              <label className="italic">Whatsapp</label>
            </div>
          </div>

          {/* Alternative Number */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">
              Alternative Number
            </label>
            <input
              type="text"
              placeholder="Enter No."
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Business Type */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Business Type</label>
            <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic">
                <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Requirement */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Requirement</label>
            <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic">
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Source */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Source</label>
            <select className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic">
              <option>Select</option>
              {/* Add options here */}
            </select>
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Website</label>
            <input
              type="text"
              placeholder="Enter Website"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Budget */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Budget</label>
            <input
              type="text"
              placeholder="Enter Budget"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          {/* Remarks */}
          <div className="col-span-2 flex flex-col">
            <label className="font-semibold mb-2 italic">Remarks</label>
            <textarea
              placeholder="Enter remarks"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 italic"
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 italic mr-2"
          >
            Save & Exit
          </button>
          {/* <button
            type="button"
            className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-300 italic"
          >
            Back
          </button> */}
        </div>
      </form>
    </div>
  );
};

export default AddEnquiry;
