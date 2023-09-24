import React from "react";
import { ShoppingCartContext, useShoppingCart } from "../context/ShoppingCart";

const Cart = () => {
  const { cart } = useShoppingCart();
  return <div>Items in Cart: {cart.getNumOfItems()}</div>;
};

export default Cart;
