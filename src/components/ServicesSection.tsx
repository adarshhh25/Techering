import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
  onExploreAll?: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onExploreAll
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="what-we-do" className="py-20 sm:py-28 bg-[#070509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#A855F7]/15">
          <div>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#A9A3B2] uppercase block mb-3">
              01 —— WHAT WE DO
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[54px] tracking-tight text-[#F5F3F7]">
              Marketing Built Around Momentum.
            </h2>
          </div>

          <button
            id="explore-all-services-btn"
            onClick={onExploreAll}
            className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-mono tracking-widest uppercase text-[#F5F3F7] hover:text-[#D2BBFF] transition-colors py-2 cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>EXPLORE ALL SERVICES</span>
            <ArrowUpRight className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Services List Rows */}
        <div className="divide-y divide-[#A855F7]/12">
          {SERVICES_DATA.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                id={`service-row-${service.id}`}
                className={`group py-8 sm:py-10 transition-all duration-300 ${
                  isExpanded ? 'bg-[#15101C]/50 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-xl' : 'hover:bg-[#0D0912]/50'
                }`}
              >
                <div 
                  onClick={() => toggleExpand(service.id)}
                  className="cursor-pointer"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start md:items-center">
                    
                    {/* Number + Title */}
                    <div className="md:col-span-5 flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-[#A9A3B2] tracking-widest shrink-0">
                        {service.number}
                      </span>
                      <h3 className="font-display font-semibold text-xl sm:text-2xl text-[#F5F3F7] group-hover:text-[#D2BBFF] transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description Paragraph */}
                    <div className="md:col-span-5 pl-7 md:pl-0">
                      <p className="text-sm sm:text-[15px] text-[#A9A3B2] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Tag / Action Pill */}
                    <div className="md:col-span-2 flex items-center justify-between md:justify-end gap-3 pl-7 md:pl-0 pt-2 md:pt-0">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[#15101C] border border-[#A855F7]/25 text-[#D2BBFF] group-hover:border-[#A855F7]/60 transition-all">
                        <span>{service.tag}</span>
                        <ArrowUpRight className="w-3 h-3 text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#A9A3B2] transition-transform duration-300 md:hidden ${
                          isExpanded ? 'rotate-180 text-[#D2BBFF]' : ''
                        }`}
                      />
                    </div>

                  </div>
                </div>

                {/* Expanded Details Drawer */}
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-[#A855F7]/15 pl-7 md:pl-12 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-in fade-in duration-200">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-2">
                        ENGINEERED CAPABILITIES
                      </span>
                      <ul className="space-y-1.5">
                        {service.features?.map((feat, i) => (
                          <li key={i} className="text-xs text-[#E8E0E8] flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#A855F7] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block mb-2">
                        DELIVERABLES SPRINT
                      </span>
                      <ul className="space-y-1.5">
                        {service.deliverables?.map((deliv, i) => (
                          <li key={i} className="text-xs text-[#A9A3B2]">
                            • {deliv}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col justify-between items-start sm:items-end">
                      <div>
                        <span className="text-[10px] font-mono tracking-widest text-[#A855F7] uppercase block sm:text-right mb-1">
                          PROVEN METRIC BENCHMARK
                        </span>
                        <span className="font-display font-bold text-lg text-[#F5F3F7] sm:text-right block">
                          {service.impactMetric}
                        </span>
                      </div>
                      <button
                        onClick={() => onSelectService?.(service)}
                        className="mt-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-semibold px-4 py-2 rounded-lg font-display transition-all cursor-pointer shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                      >
                        Request This Pillar
                      </button>
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
