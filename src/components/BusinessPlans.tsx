import React from 'react';
import { Check } from 'lucide-react';

const BusinessPlans = () => {
  const personalFeatures = [
    "Access to 13,000+ top courses",
    "Certification prep",
    "Goal-focused recommendations",
    "AI-powered coaching",
    "Analytics and adoption reports"
  ];

  const enterpriseFeatures = [
    "Access to 30,000+ top courses",
    "Certification prep",
    "Goal-focused recommendations",
    "AI-powered coaching",
    "Advanced analytics and insights",
    "Dedicated customer success team",
    "International course collection featuring 15 languages",
    "Customizable content",
    "Hands-on tech training with add-on",
    "Strategic implementation services with add-on"
  ];

  return (
    <section className="py-12 max-w-[1340px] mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-2">
        Grow your team &apos;s skills and your business
      </h2>
      <p className="text-[#6a6f73] text-base mb-8">
        Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Plan */}
        <div className="border border-[#d1d7dc] p-8 hover:shadow-md transition-shadow duration-200">
          <div className="mb-4">
            <span className="text-sm font-bold text-[#6a6f73] uppercase tracking-wider">Personal Plan</span>
          </div>
          <div className="mb-6">
            <span className="text-3xl font-bold text-[#1c1d1f]">$30.00</span>
            <span className="text-[#6a6f73] text-sm ml-1">a month per user</span>
          </div>
          <p className="text-xs text-[#6a6f73] mb-6">Billed annually. Cancel anytime.</p>
          
          <button className="w-full bg-[#a435f0] text-white font-bold text-sm py-3 px-4 mb-4 hover:bg-[#8710d8] transition-colors duration-200">
            Start free trial
          </button>

          <ul className="space-y-3">
            {personalFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={16} className="text-[#1c1d1f] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#1c1d1f]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enterprise Plan */}
        <div className="border border-[#d1d7dc] p-8 hover:shadow-md transition-shadow duration-200">
          <div className="mb-4">
            <span className="text-sm font-bold text-[#6a6f73] uppercase tracking-wider">Enterprise Plan</span>
          </div>
          <div className="mb-6">
            <span className="text-lg font-bold text-[#1c1d1f]">Contact sales for pricing</span>
          </div>
          <p className="text-xs text-[#6a6f73] mb-6">&nbsp;</p>
          
          <button className="w-full border-2 border-[#1c1d1f] text-[#1c1d1f] font-bold text-sm py-3 px-4 mb-4 hover:bg-[#f5f5f5] transition-colors duration-200">
            Request a demo
          </button>

          <ul className="space-y-3">
            {enterpriseFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check size={16} className="text-[#1c1d1f] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-[#1c1d1f]">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BusinessPlans;
