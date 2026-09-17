import React from 'react';
import { PROCESS_PHASES } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  return (
    <section id="why-techering" className="py-20 sm:py-28 bg-[#070509] relative">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#7C3AED]/7 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#A9A3B2] uppercase block mb-3">
            02 —— WHY TECHERING
          </span>
          <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[54px] tracking-tight text-[#F5F3F7] mb-5">
            Strategy First. Creativity Always.
          </h2>
          <p className="text-base sm:text-lg text-[#A9A3B2] leading-relaxed">
            We dismantle standard marketing noise with an unbending framework built on data rigor and high-velocity cultural execution.
          </p>
        </div>

        {/* 4-Card Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PROCESS_PHASES.map((phase) => (
            <div
              key={phase.number}
              id={`process-card-${phase.number}`}
              className="group relative rounded-xl border border-[#A855F7]/16 bg-[#15101C] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#A855F7]/45 hover:shadow-[0_16px_40px_-12px_rgba(124,58,237,0.22)] hover:-translate-y-1"
            >
              <div>
                {/* Large Oversized Phase Number */}
                <span className="font-display font-bold text-4xl sm:text-5xl text-[#A9A3B2]/30 group-hover:text-[#D2BBFF]/40 transition-colors block mb-4">
                  {phase.number}
                </span>

                {/* Title */}
                <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#F5F3F7] mb-3 group-hover:text-[#D2BBFF] transition-colors">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#A9A3B2] leading-relaxed mb-8">
                  {phase.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="pt-4 border-t border-[#A855F7]/10">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#A855F7] uppercase block">
                  {phase.phaseName}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
