import React from "react";

interface ProductDetails {
  name: string;
  id: string;
  price: number;
  imageSrc: string;
}

const Product = ({ name, id, price, imageSrc }: ProductDetails) => {
  return (
    <div key={id} className="product">
      <div className="product-banner">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="product-details">
        <div className="details-left">
          <span>{name}</span>
          <span>BUY</span>
        </div>
        <div className="details-right">
          <span>${price}</span>
          <span>Add to Cart.</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
