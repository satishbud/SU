import React, { useEffect, useRef, useState } from "react";
import { ICategory } from "../classes/Category";
import { IProduct } from "../classes/Product";
import Product from "./Product";
import "../styles/Category.css";

interface ICategoryProps {
  category: ICategory;
  products: IProduct[];
}

const Category = ({ category, products }: ICategoryProps) => {
  const containerRef = useRef(null);
  const [isMinimized, setMinimize] = useState(false);

  return (
    <>
      <div className="category-title">
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            margin: "1rem 0",
          }}
        >
          {category.getName()}
          <div
            onClick={() => setMinimize(!isMinimized)}
            className={`toogle-hide`}
          >
            &gt;
          </div>
        </h3>
      </div>
      <div
        ref={containerRef}
        key={category.getId()}
        className={`category-container products-container`}
      >
        {products.map((product) => (
          <Product key={product.getId()} product={product} />
        ))}
      </div>
    </>
  );
};

export default Category;
