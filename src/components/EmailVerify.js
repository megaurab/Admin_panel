import React, { Fragment, useRef, useState } from "react";
import { Validate } from "../utils/validate";
import Lottie from "lottie-react";
import animationData from "../assets/login_animation.json";
import { useNavigate } from "react-router-dom";
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
      <div className="flex h-screen w-screen justify-center items-center bg-gradient-to-r from-blue-600 to-white">
        <div className="flex flex-col w-[40%] h-[98%] rounded-3xl justify-center items-center bg-white shadow-black">
          <div className="flex flex-col justify-center h-full w-full items-center shadow-2xl p-6 rounded-3xl">
            <h1 className="italic font-semibold">Email Verification Required</h1>
            <Lottie animationData={animationData} className="h-48 w-48" />
            <p className="italic font-semibold mb-7">
              To access our Lead CRM, please enter your email address for verification. This ensures your team membership and grants you access to all features.
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
            <p className="text-red-500 font-bold mt-5">{errorMessage}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EmailVerify;
