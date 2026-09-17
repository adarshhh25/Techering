import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Shield, Zap, Globe, Users } from 'lucide-react';
import { SERVICES_DATA, CASE_STUDIES, PRICING_TIERS } from '../data/agencyData';
import { ScreenTab, CaseStudy, ServiceItem } from '../types';

interface ScreensViewProps {
  activeScreen: ScreenTab;
  onOpenWhatsApp: () => void;
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ScreensView: React.FC<ScreensViewProps> = ({
  activeScreen,
  onOpenWhatsApp,
  onSelectCaseStudy,
  onSelectService
}) => {
  const [workFilter, setWorkFilter] = useState<string>('ALL');

  if (activeScreen === 'landing') return null;

  return (
    <div className="pt-28 sm:pt-36 pb-24 bg-[#070509] min-h-screen text-[#F5F3F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================= SERVICES DEEP DIVE SCREEN ================= */}
        {activeScreen === 'services' && (
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
                      onClick={() => onSelectService(srv)}
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
                onClick={onOpenWhatsApp}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-7 py-3 rounded-lg font-display text-sm font-semibold whitespace-nowrap shadow-[0_0_20px_rgba(124,58,237,0.4)]"
              >
                Inquire for Retainer
              </button>
            </div>
          </div>
        )}

        {/* ================= WORK SHOWCASE SCREEN ================= */}
        {activeScreen === 'work' && (
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

              {/* Filters */}
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                {['ALL', 'FITNESS', 'LUXURY', 'TECH'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setWorkFilter(filter)}
                    className={`text-xs font-mono uppercase px-4 py-2 rounded-lg border transition-all cursor-pointer ${
                      workFilter === filter
                        ? 'bg-[#7C3AED] border-[#7C3AED] text-white font-semibold'
                        : 'bg-[#15101C] border-[#A855F7]/20 text-[#A9A3B2] hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Case Studies */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.filter((c) => {
                if (workFilter === 'ALL') return true;
                return c.categoryTag.toUpperCase().includes(workFilter);
              }).map((study) => (
                <div
                  key={study.id}
                  onClick={() => onSelectCaseStudy(study)}
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
        )}

        {/* ================= PRICING & TIERS SCREEN ================= */}
        {activeScreen === 'pricing' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
                TRANSPARENT VALUE ENGINE
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7] mb-4">
                Structured Growth Partnerships.
              </h1>
              <p className="text-base text-[#A9A3B2]">
                No hidden retainer retainers. Predictable scope, elite velocity, and radical focus on verifiable unit economics.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PRICING_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl border p-8 flex flex-col justify-between relative transition-all ${
                    tier.popular
                      ? 'bg-[#15101C] border-[#A855F7] shadow-[0_0_40px_rgba(124,58,237,0.25)]'
                      : 'bg-[#0D0912] border-[#A855F7]/20 hover:border-[#A855F7]/40'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-white text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-semibold">
                      {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-1">
                        {tier.duration}
                      </span>
                      <h2 className="font-display font-semibold text-2xl text-white mb-2">
                        {tier.name}
                      </h2>
                      <div className="font-display font-bold text-3xl sm:text-4xl text-[#D2BBFF] mb-3">
                        {tier.price}
                      </div>
                      <p className="text-xs sm:text-sm text-[#A9A3B2] leading-relaxed">
                        {tier.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#A855F7]/15 space-y-3 mb-8">
                      <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-1">
                        WHAT IS INCLUDED:
                      </span>
                      {tier.features.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8E0E8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenWhatsApp}
                    className={`w-full py-3 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      tier.popular
                        ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                        : 'bg-[#1E152D] hover:bg-[#2A1D40] text-[#D2BBFF] border border-[#A855F7]/30'
                    }`}
                  >
                    Select Model
                  </button>
                </div>
              ))}
            </div>

            {/* Guarantee / FAQ row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#A855F7]/15">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#A855F7] shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Zero Fluff Guarantee</h4>
                  <p className="text-xs text-[#A9A3B2] mt-1">If deliverables don't meet strict sprint SLAs, we issue prompt adjustments without debate.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#A855F7] shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Rapid 7-Day Kickoff</h4>
                  <p className="text-xs text-[#A9A3B2] mt-1">Onboarding takes 48 hours. Asset production commences inside week one.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="w-5 h-5 text-[#A855F7] shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-sm text-white">Dedicated Growth Pod</h4>
                  <p className="text-xs text-[#A9A3B2] mt-1">Direct Slack access to your designated media buyer, art director, and developer.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= ABOUT US & MANIFESTO SCREEN ================= */}
        {activeScreen === 'about' && (
          <div className="space-y-16 animate-in fade-in duration-300">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
                THE TECHERING MANIFESTO
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7] mb-6">
                Built for the Ambitious. Disgusted by Fluff.
              </h1>
              <p className="font-editorial italic text-xl sm:text-2xl text-[#D2BBFF] leading-relaxed mb-6">
                "Most agency retainers exist to burn media budgets on vanity metrics. We exist to build undeniable enterprise equity through taste and relentless data discipline."
              </p>
              <p className="text-sm sm:text-base text-[#A9A3B2] leading-relaxed">
                Founded by high-growth founders and senior creative directors, Techering bridges the gap between high-fashion editorial craftsmanship and cold-blooded Silicon Valley CAC optimization. We don't settle for lukewarm ad templates or generic copy; every touchpoint is crafted to command attention.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl border border-[#A855F7]/20 bg-[#15101C]">
                <Globe className="w-6 h-6 text-[#A855F7] mb-3" />
                <h3 className="font-display font-semibold text-lg text-white mb-2">Global Command</h3>
                <p className="text-xs text-[#A9A3B2] leading-relaxed">
                  Headquartered in San Francisco with creative production hubs in London and Tokyo, operating 24/7.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#A855F7]/20 bg-[#15101C]">
                <Zap className="w-6 h-6 text-[#A855F7] mb-3" />
                <h3 className="font-display font-semibold text-lg text-white mb-2">Velocity First</h3>
                <p className="text-xs text-[#A9A3B2] leading-relaxed">
                  We launch iterative creative experiments weekly, cutting underperforming hooks before budgets decay.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-[#A855F7]/20 bg-[#15101C]">
                <Sparkles className="w-6 h-6 text-[#A855F7] mb-3" />
                <h3 className="font-display font-semibold text-lg text-white mb-2">Culture & Taste</h3>
                <p className="text-xs text-[#A9A3B2] leading-relaxed">
                  High-converting doesn't mean ugly. We make brands impossible to ignore while upholding strict visual dignity.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-[#A855F7]/20 flex justify-center">
              <button
                onClick={onOpenWhatsApp}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-8 py-3.5 rounded-lg font-display text-sm font-semibold shadow-[0_0_25px_rgba(124,58,237,0.4)]"
              >
                Collaborate With Senior Partners
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
