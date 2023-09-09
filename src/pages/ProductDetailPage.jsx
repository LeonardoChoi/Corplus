import React from "react";
import { useParams, Link } from "react-router-dom";
import fabricData from "../data/fabricData";
import "./ProductDetailPage.css"; // Import your CSS file

function ProductDetailPage() {
  const { productId } = useParams();
  const product = fabricData.find(
    (fabric) => fabric.id === parseInt(productId)
  );

  // Check if the product exists
  if (!product) {
    return <div>Product not found</div>;
  }

  const { fabricName, fabricPrice, fabricImg } = product;

  return (
    <div className="product-detail-container">
      <img src={fabricImg} alt={fabricName} className="product-image" />
      <h2 className="product-title">{fabricName}</h2>
      <p className="product-price">${fabricPrice}</p>
      <p className="product-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet,
        justo sed congue vulputate, lorem lectus malesuada urna.
      </p>
      <Link to="/" className="back-to-products">
        Back to Products
      </Link>
    </div>
  );
}

export default ProductDetailPage;
