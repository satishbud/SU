import React from "react";
import { IProduct } from "../classes/Product";
import ProductBanner from "./ProductBanner";
import ProductDetails from "./ProductDetails";

interface IProductProps {
  product: IProduct;
}

const Product = ({ product }: IProductProps) => {
  return (
    <div key={product.getId()} className="product">
      <ProductBanner product={product} />
      <ProductDetails product={product} />
    </div>
  );
};

export default Product;
