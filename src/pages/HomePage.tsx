import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { WorkSection } from '../components/WorkSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CtaSection } from '../components/CtaSection';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy, ServiceItem } from '../types';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { onOpenWhatsApp, setSelectedCaseStudy, onNavigateSection } = useOutletContext<any>();

  const handleSelectBrandFromTrustBar = (brandName: string) => {
    const matchedCase = CASE_STUDIES.find(
      (c) => c.title.toLowerCase().includes(brandName.toLowerCase())
    );
    if (matchedCase) {
      setSelectedCaseStudy(matchedCase);
    } else {
      onNavigateSection('selected-work');
    }
  };

  return (
    <>
      <Hero
        onOpenWhatsApp={() => onOpenWhatsApp()}
        onOpenWhatsApp={onOpenWhatsApp}
        onExploreWork={() => onNavigateSection('selected-work')}
      />

      <TrustBar onSelectBrand={handleSelectBrandFromTrustBar} />

      <ServicesSection
        onSelectService={(service: ServiceItem) => onOpenWhatsApp(service.id)}
        onExploreAll={() => {
          navigate('/services');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <ProcessSection />

      <WorkSection
        onSelectCaseStudy={(caseStudy: CaseStudy) => setSelectedCaseStudy(caseStudy)}
        onViewAllWork={() => {
          navigate('/work');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <TestimonialsSection
        onViewAllTestimonials={() => {
          navigate('/testimonials');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <CtaSection
        onOpenWhatsApp={() => onOpenWhatsApp()}
        onOpenWhatsApp={onOpenWhatsApp}
      />
    </>
  );
};
