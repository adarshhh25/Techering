import React from 'react';
import { MessageCircle, ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react';

interface HeroProps {
  onOpenWhatsApp: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenWhatsApp,
  onExploreWork
}) => {
  return (
    <section id="hero" className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Ambient Violet Glow */}
      <div className="absolute top-1/4 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#7C3AED]/12 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-[#A855F7]/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy, CTAs, & Primary Metrics */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#A855F7]/30 bg-[#15101C]/80 backdrop-blur-sm w-fit mb-6 sm:mb-8 shadow-[0_0_15px_rgba(168,85,247,0.12)]">
              <span className="w-2 h-2 rounded-full bg-[#A855F7] shadow-[0_0_8px_#C084FC] animate-pulse" />
              <span className="text-[11px] sm:text-[12px] font-mono tracking-[0.14em] font-semibold text-[#D2BBFF] uppercase">
                DIGITAL MARKETING AGENCY
              </span>
            </div>

            {/* Headline with Editorial Italic Highlight */}
            <h1 className="font-display font-semibold text-4xl sm:text-6xl xl:text-[72px] leading-[1.08] tracking-[-0.035em] text-[#F5F3F7] mb-6">
              Make Your <br className="hidden sm:inline" />
              Brand <br className="sm:hidden" />
              <span className="font-editorial italic font-normal text-[#D2BBFF] px-1 hover:text-[#E8E0E8] transition-colors inline-block tracking-normal">
                Impossible
              </span>{' '}
              <br className="hidden sm:inline" />
              To Ignore.
            </h1>

            {/* Body Copy */}
            <p className="text-[#A9A3B2] text-base sm:text-lg leading-relaxed max-w-xl mb-8 font-normal">
              We build digital experiences, campaigns, and content that turn attention into action. High-taste execution engineered for measurable enterprise momentum.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-12">
              <button
                id="hero-start-project-btn"
                onClick={onOpenWhatsApp}
                className="bg-[#7C3AED] hover:bg-[#6D28D9] text-[#F5F3F7] text-[14px] font-semibold tracking-wider font-display px-7 py-3.5 rounded-lg transition-all duration-200 shadow-[0_0_24px_rgba(124,58,237,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] active:scale-[0.98] text-center cursor-pointer"
              >
                Start a Project
              </button>

              <button
                id="hero-whatsapp-btn"
                onClick={onOpenWhatsApp}
                className="bg-[#15101C] hover:bg-[#1E1828] text-[#F5F3F7] text-[14px] font-medium tracking-wide font-display px-6 py-3.5 rounded-lg border border-[#A855F7]/30 hover:border-[#A855F7]/60 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#A855F7]" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Metric Displays */}
            <div className="pt-6 border-t border-[#A855F7]/15 grid grid-cols-2 gap-6 sm:gap-8 max-w-md">
              <div id="metric-roas">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-[#F5F3F7] tracking-tight">
                    3.4×
                  </span>
                </div>
                <p className="text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase mt-1">
                  AVG. ROAS ON CREATIVE
                </p>
              </div>

              <div id="metric-delivery">
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-bold text-3xl sm:text-4xl text-[#F5F3F7] tracking-tight">
                    100%
                  </span>
                </div>
                <p className="text-[11px] font-mono tracking-wider text-[#A9A3B2] uppercase mt-1">
                  ZERO-FLUFF DELIVERY
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Layered Editorial Visual (Urban Shadows & Aurum Elixirs) */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative w-full max-w-[540px] mx-auto">

              {/* Tag top right: CULTURE-LED CONVERSION */}
              <div className="absolute -top-4 right-2 sm:right-4 z-20 flex items-center gap-2 bg-[#0D0912]/90 border border-[#A855F7]/30 backdrop-blur-md px-3 py-1.5 rounded-full shadow-xl">
                <Sparkles className="w-3.5 h-3.5 text-[#C084FC]" />
                <span className="text-[10px] font-mono font-semibold tracking-wider text-[#D2BBFF] uppercase">
                  CULTURE-LED CONVERSION
                </span>
              </div>

              {/* Main Card: Urban Shadows A/W Campaign Lightbox */}
              <div 
                onClick={onExploreWork}
                className="group relative rounded-xl overflow-hidden border border-[#A855F7]/25 bg-[#0D0912] shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-[#A855F7]/50 cursor-pointer"
              >
                {/* Simulated Monograph/Poster Stage */}
                <div className="relative aspect-[4/5] sm:aspect-[4.2/5] w-full bg-[#0A070F] overflow-hidden">
                  
                  {/* Neon Stage Backdrop with Fashion Model */}
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                    alt="Urban Shadows A/W 24 Collection Campaign"
                    className="w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-110"
                    loading="eager"
                  />

                  {/* Violet Gradient Atmospheric Filter */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070509] via-[#0D0912]/40 to-transparent opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7C3AED]/20 via-transparent to-black/60 pointer-events-none" />

                  {/* Urban Shadows Billboard Overlay Inside Image */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-center pointer-events-none w-full px-6">
                    <span className="font-display font-bold text-2xl sm:text-3xl tracking-[0.2em] text-white/90 drop-shadow-[0_2px_15px_rgba(124,58,237,0.8)] uppercase">
                      URBAN SHADOWS
                    </span>
                    <p className="text-[11px] font-mono tracking-[0.3em] text-[#D2BBFF] uppercase mt-1">
                      A/W '24 COLLECTION
                    </p>
                  </div>

                  {/* Caption at bottom left of primary card */}
                  <div className="absolute bottom-6 left-6 z-10">
                    <span className="text-[10px] font-mono tracking-widest text-[#A9A3B2] uppercase block">
                      CAMPAIGN DIRECTION
                    </span>
                    <span className="font-display font-semibold text-lg text-[#F5F3F7] tracking-tight">
                      Urban Shadows A/W
                    </span>
                  </div>
                </div>
              </div>

              {/* Overlapping Floating Card: Aurum Elixirs Live Case */}
              <div 
                onClick={onExploreWork}
                className="group/aurum absolute -bottom-6 -right-2 sm:-right-6 w-[240px] sm:w-[280px] rounded-xl border border-[#A855F7]/35 bg-[#15101C]/95 backdrop-blur-xl p-3.5 sm:p-4 shadow-[0_25px_50px_rgba(0,0,0,0.9),0_0_30px_rgba(124,58,237,0.2)] transition-all duration-300 hover:border-[#A855F7]/70 hover:translate-y-[-4px] cursor-pointer z-30"
              >
                {/* Live Case Badge */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                      Live Case
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A855F7] group-hover/aurum:translate-x-0.5 group-hover/aurum:-translate-y-0.5 transition-transform" />
                </div>

                {/* Elixir Bottle Photo Showcase */}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] mb-3 bg-black">
                  <img
                    src="https://images.unsplash.com/photo-1527061011665-3652c757a4d4?q=80&w=600&auto=format&fit=crop"
                    alt="Aurum Elixirs Luxury Cocktail Pouring"
                    className="w-full h-full object-cover group-hover/aurum:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Subtle Brand Tag inside photo */}
                  <span className="absolute bottom-2 left-2 text-[9px] font-mono tracking-wider text-white/80 bg-black/60 px-1.5 py-0.5 rounded">
                    #SipTheNight
                  </span>
                </div>

                {/* Info & Metrics */}
                <div className="space-y-1">
                  <span className="text-[10px] font-mono tracking-wider text-[#A9A3B2] uppercase block">
                    AURUM ELIXIRS
                  </span>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-[#D2BBFF]" />
                    <span className="font-display font-semibold text-xs sm:text-sm text-[#F5F3F7]">
                      +214% High-Ticket Sales
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
