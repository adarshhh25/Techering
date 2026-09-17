import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

export const ServicesPage: React.FC = () => {
  const { onOpenWhatsApp, onSelectService } = useOutletContext<any>();

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 animate-in fade-in duration-300">
          <div>
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
              FULL-FUNNEL CAPABILITY MATRIX
            </span>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7] mb-6">
              Engineered for Enterprise Conversion.
            </h1>
            <p className="text-base sm:text-lg text-[#A9A3B2] max-w-2xl">
              We combine architectural rigor with high-taste creative production. Explore each specialized growth pillar and its verified enterprise deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="rounded-xl border border-[#A855F7]/20 bg-[#15101C] p-7 flex flex-col justify-between hover:border-[#A855F7]/50 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#A9A3B2] tracking-widest">
                      {srv.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[#D2BBFF] bg-[#070509] border border-[#A855F7]/30">
                      {srv.tag}
                    </span>
                  </div>

                  <h2 className="font-display font-semibold text-xl text-[#F5F3F7] mb-3 group-hover:text-[#D2BBFF] transition-colors">
                    {srv.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-[#A9A3B2] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#A855F7]/10">
                    <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block">
                      CORE CAPABILITIES
                    </span>
                    {srv.features?.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#E8E0E8]">
                        <CheckCircle2 className="w-3 h-3 text-[#A855F7] shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#A855F7]/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-[#A9A3B2] uppercase block">BENCHMARK</span>
                    <span className="font-display font-bold text-xs text-white">{srv.impactMetric}</span>
                  </div>
                  <button
                    onClick={() => onOpenWhatsApp(srv.id)}
                    className="text-xs text-[#D2BBFF] hover:text-white font-mono flex items-center gap-1 cursor-pointer"
                  >
                    <span>Deploy Pillar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-[#A855F7]/25 bg-[#0D0912] p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-semibold text-2xl text-white">Need a Multi-Pillar Growth Squad?</h3>
              <p className="text-sm text-[#A9A3B2] mt-1">Our Dedicated Growth Pods combine media buying, motion creative, and web engineering.</p>
            </div>
            <button
              onClick={() => onOpenWhatsApp()}
              className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-3 rounded-lg font-display text-sm font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Inquire for Retainer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
