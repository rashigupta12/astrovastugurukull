'use client'
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroBanners } from '../data/mockData';

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroBanners.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroBanners.length) % heroBanners.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const handleManualNav = (direction: string) => {
    setIsAutoPlaying(false);
    if (direction === 'next') nextSlide();
    else prevSlide();
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative bg-[#f7f9fa] overflow-hidden">
      <div className="relative h-[400px] md:h-[400px]">
        {heroBanners.map((banner, idx) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background image for larger screens */}
           {/* Background image for larger screens */}
<div className="hidden md:block absolute right-0 top-0 h-full w-full">
  <img
    src={banner.image}
    alt={banner.title}
    className="w-full h-full object-cover"
    onError={(e) => { 
      (e.target as HTMLImageElement).style.display = 'none'; 
    }}
  />
</div>

            {/* Content card */}
            <div className="relative z-20 max-w-[1340px] mx-auto px-6 h-full flex items-center">
              <div className="bg-white shadow-lg p-8 max-w-[440px] md:my-8">
                <h1 className="font-serif text-3xl md:text-[2rem] font-bold text-[#1c1d1f] leading-tight mb-3">
                  {banner.title}
                </h1>
                <p className="text-[#1c1d1f] text-base leading-relaxed">
                  {banner.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => handleManualNav('prev')}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-[#1c1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-colors duration-150 shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => handleManualNav('next')}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-[#1c1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-colors duration-150 shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {heroBanners.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide ? 'bg-[#1c1d1f] scale-110' : 'bg-[#d1d7dc]'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
