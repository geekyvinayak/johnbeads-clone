"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const categories = [
    "SITEMAP",
    "NEW ARRIVALS",
    "FIRST NATIONS",
    "CARNIVAL & DANCE",
    "CRAFT STORES",
    "CLEARANCE",
    "CATALOGS",
    "PROJECTS",
    "FEATURED PROGRAMS",
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white text-sm px-4 py-1 text-right hidden md:block">
        Visit our showroom
      </div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row p-4 md:px-8 bg-white">
        {/* Top Row for Mobile (Logo, Menu, Cart) */}
        <div className="flex items-center justify-between w-full md:hidden mb-4">
          {/* Mobile Menu Button */}
          <div className="flex gap-5">
          <button 
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="p-1 flex items-center justify-center"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Logo (centered on mobile) */}
          
            <Image src={"/logo.png"} height={40} width={150} alt="headerLogo" />
          </div>
          
          {/* Cart Icon */}
          <div className="flex items-center">
            <ShoppingCart size={22} />
            <span className="ml-1 text-sm">(3)</span>
          </div>
        </div>
        
        {/* Search Bar for Mobile (Full Width) */}
        <div className="w-full md:hidden mb-1">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for..."
              className="w-full border border-[#D2D2D2] px-4 py-2 pr-10"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          <div className="flex items-center flex-1 gap-6">
            {/* Logo */}
            <Image src={"/logo.png"} height={54} width={196} alt="headerLogo" />
            
            {/* Search Bar */}
            <div className="max-w-2xl flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="w-full border border-[#D2D2D2] px-4 py-2 pr-10"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Icons - Desktop Only */}
          <div className="flex items-center space-x-6 ml-6">
            <div className="flex items-center space-x-2 text-sm">
              <User size={18} />
              <span>
                Hi, Evelyn!
                <br />
                #3333333
              </span>
            </div>

            <div className="flex items-center">
              <ShoppingCart size={22} />
              <span className="ml-1 text-sm">(3)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Menu - Desktop */}
      <nav className="hidden md:flex px-8 py-1 space-x-6 text-sm font-medium border-t border-t-gray-200 overflow-x-auto">
        {categories.map((cat, i) => (
          <a key={i} href="#" className="whitespace-nowrap">
            {cat}
          </a>
        ))}
      </nav>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-sky-900 text-white transform transition-transform duration-300 ease-in-out z-50 p-5 md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* User section */}
        <div className="mb-4 border-b border-white/20 pb-4">
          <div className="flex items-center space-x-2">
            <User size={20} />
            <div>
              <div className="font-semibold text-sm">Hi, Evelyn!</div>
              <div className="text-xs text-white/70">#3333333</div>
            </div>
          </div>
        </div>

        {/* Category links */}
        <nav className="space-y-4 text-sm font-medium">
          {categories.map((cat, i) => (
            <a key={i} href="#" className="block">
              {cat}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Overlay when mobile menu is open */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}