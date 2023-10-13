import LoginModal from "../components/LoginModal";
import FabricsList from "../components/FabricsList";
import "../index.css";
import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

function LoginModalPage() {
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
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
      <div className="flex w-1/3 flex-col space-y-1">
        <input
          className="input-form"
          type="text"
          placeholder="email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input-form"
          type="password"
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={signIn}>Register</button>
        <div>
          <button onClick={signInWithGoogle}>Sign In With Google</button>
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </LoginModal>
  );
  return (
    <div>
      <button onClick={handleClick} className="login-button">
        Login
      </button>

      <FabricsList />

      {showModal && modal}
    </div>
  );
}

export default LoginModalPage;
