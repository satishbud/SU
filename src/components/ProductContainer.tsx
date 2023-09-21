import React from "react";
import Product from "./Product";
import "../styles/Product.css";

export interface SuccessMessage {
  msg: string;
}

const onBuyingAProduct = (id: string) => {
  console.log("Buying product: " + id);
};

const onAddingToCart = (id: string) => {
  console.log("Adding to cart: " + id);
};

const ProductContainer = () => {
  return (
    <div className="products-container">
      <Product
        name="Fuji Flame"
        id="100001"
        price={200}
        imageSrc="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
      <Product
        name="Dunkin Donut"
        id="100002"
        price={7.99}
        imageSrc="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
      <Product
        name="Fuji Flame"
        id="100003"
        price={200}
        imageSrc="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
      <Product
        name="Dunkin Donut"
        id="100004"
        price={7.99}
        imageSrc="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
      <Product
        name="Fuji Flame"
        id="100005"
        price={200}
        imageSrc="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
      <Product
        name="Dunkin Donut"
        id="100006"
        price={7.99}
        imageSrc="https://images.pexels.com/photos/2638026/pexels-photo-2638026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        onBuy={onBuyingAProduct}
        onAddToCart={onAddingToCart}
      />
    </div>
  );
};

export default ProductContainer;
