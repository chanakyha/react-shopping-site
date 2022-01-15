import React from "react";
import "./Products.css";

function Product({ product_heading, product_img, product_description }) {
  return (
    <div className="product">
      <div className="card">
        <div className="card-header">{product_heading}</div>
        <img src={product_img} className="card-img-top" />
        <div className="card-body">
          <p className="card-text">{product_description}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
