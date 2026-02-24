'use client'
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 max-w-[1340px] mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-8">
        Join others transforming their lives through learning
      </h2>

      <div className="relative">
        <div className="bg-white border border-[#d1d7dc] p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              {/* Quote icon */}
              <div className="mb-4">
                <svg width="18" height="14" viewBox="0 0 18 14" className="text-[#1c1d1f]">
                  <path d="M0 14V7.82C0 3.28 2.92.46 7.18 0l.66 1.64C4.56 2.3 3.18 4.54 3.06 7H7v7H0zm10.18 0V7.82C10.18 3.28 13.1.46 17.36 0L18 1.64c-3.28.66-4.66 2.9-4.78 5.36H17.2v7h-7.02z" fill="currentColor" />
                </svg>
              </div>

              <p className="text-[#1c1d1f] text-base md:text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>

              {testimonial.name && (
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-[#1c1d1f] text-sm">{testimonial.name}</p>
                    <p className="text-[#6a6f73] text-xs">{testimonial.title}</p>
                  </div>
                </div>
              )}

              {testimonial.logo && (
                <div className="mb-4">
                  <img
                    src={testimonial.logo}
                    alt="Source"
                    className="h-6 object-contain"
                  />
                  {testimonial.source && (
                    <p className="text-xs text-[#6a6f73] mt-1">{testimonial.source}</p>
                  )}
                </div>
              )}

              <a
                href={testimonial.ctaLink}
                className="text-sm font-bold text-[#5624d0] hover:text-[#401b9c] underline underline-offset-4"
              >
                {testimonial.ctaText}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="bg-[#1c1d1f] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-colors duration-150"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-1.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-[#1c1d1f]' : 'bg-[#d1d7dc]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="bg-[#1c1d1f] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-colors duration-150"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
