import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEnquiry } from "../utils/store/enquiryStore"; // Adjust path as needed

const AddEnquiry = () => {
  const dispatch = useDispatch();

  // Select data from the Redux slices
  const businessTypes = useSelector((state) => state.buisnessType.data);
  // console.log(businessTypes);
  const requirements = useSelector((state) => state.requirements.data);
  // console.log(requirements);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form values
    const formData = {
      id: Date.now(), // Unique ID for each entry
      companyName: e.target.companyName.value,
      phone: e.target.phone.value,
      whatsapp: e.target.whatsapp.checked,
      altNumber: e.target.altNumber.value,
      businessType: e.target.businessType.value,
      requirement: e.target.requirement.value,
      source: e.target.source.value,
      location: e.target.location.value,
      website: e.target.website.value,
      email: e.target.email.value,
      budget: e.target.budget.value,
      remarks: e.target.remarks.value,
    };

    dispatch(addEnquiry(formData));

    console.log("Current Enquiry State:", formData);

    e.target.reset();
  };

  return (
    <div className="flex-1 p-8 rounded-xl flex flex-col items-center overflow-scroll hide-scrollbar">
      <div className="w-full flex justify-center shadow-md rounded-3xl mb-2 bg-white">
        <h2 className="text-xl font-semibold mb-6 mt-6 italic">
          Add New Entry
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white shadow-md rounded-3xl p-16"
      >
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Company Name</label>
            <input
              name="companyName"
              type="text"
              placeholder="Enter Company name"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Phone No</label>
            <input
              name="phone"
              type="text"
              placeholder="Enter Phone no"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
            <div className="flex items-center mt-2">
              <input name="whatsapp" type="checkbox" className="mr-2" />
              <label className="italic">WhatsApp</label>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">
              Alternative Number
            </label>
            <input
              name="altNumber"
              type="text"
              placeholder="Enter No."
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Business Type</label>
            <select
              name="businessType"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
              defaultValue=""
            >
              <option value="" disabled>
                Select Business Type
              </option>
              {businessTypes.map((type,index) => (
                <option className="text-black" key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Requirement</label>
            <select
              name="requirement"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
              defaultValue=""
            >
              <option value="" disabled>
                None
              </option>
              {requirements.map((req, index) => (
                <option className="text-black" key={index} value={req}>
                  {req}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Source</label>
            <input
              name="source"
              type="text"
              placeholder="Enter Source"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Location</label>
            <input
              name="location"
              type="text"
              placeholder="Enter Location"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Website</label>
            <input
              name="website"
              type="text"
              placeholder="Enter Website"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2 italic">Budget</label>
            <input
              name="budget"
              type="text"
              placeholder="Enter Budget"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 italic"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="font-semibold mb-2 italic">Remarks</label>
            <textarea
              name="remarks"
              placeholder="Enter remarks"
              className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-24 italic"
            ></textarea>
          </div>
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 italic mr-2"
          >
            Save & Exit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEnquiry;
