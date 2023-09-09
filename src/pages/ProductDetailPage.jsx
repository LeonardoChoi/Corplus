import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import { ShopContext } from "../context/shop-context";
import "./ProductDetailPage.css"; // Import your CSS file
import fabricData from "../data/fabricData";

function ProductDetailPage() {
  const { productId } = useParams();
  const product = fabricData.find(
    (fabric) => fabric.id === parseInt(productId)
  );
  const { addToCart, cartItems } = useContext(ShopContext);

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  const { fabricName, fabricPrice, fabricImg, fabricDescription, id } = product;

  const cartItemAmount = cartItems[id];

  return (
    <div className="product-detail-container">
      <img src={fabricImg} alt={fabricName} className="product-image" />
      <h2 className="product-title">{fabricName}</h2>
      <p className="product-price">${fabricPrice}</p>
      <button className="addToCart-button" onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
      </button>
      <p className="product-description">{fabricDescription}</p>
      <Link to="/" className="back-to-products">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetailPage;
