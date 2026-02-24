import React from 'react';
import { trustedCompanies } from '../data/mockData';

const TrustedCompanies = () => {
  return (
    <section className="bg-[#f7f9fa] py-10">
      <div className="max-w-[1340px] mx-auto px-6">
        <h2 className="text-center text-[#6a6f73] text-lg font-normal mb-8">
          Trusted by over 17,000 companies and millions of learners around the world
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {trustedCompanies.map((company, idx) => (
            <div key={idx} className="flex-shrink-0">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-10 md:h-11 object-contain opacity-70 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
