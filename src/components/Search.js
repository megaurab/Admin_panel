import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeEnquiry, addEnquiry } from '../utils/store/enquiryStore'; // Import the actions from the slice

const Search = () => {
  const enqItems = useSelector((state) => state.enquiry.enqItems);
  const dispatch = useDispatch();

  const [editingItem, setEditingItem] = useState(null); // Track the item being edited
  const [updatedData, setUpdatedData] = useState({}); // Track updated data for the item

  // Handle input change for the editable fields
  const handleInputChange = (e, field) => {
    setUpdatedData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  // Handle save when editing
  const handleSave = (item) => {
    dispatch(addEnquiry({ ...item, ...updatedData })); // Dispatch the updated data to the Redux store
    setEditingItem(null); // Exit edit mode
    setUpdatedData({}); // Reset updated data
  };

  // Handle delete
  const handleDelete = (id) => {
    dispatch(removeEnquiry(id)); // Dispatch delete action to Redux store
  };

  return (
    <div className="overflow-x-auto hide-scrollbar">
      <h2 className="text-center text-2xl font-semibold mb-4 italic">Enquiry Data</h2>
      <table className="min-w-full table-auto border-collapse shadow-lg">
        <thead>
          <tr className="bg-indigo-200 text-white text-center">
            <th className="px-4 py-2 border whitespace-nowrap italic">Sl No.</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Company Name</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Email</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Phone Number</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Alternate Phone Number</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Location</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Requirements</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Remarks</th>
            <th className="px-4 py-2 border whitespace-nowrap italic">Actions</th> {/* Added Actions column */}
          </tr>
        </thead>
        <tbody>
          {enqItems.map((item, index) => (
            <tr key={item.id} className="odd:bg-gray-100 even:bg-gray-200 hover:bg-gray-300">
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">{index + 1}</td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.companyName || item.companyName}
                    onChange={(e) => handleInputChange(e, 'companyName')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.companyName
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="email"
                    value={updatedData.email || item.email}
                    onChange={(e) => handleInputChange(e, 'email')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.email
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.phone || item.phone}
                    onChange={(e) => handleInputChange(e, 'phone')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.phone
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.altNumber || item.altNumber}
                    onChange={(e) => handleInputChange(e, 'altNumber')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.altNumber
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.location || item.location}
                    onChange={(e) => handleInputChange(e, 'location')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.location
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.requirement || item.requirement}
                    onChange={(e) => handleInputChange(e, 'requirement')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.requirement
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <input
                    type="text"
                    value={updatedData.remarks || item.remarks}
                    onChange={(e) => handleInputChange(e, 'remarks')}
                    className="border px-2 py-1"
                  />
                ) : (
                  item.remarks
                )}
              </td>
              <td className="px-4 py-2 border text-center whitespace-nowrap italic">
                {editingItem === item.id ? (
                  <button
                    onClick={() => handleSave(item)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => setEditingItem(item.id)}
                    className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
