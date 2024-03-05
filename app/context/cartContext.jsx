"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]); //store in local storage, when cartItem changes

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

  const changeQuantity = (item, newQuantity) => {
    //new array with updated items made
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.sku === item.sku) {
        return { ...cartItem, quantity: newQuantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const getTotalCart = () => {
    const total = cartItems.reduce((total, currentItem) => {
      return total + (currentItem.quantity * currentItem.price) / 100;
    }, 0);
    return total.toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
        getTotalCart,
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
