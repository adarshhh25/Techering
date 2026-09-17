import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { PricingPage } from './pages/PricingPage';
import { AboutPage } from './pages/AboutPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { CaseStudy } from './types';
import { useEffect } from 'react';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If the section doesn't exist on this page, we might need to navigate to home first, 
        // but for now let's just do nothing or window.location = '/' + #sectionId
        window.location.href = `/#${sectionId}`;
      }
    }, 50);
  };


  const handleOpenWhatsApp = () => {
    window.open('https://wa.me/918879139434', '_blank');
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route 
          element={
            <MainLayout 

              onNavigateSection={handleNavigateSection}
              onOpenWhatsApp={handleOpenWhatsApp}
              selectedCaseStudy={selectedCaseStudy}
              setSelectedCaseStudy={setSelectedCaseStudy}

            />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
