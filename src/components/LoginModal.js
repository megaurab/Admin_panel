import React from "react";
import GoogleButton from "react-google-button";
import Lottie from "lottie-react";
import loginData from "../assets/LOGIN-1.json";

const LoginModal = ({ isVisible }) => {
  if (!isVisible) return null;

  const redirectToAuth = async () => {
    const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      process.env.REACT_APP_GOOGLE_REDIRECT_URI
    );
    const scope = encodeURIComponent(
      "openid email profile https://www.googleapis.com/auth/calendar"
    );

    const googleSignupLink = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline&prompt=consent`;

    try {
      window.location.href = googleSignupLink;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-white bg-opacity-10 backdrop-blur-sm flex justify-center items-center overflow-hidden">
      {/* Background Lottie Animation */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Lottie
          animationData={loginData}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%' }} // Ensure it fits the container
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 w-[600px] rounded-xl">
        <div className="bg-white rounded-xl shadow-xl">
          <h1 className="w-full p-2 bg-blue-400 text-white flex justify-center italic rounded-t-xl">
            Welcome
          </h1>
          <div className="flex flex-col justify-center items-center p-6">
            <p className="italic mb-2 mt-2">Sign in method</p>
            <div className="mb-10">
              <GoogleButton onClick={redirectToAuth} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
