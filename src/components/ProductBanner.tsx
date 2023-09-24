import React from "react";
import { IProduct } from "../classes/Product";

interface IProductBanner {
  product: IProduct;
}

const ProductBanner = ({ product }: IProductBanner) => {
  console.log("Rendering");
  return (
    <div className="product-banner">
      {/* <Image src={product.getImageSource()} alt={product.getName()}></Image> */}
      <img src={product.getImageSource()} alt={product.getName()} />
    </div>
  );
};

export default ProductBanner;
