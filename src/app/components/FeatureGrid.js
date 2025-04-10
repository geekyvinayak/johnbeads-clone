"use client";
import React from "react";

const featuredItems = [
  {
    title: "Preciosa Traditional Czech Beads",
    image: "/category1.png",
  },
  {
    title: "Preciosa Crystals",
    image: "/category2.png",
  },
  {
    title: "Miyuki Delicas and Seed Beads",
    image: "/category3.png",
  },
  {
    title: "Swarovski",
    image: "/category4.png",
  },
  {
    title: "Meet Betsy - Queen of Beads",
    image: "/category5.png",
  },
  {
    title: "Carnival & Dance",
    image: "/category6.png",
  },
  {
    title: "Craft Stores",
    image: "/category7.png",
  },
  {
    title: "Fashion Embellishments",
    image: "/category8.png",
  },
];

const FeaturedGrid = () => {
  return (
    <section className="w-full px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">FEATURED</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {featuredItems.map((item, index) => (
          <div key={index} className="relative w-full aspect-[4/3] overflow-hidden rounded ">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 backdrop "
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 w-full bg-black/40">
            </div>
            <div className="absolute bottom-0 left-0 w-1/2 p-2 text-white text-xl font-extrabold ">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedGrid;
