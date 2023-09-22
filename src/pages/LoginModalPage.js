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

  const actionBar = (
    <div>
      <button className="login-button" onClick={handleClose}>
        Login!
      </button>
    </div>
  );
  const modal = (
    <LoginModal onClose={handleClose} actionBar={actionBar}>
      <p>content to show in children</p>
    </LoginModal>
  );
  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>
      {showModal && modal}
    </div>
  );
}

export default LoginModalPage;
