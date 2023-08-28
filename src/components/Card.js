import React, { useContext } from "react";
import "../index.css";
import { ShopContext } from "../context/shop-context";

function Card({ imgSrc, fabricName, price }) {
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="card-container">
      <div className="card-content">
        <img className="card-img" src={imgSrc} alt="" />
        <h1 className="card-fabric-name">{fabricName}</h1>
        <h3 className="card-price">R${price}</h3>
        <button className="addToCart-button" onClick={() => addToCart()}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Card;
