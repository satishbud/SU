import { ReactNode, useContext, createContext, useState } from "react";
import Cart, { ICartItem, ICartViewer } from "../classes/Cart";

interface IShoppingCartContext {
  cart: ICartViewer;
  updateCart: (args: IUpdateCartDetails) => void;
}

export enum CART_ACTIONS {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_FROM_CART,
}

interface IUpdateCartDetails {
  type: CART_ACTIONS;
  payload: {
    item: ICartItem;
  };
}

export const ShoppingCartContext = createContext({} as IShoppingCartContext);

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

interface IShoppingCartProvider {
  children: ReactNode;
}

export const ShoppingCartProvider = ({ children }: IShoppingCartProvider) => {
  const [cartDetails, updateCartState] = useState({
    cart: Cart.getCart(),
  });

  const updateCart = ({ type, payload }: IUpdateCartDetails) => {
    const { item } = payload;
    switch (type) {
      case CART_ACTIONS.ADD_TO_CART:
        cartDetails.cart.addToCart(item);
        break;
      case CART_ACTIONS.REMOVE_FROM_CART:
        cartDetails.cart.removeFromCart(item);

        break;
      case CART_ACTIONS.REMOVE_ITEM_FROM_CART:
        cartDetails.cart.removeItemFromCart(item);

        break;
      default:
        break;
    }
    updateCartState(() => {
      return { ...cartDetails };
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart: cartDetails.cart,
        updateCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
