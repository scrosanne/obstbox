"use client";
import React from "react";
import { useCartContext } from "../context/cartContext";
import CustomButton from "./CustomButton";

export default function CartItem({ product }) {
  const { removeFromCart, changeQuantity } = useCartContext();

  return (
    <div
      key={product.sku}
      className="relative flex items-center border-grey border-solid border-2 rounded-lg p-4"
    >
      {/* LeftSide */}
      <div className="flex-shrink-0 mr-5">
        <img
          src={product.image}
          alt={product.title}
          className="w-24 object-fill"
        />
      </div>

      {/* RightSide */}
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

          {/* Quantity */}
          <div className="mt-2 flex items-center">
            <select
              className="block appearance-none bg-white border border-gray-100 hover:border-gray-200 px-3 py-1 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              value={product.quantity}
              onChange={(e) =>
                changeQuantity(product, parseInt(e.target.value))
              }
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">4</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
