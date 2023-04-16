import React from "react";
import "../index.css";

function Card({ imgSrc, fabricName, price }) {
  return (
    <div className="card-container">
      <div className="card-content">
        <img className="card-img" src={imgSrc} alt="" />
        <h1 className="card-fabric-name">{fabricName}</h1>
        <h3 className="card-price">R${price}</h3>
        <button className="buy-button">Comprar</button>
      </div>
    </div>
  );
}

export default Card;
