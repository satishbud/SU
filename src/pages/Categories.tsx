import React from "react";
import CategoryFactory from "../classes/CategoryFactory";
import ProductFactory from "../classes/ProductFactory";
import Product from "../components/Product";
import Category from "../components/Category";
import { IProduct } from "../classes/Product";

const Categories = () => {
  const categories = CategoryFactory.getAllCategories();
  const products = ProductFactory.getAllProducts();

  return (
    <div className="categories">
      {categories.map((category) => {
        const categoryProducts: IProduct[] = products.filter((product) =>
          product.getCategories().includes(category)
        );

        return (
          <Category
            key={category.getId()}
            category={category}
            products={categoryProducts}
          />
        );
      })}
    </div>
  );
};

export default Categories;
