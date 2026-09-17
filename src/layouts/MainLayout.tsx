import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import { CaseStudyModal } from '../components/CaseStudyModal';

import { CaseStudy } from '../types';

interface MainLayoutProps {

  selectedCaseStudy: CaseStudy | null;
  setSelectedCaseStudy: (study: CaseStudy | null) => void;

}

export const MainLayout: React.FC<MainLayoutProps> = ({
  onNavigateSection,
  onOpenWhatsApp,
  selectedCaseStudy,
  setSelectedCaseStudy,

}) => {
  return (
    <div className="min-h-screen bg-[#070509] text-[#F5F3F7] selection:bg-[#7C3AED] selection:text-white font-sans antialiased overflow-x-hidden">
      <Navbar
        onOpenWhatsApp={() => onOpenWhatsApp()}
        onNavigateSection={onNavigateSection}
      />
      
      <main className="pt-24 min-h-screen">
        <Outlet context={{ onNavigateSection, onOpenWhatsApp, setSelectedCaseStudy }} />
      </main>

      <Footer
        onNavigateSection={onNavigateSection}
        onOpenWhatsApp={onOpenWhatsApp}
      />



      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onOpenWhatsApp={() => onOpenWhatsApp()}
      />


    </div>
  );
};
