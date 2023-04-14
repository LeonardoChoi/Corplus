import React from "react";
import tecido2 from "../img/tecido2.jpg";
import "../index.css";

function Card() {
  return (
    <div className="card-container">
      <div className="card-content">
        <img className="card-img" src={tecido2} alt="" />
        <h1 className="card-fabric-name">
          Tecido Floral Fiore Cor - 01 (Verde), 100% Algodão, Unid. 50cm x
          1,50mt
        </h1>
        <h3 className="card-price">R$99.99</h3>
      </div>
    </div>
  );
}

export default Card;
