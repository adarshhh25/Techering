export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  features?: string[];
  deliverables?: string[];
  impactMetric?: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  categoryTag: string;
  title: string;
  description: string;
  tags: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  secondaryImageUrl?: string;
  accentColor?: string;
  clientQuote?: {
    text: string;
    author: string;
    role: string;
  };
  deepDive?: {
    challenge: string;
    solution: string;
    deliverables: string[];
  };
}

export interface ProcessPhase {
  number: string;
  title: string;
  phaseName: string;
  description: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  imageUrl?: string;
}

export type ScreenTab = 'landing' | 'services' | 'work' | 'pricing' | 'about';

export interface ProjectInquiryData {
  brandName: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
  services: string[];
  budgetRange: string;
  timeline: string;
  notes: string;
}
