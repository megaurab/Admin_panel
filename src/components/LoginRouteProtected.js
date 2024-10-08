import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from "./LoginModal";

export const LoginRouteProtected = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  let email_status = localStorage.getItem("email_status");

  useEffect(() => {
    try {
      if (email_status === "true") {
        setShowModal(true);
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log("Error checking email status:", error);
    }
  }, [email_status, navigate]);

  return (
    <div>
      {showModal && <LoginModal isVisible={showModal} />}
    </div>
  );
};
