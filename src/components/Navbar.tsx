'use client'
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  Globe,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { navCategories } from "../data/mockData";

const Navbar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(e.target as Node)
      ) {
        setShowCategories(false);
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside as EventListener);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside as EventListener,
      );
  }, []);

  return (
    <>
      {/* Top promo bar */}
      <div className="bg-[#1c1d1f] text-white text-center py-3 px-4 text-sm">
        <span className="font-bold">Skills on sale</span> | Courses now as low
        as <span className="font-bold">$10.99</span> through July 31.
        <span className="underline cursor-pointer ml-1 font-bold">
          1 day left!
        </span>
      </div>

      {/* Main navbar */}
      <nav className="bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)] sticky top-0 z-50 border-b border-[#d1d7dc]">
        <div className="max-w-[1340px] mx-auto flex items-center h-[70px] px-6">
          {/* Mobile menu button */}
          <button
            className="lg:hidden mr-3 p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <a href="/" className="flex-shrink-0 mr-4">
            <span
              className="text-[20px] lg:text-[24px] font-extrabold tracking-tight text-[#1c1d1f] whitespace-nowrap"
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                letterSpacing: "-0.01em",
              }}
            >
              Astrovastu Gurukull
            </span>
          </a>

          {/* Categories dropdown */}
          <div className="hidden lg:block relative" ref={categoryRef}>
            <button
              className="text-sm text-[#1c1d1f] hover:text-[#5624d0] transition-colors duration-150 px-2 py-2"
              onMouseEnter={() => setShowCategories(true)}
              onClick={() => setShowCategories(!showCategories)}
            >
              Categories
            </button>
            {showCategories && (
              <div
                className="absolute top-full left-0 bg-white border border-[#d1d7dc] shadow-lg min-w-[260px] z-50"
                onMouseLeave={() => {
                  setShowCategories(false);
                  setActiveCategory(null);
                }}
              >
                {navCategories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setActiveCategory(idx)}
                  >
                    <div className="flex items-center justify-between px-4 py-2 hover:text-[#5624d0] cursor-pointer text-sm text-[#1c1d1f]">
                      <span>{cat.name}</span>
                      <ChevronRight size={14} />
                    </div>
                    {activeCategory === idx && (
                      <div className="absolute left-full top-0 bg-white border border-[#d1d7dc] shadow-lg min-w-[220px] -mt-px">
                        {cat.subcategories.map((sub, subIdx) => (
                          <a
                            key={subIdx}
                            href="#"
                            className="block px-4 py-2 text-sm text-[#1c1d1f] hover:text-[#5624d0]"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="flex-1 mx-3 hidden md:block">
            <div className="relative">
              <div className="flex items-center border border-[#1c1d1f] rounded-full bg-[#f7f9fa] h-12 px-4">
                <Search size={20} className="text-[#6a6f73] flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search for anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-none outline-none text-sm text-[#1c1d1f] placeholder-[#6a6f73] ml-3 h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side links */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="#"
              className="text-sm text-[#1c1d1f] hover:text-[#5624d0] transition-colors duration-150 px-3 py-2 whitespace-nowrap"
            >
              Astrovastu Business
            </a>
            <a
              href="#"
              className="text-sm text-[#1c1d1f] hover:text-[#5624d0] transition-colors duration-150 px-3 py-2 whitespace-nowrap"
            >
              Teach on Astrovastu Gurukull
            </a>
          </div>

          {/* Cart */}
          <button className="p-2 relative mx-1">
            <ShoppingCart size={22} className="text-[#1c1d1f]" />
          </button>

          {/* Auth buttons */}
          <div className="hidden sm:flex items-center gap-2 ml-1">
            <button className="border border-[#1c1d1f] text-[#1c1d1f] font-bold text-sm px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors duration-150">
              Log in
            </button>
            <button className="bg-[#1c1d1f] text-white font-bold text-sm px-4 py-2.5 hover:bg-[#3e4143] transition-colors duration-150">
              Sign up
            </button>
          </div>

          {/* Language */}
          <button className="hidden lg:flex border border-[#1c1d1f] p-2.5 ml-2">
            <Globe size={18} className="text-[#1c1d1f]" />
          </button>
        </div>

        {/* Mobile search */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center border border-[#1c1d1f] rounded-full bg-[#f7f9fa] h-10 px-3">
            <Search size={18} className="text-[#6a6f73] flex-shrink-0" />
            <input
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-sm ml-2"
            />
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-white w-[280px] h-full overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#6a6f73] text-sm">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="space-y-1">
              <a
                href="#"
                className="block py-2 text-[#5624d0] font-bold text-sm"
              >
                Log in
              </a>
              <a
                href="#"
                className="block py-2 text-[#5624d0] font-bold text-sm"
              >
                Sign up
              </a>
            </div>
            <hr className="my-4 border-[#d1d7dc]" />
            <div className="text-xs font-bold text-[#6a6f73] mb-3 uppercase tracking-wider">
              Categories
            </div>
            {navCategories.map((cat, idx) => (
              <a
                key={idx}
                href="#"
                className="block py-2 text-sm text-[#1c1d1f] hover:text-[#5624d0]"
              >
                {cat.name}
              </a>
            ))}
            <hr className="my-4 border-[#d1d7dc]" />
            <a href="#" className="block py-2 text-sm text-[#1c1d1f]">
              Astrovastu Business
            </a>
            <a href="#" className="block py-2 text-sm text-[#1c1d1f]">
              Teach on Astrovastu Gurukull
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
