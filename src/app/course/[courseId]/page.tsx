'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import {
  Star, Clock, BarChart3, Globe, Award, ChevronDown, ChevronUp,
  Play, FileText, Download, Smartphone, Trophy, Check, Heart,
  Share2, Gift, AlertCircle, Users, BookOpen, ChevronRight, ThumbsUp
} from 'lucide-react';
import { getOrGenerateCourseDetail } from '@/data/courseDetailData';
import { skillCourses } from '@/data/mockData';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Types
interface Lecture {
  title: string;
  duration: string;
  preview?: boolean;
}

interface Section {
  title: string;
  lectures: Lecture[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
}

interface CourseDetail {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  instructor: string;
  instructorTitle: string;
  instructorImage: string;
  instructorRating: number;
  instructorReviews: number;
  instructorStudents: number;
  instructorCourses: number;
  instructorBio: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  originalPrice: number;
  hours: number;
  lectures: number;
  articles: number;
  downloadableResources: number;
  language: string;
  level: string;
  certificate: boolean;
  lastUpdated: string;
  bestseller: boolean;
  image: string;
  whatYouWillLearn: string[];
  requirements: string[];
  whoIsThisFor: string[];
  curriculum: Section[];
  reviewsList: Review[];
  relatedTopics: string[];
}

const CoursePage = () => {
  const params = useParams();
  const courseId = params?.courseId as string;
  const [course, setCourse] = useState<CourseDetail | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({0: true});
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!courseId) return;
    
