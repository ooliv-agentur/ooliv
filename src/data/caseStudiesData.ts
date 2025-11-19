export interface CaseStudyData {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  projectType: string;
  duration: string;
  investment: string;
  heroImage?: string;
  
  initialSituation: {
    challenge: string;
    businessContext: string;
    painPoints: string[];
    metrics: {
      label: string;
      value: string;
      context: string;
    }[];
  };
  
  strategicApproach: {
    overview: string;
    phases: {
      phase: string;
      title: string;
      duration: string;
      description: string;
      activities: string[];
    }[];
  };
  
  deliverables: {
    category: string;
    items: string[];
  }[];
  
  outcomes: {
    summary: string;
    metrics: {
      label: string;
      before: string;
      after: string;
      improvement: string;
      icon?: string;
    }[];
    businessImpact: string[];
  };
  
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    image?: string;
  };
  
  insights: {
    title: string;
    description: string;
  }[];
}

export const caseStudies: CaseStudyData[] = [
  {
    slug: 'b2b-saas-transformation',
    title: 'B2B SaaS Platform: Von 2% zu 12% Conversion',
    subtitle: 'End-to-End Product & UX Transformation für Enterprise SaaS',
    client: 'Enterprise SaaS Anbieter',
    industry: 'B2B Software / HR Tech',
    projectType: 'End-to-End Transformation',
    duration: '14 Wochen',
    investment: '€65.000',
    
    initialSituation: {
      challenge: 'Etabliertes Enterprise SaaS Unternehmen mit starkem Produkt, aber dramatisch unterdurchschnittlicher Website-Performance. 2% Trial-Conversion trotz hochwertigen Traffic von SEO und Paid Ads.',
      businessContext: 'Das Unternehmen hatte €180k/Jahr in Paid Ads investiert, aber nur 24 Trial-Signups pro Monat generiert. Die Sales-Pipeline war dünn, das Marketing frustriert. Die Website war 2018 gebaut worden und nie strategisch überarbeitet.',
      painPoints: [
        'Trial-Conversion Rate bei nur 2% (Industrie-Benchmark: 8-12%)',
        'Hohe Bounce Rate von 78% auf Landingpages',
        'Unklare Value Proposition und verwirrendes Messaging',
        'Kein strategischer Funnel – nur "Kontakt"-CTAs',
        'Mobile Experience komplett broken (65% Traffic mobile)',
        'Keine Produktdifferenzierung sichtbar',
      ],
      metrics: [
        { label: 'Trial Conversion', value: '2%', context: 'Ziel: 8-12%' },
        { label: 'Bounce Rate', value: '78%', context: 'Paid Traffic' },
        { label: 'Mobile Abbruchrate', value: '89%', context: 'Form Completion' },
        { label: 'CAC', value: '€7.500', context: 'Nicht skalierbar' },
      ],
    },
    
    strategicApproach: {
      overview: 'Vollständige strategische Neupositionierung und UX Transformation – von Discovery über strategische Concept-Entwicklung bis zur technischen Implementation und Funnel-Optimierung.',
      phases: [
        {
          phase: 'Phase 1',
          title: 'Strategic Discovery',
          duration: '3 Wochen',
          description: 'Deep Dive in Business Model, User Research und Wettbewerbs-Analyse zur Identifikation der strategischen Hebel.',
          activities: [
            'User Interviews mit 12 Buyers & 8 Non-Converters',
            'Funnel-Analyse & Heatmap-Auswertung',
            'Competitor Benchmarking (8 direkte Wettbewerber)',
            'Jobs-to-be-Done Framework Development',
            'Value Proposition Canvas Workshop',
          ],
        },
        {
          phase: 'Phase 2',
          title: 'Strategy & Concept',
          duration: '4 Wochen',
          description: 'Entwicklung der strategischen Positionierung, Messaging-Framework und UX Concept mit Fokus auf conversion-optimierten Funnel.',
          activities: [
            'Messaging-Framework & Value Prop Definition',
            'Information Architecture Neustrukturierung',
            'Conversion Funnel Strategy (5-stufig)',
            'UX Wireframes & User Flow Optimization',
            'Mobile-First Design System',
          ],
        },
        {
          phase: 'Phase 3',
          title: 'Design & Prototyping',
          duration: '4 Wochen',
          description: 'High-Fidelity Design mit conversion-fokussierten Komponenten und interaktiven Prototypen für Usability Testing.',
          activities: [
            'High-Fidelity UI Design (30+ Screens)',
            'Component Library & Design System',
            'Interactive Prototypes für Key Flows',
            'Usability Testing mit 8 Target Users',
            'Iteration basierend auf Test-Insights',
          ],
        },
        {
          phase: 'Phase 4',
          title: 'Implementation & Launch',
          duration: '3 Wochen',
          description: 'Development Oversight, QA und schrittweiser Launch mit A/B Testing und Performance-Monitoring.',
          activities: [
            'Frontend Development Oversight',
            'Conversion Tracking Setup (GA4 + Hotjar)',
            'A/B Test Framework Implementation',
            'Staged Rollout (20% → 50% → 100%)',
            'Performance Optimization & Launch',
          ],
        },
      ],
    },
    
    deliverables: [
      {
        category: 'Strategic Discovery',
        items: [
          'Strategic Assessment Report (42 Seiten)',
          'User Research Insights & Personas',
          'Competitor Analysis & Positioning Map',
          'Jobs-to-be-Done Framework',
          'Value Proposition Canvas',
        ],
      },
      {
        category: 'Strategy & Concept',
        items: [
          'Messaging Framework & Value Props',
          'Information Architecture',
          'Conversion Funnel Strategy',
          'UX Wireframes (25+ Screens)',
          'User Flow Documentation',
        ],
      },
      {
        category: 'Design & Prototyping',
        items: [
          'High-Fidelity UI Design (30+ Screens)',
          'Component Library (45+ Components)',
          'Design System Documentation',
          'Interactive Prototypes',
          'Usability Test Report',
        ],
      },
      {
        category: 'Implementation',
        items: [
          'Frontend Code Review & QA',
          'Conversion Tracking Setup',
          'A/B Testing Framework',
          'Performance Audit Report',
          'Launch Playbook',
        ],
      },
    ],
    
    outcomes: {
      summary: 'Nach 12 Wochen Post-Launch erreichte die neue Website eine 6x Steigerung der Trial-Conversion und reduzierte den CAC um 64%. Der ROI des Projekts wurde nach 4 Monaten erreicht.',
      metrics: [
        { label: 'Trial Conversion Rate', before: '2%', after: '12%', improvement: '+500%', icon: 'TrendingUp' },
        { label: 'Bounce Rate', before: '78%', after: '42%', improvement: '-46%', icon: 'TrendingDown' },
        { label: 'Mobile Conversion', before: '0.8%', after: '9.5%', improvement: '+1.088%', icon: 'Smartphone' },
        { label: 'CAC (Customer Acquisition Cost)', before: '€7.500', after: '€2.700', improvement: '-64%', icon: 'DollarSign' },
        { label: 'MQL → SQL Conversion', before: '12%', after: '34%', improvement: '+183%', icon: 'Users' },
        { label: 'Time to Trial Signup', before: '8.5 Tage', after: '2.1 Tage', improvement: '-75%', icon: 'Clock' },
      ],
      businessImpact: [
        '€420k zusätzlicher ARR innerhalb von 6 Monaten durch höhere Conversion',
        'CAC Reduktion von €7.500 auf €2.700 – Skalierung jetzt profitabel',
        'Sales Cycle von 8.5 auf 2.1 Tage verkürzt durch bessere Lead-Qualität',
        'Marketing ROI von 1.8x auf 5.2x gesteigert',
        'Product-Market Fit Score von 42% auf 78% gestiegen',
      ],
    },
    
    testimonial: {
      quote: 'Die Transformation unserer Website war der strategische Game-Changer, den wir gebraucht haben. Uli hat nicht nur eine schöne Website gebaut – er hat unser gesamtes Go-to-Market verstanden, unsere Positionierung geschärft und einen Conversion-Funnel designed, der einfach funktioniert. Von 2% zu 12% Trial-Conversion in 12 Wochen. Unser CAC ist um 64% gesunken. Das Projekt hat sich nach 4 Monaten komplett amortisiert.',
      author: 'Michael S.',
      role: 'VP Marketing',
      company: 'Enterprise SaaS Anbieter',
    },
    
    insights: [
      {
        title: 'Strategic Discovery war entscheidend',
        description: 'Die initialen 3 Wochen User Research haben die tatsächlichen Kaufhindernisse aufgedeckt (unklare Differenzierung, zu komplexe Messaging) – nicht das, was das Team vermutet hatte (Pricing).',
      },
      {
        title: 'Mobile-First Approach war kritisch',
        description: 'Mit 65% mobile Traffic war die broken mobile experience der größte Conversion-Killer. Der Mobile-First Redesign allein hätte schon 3-4x ROI gebracht.',
      },
      {
        title: 'Staged Rollout reduzierte Risiko',
        description: 'Der schrittweise Launch (20% → 50% → 100%) ermöglichte Echtzeit-Optimierung basierend auf Live-Daten ohne Business-Risiko.',
      },
    ],
  },
  
  {
    slug: 'ecommerce-checkout-optimization',
    title: 'E-Commerce: Checkout-Optimierung mit +240% Conversion',
    subtitle: 'Strategic UX Optimization für Multi-Million € D2C Brand',
    client: 'D2C E-Commerce Brand',
    industry: 'E-Commerce / Consumer Goods',
    projectType: 'Strategic Discovery + UX Optimization',
    duration: '8 Wochen',
    investment: '€28.000',
    
    initialSituation: {
      challenge: 'Erfolgreiche D2C E-Commerce Brand mit starkem Traffic (120k Besucher/Monat), aber dramatischer Checkout-Abbruch von 76%. Jeder vierte Kaufabbruch war ein vermeidbarer UX-Fehler.',
      businessContext: 'Das Unternehmen hatte €2.1M Jahresumsatz, aber verlor geschätzte €640k/Jahr durch Checkout-Abbrüche. Der Checkout war über Jahre organisch gewachsen ohne strategische UX-Überarbeitung.',
      painPoints: [
        'Checkout-Abbruchrate von 76% (E-Commerce Benchmark: 45-55%)',
        'Durchschnittlich 8,2 Klicks bis Payment (Ziel: max 4)',
        'Mobile Checkout fast unbenutzbar (92% Abbruchrate)',
        'Keine Guest Checkout Option – erzwungene Registrierung',
        'Unklare Lieferkosten bis zum letzten Step',
        'Fehlerhafte Validierung & schlechte Error Messages',
      ],
      metrics: [
        { label: 'Checkout Abandonment', value: '76%', context: 'Industrie: 45-55%' },
        { label: 'Mobile Checkout Completion', value: '8%', context: '58% Traffic mobile' },
        { label: 'Steps to Payment', value: '8.2', context: 'Ziel: max 4' },
        { label: 'Verlorener Revenue', value: '€53k/Monat', context: 'Durch Abbrüche' },
      ],
    },
    
    strategicApproach: {
      overview: 'Fokussierte Strategic Discovery zur Identifikation der kritischen Checkout-Hindernisse, gefolgt von datengetriebener UX-Optimierung und iterativem A/B Testing.',
      phases: [
        {
          phase: 'Phase 1',
          title: 'Checkout Discovery',
          duration: '2 Wochen',
          description: 'Deep Dive Analyse des Checkout-Funnels mit Heatmaps, Session Recordings und User Testing zur Identifikation aller Friction Points.',
          activities: [
            'Funnel-Analyse mit Hotjar & GA4 (2.400+ Sessions)',
            'Session Recordings Review (50+ Checkout-Abbrüche)',
            'Live User Testing mit 8 Target Customers',
            'Competitor Checkout Benchmarking',
            'Friction Point Mapping',
          ],
        },
        {
          phase: 'Phase 2',
          title: 'UX Strategy & Concept',
          duration: '2 Wochen',
          description: 'Entwicklung einer conversion-optimierten Checkout-Strategie mit Fokus auf Mobile-First und Friction-Reduktion.',
          activities: [
            'Checkout Flow Optimization (8 → 3 Steps)',
            'Mobile-First Redesign',
            'Guest Checkout Implementation Strategy',
            'Trust Signal Integration',
            'Error Handling & Validation Redesign',
          ],
        },
        {
          phase: 'Phase 3',
          title: 'Design & Prototyping',
          duration: '2 Wochen',
          description: 'High-Fidelity Checkout Design mit interaktiven Prototypen und Usability Testing vor Development.',
          activities: [
            'Checkout UI Design (Mobile + Desktop)',
            'Interactive Prototype mit echten Flows',
            'Usability Testing (8 Users)',
            'A/B Test Hypothesen Development',
            'Design QA & Iteration',
          ],
        },
        {
          phase: 'Phase 4',
          title: 'Implementation & Testing',
          duration: '2 Wochen',
          description: 'Schrittweise Implementation mit A/B Testing und kontinuierlicher Optimierung basierend auf Live-Daten.',
          activities: [
            'Staged Rollout (25% → 50% → 100%)',
            'A/B Testing jedes Major Changes',
            'Real-Time Performance Monitoring',
            'Error Tracking & Bug Fixes',
            'Conversion Optimization Iteration',
          ],
        },
      ],
    },
    
    deliverables: [
      {
        category: 'Discovery & Analysis',
        items: [
          'Checkout Funnel Analysis Report',
          'Friction Point Mapping',
          'User Testing Insights',
          'Competitor Benchmark Report',
          'Optimization Roadmap',
        ],
      },
      {
        category: 'UX Strategy',
        items: [
          'Optimized Checkout Flow (3-Step)',
          'Mobile-First Strategy',
          'Guest Checkout Strategy',
          'Trust Signal Framework',
          'Error Handling Guidelines',
        ],
      },
      {
        category: 'Design',
        items: [
          'High-Fidelity Checkout Design',
          'Interactive Prototypes',
          'Mobile & Desktop Designs',
          'Component Library',
          'Design System Documentation',
        ],
      },
      {
        category: 'Testing & Optimization',
        items: [
          'A/B Test Setup & Results',
          'Performance Dashboard',
          'Optimization Playbook',
          'Post-Launch Monitoring',
          'Continuous Improvement Roadmap',
        ],
      },
    ],
    
    outcomes: {
      summary: 'Die Checkout-Optimierung steigerte die Conversion um 240% und generierte €38k zusätzlichen Monthly Revenue innerhalb von 8 Wochen Post-Launch.',
      metrics: [
        { label: 'Checkout Conversion', before: '24%', after: '82%', improvement: '+240%', icon: 'TrendingUp' },
        { label: 'Mobile Checkout Completion', before: '8%', after: '76%', improvement: '+850%', icon: 'Smartphone' },
        { label: 'Steps to Payment', before: '8.2', after: '3.1', improvement: '-62%', icon: 'MousePointer' },
        { label: 'Checkout Time', before: '6m 40s', after: '2m 10s', improvement: '-67%', icon: 'Clock' },
        { label: 'Monthly Revenue', before: '€175k', after: '€213k', improvement: '+22%', icon: 'DollarSign' },
        { label: 'Customer Support Tickets', before: '84/Monat', after: '18/Monat', improvement: '-79%', icon: 'MessageCircle' },
      ],
      businessImpact: [
        '€38k zusätzlicher Monthly Revenue durch höhere Checkout-Conversion',
        '€456k zusätzlicher Jahresumsatz bei gleichem Traffic',
        'Mobile Revenue von €28k auf €89k/Monat gesteigert (+218%)',
        'Customer Support Kosten um 79% reduziert durch bessere UX',
        'ROI des Projekts nach 5 Wochen erreicht',
      ],
    },
    
    testimonial: {
      quote: 'Wir wussten, dass unser Checkout schlecht war – aber wir hatten keine Ahnung WIE schlecht. Ulis Strategic Discovery hat in 2 Wochen die kritischen Friction Points identifiziert, die uns €640k/Jahr gekostet haben. Die neue Checkout-Experience hat unsere Conversion um 240% gesteigert. €28k Investment, €456k zusätzlicher Jahresumsatz. Das war die beste Business-Entscheidung dieses Jahres.',
      author: 'Sarah M.',
      role: 'CEO & Founder',
      company: 'D2C E-Commerce Brand',
    },
    
    insights: [
      {
        title: 'Mobile-First war Game-Changer',
        description: '58% des Traffics kam von Mobile, aber nur 8% der Mobile-User haben den Checkout abgeschlossen. Der Mobile-First Redesign allein brachte 850% Improvement.',
      },
      {
        title: 'Guest Checkout war kritisch',
        description: 'Die erzwungene Registrierung war der #1 Abbruch-Grund. Guest Checkout Implementation allein steigerte die Conversion um 85%.',
      },
      {
        title: 'Iterative A/B Tests optimierten weiter',
        description: 'Auch nach Launch wurden durch kontinuierliche A/B Tests weitere 18% Conversion-Steigerung erreicht.',
      },
    ],
  },
  
  {
    slug: 'fintech-product-discovery',
    title: 'FinTech Startup: Product-Market Fit durch Strategic Discovery',
    subtitle: 'Strategic Discovery Package für B2B FinTech Startup',
    client: 'FinTech Startup (Serie A)',
    industry: 'FinTech / B2B SaaS',
    projectType: 'Strategic Discovery Package',
    duration: '5 Wochen',
    investment: '€22.000',
    
    initialSituation: {
      challenge: 'Post-Serie A FinTech Startup mit €3.5M Funding, aber ohne klaren Product-Market Fit. Das Team hatte 8 Monate in Feature-Entwicklung investiert, die niemand nutzte.',
      businessContext: 'Das Startup hatte eine Vision für eine "All-in-One Finance Platform", aber kein validiertes Problem-Statement. Churn nach 2 Monaten bei 68%, NPS bei 12. Das Product Team war frustriert und unsicher über die Roadmap.',
      painPoints: [
        'Kein validiertes Problem-Statement oder Target Persona',
        'Feature-Bloat ohne klaren Use Case (47 Features, 3 wurden genutzt)',
        'Churn Rate bei 68% nach 2 Monaten (Ziel: <20%)',
        'NPS bei 12 (Industrie-Benchmark: 40-50)',
        'Sales Cycle von 6+ Monaten ohne klare Value Prop',
        'Product Team ohne strategische Richtung',
      ],
      metrics: [
        { label: 'Churn nach 2 Monaten', value: '68%', context: 'Ziel: <20%' },
        { label: 'Feature Adoption', value: '6.4%', context: '3 von 47 Features' },
        { label: 'NPS Score', value: '12', context: 'Industrie: 40-50' },
        { label: 'Sales Cycle', value: '6+ Monate', context: 'Zu lang für B2B SaaS' },
      ],
    },
    
    strategicApproach: {
      overview: 'Intensives Strategic Discovery Package zur Identifikation des tatsächlichen Market Needs, Entwicklung einer fokussierten Product Strategy und Roadmap mit klarem PMF-Fokus.',
      phases: [
        {
          phase: 'Woche 1-2',
          title: 'Discovery & Research',
          duration: '2 Wochen',
          description: 'Deep Dive User Research mit Churned Customers, Active Users und Target Market zur Identifikation des tatsächlichen Problems.',
          activities: [
            'User Interviews mit 15 Churned Customers',
            'Interviews mit 8 High-Value Active Users',
            'Target Market Research (ICP Definition)',
            'Jobs-to-be-Done Framework',
            'Problem-Solution Fit Validation',
          ],
        },
        {
          phase: 'Woche 3',
          title: 'Strategy Definition',
          duration: '1 Woche',
          description: 'Entwicklung einer fokussierten Product Strategy mit klarem Value Prop, ICP und Feature-Priorisierung.',
          activities: [
            'ICP & Persona Definition',
            'Value Proposition Canvas',
            'Product Vision & Positioning',
            'Feature Prioritization (RICE Framework)',
            'Opportunity Solution Tree',
          ],
        },
        {
          phase: 'Woche 4',
          title: 'Roadmap Planning',
          duration: '1 Woche',
          description: 'Outcome-basierte Roadmap-Entwicklung mit Fokus auf schnelles PMF-Achievement.',
          activities: [
            'Outcome-Based Roadmap (Q1-Q4)',
            'MVP Scope Definition',
            'Success Metrics & KPI Framework',
            'Validation Strategy',
            'Go-to-Market Alignment',
          ],
        },
        {
          phase: 'Woche 5',
          title: 'Delivery & Handover',
          duration: '1 Woche',
          description: 'Executive Presentation, Team Workshops und Übergabe aller strategischen Assets.',
          activities: [
            'Executive Strategy Presentation',
            'Product Team Workshops (2x)',
            'Roadmap Handover & Priorisierung',
            'Success Metrics Setup',
            'Implementation Support Plan',
          ],
        },
      ],
    },
    
    deliverables: [
      {
        category: 'Discovery & Research',
        items: [
          'Strategic Assessment Report (38 Seiten)',
          'User Research Insights (23 Interviews)',
          'Problem-Solution Fit Analysis',
          'Jobs-to-be-Done Framework',
          'Market Opportunity Assessment',
        ],
      },
      {
        category: 'Strategy',
        items: [
          'Product Strategy Framework',
          'ICP & Persona Definition',
          'Value Proposition Canvas',
          'Product Vision Statement',
          'Positioning & Messaging',
        ],
      },
      {
        category: 'Roadmap & Prioritization',
        items: [
          'Outcome-Based Roadmap (12 Monate)',
          'Feature Prioritization Matrix (RICE)',
          'MVP Scope Definition',
          'Opportunity Solution Tree',
          'Success Metrics & KPI Dashboard',
        ],
      },
      {
        category: 'Implementation Support',
        items: [
          'Executive Presentation Deck',
          'Team Workshop Materials',
          'Validation Framework',
          'Go-to-Market Strategy',
          '90-Day Implementation Plan',
        ],
      },
    ],
    
    outcomes: {
      summary: 'Das Strategic Discovery Package verhinderte 12+ Monate Fehlentwicklung und führte zu einem klaren, validierten Product-Market Fit Fokus. 6 Monate nach Roadmap-Implementation lag die Churn Rate bei 18% und NPS bei 52.',
      metrics: [
        { label: 'Churn Rate (nach 6 Monaten)', before: '68%', after: '18%', improvement: '-74%', icon: 'TrendingDown' },
        { label: 'NPS Score', before: '12', after: '52', improvement: '+333%', icon: 'ThumbsUp' },
        { label: 'Feature Adoption', before: '6.4%', after: '34%', improvement: '+431%', icon: 'Activity' },
        { label: 'Sales Cycle', before: '6+ Monate', after: '6 Wochen', improvement: '-75%', icon: 'Clock' },
        { label: 'Product-Market Fit Score', before: '22%', after: '68%', improvement: '+209%', icon: 'Target' },
        { label: 'ARR Growth', before: 'Stagnant', after: '+180% YoY', improvement: 'Skalierung', icon: 'TrendingUp' },
      ],
      businessImpact: [
        '12+ Monate Fehlentwicklung verhindert (geschätzter Wert: €450k)',
        'Klarer Product-Market Fit Fokus mit validiertem ICP',
        'Churn von 68% auf 18% reduziert innerhalb von 6 Monaten',
        'Sales Cycle von 6+ Monaten auf 6 Wochen verkürzt',
        'ARR Growth von stagnant zu +180% YoY',
        'Runway Extension durch reduzierten Burn Rate',
      ],
    },
    
    testimonial: {
      quote: 'Wir hatten €3.5M Funding und keine Ahnung, welches Problem wir wirklich lösen. Unser Team war frustriert, Features wurden gebaut aber nicht genutzt, Churn war bei 68%. Ulis Strategic Discovery hat in 5 Wochen unsere gesamte Product Strategy neu ausgerichtet. Die User Research hat uns gezeigt, dass wir das falsche Problem für die falschen Kunden gelöst haben. Die neue fokussierte Roadmap hat uns Product-Market Fit gebracht. 6 Monate später: 18% Churn, NPS bei 52, ARR +180% YoY. Diese €22k waren das beste Investment unserer Serie A.',
      author: 'Tom K.',
      role: 'Co-Founder & CEO',
      company: 'FinTech Startup (Serie A)',
    },
    
    insights: [
      {
        title: 'Feature-Bloat ohne Strategie war das Problem',
        description: '47 Features, aber nur 3 wurden genutzt. Das Strategic Discovery identifizierte die 5 Core Features, die 80% des Value liefern.',
      },
      {
        title: 'ICP war komplett falsch',
        description: 'Das Team targetierte "alle SMBs" – Discovery zeigte, dass nur eine spezifische Sub-Nische (Consulting Firms 10-50 Mitarbeiter) wirklich Product-Market Fit hatte.',
      },
      {
        title: 'Validation Framework verhinderte weitere Fehler',
        description: 'Der Validation-Prozess stellte sicher, dass jedes neue Feature vor Development mit Target Users validiert wurde.',
      },
    ],
  },
];

export const getCaseStudyBySlug = (slug: string): CaseStudyData | undefined => {
  return caseStudies.find(cs => cs.slug === slug);
};

export const getAllCaseStudySlugs = (): string[] => {
  return caseStudies.map(cs => cs.slug);
};
