import { ReactNode, useContext, createContext, useState } from "react";
import Cart, { ICart, ICartItem } from "../classes/Cart";

interface IShoppingCartContext {
  addToCart: (item: ICartItem) => void;
  removeFromCart: (item: ICartItem) => void;
  removeItemFromCart: (item: ICartItem) => void;
  cart: ICart;
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

interface IShoppingCartProvider {
  children: ReactNode;
}

export const ShoppingCartProvider = ({ children }: IShoppingCartProvider) => {
  const [cartDetails, updateCart] = useState({
    cart: Cart.getCart(),
  });

  const addToCart = (item: ICartItem) => {
    cartDetails.cart.addToCart(item);
    updateCart({
      cart: cartDetails.cart,
    });
  };

  const removeItemFromCart = (item: ICartItem) => {
    cartDetails.cart.removeItemFromCart(item);
    updateCart({
      cart: cartDetails.cart,
    });
  };

  const removeFromCart = (item: ICartItem) => {
    cartDetails.cart.removeFromCart(item);
    updateCart({
      cart: cartDetails.cart,
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        removeItemFromCart,
        cart: cartDetails.cart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
