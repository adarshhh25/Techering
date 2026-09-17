import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Globe, Zap, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { onOpenWhatsApp } = useOutletContext<any>();

  const stats = [
    { label: 'Revenue Managed', value: '$120M+' },
    { label: 'Enterprise Partners', value: '45+' },
    { label: 'Global Hubs', value: '3' },
    { label: 'Industry Awards', value: '12' }
  ];

  const team = [
    {
      name: 'Michael Chen',
      role: 'Managing Partner',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Sarah Jenkins',
      role: 'Chief Creative Officer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'David Okafor',
      role: 'Head of Growth',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    }
  ];

  return (
    <div className="pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 animate-in fade-in duration-500">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.25em] text-[#A855F7] uppercase block mb-4 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-[#A855F7]"></span>
                THE TECHERING MANIFESTO
              </span>
              <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl tracking-tight text-[#F5F3F7] mb-8 leading-[1.1]">
                Built for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#D2BBFF]">Ambitious</span>.
              </h1>
              <p className="font-editorial italic text-2xl sm:text-3xl text-[#D2BBFF] leading-relaxed mb-8 border-l-2 border-[#A855F7]/30 pl-6">
                "Most agency retainers exist to burn media budgets on vanity metrics. We exist to build undeniable enterprise equity through taste and relentless data discipline."
              </p>
              <p className="text-base sm:text-lg text-[#A9A3B2] leading-relaxed mb-10">
                Founded by high-growth founders and senior creative directors, Techering bridges the gap between high-fashion editorial craftsmanship and cold-blooded Silicon Valley CAC optimization. We don't settle for lukewarm ad templates or generic copy; every touchpoint is crafted to command attention.
              </p>
            </div>
            <div className="relative group h-[400px] sm:h-[500px] w-full flex items-center justify-center border border-[#A855F7]/20 rounded-2xl bg-[#0D0912] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/10 to-[#100A18] transition-colors duration-700 group-hover:from-[#7C3AED]/20"></div>
              
              {/* Abstract Animated Elements */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A855F7]/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#7C3AED]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Geometric Graphic */}
              <div className="relative z-10 flex flex-col items-center justify-center gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#A855F7]/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-[#C084FC]/50 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-[#D2BBFF] animate-pulse" />
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="font-display font-bold text-2xl sm:text-3xl tracking-widest text-[#F5F3F7] uppercase drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                    TECHERING
                  </span>
                  <span className="block mt-2 text-[10px] font-mono tracking-[0.4em] text-[#A9A3B2]">
                    EST. 2026
                  </span>
                </div>
              </div>
              
              {/* Grid background overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-y border-[#A855F7]/15 py-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="font-display font-bold text-4xl sm:text-5xl text-[#F5F3F7] mb-3 group-hover:text-[#D2BBFF] transition-colors">{stat.value}</div>
                <div className="text-xs sm:text-sm font-mono tracking-wider text-[#A9A3B2] uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Core Pillars */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F3F7] mb-4">Our Operational Pillars</h2>
              <p className="text-base text-[#A9A3B2]">The foundational principles that guide our strategy, execution, and partnerships.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Globe, title: 'Global Command', desc: 'Headquartered in Mumbai with creative production hubs in London and Tokyo, operating 24/7.' },
                { icon: Zap, title: 'Velocity First', desc: 'We launch iterative creative experiments weekly, cutting underperforming hooks before budgets decay.' },
                { icon: Sparkles, title: 'Culture & Taste', desc: 'High-converting doesn\'t mean ugly. We make brands impossible to ignore while upholding strict visual dignity.' }
              ].map((pillar, i) => (
                <div key={i} className="group p-8 rounded-2xl border border-[#A855F7]/15 bg-[#100A18] hover:bg-[#15101C] hover:border-[#A855F7]/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_-10px_rgba(124,58,237,0.2)]">
                  <div className="w-14 h-14 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon className="w-7 h-7 text-[#C084FC]" />
                  </div>
                  <h3 className="font-display font-semibold text-xl sm:text-2xl text-white mb-3">{pillar.title}</h3>
                  <p className="text-sm sm:text-base text-[#A9A3B2] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Team */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-[#F5F3F7] mb-4">Leadership</h2>
              <p className="text-base text-[#A9A3B2]">The architects behind our most successful enterprise growth sprints.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group">
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/5] border border-[#A855F7]/15">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-1 group-hover:text-[#D2BBFF] transition-colors">{member.name}</h3>
                  <p className="text-xs sm:text-sm font-mono tracking-wider text-[#A855F7] uppercase">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
