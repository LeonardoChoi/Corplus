import React, { useContext } from "react";
import { ShopContext } from "../context/shop-context";

function CartItem(props) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const { id, fabricName, fabricPrice, fabricImg } = props.data;

  return (
    <div className="cartItem">
      <img className="cartItemImg" src={fabricImg} alt="" />
      <div className="description">
        <p>{fabricName}</p>
        <p>${fabricPrice}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input value={cartItems[id]} />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
