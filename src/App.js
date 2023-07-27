import React from "react";
import "./index.css";
import Link from "./components/Link";
import Route from "./components/Route";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";

function App() {
  // const { id, fabricName, fabricPrice, fabricImg } = fabricData;
  // place the state here in parent component
  return (
    <>
      <Link to="/HomePage">Corplus</Link>

      <div>
        <Route path="/HomePage">
          <HomePage />
        </Route>
        <Route path="/ProductPage">
          <ProductPage />
        </Route>
      </div>
    </>
  );
}

export default App;
