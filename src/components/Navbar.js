import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <a href="/">Tricoline Estampas</a>
        </li>
        <li>
          <a href="/">Estampas</a>
        </li>
        <li>
          <a href="/">Tecidos</a>
        </li>
        <li>
          <a href="/">Suplex</a>
        </li>
        <li>
          <a href="/">Marcas</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
