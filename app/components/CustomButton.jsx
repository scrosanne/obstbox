import React from "react";

export default function CustomButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 text-gray-500 bg-gray-100 uppercase rounded hover:bg-gray-200 focus:outline-none"
    >
      {children}
    </button>
  );
}
