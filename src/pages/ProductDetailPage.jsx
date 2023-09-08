import React from "react";
import { useParams, Link } from "react-router-dom";
import fabricData from "../data/fabricData";

function ProductDetailPage() {
  const { productId } = useParams();
  const product = fabricData.find((fabric) => fabric.id === productId);
  console.log(fabric.id);
  console.log(productId);
  console.log(product);

  return (
    <div>
      {productId}
      <h5>{}</h5>{" "}
    </div>
  );
}

export default ProductDetailPage;
