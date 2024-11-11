import React, { useState, useEffect } from 'react';

const Payment = ({ onEditingChange }) => {
  const [payments, setPayments] = useState([
    { id: 1, name: 'John Doe', date: '2024-10-29', amount: '$100', done: false, isEditing: false },
    { id: 2, name: 'Jane Smith', date: '2024-10-28', amount: '$150', done: true, isEditing: false },
  ]);

  useEffect(() => {
    const anyEditing = payments.some((payment) => payment.isEditing);
    onEditingChange(anyEditing); // Notify parent component if editing mode is active
  }, [payments, onEditingChange]);

  const handleEditClick = (id) => {
    setPayments((prev) =>
      prev.map((payment) => (payment.id === id ? { ...payment, isEditing: true } : payment))
    );
  };

  const handleSaveClick = (id) => {
    setPayments((prev) =>
      prev.map((payment) => (payment.id === id ? { ...payment, isEditing: false } : payment))
    );
  };

  const handleChange = (id, field, value) => {
    setPayments((prev) =>
      prev.map((payment) => (payment.id === id ? { ...payment, [field]: value } : payment))
    );
  };

  const handleAddNewRecord = () => {
    const newRecord = {
      id: payments.length + 1, // Generate a unique ID, ideally you should use a better unique ID generator
      name: '',
      date: '',
      amount: '',
      done: false,
      isEditing: true,
    };
    setPayments((prev) => [...prev, newRecord]);
  };

  const handleDeleteClick = (id) => {
    setPayments((prev) => prev.filter((payment) => payment.id !== id));
  };

  return (
    <div className="h-full px-4 overflow-y-auto max-h-screen hide-scrollbar"> {/* Updated max height and overflow */}
      <div className="flex h-full justify-start items-center flex-col w-full">
        <label className="mt-4 font-semibold text-lg italic">Payment details for today:</label>
        <table className="mt-4 border-collapse w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border italic">Name</th>
              <th className="p-2 border italic">Date</th>
              <th className="p-2 border italic">Payment</th>
              <th className="p-2 border italic">Done</th>
              <th className="p-2 border italic">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id} className="text-center">
                <td className="p-2 border italic whitespace-nowrap">
                  {payment.isEditing ? (
                    <input
                      type="text"
                      value={payment.name}
                      onChange={(e) => handleChange(payment.id, 'name', e.target.value)}
                      className="border p-1 italic w-full"
                    />
                  ) : (
                    payment.name
                  )}
                </td>
                <td className="p-2 border italic whitespace-nowrap">
                  {payment.isEditing ? (
                    <input
                      type="date"
                      value={payment.date}
                      onChange={(e) => handleChange(payment.id, 'date', e.target.value)}
                      className="border p-1 italic w-full"
                    />
                  ) : (
                    payment.date
                  )}
                </td>
                <td className="p-2 border italic whitespace-nowrap">
                  {payment.isEditing ? (
                    <input
                      type="text"
                      value={payment.amount}
                      onChange={(e) => handleChange(payment.id, 'amount', e.target.value)}
                      className="border p-1 italic w-full"
                    />
                  ) : (
                    payment.amount
                  )}
                </td>
                <td className="p-2 border italic whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={payment.done}
                    onChange={(e) => handleChange(payment.id, 'done', e.target.checked)}
                    className="cursor-pointer italic"
                  />
                </td>
                <td className="p-2 border italic whitespace-nowrap flex gap-2 justify-center">
                  {payment.isEditing ? (
                    <button
                      onClick={() => handleSaveClick(payment.id)}
                      className="px-2 py-1 bg-green-500 text-white rounded italic"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEditClick(payment.id)}
                      className="px-2 py-1 bg-blue-500 text-white rounded italic"
                    >
                      Edit
                    </button>
                  )}
                  {/* Delete button */}
                  <button
                    onClick={() => handleDeleteClick(payment.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded italic"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add New Record Button */}
        <button
          onClick={handleAddNewRecord}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded italic"
        >
          Add New Record
        </button>
      </div>
    </div>
  );
};

export default Payment;
