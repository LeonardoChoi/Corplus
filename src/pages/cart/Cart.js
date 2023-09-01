import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import fabricData from "../../data/fabricData";

function Cart(props) {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="cart">
      <div>
        <h1>Your cart items</h1>
      </div>
      <div className="cartItems">
        {fabricData.map((fabric) => {
          if (cartItems[fabric.id] !== 0) {
            return <CartItem data={fabric} />;
          }
        })}
        <div></div>
      </div>
    </div>
  );
}

export default Cart;