    const id = parseInt(courseId);
    // Find the basic course from all categories
    let basicCourse = null;
    for (const category of Object.values(skillCourses)) {
      const found = category.find((c: any) => c.id === id);
      if (found) { basicCourse = found; break; }
    }
    const detail = getOrGenerateCourseDetail(id, basicCourse);
    setCourse(detail);
    window.scrollTo(0, 0);
  }, [courseId]);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setIsSticky(heroBottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (idx: number) => {
    setExpandedSections(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const formatNumber = (num: number | undefined): string => {
    if (!num) return '0';
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(num >= 10000 ? 0 : 1)}K`;
    return num?.toString();
  };

  const renderStars = (rating: number, size: number = 14) => {
    const stars = [];
    const full = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.3;
    for (let i = 0; i < 5; i++) {
      if (i < full) stars.push(<Star key={i} size={size} className="fill-[#e59819] text-[#e59819]" />);
      else if (i === full && hasHalf) stars.push(
        <div key={i} className="relative inline-block">
          <Star size={size} className="text-[#e59819]" />
          <div className="absolute inset-0 overflow-hidden" style={{ width: '50%' }}><Star size={size} className="fill-[#e59819] text-[#e59819]" /></div>
        </div>
      );
      else stars.push(<Star key={i} size={size} className="text-[#6a6f73]" />);
    }
    return stars;
  };

  if (!course) return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="flex items-center justify-center h-96">
        <p className="text-[#6a6f73] text-lg">Loading course...</p>
      </div>
      <Footer />
    </div>
  );

  const totalLectures = course.curriculum?.reduce((sum, s) => sum + s.lectures.length, 0) || course.lectures;
  const totalSections = course.curriculum?.length || 6;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Sticky mini-nav for sidebar on scroll */}
      {isSticky && (
        <div className="fixed top-0 left-0 right-0 bg-[#1c1d1f] text-white z-40 shadow-lg">
          <div className="max-w-[1340px] mx-auto px-6 py-3 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm line-clamp-1">{course.title}</h3>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[#e59819] font-bold text-xs">{course.rating}</span>
                <div className="flex gap-px">{renderStars(course.rating, 10)}</div>
                <span className="text-[#c0c4fc] text-xs">({formatNumber(course.reviews)} ratings)</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero / Dark Header Section */}
      <div ref={heroRef} className="bg-[#1c1d1f] text-white">
        <div className="max-w-[1340px] mx-auto px-6 py-8 relative">
          <div className="max-w-[680px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link href="/" className="text-[#c0c4fc] hover:text-white">Home</Link>
              <ChevronRight size={14} className="text-[#6a6f73]" />
              <span className="text-[#c0c4fc] hover:text-white cursor-pointer">Courses</span>
              <ChevronRight size={14} className="text-[#6a6f73]" />
              <span className="text-[#c0c4fc]">{course.relatedTopics?.[0]}</span>
            </div>

            <h1 className="text-[2rem] font-bold leading-tight mb-4">
              {course.title}
            </h1>
            <p className="text-lg text-[#d1d7dc] leading-relaxed mb-4">
              {course.subtitle}
            </p>

            {/* Rating row */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {course.bestseller && (
                <span className="bg-[#eceb98] text-[#3d3c0a] text-xs font-bold px-2 py-0.5">Bestseller</span>
              )}
              <span className="text-[#e59819] font-bold">{course.rating}</span>
              <div className="flex gap-px">{renderStars(course.rating)}</div>
              <a href="#reviews" className="text-[#c0c4fc] text-sm underline underline-offset-4 hover:text-white">
                ({formatNumber(course.reviews)} ratings)
              </a>
              <span className="text-sm text-[#d1d7dc]">{formatNumber(course.students)} students</span>
            </div>

            <p className="text-sm mb-2">
              Created by <a href="#instructor" className="text-[#c0c4fc] underline underline-offset-4 hover:text-white">{course.instructor}</a>
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#d1d7dc]">
              <span className="flex items-center gap-1"><AlertCircle size={14} /> Last updated {course.lastUpdated}</span>
              <span className="flex items-center gap-1"><Globe size={14} /> {course.language}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="max-w-[1340px] mx-auto px-6 py-8 relative">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left content */}
          <div className="flex-1 max-w-[720px]">

            {/* What you'll learn */}
            <div className="border border-[#d1d7dc] p-6 mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">What you'll learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn?.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <Check size={18} className="text-[#1c1d1f] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[#1c1d1f]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Related topics */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Explore related topics</h2>
              <div className="flex flex-wrap gap-2">
                {course.relatedTopics?.map((topic, idx) => (
                  <span key={idx} className="bg-[#f7f9fa] border border-[#d1d7dc] text-sm text-[#5624d0] font-bold px-3 py-1.5 cursor-pointer hover:bg-[#e8e9eb] transition-colors duration-150">
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Course content / Curriculum */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-2">Course content</h2>
              <div className="flex items-center gap-2 text-sm text-[#6a6f73] mb-4">
                <span>{totalSections} sections</span>
                <span>&bull;</span>
                <span>{totalLectures} lectures</span>
                <span>&bull;</span>
                <span>{course.hours}h total length</span>
              </div>
              <button
                onClick={() => {
                  const allExpanded = Object.keys(expandedSections).length === totalSections;
                  if (allExpanded) setExpandedSections({0: true});
                  else {
                    const all: Record<number, boolean> = {};
                    course.curriculum?.forEach((_, i) => { all[i] = true; });
                    setExpandedSections(all);
                  }
                }}
                className="text-sm font-bold text-[#5624d0] hover:text-[#401b9c] mb-3"
              >
                {Object.keys(expandedSections).length === totalSections ? 'Collapse all sections' : 'Expand all sections'}
              </button>

              <div className="border border-[#d1d7dc]">
                {course.curriculum?.map((section, idx) => (
                  <div key={idx} className="border-b border-[#d1d7dc] last:border-b-0">
                    <button
                      onClick={() => toggleSection(idx)}
                      className="w-full flex items-center justify-between px-4 py-3 bg-[#f7f9fa] hover:bg-[#e8e9eb] transition-colors duration-150"
                    >
                      <div className="flex items-center gap-3">
                        {expandedSections[idx] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        <span className="font-bold text-sm text-[#1c1d1f]">{section.title}</span>
                      </div>
                      <span className="text-xs text-[#6a6f73]">{section.lectures.length} lectures</span>
                    </button>
                    {expandedSections[idx] && (
                      <div>
                        {section.lectures.map((lecture, lIdx) => (
                          <div key={lIdx} className="flex items-center justify-between px-4 py-2.5 border-t border-[#e8e9eb] hover:bg-[#f7f9fa]">
                            <div className="flex items-center gap-3">
                              <Play size={14} className="text-[#6a6f73]" />
                              <span className="text-sm text-[#1c1d1f]">{lecture.title}</span>
                              {lecture.preview && (
                                <span className="text-xs text-[#5624d0] font-bold underline underline-offset-2 cursor-pointer">Preview</span>
                              )}
                            </div>
                            <span className="text-xs text-[#6a6f73]">{lecture.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Requirements</h2>
              <ul className="list-disc list-inside space-y-1">
                {course.requirements?.map((req, idx) => (
                  <li key={idx} className="text-sm text-[#1c1d1f]">{req}</li>
                ))}
              </ul>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Description</h2>
              <div className={`text-sm text-[#1c1d1f] leading-relaxed ${!showFullDescription ? 'max-h-[200px] overflow-hidden relative' : ''}`}>
                {course.description?.split('\n').map((p, idx) => (
                  <p key={idx} className="mb-3">{p}</p>
                ))}
                {!showFullDescription && (
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
                )}
              </div>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-sm font-bold text-[#5624d0] hover:text-[#401b9c] mt-2"
              >
                {showFullDescription ? 'Show less' : 'Show more'}
              </button>
            </div>

            {/* Who is this for */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Who this course is for:</h2>
              <ul className="list-disc list-inside space-y-1">
                {course.whoIsThisFor?.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#1c1d1f]">{item}</li>
                ))}
              </ul>
            </div>

            {/* Instructor section */}
            <div id="instructor" className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-4">Instructor</h2>
              <a href="#" className="text-lg font-bold text-[#5624d0] hover:text-[#401b9c] underline underline-offset-4 block mb-3">
                {course.instructor}
              </a>
              <p className="text-sm text-[#6a6f73] mb-4">{course.instructorTitle}</p>
              <div className="flex items-start gap-5 mb-4">
                <div className="relative w-28 h-28">
                  <Image
                    src={course.instructorImage}
                    alt={course.instructor}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="space-y-1.5">
                  <p className="flex items-center gap-2 text-sm"><Star size={14} className="text-[#1c1d1f]" /> {course.instructorRating} Instructor Rating</p>
                  <p className="flex items-center gap-2 text-sm"><Award size={14} className="text-[#1c1d1f]" /> {formatNumber(course.instructorReviews)} Reviews</p>
                  <p className="flex items-center gap-2 text-sm"><Users size={14} className="text-[#1c1d1f]" /> {formatNumber(course.instructorStudents)} Students</p>
                  <p className="flex items-center gap-2 text-sm"><Play size={14} className="text-[#1c1d1f]" /> {course.instructorCourses} Courses</p>
                </div>
              </div>
              <p className="text-sm text-[#1c1d1f] leading-relaxed">{course.instructorBio}</p>
            </div>

            {/* Reviews section */}
            <div id="reviews" className="mb-8">
              <h2 className="text-xl font-bold text-[#1c1d1f] mb-6">
                <span className="flex items-center gap-2">
                  <Star size={20} className="fill-[#e59819] text-[#e59819]" />
                  {course.rating} course rating &bull; {formatNumber(course.reviews)} ratings
                </span>
              </h2>
              <div className="space-y-6">
                {course.reviewsList?.map((review) => (
                  <div key={review.id} className="border-t border-[#d1d7dc] pt-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-[#1c1d1f] flex items-center justify-center text-white font-bold text-sm">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-[#1c1d1f]">{review.name}</p>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-px">{renderStars(review.rating, 12)}</div>
                          <span className="text-xs text-[#6a6f73]">{review.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[#1c1d1f] leading-relaxed mb-3">{review.comment}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-[#6a6f73]">Was this review helpful?</span>
                      <button className="flex items-center gap-1 text-xs text-[#6a6f73] hover:text-[#1c1d1f]">
                        <ThumbsUp size={14} /> {review.helpful}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-6 border border-[#1c1d1f] text-[#1c1d1f] font-bold text-sm px-4 py-2.5 hover:bg-[#f5f5f5] transition-colors duration-150">
                See more reviews
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-[340px] flex-shrink-0" ref={sidebarRef}>
            <div className="lg:sticky lg:top-20">
              <div className="border border-[#d1d7dc] shadow-md bg-white">
                {/* Course image */}
                <div className="relative group cursor-pointer">
                  <div className="relative w-full h-[190px]">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                      <Play size={28} className="text-[#1c1d1f] ml-1" />
                    </div>
                  </div>
                  <p className="absolute bottom-2 left-0 right-0 text-center text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">Preview this course</p>
                </div>

                <div className="p-6">
                  {/* Price */}
                  <div className="flex items-center gap-2 mb-1">
                    {course.price === 0 ? (
                      <span className="text-3xl font-bold text-[#1c1d1f]">Free</span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-[#1c1d1f]">${course.price}</span>
                        {course.originalPrice > course.price && (
                          <span className="text-base text-[#6a6f73] line-through">${course.originalPrice}</span>
                        )}
                      </>
                    )}
                    {course.originalPrice > course.price && course.price > 0 && (
                      <span className="text-base text-[#1c1d1f]">{Math.round((1 - course.price / course.originalPrice) * 100)}% off</span>
                    )}
                  </div>
                  {course.price > 0 && (
                    <p className="text-xs text-red-600 font-bold mb-4 flex items-center gap-1">
                      <Clock size={12} /> <span>2 days</span> left at this price!
                    </p>
                  )}

                  {/* CTA buttons */}
                  <button className="w-full bg-[#a435f0] text-white font-bold text-base py-3 mb-2 hover:bg-[#8710d8] transition-colors duration-200">
                    Add to cart
                  </button>
                  <button className="w-full border border-[#1c1d1f] text-[#1c1d1f] font-bold text-base py-3 mb-3 hover:bg-[#f5f5f5] transition-colors duration-200">
                    Buy now
                  </button>
                  <p className="text-center text-xs text-[#6a6f73] mb-4">30-Day Money-Back Guarantee</p>
                  <p className="text-center text-xs text-[#6a6f73] mb-4">Full Lifetime Access</p>

                  {/* Course includes */}
                  <h3 className="font-bold text-sm text-[#1c1d1f] mb-3">This course includes:</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-3 text-sm text-[#1c1d1f]">
                      <Play size={16} className="text-[#6a6f73] flex-shrink-0" />
                      <span>{course.hours} hours on-demand video</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1c1d1f]">
                      <FileText size={16} className="text-[#6a6f73] flex-shrink-0" />
                      <span>{course.articles} articles</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1c1d1f]">
                      <Download size={16} className="text-[#6a6f73] flex-shrink-0" />
                      <span>{course.downloadableResources} downloadable resources</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#1c1d1f]">
                      <Smartphone size={16} className="text-[#6a6f73] flex-shrink-0" />
                      <span>Access on mobile and TV</span>
                    </div>
                    {course.certificate && (
                      <div className="flex items-center gap-3 text-sm text-[#1c1d1f]">
                        <Trophy size={16} className="text-[#6a6f73] flex-shrink-0" />
                        <span>Certificate of completion</span>
                      </div>
                    )}
                  </div>

                  {/* Action links */}
                  <div className="flex items-center justify-center gap-4 pt-3 border-t border-[#d1d7dc]">
                    <button className="text-sm font-bold text-[#1c1d1f] underline underline-offset-4 hover:text-[#5624d0] flex items-center gap-1">
                      <Share2 size={14} /> Share
                    </button>
                    <button className="text-sm font-bold text-[#1c1d1f] underline underline-offset-4 hover:text-[#5624d0] flex items-center gap-1">
                      <Gift size={14} /> Gift this course
                    </button>
                  </div>
                </div>
              </div>

              {/* Training team section */}
              <div className="border border-[#d1d7dc] p-5 mt-4">
                <h3 className="font-bold text-base text-[#1c1d1f] mb-2">Training 5 or more people?</h3>
                <p className="text-sm text-[#6a6f73] mb-3">Get your team access to top Astrovastu Gurukull courses anytime, anywhere.</p>
                <button className="w-full border border-[#1c1d1f] text-[#1c1d1f] font-bold text-sm py-2.5 hover:bg-[#f5f5f5] transition-colors duration-200">
                  Try Astrovastu Business
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursePage;