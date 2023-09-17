import LoginModal from "../components/LoginModal";
import "../index.css";
import React, { useState } from "react";

function LoginModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>
      {showModal && <LoginModal />}
    </div>
  );
}

export default LoginModalPage;
