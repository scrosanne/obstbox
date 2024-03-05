"use client";
import React from "react";
import Link from "next/link";
import { useCartContext } from "../context/cartContext";

export default function Navbar() {
  const { cartItems } = useCartContext();

  return (
    <div>
      <nav className="flex items-center justify-between p-3 px-6 bg-amber-200 italic tracking-widest">
        <div>
          <a>OBSTBOX</a>
        </div>
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/">PRODUKTE</Link>
          </li>
          <li>
            <Link href="/warenkorb">WARENKORB({cartItems.length})</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
