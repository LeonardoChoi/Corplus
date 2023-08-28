import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./context/shop-context";
// import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
