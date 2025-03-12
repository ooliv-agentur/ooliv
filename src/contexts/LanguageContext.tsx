import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navbar
    'nav.solutions': 'Solutions',
    'nav.process': 'Process',
    'nav.cases': 'Cases',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'nav.scheduleCall': 'Schedule Call',
    
    // Hero
    'hero.title': "Your Website Should Drive Business Growth. Let's Build It Right.",
    'hero.subtitle': "We Make Sure It Does.",
    'hero.description': "Your website is more than just design—it's a strategic tool for success. Whether you need a complete relaunch or a brand-new online presence, we create high-performance websites that attract customers, build trust, and generate measurable results.",
    'hero.startProject': "Start Your Website Project",
    'hero.seeWork': "See Our Work",
    
    // Challenge
    'challenge.title': 'Your Website Should Work for You—Not Against You.',
    'challenge.description': "Many businesses struggle with websites that don't perform—whether they're outdated, too slow, or don't exist yet. A website that doesn't generate leads, build trust, or rank well on Google is a wasted opportunity.",
    
    // Solution
    'solution.title': 'We Build Websites That Grow Your Business—',
    'solution.subtitle': 'With Smart, AI-Driven Solutions.',
    'solution.description': "Whether you're launching a new business or upgrading an outdated website, we use AI-powered tools to create websites that rank better, load faster, and convert more visitors into customers.",
    'solution.learnMore': 'Learn more about our process',
    
    // Testimonials
    'testimonials.title': 'We Create Websites That Deliver',
    'testimonials.subtitle': 'Real Business Results.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    
    // CTA
    'cta.title': "Let's Build a Website That Moves Your Business Forward.",
    'cta.subtitle': "Your website should be a growth engine, not a limitation. Let's discuss your challenges, analyze your current setup, and create a plan to turn your digital presence into a business asset—efficiently, strategically, and powered by the latest AI-driven insights.",
    'cta.audit': 'Request a Free Website Audit',
    'cta.call': 'Schedule a Strategy Call',
    'cta.work': 'See Our Work',
    
    // Footer
    'footer.about': 'About ooliv',
    'footer.aboutText': 'We create high-performance websites that drive business growth. With 16+ years of experience, AI-powered strategies, and a results-driven approach, we help businesses succeed in the digital world.',
    'footer.startProject': 'Start Your Project',
    'footer.services': 'Services',
    'footer.webDesign': 'Web Design',
    'footer.seo': 'SEO Optimization',
    'footer.ads': 'Google Ads',
    'footer.branding': 'Branding',
    'footer.company': 'Company',
    'footer.aboutUs': 'About Us',
    'footer.caseStudies': 'Case Studies',
    'footer.contact': 'Contact',
    'footer.jobs': 'Jobs',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.imprint': 'Imprint',
    'footer.contactInfo': 'Contact',
    'footer.location': 'Mainz, Germany',
    'footer.copyright': '© 2024 ooliv. All rights reserved.',
    'footer.ctaBanner': "Need a Website That Grows Your Business? Let's Talk."
  },
  de: {
    // Navbar
    'nav.solutions': 'Lösungen',
    'nav.process': 'Prozess',
    'nav.cases': 'Projekte',
    'nav.faq': 'FAQ',
    'nav.contact': 'Kontakt',
    'nav.scheduleCall': 'Termin vereinbaren',
    
    // Hero
    'hero.title': "Ihre Website sollte Ihr Geschäftswachstum fördern. Lassen Sie uns sie richtig bauen.",
    'hero.subtitle': "Wir sorgen dafür.",
    'hero.description': "Ihre Website ist mehr als nur Design – sie ist ein strategisches Werkzeug für Ihren Erfolg. Ob Sie ein neues Unternehmen gründen oder eine veraltete Website aktualisieren, wir nutzen KI-gestützte Tools, um Websites zu erstellen, die besser ranken, schneller laden und mehr Besucher in Kunden umwandeln.",
    'hero.startProject': "Starten Sie Ihr Website-Projekt",
    'hero.seeWork': "Unsere Arbeiten ansehen",
    
    // Challenge
    'challenge.title': 'Ihre Website sollte für Sie arbeiten – nicht gegen Sie.',
    'challenge.description': 'Viele Unternehmen kämpfen mit Websites, die nicht performant sind – sei es, weil sie veraltet, zu langsam sind oder noch gar nicht existieren. Eine Website, die keine Leads generiert, kein Vertrauen aufbaut oder bei Google nicht gut rankt, ist eine verpasste Chance.',
    
    // Solution
    'solution.title': 'Wir erstellen Websites, die Ihr Geschäft wachsen lassen –',
    'solution.subtitle': 'Mit intelligenten, KI-gestützten Lösungen.',
    'solution.description': 'Ob Sie ein neues Unternehmen gründen oder eine veraltete Website aktualisieren, wir nutzen KI-gestützte Tools, um Websites zu erstellen, die besser ranken, schneller laden und mehr Besucher in Kunden umwandeln.',
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
    'footer.seo': 'SEO-Optimierung',
    'footer.ads': 'Google Ads',
    'footer.branding': 'Branding',
    'footer.company': 'Unternehmen',
    'footer.aboutUs': 'Über uns',
    'footer.caseStudies': 'Fallstudien',
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
  const [language, setLanguage] = useState<Language>('en');

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
