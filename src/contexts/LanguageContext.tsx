
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  toggleLanguage: () => void;
  getPathInLanguage: (path: string, targetLang?: Language) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// URL mapping between languages
const pathMapping: Record<string, Record<Language, string>> = {
  // German to English
  '/': { de: '/', en: '/en' },
  '/webdesign': { de: '/webdesign', en: '/en/web-design' },
  '/webentwicklung': { de: '/webentwicklung', en: '/en/web-development' },
  '/content-erstellung': { de: '/content-erstellung', en: '/en/content-creation' },
  '/seo-optimierung': { de: '/seo-optimierung', en: '/en/seo-optimization' },
  '/google-ads': { de: '/google-ads', en: '/en/google-ads' },
  '/ki-technologien': { de: '/ki-technologien', en: '/en/ai-technologies' },
  '/case-studies': { de: '/case-studies', en: '/en/case-studies' },
  '/ueber-ooliv': { de: '/ueber-ooliv', en: '/en/about-ooliv' },
  '/kontakt': { de: '/kontakt', en: '/en/contact' },
  '/impressum': { de: '/impressum', en: '/en/legal-notice' },
  '/datenschutz': { de: '/datenschutz', en: '/en/privacy-policy' },
  '/danke': { de: '/danke', en: '/en/thank-you' },
  
  // English to German
  '/en': { en: '/en', de: '/' },
  '/en/web-design': { en: '/en/web-design', de: '/webdesign' },
  '/en/web-development': { en: '/en/web-development', de: '/webentwicklung' },
  '/en/content-creation': { en: '/en/content-creation', de: '/content-erstellung' },
  '/en/seo-optimization': { en: '/en/seo-optimization', de: '/seo-optimierung' },
  '/en/google-ads': { en: '/en/google-ads', de: '/google-ads' },
  '/en/ai-technologies': { en: '/en/ai-technologies', de: '/ki-technologien' },
  '/en/case-studies': { en: '/en/case-studies', de: '/case-studies' },
  '/en/about-ooliv': { en: '/en/about-ooliv', de: '/ueber-ooliv' },
  '/en/contact': { en: '/en/contact', de: '/kontakt' },
  '/en/legal-notice': { en: '/en/legal-notice', de: '/impressum' },
  '/en/privacy-policy': { en: '/en/privacy-policy', de: '/datenschutz' },
  '/en/thank-you': { en: '/en/thank-you', de: '/danke' },
};

