import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>Your Fabric Store</h2>
          </div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/products">Products</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <p>Follow Us:</p>
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <p>
            &copy; {new Date().getFullYear()} Your Fabric Store. All rights
            reserved.
          </p>
          <p>Address: 123 Fabric Street, Fabricville</p>
          <p>Email: info@yourfabricstore.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
