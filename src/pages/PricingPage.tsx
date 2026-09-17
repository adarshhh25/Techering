import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { CheckCircle2, Shield, Zap, Users } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

export const PricingPage: React.FC = () => {
  const { onOpenWhatsApp } = useOutletContext<any>();
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const getServicePrice = (id: string) => {
    const prices: Record<string, string> = {
      'seo': '₹80,000 / mo',
      'social': '₹1,20,000 / mo',
      'ads': '₹1,50,000 / mo',
      'creative': '₹2,00,000 / mo',
      'web': '₹3,50,000 / project',
      'funnels': '₹1,80,000 / mo'
    };
    return prices[id] || '₹1,00,000 / mo';
  };

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 animate-in fade-in duration-300">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
              TRANSPARENT VALUE ENGINE
            </span>
            <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7] mb-4">
              Structured Growth Partnerships.
            </h1>
            <p className="text-base text-[#A9A3B2]">
              No hidden retainers. Predictable scope, elite velocity, and radical focus on verifiable unit economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => {
              const isSelected = selectedServiceId === service.id;
              
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`cursor-pointer rounded-2xl border p-8 flex flex-col justify-between relative transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#15101C] border-[#A855F7] shadow-[0_0_40px_rgba(124,58,237,0.4)] scale-[1.02]'
                      : 'bg-[#0D0912] border-[#A855F7]/20 hover:border-[#A855F7]/40'
                  }`}
                >
                  <div>
                    <div className="mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-1">
                        {service.tag}
                      </span>
                      <h2 className="font-display font-semibold text-2xl text-white mb-2">
                        {service.title}
                      </h2>
                      <div className="font-display font-bold text-3xl sm:text-4xl text-[#D2BBFF] mb-3">
                        {getServicePrice(service.id)}
                      </div>
                      <p className="text-xs sm:text-sm text-[#A9A3B2] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-6 border-t border-[#A855F7]/15 space-y-3 mb-8">
                      <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-1">
                        WHAT IS INCLUDED:
                      </span>
                      {service.features?.map((f, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8E0E8]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A855F7] shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenWhatsApp(service.id);
                    }}
                    className={`w-full py-3 rounded-lg font-display text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer mt-4 ${
                      isSelected
                        ? 'bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                        : 'bg-[#1E152D] hover:bg-[#2A1D40] text-[#D2BBFF] border border-[#A855F7]/30'
                    }`}
                  >
                    Inquire Now
                  </button>
                </div>
              );
            })}
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
      </div>
    </div>
  );
};
