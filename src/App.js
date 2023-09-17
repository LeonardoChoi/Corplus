import React, { useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/shop-context";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Cart from "./pages/cart/Cart";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Dashboard from "./pages/Dashboard";
import Discounts from "./pages/Discounts";
import LoginModalPage from "./pages/LoginModalPage";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/:productId" element={<ProductDetailPage />} />
            <Route path="/discounts" element={<Discounts />} />
            <Route path="/LoginModalPage" element={<LoginModalPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
