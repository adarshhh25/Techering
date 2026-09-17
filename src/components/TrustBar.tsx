import React from 'react';
import { CLIENT_LOGOS } from '../data/agencyData';

interface TrustBarProps {
  onSelectBrand?: (brandName: string) => void;
}

export const TrustBar: React.FC<TrustBarProps> = ({ onSelectBrand }) => {
  return (
    <section className="py-10 sm:py-14 border-y border-[#A855F7]/12 bg-[#070509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Label */}
          <div className="shrink-0 text-center md:text-left">
            <span className="text-[11px] font-mono tracking-[0.22em] text-[#A9A3B2] uppercase">
              {/* TRUSTED BY AMBITIOUS BRANDS */}
              BUILT FOR AMBITIOUS BRANDS
            </span>
          </div>

          {/* Logo Strip */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 sm:gap-6 lg:gap-8">
            {CLIENT_LOGOS.map((brand) => (
              <div
                key={brand.name}
                onClick={() => onSelectBrand?.(brand.name)}
                className="group cursor-pointer flex flex-col items-center justify-center transition-all duration-200"
                title={`${brand.name} — ${brand.tag}`}
              >
                <span className="font-display font-bold text-lg sm:text-xl tracking-[0.28em] text-[#A9A3B2] group-hover:text-[#F5F3F7] group-hover:drop-shadow-[0_0_12px_rgba(210,187,255,0.4)] transition-all">
                  {brand.name}
                </span>
                <span className="text-[9px] font-mono text-[#7C3AED] opacity-0 group-hover:opacity-100 transition-opacity -mb-3 mt-0.5">
                  {brand.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
