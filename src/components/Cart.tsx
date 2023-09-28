import React from "react";
import { ShoppingCartContext, useShoppingCart } from "../context/ShoppingCart";
import { useLocalization } from "../context/LocalizationContext";

const Cart = () => {
  const { locale } = useLocalization();
  const { cart } = useShoppingCart();
  return (
    <div>
      {locale.getText("ITEMS_IN_CART_TEXT")} {cart.getNumOfItems()}
    </div>
  );
};

export default Cart;
