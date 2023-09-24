import React from "react";
import { ICartViewer } from "../classes/Cart";
import { useShoppingCart } from "../context/ShoppingCart";

interface ICart {}

const Cart = ({}: ICart) => {
  const { cart } = useShoppingCart();
  return (
    <div>
      {/* {<>{console.log(cart)}</>} */}
      {cart.getAllUniqueItems().map((item) => {
        return (
          <div key={item.getId()}>
            {item.getName()} - {cart.getNumOfSpecificItems(item)}
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
