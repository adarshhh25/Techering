import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';

export const WorkPage: React.FC = () => {

  const { setSelectedCaseStudy } = useOutletContext<any>();

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
                PORTFOLIO OF IMPACT
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7]">
                Selected Case Studies
              </h1>
            </div>


          </div>

          {/* Grid of Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="group rounded-xl border border-[#A855F7]/20 bg-[#0D0912] overflow-hidden hover:border-[#A855F7]/60 transition-all cursor-pointer shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-black">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0912] via-transparent to-transparent" />
                    <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono text-[#D2BBFF] border border-white/10">
                      {study.categoryTag}
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="font-display font-semibold text-2xl text-white group-hover:text-[#D2BBFF] transition-colors mb-2">
                      {study.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A9A3B2] line-clamp-3 mb-6">
                      {study.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-[#A855F7]/15">
                      {study.metrics.map((m, i) => (
                        <div key={i}>
                          <span className="font-display font-bold text-xl text-white block">{m.value}</span>
                          <span className="text-[10px] font-mono text-[#A9A3B2] uppercase block">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-[#A855F7] font-mono">
                  <span>Inspect Deep Dive</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
