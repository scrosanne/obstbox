"use client";
import React from "react";
import { useCartContext } from "../context/cartContext";
import CustomButton from "./CustomButton";

export default function CartItem({ product }) {
  const { removeFromCart, isItemInCart } = useCartContext();

  return (
    <div
      key={product.id}
      className="relative flex items-center border-grey border-solid border-2 p-4"
    >
      {/* Product Image on the Left */}
      <div className="flex-shrink-0 mr-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 h-24 object-cover"
        />
      </div>

      {/* Product Details on the Right */}
      <div className="flex-grow">
        {/* Remove Button */}
        <div className="absolute top-2 right-2">
          <CustomButton onClick={() => removeFromCart(product)}>X</CustomButton>
        </div>

        {/* Title + Description */}
        <div className="mr-12">
          <h1 className="text-lg uppercase font-bold italic">
            {product.price / 100}€
          </h1>
          <p>{product.title}</p>
          <p>{product.description}</p>

          <p>Gesamt: {(product.price / 100) * product.quantity}€</p>
        </div>
      </div>
    </div>
  );
}
