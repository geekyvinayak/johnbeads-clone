"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/CrystalLaneStrands 1.png",
    title: "Our Crystal Lane strands are a bestseller! 1",
    description:
      "Our glass bead double strands (7 inches for twice the beads) are available in stunning clear, opal and opaque colors.\nOriginal sizes: 3x4mm, 4x6mm, 6x8mm and 8x10mm\nNew petite size is 1.5 x 2.5 mm",
  },
  {
    id: 2,
    image: "/preciosa-velvet-2025.webp",
    title: "Our Crystal Lane strands are a bestseller! 2",
    description:
      "Our glass bead double strands (7 inches for twice the beads) are available in stunning clear, opal and opaque colors.\nOriginal sizes: 3x4mm, 4x6mm, 6x8mm and 8x10mm\nNew petite size is 1.5 x 2.5 mm",
  },
  {
    id: 3,
    image: "/czech_seed_beads_2025.webp",
    title: "Our Crystal Lane strands are a bestseller! 3",
    description:
      "Our glass bead double strands (7 inches for twice the beads) are available in stunning clear, opal and opaque colors.\nOriginal sizes: 3x4mm, 4x6mm, 6x8mm and 8x10mm\nNew petite size is 1.5 x 2.5 mm",
  },
];

const CardSlider = () => {
  const [current, setCurrent] = React.useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full relative bg-white p-4 sm:p-8 max-w-6xl mx-auto overflow-hidden">
      {/* Desktop navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hidden sm:block cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow z-10 hidden sm:block cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight />
      </button>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 w-full flex flex-col sm:flex-row items-center justify-between px-2"
            >
              <div className="w-full sm:w-1/2">
                <img
                  src={slide.image}
                  alt="Crystal Lane"
                  className="rounded-xl w-full object-cover"
                />
              </div>
              <div className="sm:w-1/2 mt-4 sm:mt-0 sm:pl-8 w-full">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm text-gray-600 whitespace-pre-line mb-4">
                  {slide.description}
                </p>
                <div>
                  <button className="bg-[#05527C] text-white px-6 py-2">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          ))}
          {/* Mobile navigation buttons - moved outside of slides */}
        
        </div>
        <div className="absolute flex justify-center mt-6 sm:hidden bottom-0 right-5 gap-5 ">
            <button
              onClick={prevSlide}
              className="bg-white border rounded-full p-2 shadow cursor-pointer"
              aria-label="Previous slide (mobile)"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border rounded-full p-2 shadow cursor-pointer"
              aria-label="Next slide (mobile)"
            >
              <ChevronRight />
            </button>
          </div>
      </div>

      {/* Slide indicators */}
      <div className="flex justify-center mt-4 ">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`mx-1 h-2 w-2 rounded-full ${
              index === current ? "bg-blue-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
