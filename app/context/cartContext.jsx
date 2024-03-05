"use client";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const isItemInCart = cartItems.find(
      (cartItem) => cartItem.sku === item.sku
    );
    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.sku === item.sku
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]); //add new cart item (deconstruct properties and set quantity)
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.sku !== item.sku));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
}
