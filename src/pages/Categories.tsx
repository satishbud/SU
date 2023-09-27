import React from "react";
import CategoryFactory from "../classes/CategoryFactory";
import ProductFactory from "../classes/ProductFactory";
import Product from "../components/Product";

const Categories = () => {
  const categories = CategoryFactory.getAllCategories();
  const products = ProductFactory.getAllProducts();

  return (
    <div className="categories">
      {categories.map((category) => {
        return (
          <>
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                margin: "1rem 0",
              }}
            >
              {category.getName()}
            </h3>
            <div className={`products-container ${category.getName()}`}>
              {products.map((product) => {
                return product.getCategories().map((cat) => {
                  if (cat.getId() === category.getId()) {
                    return <Product product={product} />;
                  }
                });
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Categories;
