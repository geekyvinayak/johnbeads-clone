'use client'
import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="relative w-full max-w-[1440px] mx-auto">
      {/* Background image */}
      <div className="relative w-full h-[500px] md:h-[550px]">
        <Image
          src="/MapleLeafsMain-Banner 1.png" // replace with correct path
          alt="Maple Leaf Beads"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-end justify-center md:justify-start">
          <div className="bg-black/30 w-full h-full absolute top-0 left-0" />
          <div className="relative z-10 px-4 text-white w-full max-w-7xl md:mb-20">
            <div className="max-w-xs md:max-w-md md:ml-10 text-left py-10 md:py-0">
              <h2 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                Maple Leaf Beads
              </h2>
              <p className="text-sm md:text-base mb-5 leading-relaxed">
                John Bead Corp is open and shipping all orders.<br />
                Only our showroom is closed to visitors at this time.
              </p>
              <button className="bg-[#05527C] hover:bg-blue-800 text-white font-semibold text-sm px-6 py-2 md:px-6 md:py-2 rounded">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
