import React from 'react';
import { MessageCircle } from 'lucide-react';

interface CtaSectionProps {
  onOpenWhatsApp: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  onOpenWhatsApp
}) => {
  return (
    <section id="cta-section" className="py-20 sm:py-28 bg-[#070509] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card Container */}
        <div className="relative rounded-2xl border border-[#A855F7]/25 bg-[#0D0912]/80 backdrop-blur-xl p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            
            {/* Overline Tag */}
            <span className="text-[11px] font-mono tracking-[0.25em] text-[#D2BBFF] uppercase block mb-4">
              INITIATE COLLABORATION
            </span>

            {/* Title */}
            <h2 className="font-display font-semibold text-4xl sm:text-6xl tracking-tight text-[#F5F3F7] mb-5">
              Ready to Grow?
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#A9A3B2] leading-relaxed mb-10">
              Let's turn your next marketing challenge into an undeniable enterprise opportunity. Talk directly with our senior strategy partners today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="cta-start-project-btn"
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto bg-[#7C3AED] hover:bg-[#6D28D9] text-[#F5F3F7] text-[14px] font-semibold tracking-wider font-display px-8 py-3.5 rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-[0.98] cursor-pointer"
              >
                Start a Project
              </button>

              <button
                id="cta-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="w-full sm:w-auto bg-[#15101C] hover:bg-[#1E1828] text-[#F5F3F7] text-[14px] font-medium tracking-wide font-display px-7 py-3.5 rounded-lg border border-[#A855F7]/30 hover:border-[#A855F7]/60 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#A855F7]" />
                <span>WhatsApp Us</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
