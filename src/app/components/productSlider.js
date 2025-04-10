"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const products = [
  {
    id: 1,
    image: "/feat1.png",
    title: "Swarovski Rondelle 6mm Crystal/Silver 10pcs",
    stock: true,
    priceTiers: [
      { qty: 1, price: "$5.38", oldPrice: "$6.38" },
      { qty: 2, price: "$4.91", oldPrice: "$5.91" },
      { qty: 4, price: "$4.76", oldPrice: "$5.76" },
      { qty: 6, price: "$4.30", oldPrice: "$5.30" },
    ],
  },
  {
    id: 2,
    image: "/feat2.png",
    title: "Swarovski Rondelle 6mm Crystal/Silver 10pcs",
    stock: true,
    priceTiers: [
      { qty: 1, price: "$5.38", oldPrice: "$6.38" },
      { qty: 2, price: "$4.91", oldPrice: "$5.91" },
      { qty: 4, price: "$4.76", oldPrice: "$5.76" },
      { qty: 6, price: "$4.30", oldPrice: "$5.30" },
    ],
  },
  {
    id: 3,
    image: "/feat3.png",
    title: "Swarovski Rondelle 6mm Crystal/Silver 10pcs",
    stock: true,
    priceTiers: [
      { qty: 1, price: "$5.38", oldPrice: "$6.38" },
      { qty: 2, price: "$4.91", oldPrice: "$5.91" },
      { qty: 4, price: "$4.76", oldPrice: "$5.76" },
      { qty: 6, price: "$4.30", oldPrice: "$5.30" },
    ],
  },
  {
    id: 4,
    image: "/feat4.png",
    title: "Swarovski Rondelle 6mm Crystal/Silver 10pcs",
    stock: true,
    priceTiers: [
      { qty: 1, price: "$5.38", oldPrice: "$6.38" },
      { qty: 2, price: "$4.91", oldPrice: "$5.91" },
      { qty: 4, price: "$4.76", oldPrice: "$5.76" },
      { qty: 6, price: "$4.30", oldPrice: "$5.30" },
    ],
  },
  {
    id: 5,
    image: "/feat5.png",
    title: "Swarovski Rondelle 6mm Crystal/Silver 10pcs",
    stock: true,
    priceTiers: [
      { qty: 1, price: "$5.38", oldPrice: "$6.38" },
      { qty: 2, price: "$4.91", oldPrice: "$5.91" },
      { qty: 4, price: "$4.76", oldPrice: "$5.76" },
      { qty: 6, price: "$4.30", oldPrice: "$5.30" },
    ],
  },
];

const productChunks = chunkArray(products, 2);

const FeaturedProducts = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % productChunks.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + productChunks.length) % productChunks.length);
  };

  return (
    <div className="w-full px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">FEATURED PRODUCTS</h2>

      {/* Mobile Slider */}
      <div className="sm:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
              width: `${productChunks.length * 100}%`,
            }}
          >
            {productChunks.map((chunk, index) => (
              <div key={index} className="w-full flex flex-shrink-0 gap-4 px-2">
                {chunk.map((product) => (
                  <div key={product.id} className="w-1/2 bg-white border rounded shadow p-2 flex flex-col">
                    <img src={product.image} alt={product.title} className="mx-auto h-28 object-contain mb-2" />
                    <h3 className="text-sm font-medium text-center">{product.title}</h3>
                    <p className={`text-center ${product.stock ? "text-green-600" : "text-red-500"}`}>
                      {product.stock ? "✓ In stock" : "✕ Out of Stock"}
                    </p>
                    <div className="text-center text-xs my-2">
                      {product.priceTiers.map((tier, i) => (
                        <div key={i}>
                          {tier.qty} at <span className="font-semibold">{tier.price}</span>{" "}
                          <span className="line-through text-gray-400">{tier.oldPrice}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <label className="text-xs">Units:</label>
                      <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        className="border w-14 p-1 text-center"
                      />
                    </div>
                    <button className="bg-[#05527C] text-white w-full py-1.5 mt-3 text-sm">
                      ADD TO CART
                    </button>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 px-2 z-10">
          <button onClick={prevSlide}>
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2 z-10">
          <button onClick={nextSlide}>
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {productChunks.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-blue-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {products.map((product) => (
          <div key={product.id} className="p-4 bg-white border rounded shadow">
            <img src={product.image} alt={product.title} className="mx-auto h-32 object-contain mb-2" />
            <h3 className="font-medium text-center">{product.title}</h3>
            <p className={`text-center ${product.stock ? "text-green-600" : "text-red-500"}`}>
              {product.stock ? "✓ In stock" : "✕ Out of Stock"}
            </p>
            <div className="text-center text-sm my-2">
              {product.priceTiers.map((tier, i) => (
                <div key={i}>
                  {tier.qty} at <span className="font-semibold">{tier.price}</span>{" "}
                  <span className="line-through text-gray-400">{tier.oldPrice}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between gap-2 mt-2">
              <label className="text-sm">Units:</label>
              <input type="number" min="1" defaultValue="1" className="border w-16 p-1 text-center" />
            </div>
            <button className="bg-[#05527C] text-white w-full py-2 mt-3">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
