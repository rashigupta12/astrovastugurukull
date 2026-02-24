import React from 'react';
import { ChevronRight } from 'lucide-react';
import { certifications } from '../data/mockData';

const CertificationSection = () => {
  return (
    <section className="py-12 max-w-[1340px] mx-auto px-6">
      <h2 className="font-serif text-2xl md:text-[1.75rem] font-bold text-[#1c1d1f] mb-2">
        Get certified and get ahead in your career
      </h2>
      <p className="text-[#6a6f73] text-base mb-6">
        Prep for certifications with comprehensive courses, practice tests, and special offers on exam vouchers.
      </p>

      <a
        href="#"
        className="inline-flex items-center text-sm font-bold text-[#5624d0] hover:text-[#401b9c] underline underline-offset-4 mb-6"
      >
        Explore certifications and vouchers <ChevronRight size={16} className="ml-1" />
      </a>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="border border-[#d1d7dc] p-4 cursor-pointer hover:bg-[#f7f9fa] transition-colors duration-200 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-[#1c1d1f] text-base group-hover:text-[#5624d0] transition-colors duration-150">
                  {cert.name}
                </h3>
                <p className="text-[#6a6f73] text-sm mt-0.5">{cert.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationSection;
