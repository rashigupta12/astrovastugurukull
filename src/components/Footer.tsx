import React from 'react';
import { Globe } from 'lucide-react';
import { footerLinks } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-[#2d2f31] text-white">
      {/* Top section - Teach on Udemy CTA */}
      <div className="border-b border-[#3e4143]">
        <div className="max-w-[1340px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-xl font-bold mb-3 md:mb-0">Top companies choose <a href="#" className="text-[#c0c4fc] underline hover:text-white">Astrovastu Business</a> to build in-demand career skills.</h3>
          <div className="flex items-center gap-6">
            <img src="https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg" alt="VW" className="h-8 brightness-0 invert opacity-60" />
            <img src="https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg" alt="Samsung" className="h-8 brightness-0 invert opacity-60" />
            <img src="https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg" alt="Cisco" className="h-8 brightness-0 invert opacity-60" />
            <img src="https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg" alt="Citi" className="h-8 brightness-0 invert opacity-60" />
          </div>
        </div>
      </div>

      {/* Links section */}
      <div className="max-w-[1340px] mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            {footerLinks.column1.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-sm text-[#cec0fc] hover:underline mb-2"
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {footerLinks.column2.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-sm text-[#cec0fc] hover:underline mb-2"
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            {footerLinks.column3.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="block text-sm text-[#cec0fc] hover:underline mb-2"
              >
                {link}
              </a>
            ))}
          </div>
          <div>
            <button className="flex items-center gap-2 border border-white px-3 py-2 text-sm hover:bg-[#3e4143] transition-colors duration-150">
              <Globe size={16} />
              <span>English</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#3e4143]">
        <div className="max-w-[1340px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between">
          <a href="/" className="mb-4 md:mb-0">
            <span className="text-[22px] font-extrabold tracking-tight text-white" style={{ fontFamily: "'DM Serif Display', Georgia, serif", letterSpacing: '-0.01em' }}>
              Astrovastu Gurukull
            </span>
          </a>
          <p className="text-sm text-[#6a6f73]">&copy; 2025 Astrovastu Gurukull, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
