import React from "react";
import GoogleButton from "react-google-button";

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
      <div className="fixed inset-0 bg-gradient-to-r from-blue-600 to-white bg-opacity-10 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[600px]">
          <div className="bg-white rounded-xl">
            <h1 className="w-full p-2 bg-blue-400 text-white flex justify-center italic rounded-t-xl">
              Welcome
            </h1>
            <div className="flex flex-col justify-center items-center">
              <p className="italic mb-2 mt-2">Sign in method</p>
              {/* <p className="italic pb-5">Google signIn</p> */}
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


// When the Login is successful then "isAuthenticated" will be true, and then it will be redirected to the Dashboard page.
// 