export const translations = {
  de: {
    // Navbar
    'nav.solutions': 'Lösungen',
    'nav.process': 'Prozess',
    'nav.cases': 'Case Studies',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.scheduleCall': 'Termin vereinbaren',
    'nav.language': 'EN',
    
    // Menu items
    'menu.home': 'Home',
    'menu.webdesign': 'Webdesign',
    'menu.webdevelopment': 'Webentwicklung',
    'menu.contentCreation': 'Content-Erstellung',
    'menu.seo': 'SEO-Optimierung',
    'menu.googleAds': 'Google Ads',
    'menu.aiTechnologies': 'KI-Technologien',
    'menu.caseStudies': 'Case Studies',
    'menu.aboutUs': 'Über ooliv',
    'menu.contact': 'Kontakt',
    
    // Hero
    'hero.title': "Werbeagentur Mainz – Leistungsstarke Websites für SEO, Konversionen & Wachstum",
    'hero.subtitle': "Bei ooliv erstellen wir Websites, die besser ranken, mehr konvertieren und messbaren Geschäftserfolg bringen.",
    'hero.description': "Wir erstellen leistungsstarke Websites, die Leads generieren, besser ranken und Besucher in Kunden verwandeln. Ob Relaunch oder neue Website, wir sorgen dafür, dass Ihre Website messbaren Geschäftserfolg bringt.",
    'hero.startProject': "Projekt starten",
    'hero.seeWork': "Unsere Arbeiten ansehen",
    
    // Challenge
    'challenge.title': 'Ihre Website sollte für Sie arbeiten – nicht gegen Sie.',
    'challenge.description': 'Viele Unternehmen kämpfen mit Websites, die nicht performant sind – sei es, weil sie veraltet, zu langsam sind oder noch gar nicht existieren. Eine Website, die keine Leads generiert, kein Vertrauen aufbaut oder bei Google nicht gut rankt, ist eine verpasste Chance.',
    
    // Solution
    'solution.title': 'Wir erstellen Websites, die Ihr Unternehmen voranbringen—',
    'solution.subtitle': 'Mit Strategie, Expertise & intelligenter Technologie',
    'solution.description': 'Ob Sie ein neues Unternehmen gründen oder eine veraltete Website aktualisieren, unser Expertenteam kombiniert strategisches Denken, nutzerorientiertes Design und modernste Tools, um leistungsstarke digitale Erlebnisse zu schaffen. KI verbessert die Effizienz – aber Kreativität, Erfahrung und datengestützte Entscheidungen stehen im Mittelpunkt unseres Ansatzes.',
    'solution.learnMore': 'Mehr über unseren Prozess erfahren',
    
    // Testimonials
    'testimonials.title': 'Wir erstellen Websites, die',
    'testimonials.subtitle': 'echte Geschäftsergebnisse liefern.',
    
    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    
    // CTA
    'cta.title': 'Lassen Sie uns eine Website erstellen, die Ihr Unternehmen voranbringt.',
    'cta.subtitle': 'Ihre Website sollte ein Wachstumsmotor sein, keine Einschränkung. Lassen Sie uns Ihre Herausforderungen besprechen, Ihre aktuelle Einrichtung analysieren und einen Plan erstellen, um Ihre digitale Präsenz in einen Geschäftsvorteil zu verwandeln – effizient, strategisch und mit den neuesten KI-gestützten Erkenntnissen.',
    'cta.audit': 'Kostenlose Website-Prüfung anfordern',
    'cta.call': 'Strategiegespräch vereinbaren',
    'cta.work': 'Unsere Arbeiten ansehen',
    
    // Footer
    'footer.about': 'Über ooliv',
    'footer.aboutText': 'Wir erstellen leistungsstarke Websites, die das Geschäftswachstum fördern. Mit über 16 Jahren Erfahrung, KI-gestützten Strategien und einem ergebnisorientierten Ansatz helfen wir Unternehmen, in der digitalen Welt erfolgreich zu sein.',
    'footer.startProject': 'Projekt starten',
    'footer.services': 'Dienstleistungen',
    'footer.webDesign': 'Webdesign',
    'footer.webDevelopment': 'Webentwicklung',
    'footer.contentCreation': 'Content-Erstellung',
    'footer.seo': 'SEO-Optimierung',
    'footer.ads': 'Google Ads',
    'footer.aiTechnologies': 'KI-Technologien',
    'footer.company': 'Unternehmen',
    'footer.aboutUs': 'Über uns',
    'footer.caseStudies': 'Case Studies',
    'footer.contact': 'Kontakt',
    'footer.jobs': 'Karriere',
    'footer.legal.privacy': 'Datenschutz',
    'footer.legal.imprint': 'Impressum',
    'footer.contactInfo': 'Kontakt',
    'footer.location': 'Mainz, Deutschland',
    'footer.copyright': '© 2024 ooliv. Alle Rechte vorbehalten.',
    'footer.ctaBanner': 'Brauchen Sie eine Website, die Ihr Geschäft wachsen lässt? Sprechen wir darüber.'
  },
  
  en: {
    // Navbar
    'nav.solutions': 'Solutions',
    'nav.process': 'Process',
    'nav.cases': 'Case Studies',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.scheduleCall': 'Schedule a Call',
    'nav.language': 'DE',
    
    // Menu items
    'menu.home': 'Home',
    'menu.webdesign': 'Web Design',
    'menu.webdevelopment': 'Web Development',
    'menu.contentCreation': 'Content Creation',
    'menu.seo': 'SEO Optimization',
    'menu.googleAds': 'Google Ads',
    'menu.aiTechnologies': 'AI Technologies',
    'menu.caseStudies': 'Case Studies',
    'menu.aboutUs': 'About ooliv',
    'menu.contact': 'Contact',
    
    // Hero
    'hero.title': "Advertising Agency Mainz – Powerful Websites for SEO, Conversions & Growth",
    'hero.subtitle': "At ooliv, we create websites that rank higher, convert better, and drive measurable business success.",
    'hero.description': "We build high-performance websites that generate leads, rank higher, and turn visitors into customers. Whether it's a relaunch or a new website, we ensure your digital presence delivers measurable business results.",
    'hero.startProject': "Start Your Project",
    'hero.seeWork': "See Our Work",
    
    // Challenge
    'challenge.title': 'Your Website Should Work for You – Not Against You.',
    'challenge.description': "Many businesses struggle with underperforming websites – whether they're outdated, too slow, or don't exist yet. A website that fails to generate leads, build trust, or rank well on Google is a missed opportunity.",
    
    // Solution
    'solution.title': 'We Build Websites That Move Your Business Forward—',
    'solution.subtitle': 'With Strategy, Expertise & Intelligent Technology',
    'solution.description': "Whether you're launching a new business or updating an outdated website, our expert team combines strategic thinking, user-focused design, and cutting-edge tools to create powerful digital experiences. AI enhances efficiency – but creativity, experience, and data-driven decisions remain at the core of our approach.",
    'solution.learnMore': 'Learn More About Our Process',
    
    // Testimonials
    'testimonials.title': 'We build websites that',
    'testimonials.subtitle': 'deliver real business results.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // CTA
    'cta.title': "Let's Build a Website That Drives Your Business Forward.",
    'cta.subtitle': "Your website should be a growth engine, not a constraint. Let's discuss your challenges, analyze your current setup, and create a plan to transform your digital presence into a business advantage – efficiently, strategically, and with the latest AI-powered insights.",
    'cta.audit': 'Request Free Website Audit',
    'cta.call': 'Schedule Strategy Call',
    'cta.work': 'See Our Work',
    
    // Footer
    'footer.about': 'About ooliv',
    'footer.aboutText': 'We create high-performance websites that drive business growth. With over 16 years of experience, AI-powered strategies, and a results-driven approach, we help businesses succeed in the digital world.',
    'footer.startProject': 'Start Your Project',
    'footer.services': 'Services',
    'footer.webDesign': 'Web Design',
    'footer.webDevelopment': 'Web Development',
    'footer.contentCreation': 'Content Creation',
    'footer.seo': 'SEO Optimization',
    'footer.ads': 'Google Ads',
    'footer.aiTechnologies': 'AI Technologies',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.caseStudies': 'Case Studies',
    'footer.contact': 'Contact',
    'footer.jobs': 'Careers',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.imprint': 'Legal Notice',
    'footer.contactInfo': 'Contact',
    'footer.location': 'Mainz, Germany',
    'footer.copyright': '© 2024 ooliv. All rights reserved.',
    'footer.ctaBanner': "Need a website that grows your business? Let's talk about it."
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('de');
  
  // Determine language based on URL path on initial load and route changes
  useEffect(() => {
    const currentPath = location.pathname;
    const isEnglishPath = currentPath.startsWith('/en');
    setLanguageState(isEnglishPath ? 'en' : 'de');
  }, [location.pathname]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Get the equivalent path in the target language
  const getPathInLanguage = (currentPath: string, targetLang?: Language): string => {
    const langToUse = targetLang || language;
    const oppositeLang: Language = langToUse === 'de' ? 'en' : 'de';
    
    // Check if we have a direct mapping for this path
    for (const [path, langs] of Object.entries(pathMapping)) {
      if (currentPath === path) {
        return langs[oppositeLang];
      }
    }
    
    // Handle root paths
    if (currentPath === '/' && oppositeLang === 'en') return '/en';
    if (currentPath === '/en' && oppositeLang === 'de') return '/';
    
    // For paths that don't have a direct mapping
    if (langToUse === 'de' && currentPath.startsWith('/en/')) {
      return currentPath.replace('/en/', '/');
    } else if (langToUse === 'en' && !currentPath.startsWith('/en/')) {
      return `/en${currentPath}`;
    }
    
    return currentPath;
  };

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'de' ? 'en' : 'de';
    const newPath = getPathInLanguage(location.pathname, newLanguage);
    navigate(newPath);
    setLanguageState(newLanguage);
  };

  const setLanguage = (lang: Language) => {
    const newPath = getPathInLanguage(location.pathname, lang);
    navigate(newPath);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage, getPathInLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
