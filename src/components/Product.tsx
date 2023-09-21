import React from "react";
import "../styles/Product.css";
import Button from "./Button";
import { SuccessMessage } from "./ProductContainer";

interface ProductDetails {
  name: string;
  id: string;
  price: number;
  imageSrc: string;
  onBuy: (id: string) => void;
  onAddToCart: (id: string) => void;
}

const Product = ({
  name,
  id,
  price,
  imageSrc,
  onBuy,
  onAddToCart,
}: ProductDetails) => {
  return (
    <div key={id} className="product">
      <div className="product-banner">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="product-details">
        <div className="details-left">
          <span>{name}</span>
          <Button onButtonClick={() => onBuy(id)}>Buy</Button>
        </div>
        <div className="details-right">
          <span>${price}</span>
          <Button onButtonClick={() => onAddToCart(id)}>Add to Cart.</Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
