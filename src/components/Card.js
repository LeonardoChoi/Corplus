import React, { useContext } from "react";
import "../index.css";

import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";

function Card({ imgSrc, fabricName, price, id }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  return (
    <div className="card-container">
      <div className="card-content">
        <img className="card-img" src={imgSrc} alt="" />
        <h1 className="card-fabric-name">{fabricName}</h1>
        <h3 className="card-price">R${price}</h3>
        <button className="addToCart-button">
          <Link to={`/${id}`}>Comprar</Link>
        </button>
        {/* <button className="addToCart-button" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
        </button> */}
      </div>
    </div>
  );
}

export default Card;
