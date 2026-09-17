import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateSection,
  onOpenWhatsApp
}) => {
  return (
    <footer className="bg-[#070509] border-t border-[#A855F7]/15 pt-16 sm:pt-24 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#A855F7]/12">
          
          {/* Brand Info & Inquiries */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <span className="font-display font-bold text-3xl sm:text-4xl lg:text-[44px] tracking-tight text-[#F5F3F7] block">
                  TECHERING
                </span>
                <span className="font-display font-medium text-base sm:text-lg text-[#F5F3F7] block mt-1">
                  Tech Talent, Results Delivering
                </span>
              </div>

              <p className="text-[#A9A3B2] text-sm leading-relaxed max-w-sm mb-8">
                Modern tastemakers and full-funnel digital acceleration for venture-backed founders and culture-defining brands.
              </p>
            </div>

            {/* Direct Inquiries */}
            <div className="pt-4">
              <span className="text-[10px] font-mono tracking-widest text-[#A9A3B2] uppercase block mb-1">
                DIRECT INQUIRIES
              </span>
              <a
                href="mailto:hello@techering.com"
                className="font-display font-semibold text-xl sm:text-2xl text-[#F5F3F7] hover:text-[#D2BBFF] transition-colors"
              >
                hello@techering.com
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
            
            {/* Column 1: Navigation */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#A855F7] uppercase block mb-5">
                NAVIGATION
              </span>
              <ul className="space-y-3">
                {[
                  { label: 'Home', path: '/', action: () => onNavigateSection('hero') },
                  { label: 'About Us', path: '/about' },
                  { label: 'Capabilities', path: '/services' },
                  { label: 'Selected Work', path: '/work' },
                  { label: 'Client Impact', path: '/testimonials' },
                  { label: 'Investment', path: '/pricing' },
                  { label: 'Contact', action: () => onOpenWhatsApp() }
                ].map((item) => (
                  <li key={item.label}>
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="text-xs sm:text-[13px] text-[#A9A3B2] hover:text-[#F5F3F7] transition-colors text-left cursor-pointer"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <button
                        onClick={item.action}
                        className="text-xs sm:text-[13px] text-[#A9A3B2] hover:text-[#F5F3F7] transition-colors text-left cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Services */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#A855F7] uppercase block mb-5">
                SERVICES
              </span>
              <ul className="space-y-3">
                {[
                  'Search Engine Optimization',
                  'Social Media Marketing',
                  'Performance Advertising',
                  'Content & Creative Strategy',
                  'Web Design & Engineering',
                  'Full-Funnel Lead Generation'
                ].map((srv) => (
                  <li key={srv}>
                    <Link
                      to="/services"
                      className="text-xs sm:text-[13px] text-[#A9A3B2] hover:text-[#F5F3F7] transition-colors text-left cursor-pointer"
                    >
                      {srv}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect */}
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#A855F7] uppercase block mb-5">
                CONNECT
              </span>
              <ul className="space-y-3 text-xs sm:text-[13px] text-[#A9A3B2]">
                <li className="text-[#F5F3F7] font-medium">
                  +1 (555) 019-2834
                </li>
                <li>Mumbai, India & Global</li>
                <li>
                  <a
                    href="#instagram"
                    onClick={(e) => { e.preventDefault(); alert('Techering Instagram: @techering.agency'); }}
                    className="hover:text-[#F5F3F7] transition-colors inline-flex items-center gap-1"
                  >
                    Instagram <ArrowUpRight className="w-3 h-3 text-[#A855F7]" />
                  </a>
                </li>
                <li>
                  <a
                    href="#linkedin"
                    onClick={(e) => { e.preventDefault(); alert('Techering LinkedIn: /company/techering'); }}
                    className="hover:text-[#F5F3F7] transition-colors inline-flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="w-3 h-3 text-[#A855F7]" />
                  </a>
                </li>
                <li>
                  <a
                    href="#twitter"
                    onClick={(e) => { e.preventDefault(); alert('Techering X: @techering'); }}
                    className="hover:text-[#F5F3F7] transition-colors inline-flex items-center gap-1"
                  >
                    Twitter / X <ArrowUpRight className="w-3 h-3 text-[#A855F7]" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenWhatsApp}
                    className="hover:text-[#F5F3F7] transition-colors inline-flex items-center gap-1 text-left"
                  >
                    WhatsApp <ArrowUpRight className="w-3 h-3 text-[#A855F7]" />
                  </button>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A9A3B2]">
          <p>© 2026 TECHERING. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              onClick={() => alert('TECHERING Editorial Privacy Policy:\n\nWe practice strict confidential data governance for client acquisition funnels and enterprise attribution accounts.')}
              className="hover:text-[#F5F3F7] transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => alert('TECHERING Terms of Service:\n\nEnterprise SLA agreements and sprint deliverable terms.')}
              className="hover:text-[#F5F3F7] transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>

      {/* Floating Bottom-Right Chat Pill (As shown in screenshot) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          id="floating-chat-pill-btn"
          onClick={onOpenWhatsApp}
          className="group bg-[#15101C] hover:bg-[#1E1828] border border-[#A855F7]/40 hover:border-[#A855F7]/80 text-[#F5F3F7] px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(124,58,237,0.25)] flex items-center gap-2 transition-all cursor-pointer hover:scale-105 active:scale-95"
        >
          <MessageSquare className="w-4 h-4 text-[#C084FC]" />
          <span className="text-[12px] font-display font-medium tracking-wide text-[#F5F3F7]">
            Chat with us
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        </button>
      </div>
    </footer>
  );
};
