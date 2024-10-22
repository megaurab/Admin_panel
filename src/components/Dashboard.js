import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";

const Dashboard = () => {
  const [mainContent, setMainContent] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);

  // Components for the main section based on selection
  const renderMainContent = () => {
    switch (mainContent) {
      case "Dashboard":
        return <Home />;
      case "Users":
        return <div>User Management Section</div>;
      case "Masters":
        return <div>Master Records</div>;
      case "Enquiry":
        return <div>Enquiry Management</div>;
      case "Filter":
        return <div>Filter Options</div>;
      case "Success Enquiries":
        return <div>Successful Enquiries</div>;
      case "Filter Users":
        return <div>Filter Users Section</div>;
      case "Search":
        return <div>Search Database</div>;
      case "Trash":
        return <div>Trash Section</div>;
      case "Followup":
        return <div>Follow-up Section</div>;
      case "Download Database":
        return <div>Download Database Section</div>;
      default:
        return <div>Welcome to the Dashboard!</div>;
    }
  };

  return (
    <div className="flex">
      <aside
        className={`h-screen transition-all duration-300 ease-in-out overflow-hidden ${
          expanded ? "w-56" : "w-16"
        }`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://img.logoipsum.com/243.svg"
              className={`transition-all duration-300 ease-in-out ${
                expanded ? "w-32 opacity-100" : "w-0 opacity-0"
              }`}
              alt="Logo"
            />
            <button
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-300"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <i className="bi bi-arrow-left text-black"></i>
              ) : (
                <i className="bi bi-arrow-right text-black"></i>
              )}
            </button>
          </div>
          <ul className="flex-1 px-3">
            {[
              { name: "Dashboard", icon: "bi-house" },
              { name: "Users", icon: "bi-people" },
              { name: "Masters", icon: "bi-folder" },
              { name: "Enquiry", icon: "bi-at" },
              { name: "Filter", icon: "bi-funnel" },
              { name: "Success Enquiries", icon: "bi-bookmark-check-fill" },
              { name: "Filter Users", icon: "bi-funnel" },
              { name: "Search", icon: "bi-search" },
              { name: "Trash", icon: "bi-trash3" },
              { name: "Followup", icon: "bi-arrow-up-circle" },
              { name: "Download Database", icon: "bi-download" },
            ].map((item) => (
              <li
                key={item.name}
                className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                  mainContent === item.name ? "bg-blue-500" : "bg-white"
                } ${!expanded && "bg-transparent hover:bg-blue-500 hover:text-white"}`}
                onClick={() => setMainContent(item.name)}
                style={{
                  minWidth: expanded ? "150px" : "16px",
                  whiteSpace: "nowrap",
                }}
              >
                <i
                  className={`bi ${item.icon} mr-4 pl-1.5 transition-all ${
                    !expanded && "hover:scale-110"
                  }`}
                ></i>
                {expanded && item.name}
              </li>
            ))}
          </ul>
          <div className="border-t flex p-3 items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcpxRTZre37ZfvF1nLqJKdZuHK7-IRa7h7rhPI9HPSdisD9nT6OBrjgvs&s"
              className="w-10 h-10 rounded-md"
              alt="Avatar"
            />
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                expanded ? "ml-2 w-52" : "w-0"
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold italic">Konseng</h4>
                  <span className="text-xs text-gray-600 italic">
                    kbg@gmail.com
                  </span>
                </div>
                <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-300">
                  <i className="bi bi-three-dots-vertical"></i>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main
        className={`flex flex-1 transition-all duration-300 ease-in-out overflow-y-auto overflow-x-auto hide-scrollbar ${
          expanded ? "p-4" : "ml-10 p-4"
        }`}
        style={{ height: "calc(100vh - 0.5rem)" }} // Adjust height as necessary
      >
        {renderMainContent()}
      </main>
    </div>
  );
};

export default Dashboard;
