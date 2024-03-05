"use client";
import React from "react";
import { useCartContext } from "../context/cartContext";
import CustomButton from "./CustomButton";
import ArrowIcon from "./ArrowIcon";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCartContext();

  const isItemInCart = () => {
    return cartItems.some((cartItem) => cartItem.sku === product.sku);
  };

  return (
    <div
      key={product.sku}
      className="relative bg-white shadow-md rounded-lg px-10 py-10"
    >
      <img
        src={product.image}
        alt={product.title}
        className="rounded-md h-48"
      />
      <div className="mt-4">
        <h1 className="text-lg uppercase font-bold">{product.title}</h1>
        <p className="mt-2 text-gray-600 text-sm">{product.description}</p>
        <p className="mt-2 text-gray-600">{product.price / 100}€</p>
      </div>
      <div className="mt-6 flex justify-between items-center">
        <CustomButton onClick={() => addToCart(product)}>+</CustomButton>
      </div>
      {isItemInCart() && (
        <div className="absolute bottom-4 right-4">
          <ArrowIcon />
        </div>
      )}
    </div>
  );
}
