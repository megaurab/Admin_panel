import React from "react";
import tableData from "../utils/data";

const Home = () => {
  return (
    <div className="p-5 overflow-y-scroll hide-scrollbar">
      <div>
        <h2 className="text-2xl font-bold mb-4 italic">Today's Work:</h2>

        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-indigo-200 text-white">
              <tr>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Company Name
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Phone No
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Business Type
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Requirement
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Source
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Location
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Website
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Email
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Budget
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Status
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.companyName}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.phoneNo}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.businessType}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.requirement}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.source}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.location}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    <a
                      href={`http://${row.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.website}
                    </a>
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.email}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.budget}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                
                  </td>
                  <td className="flex border border-gray-300 p-2 italic whitespace-nowrap">
                    <button className="p-1 font-thin italic bg-red-400 rounded hover:scale-105 transition-all duration-300 ease-in-out">Done</button>
                    <button className="p-1 font-thin italic bg-green-400 rounded ml-2 hover:scale-105 transition-all duration-300 ease-in-out">Active</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4 italic">Pending Work:</h2>

        {/* Horizontal scrolling container */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead className="bg-indigo-200 text-white">
              <tr>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Company Name
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Phone No
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Business Type
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Requirement
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Source
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Location
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Website
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Email
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Budget
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Status
                </th>
                <th className="border border-gray-300 p-2 italic whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.companyName}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.phoneNo}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.businessType}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.requirement}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.source}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.location}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    <a
                      href={`http://${row.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {row.website}
                    </a>
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.email}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                    {row.budget}
                  </td>
                  <td className="border border-gray-300 p-2 italic whitespace-nowrap">
                
                  </td>
                  <td className="flex border border-gray-300 p-2 italic whitespace-nowrap">
                    <button className="p-1 font-thin italic bg-red-400 rounded hover:scale-110 transition-all duration-300 ease-in-out">Done</button>
                    <button className="p-1 font-thin italic bg-green-400 rounded ml-2 hover:scale-110 transition-all duration-300 ease-in-out">Active</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
