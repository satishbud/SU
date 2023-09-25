import { IProduct } from "../classes/Product";
import { useShoppingCart } from "../context/ShoppingCart";
import ProductFactory from "../classes/ProductFactory";
import Button from "./Button";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

interface IProductDetails {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductDetails) => {
  const { cart, addToCart, removeFromCart, removeItemFromCart } =
    useShoppingCart();
  const productAsCartItem = ProductFactory.getAsCartItem(product);

  return (
    <div className="product-details">
      <div className="details-left">
        <div className="product-name">{product.getName()}</div>
        <div className="product-price">
          <span
            className={
              "original-price " +
              (product.getPriceDetails().isOnSale() ? "strikethrough" : "")
            }
          >
            ${product.getPriceDetails().getPrice()}
          </span>
          {product.getPriceDetails().isOnSale() && (
            <span className="sales-price">
              ${product.getPriceDetails().getSale()?.getPrice()}
            </span>
          )}
        </div>
      </div>
      <div className="details-right">
        {cart.getNumOfSpecificItems(productAsCartItem) <= 0 ? (
          <>
            <Button
              className="generic-button add-to-cart-button"
              onClick={() => addToCart(productAsCartItem)}
              onEnterWhenTabbed={() => addToCart(productAsCartItem)}
            >
              Add To Cart
            </Button>
            <Button className="generic-button buy-button">BUY</Button>
          </>
        ) : (
          <>
            <Button
              className="generic-button quantities-button"
              onClick={() => removeFromCart(productAsCartItem)}
              onEnterWhenTabbed={() => removeFromCart(productAsCartItem)}
            >
              -
            </Button>
            <div className="quantity" tabIndex={-1}>
              {cart.getNumOfSpecificItems(productAsCartItem)}
            </div>
            <Button
              className="generic-button quantities-button"
              onClick={() => addToCart(productAsCartItem)}
              onEnterWhenTabbed={() => addToCart(productAsCartItem)}
            >
              +
            </Button>
            <Button
              className="generic-button remove-button"
              onEnterWhenTabbed={() => removeItemFromCart(productAsCartItem)}
              onClick={() => removeItemFromCart(productAsCartItem)}
            >
              Remove
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
