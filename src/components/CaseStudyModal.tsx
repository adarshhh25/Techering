import React from 'react';
import { X, ArrowUpRight, CheckCircle2, Quote } from 'lucide-react';
import { CaseStudy } from '../types';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenWhatsApp: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onOpenWhatsApp
}) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-[#A855F7]/30 bg-[#0D0912] shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_50px_rgba(124,58,237,0.15)] text-[#F5F3F7] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#A855F7]/20 bg-[#0D0912]/90 backdrop-blur-md sticky top-0 z-20">
          <div>
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#A855F7] uppercase block">
              CASE STUDY 0{caseStudy.number} • {caseStudy.categoryTag}
            </span>
            <h2 className="font-display font-semibold text-xl sm:text-2xl text-[#F5F3F7]">
              {caseStudy.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-[#A855F7]/25 text-[#A9A3B2] hover:text-[#F5F3F7] hover:bg-[#15101C] transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Main Visual Display */}
          <div className="rounded-xl overflow-hidden border border-[#A855F7]/25 aspect-[16/9] w-full relative bg-black">
            <img
              src={caseStudy.imageUrl}
              alt={caseStudy.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0912] via-transparent to-transparent" />
            
            {/* Overlay Metrics */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-4 sm:gap-6 bg-black/75 backdrop-blur-md p-4 rounded-lg border border-white/10">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="mr-4">
                  <span className="font-display font-bold text-2xl sm:text-3xl text-white block">
                    {m.value}
                  </span>
                  <span className="text-[10px] font-mono tracking-wider text-[#D2BBFF] uppercase block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-mono text-[#D2BBFF] bg-[#15101C] border border-[#A855F7]/25"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Editorial Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#A855F7]/15">
            <div className="bg-[#15101C] p-5 rounded-xl border border-[#A855F7]/15">
              <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-2">
                THE CHALLENGE
              </span>
              <p className="text-xs sm:text-sm text-[#A9A3B2] leading-relaxed">
                {caseStudy.deepDive?.challenge || caseStudy.description}
              </p>
            </div>

            <div className="bg-[#15101C] p-5 rounded-xl border border-[#A855F7]/15">
              <span className="text-[10px] font-mono tracking-widest text-[#D2BBFF] uppercase block mb-2">
                THE ARCHITECTURE & SOLUTION
              </span>
              <p className="text-xs sm:text-sm text-[#E8E0E8] leading-relaxed">
                {caseStudy.deepDive?.solution || 'Deployed custom creative hooks, full-funnel media architecture, and rapid testing cadence.'}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          {caseStudy.deepDive?.deliverables && (
            <div className="bg-[#15101C]/60 p-5 rounded-xl border border-[#A855F7]/20">
              <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-3">
                DEPLOYED DELIVERABLES & ASSETS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {caseStudy.deepDive.deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-[#F5F3F7]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0" />
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Client Quote */}
          {caseStudy.clientQuote && (
            <div className="p-6 rounded-xl border border-[#A855F7]/25 bg-gradient-to-br from-[#1E152D] to-[#15101C] relative">
              <Quote className="w-6 h-6 text-[#A855F7]/40 mb-2" />
              <p className="font-editorial italic text-base sm:text-lg text-[#F5F3F7] mb-4">
                "{caseStudy.clientQuote.text}"
              </p>
              <span className="font-display font-semibold text-xs sm:text-sm text-[#D2BBFF] block">
                {caseStudy.clientQuote.author} — {caseStudy.clientQuote.role}
              </span>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-6 border-t border-[#A855F7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-[#A9A3B2]">
              Ready to replicate these unit economics for your venture?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenWhatsApp();
              }}
              className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-lg font-display flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <span>Build Similar Growth Engine</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
