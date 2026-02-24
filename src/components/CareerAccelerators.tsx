import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { careerPaths } from '../data/mockData';

const CareerAccelerators = () => {
  const formatReviews = (num: number) => {
    if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K`;
    return num.toString();
  };

  return (
    <section className="py-12 bg-[#f7f9fa]">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-2">
          Ready to reimagine your career?
        </h2>
        <p className="text-[#6a6f73] text-base mb-6">
          Get the skills and real-world experience employers want with Career Accelerators.
        </p>

        <h3 className="text-lg font-bold text-[#1c1d1f] mb-6">Explore more in-demand careers</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {careerPaths.map((career) => (
            <div
              key={career.id}
              className="bg-white border border-[#d1d7dc] overflow-hidden cursor-pointer hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="h-[160px] overflow-hidden">
                <img
                  src={career.image}
                  alt={career.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#1c1d1f] text-base mb-1 group-hover:text-[#5624d0] transition-colors duration-150">
                  {career.title}
                </h4>
                <p className="text-xs text-[#6a6f73] mb-2">
                  {career.salary} &bull; {career.roles}
                </p>
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-[#e59819] text-[#e59819]" />
                  <span className="text-sm font-bold text-[#b4690e]">{career.rating}</span>
                  <span className="text-xs text-[#6a6f73]">({formatReviews(career.reviews)} ratings)</span>
                  <span className="text-xs text-[#6a6f73] ml-auto">{career.hours} total hours</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center text-sm font-bold text-[#5624d0] hover:text-[#401b9c] underline underline-offset-4"
          >
            All Career Accelerators <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareerAccelerators;
