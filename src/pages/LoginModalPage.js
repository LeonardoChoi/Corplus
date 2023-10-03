import LoginModal from "../components/LoginModal";
import "../index.css";
import React, { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function LoginModalPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn ()=>{

  };

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
      <div>
        <input type="text" placeholder="email..." onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password..." onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signIn}>Sign In</button>
      </div>
    </LoginModal>
  );
  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>
      <p></p>
      {showModal && modal}
    </div>
  );
}

export default LoginModalPage;
