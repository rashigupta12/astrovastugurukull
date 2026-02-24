import React from 'react';
import Navbar from '../Navbar';
import HeroBanner from '../HeroBanner';
import SkillCategories from '../SkillCategories';
import TrustedCompanies from '../TrustedCompanies';
import Testimonials from '../Testimonials';
import CertificationSection from '../CertificationSection';
import CareerAccelerators from '../CareerAccelerators';
import TrendingCourses from '../TrendingCourses';
import PopularSkills from '../PopularSkills';
import Footer from '../Footer';
import BusinessPlans from '../BusinessPlans';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroBanner />
      <SkillCategories />
      <TrustedCompanies />
      <Testimonials />
      <CertificationSection />
      <CareerAccelerators />
      <TrendingCourses />
      <BusinessPlans />
      <PopularSkills />
      <Footer />
    </div>
  );
};

export default HomePage;
