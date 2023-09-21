import LoginModal from "../components/LoginModal";
import "../index.css";
import React, { useState } from "react";

function LoginModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>
      {showModal && <LoginModal onClose={handleClose} />}
    </div>
  );
}

export default LoginModalPage;
