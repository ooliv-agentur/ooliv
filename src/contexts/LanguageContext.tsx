import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  de: {
    // Navbar
    'nav.solutions': 'Lösungen',
    'nav.process': 'Prozess',
    'nav.cases': 'Case Studies',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.scheduleCall': 'Termin vereinbaren',
    
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
    'nav.scheduleCall': 'Schedule Call',
    
    // Hero
    'hero.title': "Marketing Agency Mainz – High-Performance Websites for SEO, Conversions & Growth",
    'hero.subtitle': "At ooliv, we create websites that rank better, convert more, and deliver measurable business success.",
    'hero.description': "We build high-performance websites that generate leads, rank better, and turn visitors into customers. Whether it's a relaunch or a new website, we ensure your website delivers measurable business success.",
    'hero.startProject': "Start Project",
    'hero.seeWork': "See Our Work",
    
    // Challenge
    'challenge.title': 'Your website should work for you – not against you.',
    'challenge.description': "Many companies struggle with websites that don't perform – whether because they're outdated, too slow, or don't even exist yet. A website that doesn't generate leads, build trust, or rank well on Google is a missed opportunity.",
    
    // Solution
    'solution.title': 'We build websites that move your business forward—',
    'solution.subtitle': 'With Strategy, Expertise & Intelligent Technology',
    'solution.description': "Whether you're launching a new business or updating an outdated website, our team of experts combines strategic thinking, user-focused design, and cutting-edge tools to create powerful digital experiences. AI enhances efficiency – but creativity, experience, and data-driven decisions are at the heart of our approach.",
    'solution.learnMore': 'Learn more about our process',
    
    // Testimonials
    'testimonials.title': 'We build websites that',
    'testimonials.subtitle': 'deliver real business results.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // CTA
    'cta.title': "Let's build a website that drives your business forward.",
    'cta.subtitle': "Your website should be an engine for growth, not a limitation. Let's discuss your challenges, analyze your current setup, and create a plan to turn your digital presence into a business advantage – efficiently, strategically, and with the latest AI-powered insights.",
    'cta.audit': 'Request Free Website Audit',
    'cta.call': 'Schedule Strategy Call',
    'cta.work': 'See Our Work',
    
    // Footer
    'footer.about': 'About ooliv',
    'footer.aboutText': 'We create high-performance websites that drive business growth. With over 16 years of experience, AI-powered strategies, and a results-oriented approach, we help businesses succeed in the digital world.',
    'footer.startProject': 'Start Project',
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
  // Get initial language based on URL path
  const getInitialLanguage = (): Language => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/en')) {
        return 'en';
      }
    }
    return 'de'; // Default to German
  };

  const [language, setLanguage] = useState<Language>(getInitialLanguage());

  // Debug language changes
  useEffect(() => {
    console.log('Language context updated:', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
