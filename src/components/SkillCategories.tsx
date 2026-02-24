'use client'
import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { skillTabs, skillCourses } from '../data/mockData';
import CourseCard from './CourseCard';

const SkillCategories = () => {
  const [activeTab, setActiveTab] = useState('generative-ai');
  const scrollRef = useRef<HTMLDivElement>(null);

  const courses = skillCourses[activeTab as keyof typeof skillCourses] || [];

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      const amount = direction === 'left' ? -500 : 500;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 max-w-[1340px] mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-1">
        Learn <em className="italic">essential</em> career and <strong>life</strong> skills
      </h2>
      <p className="text-[#6a6f73] text-base mb-6">
        Astrovastu Gurukull helps you build in-demand skills fast and advance your career in a changing job market
      </p>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-[#d1d7dc]">
        {skillTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-bold whitespace-nowrap transition-all duration-200 relative ${
              activeTab === tab.id
                ? 'text-[#1c1d1f] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1c1d1f]'
                : 'text-[#6a6f73] hover:text-[#1c1d1f]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Explore link */}
      <div className="mb-4">
        <a href="#" className="text-sm font-bold text-[#5624d0] hover:text-[#401b9c] underline underline-offset-4">
          Explore {skillTabs.find(t => t.id === activeTab)?.label}
        </a>
      </div>

      {/* Course carousel */}
      <div className="relative group/carousel">
        <button
          onClick={() => scroll('left')}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 bg-[#1c1d1f] text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-[#3e4143] transition-all duration-150 opacity-0 group-hover/carousel:opacity-100 shadow-lg"
        >
          <ChevronLeft size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
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

export default SkillCategories;
