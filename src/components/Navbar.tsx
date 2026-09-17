import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenWhatsApp: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWhatsApp,
  onNavigateSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'WORK', path: '/work' },
    { label: 'TESTIMONIALS', path: '/testimonials' },
    { label: 'PRICING', path: '/pricing' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setMobileMenuOpen(false);
    if (item.action === 'inquiry') {
      onOpenWhatsApp();
    } else if (item.section) {
      if (location.pathname !== item.path) {
        // Handled by link, but we also want to scroll
        setTimeout(() => onNavigateSection(item.section!), 100);
      } else {
        onNavigateSection(item.section);
      }
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#070509]/90 backdrop-blur-md border-b border-[#A855F7]/15 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="text-left group flex flex-col focus:outline-none"
              id="brand-logo-btn"
            >
              <span className="font-display font-bold text-xl sm:text-2xl tracking-tighter text-[#F5F3F7] group-hover:text-[#D2BBFF] transition-colors">
                TECHERING
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-medium text-[#A9A3B2] uppercase -mt-0.5">
                TECH TALENT, RESULTS DELIVERING
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8" aria-label="Main Navigation">
              {navItems.map((item) => (
                <React.Fragment key={item.label}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => handleNavClick(item)}
                      className={`font-display text-[12px] lg:text-[13px] tracking-[0.14em] font-medium transition-colors duration-200 cursor-pointer py-1 relative group ${
                        location.pathname === item.path && !item.section
                          ? 'text-[#F5F3F7]'
                          : 'text-[#A9A3B2] hover:text-[#F5F3F7]'
                      }`}
                    >
                      {item.label}
                      <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#7C3AED] transition-all duration-200 ${
                        location.pathname === item.path && !item.section ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="font-display text-[12px] lg:text-[13px] tracking-[0.14em] font-medium text-[#A9A3B2] hover:text-[#F5F3F7] transition-colors duration-200 cursor-pointer py-1 relative group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#7C3AED] transition-all duration-200 group-hover:w-full" />
                    </button>
                  )}
                </React.Fragment>
              ))}
            </nav>



            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center space-x-2">
              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg border border-[#A855F7]/30 text-[#F5F3F7] bg-[#15101C]/80 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="fixed inset-0 z-50 bg-[#070509]/95 backdrop-blur-xl flex flex-col p-6 sm:hidden animate-in fade-in duration-200"
        >
          <div className="flex items-center justify-between pb-6 border-b border-[#A855F7]/20">
            <div>
              <span className="font-display font-bold text-xl tracking-tighter text-[#F5F3F7]">
                TECHERING
              </span>
              <p className="text-[9px] tracking-[0.2em] font-medium text-[#A9A3B2] uppercase">
                TECH TALENT, RESULTS DELIVERING
              </p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg border border-[#A855F7]/30 text-[#F5F3F7] bg-[#15101C]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-6 space-y-4">
            {navItems.map((item) => (
              <React.Fragment key={item.label}>
                {item.path ? (
                  <Link
                    to={item.path}
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left font-display text-lg tracking-wider font-semibold text-[#F5F3F7] hover:text-[#D2BBFF] py-2 border-b border-[#15101C] flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A855F7]" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="w-full text-left font-display text-lg tracking-wider font-semibold text-[#F5F3F7] hover:text-[#D2BBFF] py-2 border-b border-[#15101C] flex items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A855F7]" />
                  </button>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="pt-4 border-t border-[#A855F7]/20 space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-[#F5F3F7] py-3.5 rounded-lg font-display font-semibold tracking-wider text-center shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              Start a Project
            </button>
            <p className="text-center text-xs text-[#A9A3B2]">
              Direct Inquiries: <span className="text-[#C084FC]">hello@techering.com</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
