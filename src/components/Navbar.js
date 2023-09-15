import React from "react";
import { BsList } from "react-icons/bs";
import "./Navbar.css";
import "../index.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="logo" to="/">
        Corplus
      </Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/login">Login </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
