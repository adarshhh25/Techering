import { ServiceItem, CaseStudy, ProcessPhase, Testimonial } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo',
    number: '01',
    title: 'Search Engine Optimization',
    description: 'Keyword domination, technical velocity sprints, semantic cluster architecture, and authoritative digital PR.',
    tag: 'Organic Inbound',
    features: [
      'Semantic Topic Cluster Modeling',
      'Technical Core Web Vitals Optimization',
      'High-Authority Editorial Digital PR',
      'Programmatic SEO Architecture'
    ],
    deliverables: ['Custom Growth Dashboard', 'Weekly Sprint Reports', 'Continuous Technical Audits'],
    impactMetric: '+280% Avg. Non-Brand Traffic Growth'
  },
  {
    id: 'social',
    number: '02',
    title: 'Social Media Marketing',
    description: 'Short-form video architecture, cultural virality playbooks, editorial feed curation, and loyal community amplification.',
    tag: 'Brand Resonance',
    features: [
      'Viral Short-Form Motion Strategy (TikTok, Reels)',
      'Editorial Grid & Visual Language Curation',
      'Creator Seeding & High-Impact Influencer Drops',
      'Autonomous Community Management'
    ],
    deliverables: ['Monthly Asset Vault (30+ Cutdowns)', 'Cultural Trend Heatmaps', 'Community Engagement Protocols'],
    impactMetric: '14.2M Monthly Impressions Engineered'
  },
  {
    id: 'ads',
    number: '03',
    title: 'Google & Meta Performance Ads',
    description: 'Algorithmic intent bidding, iterative creative testing loops, high-converting copy, and real-time ROAS scaling.',
    tag: 'High Intent',
    features: [
      'Multi-Account CBO Scaling Frameworks',
      'First-Party Server-Side CAPI Tracking',
      'High-Velocity A/B Hook & Angle Testing',
      'Dynamic Retargeting & LTV Multipliers'
    ],
    deliverables: ['Predictive ROAS Dashboards', 'Iterative Creative Refresh Bi-Weekly', 'Zero-Waste Media Budgets'],
    impactMetric: '3.4x Average Verified ROAS'
  },
  {
    id: 'creative',
    number: '04',
    title: 'Content & Creative Strategy',
    description: 'Studio-grade production, 3D motion typography, dark editorial photo directions, and thumb-stopping visual rhythm.',
    tag: 'Visual Equity',
    features: [
      'High-Fashion & Minimalist Editorial Shoots',
      '3D CGI Product Renders & WebGL Assets',
      'High-Conversion UGC Narrative Frameworks',
      'Micro-Typography & Motion Systems'
    ],
    deliverables: ['Raw & Graded 4K Master Files', 'Omnichannel Aspect Ratio Packs', 'Modular Motion Guidelines'],
    impactMetric: '88% Lower Customer Acquisition Cost'
  },
  {
    id: 'web',
    number: '05',
    title: 'Website Design & Development',
    description: 'Blazing-fast architectures, bespoke fluid animations, editorial micro-layouts, and conversion-calibrated funnels.',
    tag: 'Headless Velocity',
    features: [
      'Next.js / Vite / Headless React Architectures',
      'Sub-800ms Page Load Times Globally',
      'Custom Shopify & Stripe Checkout Engines',
      'Cinematic Micro-Interactions & Framer Motion'
    ],
    deliverables: ['Production-Grade Clean Codebase', 'CMS Integration for Marketing Teams', 'Full Figma Design Systems'],
    impactMetric: '4.9% Average Baseline Conversion Rate'
  },
  {
    id: 'funnels',
    number: '06',
    title: 'Lead Generation & Funnel Automation',
    description: 'End-to-end inbound pipeline architecture, lead qualification bots, CRM automation, and high-velocity outbound integration.',
    tag: 'Qualified Pipeline',
    features: [
      'Algorithmic Lead Scoring & Enrichment',
      'HubSpot, Salesforce & Clay Automation Sprints',
      'Automated Multi-Touch Follow-up Sequences',
      'Interactive ROI Calculators & Quiz Funnels'
    ],
    deliverables: ['Automated Pipeline Infrastructure', 'Sales Rep Routing Playbooks', 'Real-Time Slack Lead Alerts'],
    impactMetric: '92% Sales-Ready Lead Verification Rate'
  }
];

