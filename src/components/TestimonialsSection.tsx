import React from 'react';
import { ArrowUpRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/agencyData';

interface TestimonialsSectionProps {
  onViewAllTestimonials?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onViewAllTestimonials
}) => {
  return (
    <section id="client-voices" className="py-20 sm:py-28 bg-[#070509]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#A855F7]/15">
          <div>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.25em] text-[#A9A3B2] uppercase block mb-3">
              04 —— CLIENT VOICES
            </span>
            <h2 className="font-display font-semibold text-3xl sm:text-5xl lg:text-[54px] tracking-tight text-[#F5F3F7]">
              Good Work Gets Talked About.
            </h2>
          </div>

          <button
            id="view-all-testimonials-btn"
            onClick={onViewAllTestimonials}
            className="group inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-mono tracking-widest uppercase text-[#F5F3F7] hover:text-[#D2BBFF] transition-colors py-2 cursor-pointer self-start md:self-auto shrink-0"
          >
            <span>VIEW ALL TESTIMONIALS</span>
            <ArrowUpRight className="w-4 h-4 text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 sm:pt-16">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
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
              <div className="pt-5 border-t border-[#A855F7]/12">
                <span className="font-display font-semibold text-base sm:text-lg text-[#F5F3F7] block group-hover:text-[#D2BBFF] transition-colors">
                  {t.name}
                </span>
                <span className="text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase block mt-0.5">
                  {t.role}, {t.company}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
