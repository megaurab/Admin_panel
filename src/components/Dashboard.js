import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./Home";
import Requirements from "./Requirements";

const Dashboard = () => {
  const [mainContent, setMainContent] = useState("Dashboard");
  const [expanded, setExpanded] = useState(true);
  const [dropDown, setDropdown] = useState(false);
  const [rightExpanded, setRightExpanded] = useState(true);

  // Components for the main section based on selection
  const renderMainContent = () => {
    switch (mainContent) {
      case "Dashboard":
        return <Home />;
      case "Users":
        return <div>User Management Section</div>;
      // case "Masters":
      //   return <div>Master Records</div>;
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
      case "Requirements":
        return <Requirements data={mainContent} />;
      case "Buisness Type":
        return <Requirements data={mainContent} />;
      case "ToDo":
        return <Requirements data={mainContent} />;
      case "Payment":
        return <Requirements data={mainContent} />;
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
        <nav className="h-full flex flex-col bg-gray-100  border-r shadow-sm">
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
          <ul className="flex-1 px-3 overflow-scroll hide-scrollbar">
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Dashboard" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded && mainContent === "Dashboard"
                  ? "bg-indigo-200"
                  : !expanded
                  ? "bg-transparent hover:bg-indigo-200 hover:text-white"
                  : ""
              }`}
              onClick={() => setMainContent("Dashboard")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-house mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Dashboard"}
            </li>

            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Users" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Users")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-people mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Users"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => {
                setMainContent("Requirements");
                dropDown ? setDropdown(false) : setDropdown(true);
              }}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-folder mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Masters"}
              {expanded &&
                (dropDown === true ? (
                  <i className="bi bi-chevron-double-up ml-20"></i>
                ) : (
                  <i class="bi bi-chevron-double-down ml-20"></i>
                ))}
            </li>
            {dropDown && (
              <div>
                <li
                  className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                    mainContent === "Requirements"
                      ? "bg-indigo-200"
                      : "bg-white"
                  } ${
                    !expanded &&
                    "bg-transparent hover:bg-indigo-200 hover:text-white"
                  }`}
                  onClick={() => setMainContent("Requirements")}
                  style={{
                    minWidth: expanded ? "150px" : "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i
                    className={`bi bi-star mr-4 pl-1.5 transition-all ${
                      !expanded && "hover:scale-110"
                    }`}
                  ></i>
                  {expanded && "Requirements"}
                </li>
                <li
                  className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                    mainContent === "Buisness Type"
                      ? "bg-indigo-200"
                      : "bg-white"
                  } ${
                    !expanded &&
                    "bg-transparent hover:bg-indigo-200 hover:text-white"
                  }`}
                  onClick={() => setMainContent("Buisness Type")}
                  style={{
                    minWidth: expanded ? "150px" : "16px",
                    whiteSpace: "nowrap",
                  }}
                >
                  <i
                    className={`bi bi-pen mr-4 pl-1.5 transition-all ${
                      !expanded && "hover:scale-110"
                    }`}
                  ></i>
                  {expanded && "Buisness Type"}
                </li>
              </div>
            )}

            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Enquiry" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Enquiry")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-at mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Enquiry"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Filter" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Filter")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-funnel mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Filter"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Success Enquiries"
                  ? "bg-indigo-200"
                  : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Success Enquiries")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-bookmark-check-fill mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Success Enquiries"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Filter Users" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Filter Users")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-funnel mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Filter Users"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Search" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Search")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-search mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Search Database"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Trash" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Trash")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-trash3 mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Trash Section"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Followup" ? "bg-indigo-200" : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Followup")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-arrow-up-circle mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Followup"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Download Database"
                  ? "bg-indigo-200"
                  : "bg-white"
              } ${
                !expanded &&
                "bg-transparent hover:bg-indigo-200 hover:text-white"
              }`}
              onClick={() => setMainContent("Download Database")}
              style={{
                minWidth: expanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-download mr-4 pl-1.5 transition-all ${
                  !expanded && "hover:scale-110"
                }`}
              ></i>
              {expanded && "Download Database"}
            </li>
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

      {/* Right Sidebar */}
      <aside
        className={`h-screen transition-all duration-300 ease-in-out overflow-hidden ${
          rightExpanded ? "w-56" : "w-16"
        } bg-gray-100 border-l`}
      >
        <nav className="h-full flex flex-col bg-gray-100 shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <button
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-300"
              onClick={() => setRightExpanded(!rightExpanded)}
            >
              {rightExpanded ? (
                <i className="bi bi-arrow-right text-black"></i>
              ) : (
                <i className="bi bi-arrow-left text-black"></i>
              )}
            </button>
          </div>
          <ul className="flex-1 px-3 overflow-scroll hide-scrollbar">
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "ToDo" ? "bg-indigo-200" : "bg-white"
              } ${
                !rightExpanded
                  ? mainContent === "ToDo"
                    ? "bg-indigo-200 hover:bg-indigo-200 hover:text-white"
                    : "bg-transparent hover:bg-indigo-200 hover:text-white"
                  : ""
              }`}
              onClick={() => setMainContent("ToDo")}
              style={{
                minWidth: rightExpanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-list-task mr-4 pl-1.5 transition-all ${
                  !rightExpanded && "hover:scale-110"
                }`}
              ></i>
              {rightExpanded && "To-do List"}
            </li>
            <li
              className={`mt-3 italic font-semibold rounded-xl p-1 cursor-pointer transition-all duration-300 ease-in-out ${
                mainContent === "Payment" ? "bg-indigo-200" : "bg-white"
              } ${
                !rightExpanded
                  ? mainContent === "Payment"
                    ? "bg-indigo-200 hover:bg-indigo-200 hover:text-white"
                    : "bg-transparent hover:bg-indigo-200 hover:text-white"
                  : ""
              }`}
              onClick={() => setMainContent("Payment")}
              style={{
                minWidth: rightExpanded ? "150px" : "16px",
                whiteSpace: "nowrap",
              }}
            >
              <i
                className={`bi bi-credit-card mr-4 pl-1.5 transition-all ${
                  !rightExpanded && "hover:scale-110"
                }`}
              ></i>
              {rightExpanded && "Payment"}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Dashboard;
