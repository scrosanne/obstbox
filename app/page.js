"use client";
import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const data = [
      {sku: 10000, title: "Pear", weight: {value: 1, unit: "fruit"}, image: "/pear.png", backgroundColor: "#cc9900", price: 256, description: "Pears are fruits produced and consumed around the world, growing on a tree and harvested in late Summer into October.", quantity: 0 },
      {sku: 10001, title: "Pineapple", weight: {value: 1, unit: "fruit"}, image: "/pineapple.png", backgroundColor: "#ffff00", price: 488, description: "The pineapple is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.", quantity: 0},
      {sku: 10002, title: "Blue Berries", weight: {value: 1, unit: "basket"}, image: "/blueberry.png", backgroundColor: "#003399", price: 299, description: "Blueberries are perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium.", quantity: 0},
      {sku: 10003, title: "Cherries", weight: {value: 200, unit: "grams"}, image: "/cherry.png", backgroundColor: "#990000", price: 290, description: "A cherry is the fruit of many plants of the genus Prunus, and is a fleshy drupe (stone fruit).", quantity: 0},
      {sku: 10004, title: "Mango", weight: {value: 1, unit: "fruit"}, image: "/mango.png", backgroundColor: "#ffcc00", price: 190, description: "A mango is a stone fruit produced from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit. Most of these species are found in nature as wild mangoes.",quantity: 0},
      {sku: 10005, title: "Passion fruit", weight: {value: 3, unit: "fruits"}, image: "/passionfruit.png", backgroundColor: "#ff9900", price: 499, description: "The passion fruit is so called because it is one of the many species of passion flower, the English translation of the Latin genus name, Passiflora.", quantity: 0},
  ]

  useEffect(() => {
    setProducts(data);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col justify-center m-12">

    <div className="flex justify-between items-center">
      <h1 className="text-2xl uppercase italic mb-12 ml-12 tracking-widest font-thin">
        Unsere Produkte
      </h1>
      <input
          type="text"
          placeholder="nach was suchst du?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-1 border border-gray-300 rounded-md mb-12 mr-12 italic "
        />
    </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {filteredProducts.map((product) => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
}
