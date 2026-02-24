'use client'
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { skillCourses } from '../data/mockData';
import CourseCard from './CourseCard';

const TrendingCourses = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Use a mix of courses from different categories for trending
  const trendingCourses = [
    skillCourses['web-development'][0],
    skillCourses['python'][0],
    skillCourses['generative-ai'][0],
    skillCourses['data-science'][0],
    skillCourses['aws-certification'][0],
    skillCourses['machine-learning'][0],
    skillCourses['java'][0],
    skillCourses['it-certifications'][0],
    skillCourses['web-development'][1],
    skillCourses['python'][1],
  ];

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 max-w-[1340px] mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-6">
        Trending courses
      </h2>

      <div className="relative group/carousel">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1c1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-all duration-150 opacity-0 group-hover/carousel:opacity-100 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {trendingCourses.map((course, idx) => (
            <CourseCard key={`trending-${idx}`} course={course} />
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-[#1c1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-all duration-150 opacity-0 group-hover/carousel:opacity-100 shadow-lg"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default TrendingCourses;
