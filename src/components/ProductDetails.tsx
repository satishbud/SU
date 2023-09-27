import { IProduct } from "../classes/Product";
import { CART_ACTIONS, useShoppingCart } from "../context/ShoppingCart";
import ProductFactory from "../classes/ProductFactory";
import Button from "./Button";
import { KeyboardEvent, useEffect, useRef, useState } from "react";

interface IProductProps {
  product: IProduct;
}

const ProductDetails = ({ product }: IProductProps) => {
  const { cart, updateCart } = useShoppingCart();
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
              onClick={() => {
                updateCart({
                  type: CART_ACTIONS.ADD_TO_CART,
                  payload: {
                    item: productAsCartItem,
                  },
                });
              }}
            >
              Add To Cart
            </Button>
            <Button className="generic-button buy-button">BUY</Button>
          </>
        ) : (
          <>
            <Button
              className="generic-button quantities-button"
              onClick={() => {
                updateCart({
                  type: CART_ACTIONS.REMOVE_FROM_CART,
                  payload: {
                    item: productAsCartItem,
                  },
                });
              }}
            >
              -
            </Button>
            <div className="quantity" tabIndex={-1}>
              {cart.getNumOfSpecificItems(productAsCartItem)}
            </div>
            <Button
              className="generic-button quantities-button"
              onClick={() => {
                updateCart({
                  type: CART_ACTIONS.ADD_TO_CART,
                  payload: {
                    item: productAsCartItem,
                  },
                });
              }}
            >
              +
            </Button>
            <Button
              className="generic-button remove-button"
              onClick={() => {
                updateCart({
                  type: CART_ACTIONS.REMOVE_ITEM_FROM_CART,
                  payload: {
                    item: productAsCartItem,
                  },
                });
              }}
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
