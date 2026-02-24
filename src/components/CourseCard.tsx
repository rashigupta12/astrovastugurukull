import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

interface Course {
  id: string | number;
  image: string;
  title: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  bestseller: boolean;
}

const CourseCard = ({ course }: { course: Course }) => {
  const formatReviews = (num: number) => {
    if (num >= 1000) return `(${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K)`;
    return `(${num})`;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3;
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} size={14} className="fill-[#e59819] text-[#e59819]" />);
      } else if (i === fullStars && hasHalf) {
        stars.push(
          <div key={i} className="relative">
            <Star size={14} className="text-[#d1d7dc]" />
            <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}>
              <Star size={14} className="fill-[#e59819] text-[#e59819]" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} size={14} className="text-[#d1d7dc]" />);
      }
    }
    return stars;
  };

  // Add missing Link import at the top if not already present
  return (
    <Link href={`/course/${course.id}`} className="group cursor-pointer flex-shrink-0 w-[240px] no-underline">
      {/* Thumbnail */}
      <div className="relative overflow-hidden border border-[#d1d7dc]">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-[135px] object-cover group-hover:opacity-90 transition-opacity duration-200"
        />
      </div>

      {/* Info */}
      <div className="mt-2">
        <h3 className="text-sm font-bold text-[#1c1d1f] leading-tight line-clamp-2 group-hover:text-[#5624d0] transition-colors duration-150">
          {course.title}
        </h3>
        <p className="text-xs text-[#6a6f73] mt-0.5 truncate">{course.instructor}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mt-0.5">
          <span className="text-sm font-bold text-[#b4690e]">{course.rating}</span>
          <div className="flex items-center gap-px">{renderStars(course.rating)}</div>
          <span className="text-xs text-[#6a6f73]">{formatReviews(course.reviews)}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-0.5">
          {course.price === 0 ? (
            <span className="text-base font-bold text-[#1c1d1f]">Free</span>
          ) : (
            <>
              <span className="text-base font-bold text-[#1c1d1f]">${course.price}</span>
              {course.originalPrice > course.price && (
                <span className="text-sm text-[#6a6f73] line-through">${course.originalPrice}</span>
              )}
            </>
          )}
        </div>

        {/* Bestseller badge */}
        {course.bestseller && (
          <span className="inline-block mt-1 px-2 py-0.5 bg-[#eceb98] text-[#3d3c0a] text-xs font-bold">
            Bestseller
          </span>
        )}
      </div>
    </Link>
  );
};

export default CourseCard;
