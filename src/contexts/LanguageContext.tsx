import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'de';

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
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Only use German as the language
  const [language] = useState<Language>('de');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  // Keep setLanguage function for backwards compatibility, but it won't change the language
  const setLanguage = (_: Language) => {};

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