export const PROCESS_PHASES: ProcessPhase[] = [
  {
    number: '01',
    title: 'Understand',
    phaseName: 'Phase 1 // Immersion',
    description: 'Deep immersion into unit economics, customer friction vectors, and competitive positioning before spending a single dollar.',
    details: ['Cohort LTV Analysis', 'Competitor Ad Auditing', 'Persona Psychological Mapping']
  },
  {
    number: '02',
    title: 'Strategize',
    phaseName: 'Phase 2 // Architecture',
    description: 'Precision media architecture, multi-touch attribution maps, and rapid content cadence models with zero wasted capital.',
    details: ['Full Funnel Attribution', 'Creative Angle Taxonomy', 'Budget Allocation Matrix']
  },
  {
    number: '03',
    title: 'Create',
    phaseName: 'Phase 3 // Production',
    description: 'High-taste digital assets, bespoke cinematic ads, and tailored hooks designed to command feeds and lower blended acquisition costs.',
    details: ['Editorial Asset Vault', 'Conversion Copywriting', '3D Motion Animation']
  },
  {
    number: '04',
    title: 'Optimize',
    phaseName: 'Phase 4 // Compounding',
    description: 'Relentless A/B creative iterations, pipeline calibration, and real-time automated bid adjustments to compound returns weekly.',
    details: ['Continuous Angle Refinements', 'Automated Bid Rules', 'Weekly Growth Syncs']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cult-fit',
    number: '01',
    categoryTag: 'FITNESS & WELLNESS',
    title: 'CULT.FIT',
    description: 'Overhauled end-to-end paid acquisition channels, structured high-energy short-form motion campaigns, and scaled active gym membership subscriptions across five metropolitan hubs.',
    tags: ['Meta Ads', 'Motion Creative', 'Growth Loops'],
    metrics: [
      { label: 'QUALIFIED LEADS', value: '+340%' },
      { label: 'CAC REDUCTION', value: '-42%' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop',
    accentColor: '#7C3AED',
    clientQuote: {
      text: 'TECHERING stripped out all agency bloat and delivered 3.4x ROAS inside 60 days. Their creative standards are unmatched in the D2C landscape.',
      author: 'Alex Mercer',
      role: 'VP GROWTH, CULT.FIT'
    },
    deepDive: {
      challenge: 'Cult.fit suffered from high customer acquisition costs ($184 CAC per gym member) and stagnant ad creative exhaustion across regional Meta campaigns.',
      solution: 'We deployed dynamic localized creative suites with 40+ modular hooks, synchronized high-impact influencer workout footage, and built an instant frictionless mobile lead quiz.',
      deliverables: [
        'Custom Dynamic Meta Campaign Architecture',
        '36 Short-form High-Energy Ad Variants',
        'Real-time SMS Lead Qualification Integration',
        'Cohort Retention Optimization Engine'
      ]
    }
  },
  {
    id: 'off-white',
    number: '02',
    categoryTag: 'STREETWEAR & LUXURY',
    title: 'OFF-WHITE',
    description: 'Direction of seasonal drop lookbooks, immersive 3D digital storefront launch, and influencer seeding program generating an instant sold-out capsule drop in under 18 minutes.',
    tags: ['Art Direction', 'D2C eCommerce', 'Viral PR'],
    metrics: [
      { label: 'FIRST-WEEK ROAS', value: '4.8×' },
      { label: 'ORGANIC IMPRESSIONS', value: '1.8M' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop',
    accentColor: '#A855F7',
    clientQuote: {
      text: "They don't just run ads; they understand luxury aesthetics and cultural timing. Our capsule collection sold out immediately upon public launch.",
      author: 'Elena Rostov',
      role: 'FOUNDER, OFF-WHITE'
    },
    deepDive: {
      challenge: 'Launching a dark-aesthetic luxury streetwear drop in an oversaturated market requires extreme exclusivity without losing commercial transaction momentum.',
      solution: 'Constructed the "Noir Edition" 3D virtual showroom, engineered a 14-day password-protected VIP waitlist teaser, and activated underground fashion curators.',
      deliverables: [
        'Headless Next.js Virtual Storefront & Countdown',
        'Editorial Lookbook Direction & Soundscapes',
        'VIP WhatsApp & SMS Early Access Drops',
        'Sub-second Checkout Infrastructure'
      ]
    }
  },
  {
    id: 'wework',
    number: '03',
    categoryTag: 'TECH & COWORKING',
    title: 'WEWORK',
    description: 'Engineered headless booking experience coupled with localized high-intent Google Search capture, attaining 96% occupancy across flagship locations within 90 days.',
    tags: ['High-Converting Web', 'Local Search SEO', 'PPC Dominance'],
    metrics: [
      { label: 'OCCUPANCY REACHED', value: '96%' },
      { label: 'PAYBACK PERIOD', value: '< 14 Days' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    secondaryImageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
    accentColor: '#C084FC',
    clientQuote: {
      text: 'The most technical and responsive growth team we’ve partnered with. Their conversion tracking and custom headless builds are pure gold.',
      author: 'Julian Vance',
      role: 'CHIEF EXECUTIVE, WEWORK'
    },
    deepDive: {
      challenge: 'New high-end coworking hubs across San Francisco, London, and Berlin had vacant executive suites and low conversion on generic tour request forms.',
      solution: 'Built an interactive 3D floorplan tour booking engine paired with surgical Google Ads targeting corporate enterprise relocations.',
      deliverables: [
        'Interactive Desk & Suite Reservation System',
        'Hyper-Local Google Search Bidding Engine',
        'Instant Automated Calendar Tour Booking',
        'Enterprise Lease Attribution Analytics'
      ]
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: '"TECHERING stripped out all agency bloat and delivered 3.4x ROAS inside 60 days. Their creative standards are unmatched in the D2C landscape."',
    name: 'Alex Mercer',
    role: 'VP GROWTH',
    company: 'CULT.FIT',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '2',
    quote: '"They don\'t just run ads; they understand luxury aesthetics and cultural timing. Our capsule collection sold out immediately upon public launch."',
    name: 'Elena Rostov',
    role: 'FOUNDER',
    company: 'OFF-WHITE',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '3',
    quote: '"The most technical and responsive growth team we\'ve partnered with. Their conversion tracking and custom headless builds are pure gold."',
    name: 'Julian Vance',
    role: 'CHIEF EXECUTIVE',
    company: 'WEWORK',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '4',
    quote: '"Their attention to detail and ability to scale our campaigns globally was nothing short of spectacular. They truly act as an extension of our own team."',
    name: 'Sarah Chen',
    role: 'CMO',
    company: 'VERTEX',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '5',
    quote: '"We struggled with stagnant growth for a year. TECHERING stepped in and completely rebuilt our inbound engine, doubling our pipeline in two quarters."',
    name: 'Marcus Thorne',
    role: 'HEAD OF REVENUE',
    company: 'AURA',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: '6',
    quote: '"A brilliant blend of data-driven performance and high-end visual design. Our brand equity has skyrocketed since we began this partnership."',
    name: 'Isabella Rossi',
    role: 'CREATIVE DIRECTOR',
    company: 'LUMINA',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
  }
];

export const CLIENT_LOGOS = [
  { name: 'CULT.FIT', tag: 'D2C Performance' },
  { name: 'OFF-WHITE', tag: 'Luxury Streetwear' },
  { name: 'HOTSTAR', tag: 'Media Network' },
  { name: 'WEWORK', tag: 'Tech & Spatial' },
  { name: 'ZERODHA', tag: 'Fintech Platform' },
  { name: 'WHOOP', tag: 'Bio-Optimized Living' }
];

export const PRICING_TIERS = [
  {
    name: 'Strategic Sprint',
    duration: '4-Week Immersion',
    price: '$12,500',
    description: 'A surgical diagnostic and high-velocity asset sprint to uncover growth bottlenecks and produce immediate conversion wins.',
    features: [
      'Full-Funnel CRO & Attribution Audit',
      '30-Day Paid Creative Angle Taxonomy',
      '8 Bespoke High-Converting Ad Creative Packs',
      'Technical SEO Velocity Sprint',
      'Senior Strategist Weekly Debriefs'
    ],
    badge: 'RAPID IMPACT'
  },
  {
    name: 'Dedicated Growth Pod',
    duration: 'Quarterly Retainer',
    price: '$24,000 / mo',
    description: 'An elite, dedicated full-stack squad of senior designers, media buyers, copywriters, and developers driving compound enterprise revenue.',
    features: [
      'End-to-End Meta & Google Ad Management',
      'Bi-Weekly Production of 20+ Ad Variations',
      'Continuous Conversion Rate Optimization',
      'Headless Landing Page Sprints',
      'Dedicated Slack Channel & Same-Day Turnaround',
      'Zero-Fluff Verified Bi-Weekly ROAS Reporting'
    ],
    popular: true,
    badge: 'MOST POPULAR'
  },
  {
    name: 'Venture Acceleration',
    duration: 'Custom Partnership',
    price: '$45,000+ / mo',
    description: 'Complete commercial digital dominance for venture-backed scaleups. We take full ownership of your growth engine and brand equity.',
    features: [
      'Full Omnichannel Media Execution (6+ Channels)',
      'High-Fashion Studio Production & 3D Motion',
      'Custom Headless Web Engineering & Apps',
      'C-Suite Growth Partner Advisory',
      'Private Creator & Influencer Roster Access',
      'Performance Incentive / Equity Alignment'
    ],
    badge: 'ENTERPRISE DOMINANCE'
  }
];
