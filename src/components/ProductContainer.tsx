import "../styles/Product.css";
import ProductFactory from "../classes/ProductFactory";

import { useState } from "react";
import { ICartItem } from "../classes/Cart";
import Product from "./Product";

interface IProductContainer {}
const ProductContainer = ({}: IProductContainer) => {
  const products = ProductFactory.getAllProducts();
  return (
    <div className="products-container">
      {products.map((product) => {
        return <Product key={product.getId()} product={product} />;
      })}
    </div>
  );
};

export default ProductContainer;
