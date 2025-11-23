export interface MicroCase {
  id: string;
  clientName: string;
  industry: string;
  result: string;
  description: string;
  websiteUrl: string;
  logoPath: string;
}

export const microCasesData: Record<string, MicroCase> = {
  klaiber: {
    id: 'klaiber',
    clientName: 'KLAIBER',
    industry: 'Beratung',
    result: '+92% Sichtbarkeit',
    description: 'Strategische Neupositionierung & modernes UX-Design',
    websiteUrl: 'https://www.kl-klaiber.de',
    logoPath: '/lovable-uploads/klaiber-logo.png',
  },
  cobus: {
    id: 'cobus',
    clientName: 'COBUS Industries',
    industry: 'Industrie',
    result: '+160% Interaktionen',
    description: 'B2B UX-Konzept für Technik & Service',
    websiteUrl: 'https://www.cobus-industries.de',
    logoPath: '/lovable-uploads/cobus-logo.png',
  },
  iconpro: {
    id: 'iconpro',
    clientName: 'IconPro',
    industry: 'KI-Software',
    result: '+45% Engagement',
    description: 'Komplexe KI-Software visuell verständlich erklärt',
    websiteUrl: 'https://www.iconpro.com',
    logoPath: '/lovable-uploads/iconpro-logo.png',
  },
  spez: {
    id: 'spez',
    clientName: 'SPEZ AG',
    industry: 'Handwerk',
    result: '+90% Conversion',
    description: 'Neue digitale Customer Journey',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/spez-logo.png',
  },
  scheurich: {
    id: 'scheurich',
    clientName: 'Scheurich',
    industry: 'E-Commerce',
    result: '+35% Performance',
    description: 'UX-Optimierung für Webshop – bessere Struktur',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/scheurich-logo.png',
  },
  leidmann: {
    id: 'leidmann',
    clientName: 'Leidmann',
    industry: 'E-Commerce',
    result: '+50% Käuferführung',
    description: 'E-Commerce UX & Content-Konzept – klare Struktur',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/leidmann-logo.png',
  },
  medicloud: {
    id: 'medicloud',
    clientName: 'MediCloud Med',
    industry: 'SaaS',
    result: '+120% Nutzerflows',
    description: 'SaaS UX-Konzept – klare Use Cases & medizinische Nutzerflows',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/medicloud-logo.png',
  },
  alc: {
    id: 'alc',
    clientName: 'ALC',
    industry: 'Logistik',
    result: '+75% Leads',
    description: 'B2B-Website mit Servicefokus – klare Struktur & Lead-Funnel',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/alc-logo.png',
  },
  mdi: {
    id: 'mdi',
    clientName: 'MDI',
    industry: 'Industrie',
    result: '+60% Interface',
    description: 'Technische Produktwebsite – strukturierter Aufbau & modernes Interface',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/mdi-logo.png',
  },
  fibona: {
    id: 'fibona',
    clientName: 'FIBONA',
    industry: 'Immobilien',
    result: '+85% Lead-Optimierung',
    description: 'Immobilienwebsite mit Objektstruktur – moderne UI & Lead-Optimierung',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/fibona-logo.png',
  },
  enwas: {
    id: 'enwas',
    clientName: 'enwas',
    industry: 'Energie',
    result: '+110% Sichtbarkeit',
    description: 'Regionale Sichtbarkeit gesteigert – technische Optimierung',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/enwas-logo.png',
  },
  noxus: {
    id: 'noxus',
    clientName: 'NOXUSGROUP',
    industry: 'Bau',
    result: '+95% Rankings',
    description: 'Lead-System & SEO-Fundament – lokale Rankings verbessert',
    websiteUrl: '#',
    logoPath: '/lovable-uploads/noxus-logo.png',
  },
};

export const getMicroCases = (caseIds: string[]): MicroCase[] => {
  return caseIds
    .map(id => microCasesData[id])
    .filter(Boolean)
    .slice(0, 3); // Max 3 cases
};
