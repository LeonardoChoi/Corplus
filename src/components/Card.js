import React from "react";
import "../index.css";
import Link from "./Link";
import Route from "./Route";
import ProductPage from "../pages/ProductPage";

function Card({ imgSrc, fabricName, price }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <img className="card-img" src={imgSrc} alt="" />
        <h1 className="card-fabric-name">{fabricName}</h1>
        <h3 className="card-price">R${price}</h3>
        <Link className="buy-button" to="/ProductPage">
          <button className="buy-button">Comprar</button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
