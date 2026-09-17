import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

export const TestimonialsPage: React.FC = () => {
  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 animate-in fade-in duration-300">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-3">
                CLIENT VOICES
              </span>
              <h1 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7]">
                Good Work Gets Talked About.
              </h1>
            </div>
          </div>

          {/* 3-Column Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                id={`testimonial-page-card-${t.id}`}
                className="group relative rounded-xl border border-[#A855F7]/16 bg-[#15101C] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#A855F7]/45 hover:shadow-[0_16px_40px_-12px_rgba(124,58,237,0.22)]"
              >
                <div>
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#D2BBFF] text-[#D2BBFF]"
                      />
                    ))}
                  </div>

                  {/* Quote with font-editorial touch */}
                  <p className="font-editorial italic text-base sm:text-[17px] leading-relaxed text-[#E8E0E8] mb-8">
                    {t.quote}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-[#A855F7]/12 flex items-center gap-4">
                  {t.imageUrl && (
                    <img 
                      src={t.imageUrl} 
                      alt={t.name} 
                      className="w-12 h-12 rounded-full object-cover border border-[#A855F7]/30"
                    />
                  )}
                  <div>
                    <span className="font-display font-semibold text-base sm:text-lg text-[#F5F3F7] block group-hover:text-[#D2BBFF] transition-colors">
                      {t.name}
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase block mt-0.5">
                      {t.role}, {t.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
