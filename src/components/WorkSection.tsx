import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

interface WorkSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onViewAllWork: () => void;
}

export const WorkSection: React.FC<WorkSectionProps> = ({
  onSelectCaseStudy,
  onViewAllWork
}) => {
  return (
    <section id="selected-work" className="py-20 sm:py-28 bg-[#070509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#A855F7]/15">
          <div>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#A9A3B2] uppercase block mb-3">
              03 —— SELECTED WORK
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[54px] tracking-tight text-[#F5F3F7]">
              Work That Gets Noticed.
            </h2>
          </div>

          <button
            id="view-all-work-btn"
            onClick={onViewAllWork}
            className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-mono tracking-widest uppercase text-[#F5F3F7] hover:text-[#D2BBFF] transition-colors py-2 cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>VIEW ALL WORK</span>
            <ArrowUpRight className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Case Studies List */}
        <div className="space-y-20 sm:space-y-28 pt-12 sm:pt-16">
          
          {/* Project 01: NOVA FITNESS (Image on Left, Text on Right) */}
          <div
            id="case-study-nova-fitness"
            onClick={() => onSelectCaseStudy(CASE_STUDIES[0])}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Visual Showcase (55% width on desktop) */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[#A855F7]/20 bg-[#0D0912] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#A855F7]/50 transition-all duration-500">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                {/* Composite display matching reference */}
                <img
                  src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=1200&auto=format&fit=crop"
                  alt="Nova Fitness Creative & High-Ticket Campaign"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070509]/90 via-transparent to-transparent" />
                
                {/* Visual Pill Overlay */}
                <div className="absolute top-4 right-4 bg-[#0D0912]/80 border border-[#A855F7]/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#D2BBFF]">
                  Omnichannel Meta Sprints
                </div>

                {/* Micro Brand Hashtag inside artwork */}
                <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded border border-white/10 text-[11px] font-mono text-white/90">
                  #SipTheNight • High Conversion Suite
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[11px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-2">
                PROJECT 01 • {CASE_STUDIES[0].categoryTag}
              </span>
              <h3 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F3F7] group-hover:text-[#D2BBFF] transition-colors mb-4">
                {CASE_STUDIES[0].title}
              </h3>
              <p className="text-[#A9A3B2] text-sm sm:text-base leading-relaxed mb-6">
                {CASE_STUDIES[0].description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CASE_STUDIES[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-mono text-[#D2BBFF] bg-[#15101C] border border-[#A855F7]/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-[#A855F7]/15 grid grid-cols-2 gap-6">
                {CASE_STUDIES[0].metrics.map((m, i) => (
                  <div key={i}>
                    <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F3F7] block tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase mt-0.5 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project 02: KORA COUTURE (Reversed: Text on Left, Visual on Right) */}
          <div
            id="case-study-kora-couture"
            onClick={() => onSelectCaseStudy(CASE_STUDIES[1])}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Information Column (Order 2 on mobile, Order 1 on desktop) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
              <span className="text-[11px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-2">
                PROJECT 02 • {CASE_STUDIES[1].categoryTag}
              </span>
              <h3 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F3F7] group-hover:text-[#D2BBFF] transition-colors mb-4">
                {CASE_STUDIES[1].title}
              </h3>
              <p className="text-[#A9A3B2] text-sm sm:text-base leading-relaxed mb-6">
                {CASE_STUDIES[1].description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CASE_STUDIES[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-mono text-[#D2BBFF] bg-[#15101C] border border-[#A855F7]/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-[#A855F7]/15 grid grid-cols-2 gap-6">
                {CASE_STUDIES[1].metrics.map((m, i) => (
                  <div key={i}>
                    <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F3F7] block tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase mt-0.5 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Showcase (Order 1 on mobile, Order 2 on desktop) */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative rounded-xl overflow-hidden border border-[#A855F7]/20 bg-[#0D0912] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#A855F7]/50 transition-all duration-500">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1200&auto=format&fit=crop"
                  alt="Kora Couture Runway & Digital Experience Exhibition"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070509]/95 via-[#0D0912]/30 to-transparent" />
                
                {/* Multi-screen lightbox simulation */}
                <div className="absolute inset-0 flex items-center justify-center p-6 gap-3 sm:gap-4 pointer-events-none">
                  <div className="bg-[#070509]/90 border border-[#A855F7]/40 backdrop-blur-md px-3 sm:px-4 py-6 sm:py-8 rounded-lg text-center shadow-2xl flex-1 max-w-[150px]">
                    <span className="text-[9px] font-mono tracking-widest text-[#A855F7] uppercase block">NOIR EDITION</span>
                    <span className="font-display font-bold text-xs sm:text-sm text-white block mt-1">CAPSULE 01</span>
                  </div>
                  <div className="bg-[#070509]/95 border border-[#C084FC]/60 backdrop-blur-md px-3 sm:px-5 py-8 sm:py-10 rounded-lg text-center shadow-[0_0_30px_rgba(124,58,237,0.3)] flex-1 max-w-[190px]">
                    <span className="font-display font-bold text-xs sm:text-base tracking-widest text-white uppercase block">URBAN SHADOWS</span>
                    <span className="text-[9px] font-mono tracking-widest text-[#D2BBFF] uppercase block mt-1">A/W '24 COLLECTION</span>
                  </div>
                  <div className="bg-[#070509]/90 border border-[#A855F7]/40 backdrop-blur-md px-3 sm:px-4 py-6 sm:py-8 rounded-lg text-center shadow-2xl flex-1 max-w-[150px] hidden sm:block">
                    <span className="text-[9px] font-mono tracking-widest text-[#A855F7] uppercase block">CRAFTED IN DARKNESS</span>
                    <span className="font-display font-bold text-xs text-white block mt-1">D2C DROP</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#D2BBFF]">
                  STUDIO OMNI // RUNWAY
                </div>
              </div>
            </div>
          </div>

          {/* Project 03: ORBIT WORKSPACE (Image on Left, Text on Right) */}
          <div
            id="case-study-orbit-workspace"
            onClick={() => onSelectCaseStudy(CASE_STUDIES[2])}
            className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Visual Showcase */}
            <div className="lg:col-span-7 relative rounded-xl overflow-hidden border border-[#A855F7]/20 bg-[#0D0912] shadow-[0_20px_50px_rgba(0,0,0,0.8)] group-hover:border-[#A855F7]/50 transition-all duration-500">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
                  alt="Orbit Workspace Modern Tech Hub Architecture"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-85 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070509]/90 via-[#7C3AED]/10 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#070509]/60 via-transparent to-black/60 pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#0D0912]/90 border border-[#A855F7]/30 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#D2BBFF]">
                  Headless Booking Platform
                </div>

                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded border border-white/10 text-[11px] font-mono text-white/90">
                  FLAGSHIP HUBS: SF • LDN • BER
                </div>
              </div>
            </div>

            {/* Information Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[11px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-2">
                PROJECT 03 • {CASE_STUDIES[2].categoryTag}
              </span>
              <h3 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F3F7] group-hover:text-[#D2BBFF] transition-colors mb-4">
                {CASE_STUDIES[2].title}
              </h3>
              <p className="text-[#A9A3B2] text-sm sm:text-base leading-relaxed mb-6">
                {CASE_STUDIES[2].description}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {CASE_STUDIES[2].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-[11px] font-mono text-[#D2BBFF] bg-[#15101C] border border-[#A855F7]/25"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="pt-6 border-t border-[#A855F7]/15 grid grid-cols-2 gap-6">
                {CASE_STUDIES[2].metrics.map((m, i) => (
                  <div key={i}>
                    <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F3F7] block tracking-tight">
                      {m.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase mt-0.5 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
