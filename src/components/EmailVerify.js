import React, { Fragment, useRef, useState } from "react";
import { Validate } from "../utils/validate";
import Lottie from "lottie-react";
import animationData from "../assets/login_animation.json";
import crmanimationData from "../assets/CRM3.json";
import { Link, useNavigate } from "react-router-dom";
import { customStateMethods } from "../utils/store/customState";

const EmailVerify = () => {
  const emailInput = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  customStateMethods.initializeState();

  const handleClick = (e) => {
    e.preventDefault();

    const message = Validate(emailInput.current.value);
    setErrorMessage(message);
    if (message) {
      emailInput.current.value = "";
    } else {
      localStorage.setItem("email_status", "true");
      navigate("/login");
    }
  };

  return (
    <Fragment>
      <div className="relative flex h-screen w-screen justify-center items-center bg-gradient-to-r from-blue-400 to-blue-400 overflow-hidden">
        {/* Background Lottie Animation */}
        <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <Lottie
            animationData={crmanimationData}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 w-full h-full flex justify-center items-center rounded-3xl">
          <div
            className="relative z-10 flex flex-col justify-start items-center bg-white/30 shadow-black backdrop-blur-sm overflow-visible rounded-3xl"
            style={{
              width: "40%", // Set your preferred width here
              height: "60%", // Set your preferred height here
              minWidth: "400px", // Prevents shrinking beyond this width
              minHeight: "500px", // Prevents shrinking beyond this height
            }}
          >
            <div className="flex flex-col justify-center w-full items-center shadow-3xl p-6">
              <h1 className="italic font-semibold whitespace-nowrap">
                Email Verification Required
              </h1>
              <Lottie animationData={animationData} className="h-48 w-48" />
              <p className="italic font-semibold mb-7 text-center">
                To access our Lead CRM, please enter your email address for
                verification. This ensures your team membership and grants you
                access to all features.
              </p>
              <input
                ref={emailInput}
                type="email"
                name="email"
                className="form-control mb-3 bg-slate-200 w-full p-2 rounded-lg italic"
                placeholder="Enter your email"
              />
              <button
                className="p-2 w-full italic font-semibold bg-violet-400 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out"
                onClick={handleClick}
              >
                Verify
              </button>
              <Link to="/dashboard"><p className="text-red-500 font-bold mt-5">{errorMessage}</p></Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailVerify;
