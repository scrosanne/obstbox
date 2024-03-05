"use client";
import { useCartContext } from "../context/cartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems } = useCartContext();

  return (
    <div className="flex flex-col m-12">
      {/* header */}
      <h1 className="text-2xl uppercase italic mb-12 tracking-widest font-thin">
        WARENKORB
      </h1>

      {/* items */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.sku}>
            <CartItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}
