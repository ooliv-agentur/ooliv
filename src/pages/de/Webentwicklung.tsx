
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import WebDevHeroDE from '@/components/web-development/WebDevHeroDE';
import WebDevServicesDE from '@/components/web-development/WebDevServicesDE';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';
import WebDevBenefitsDE from '@/components/web-development/WebDevBenefitsDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';
import WebDevSEOText from '@/components/web-development/WebDevSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const faqs = [
  {
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer: "Die Entwicklungszeit hängt von der Komplexität ab. Einfache Websites sind in 2-4 Wochen fertig, komplexere Projekte benötigen 6-12 Wochen. Wir erstellen einen detaillierten Zeitplan für Ihr Projekt."
  },
  {
    question: "Welche Technologien nutzen Sie für die Webentwicklung?",
    answer: "Wir verwenden moderne, bewährte Technologien wie React, WordPress, und headless CMS-Systeme. Die Auswahl richtet sich nach Ihren spezifischen Anforderungen und Zukunftsplänen."
  },
  {
    question: "Bieten Sie auch Wartung und Support nach der Entwicklung?",
    answer: "Ja, wir bieten umfassende Wartung und Support an. Das beinhaltet Updates, Sicherheitspatches, technische Optimierungen und bei Bedarf auch Erweiterungen Ihrer Website."
  },
  {
    question: "Können Sie bestehende Websites überarbeiten oder neu entwickeln?",
    answer: "Sowohl als auch. Wir analysieren Ihre bestehende Website und empfehlen, ob eine Überarbeitung ausreicht oder eine Neuentwicklung sinnvoller ist. Oft ist eine komplette Neuentwicklung langfristig wirtschaftlicher."
  }
];

const GermanWebentwicklung = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Webentwicklung Mainz – Maßgeschneiderte Lösungen für Ihr Business</title>
        <meta 
          name="description" 
          content="Professionelle Webentwicklung aus Mainz. Von WordPress bis zu individuellen Webanwendungen – wir entwickeln skalierbare Lösungen für Ihr Unternehmen." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <WebDevHeroDE />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <WebDevServicesDE />
          <WebDevProcessNewDE />
          <WebDevBenefitsDE />
          <WebDevCmsVsStaticDE />
          <FAQ 
            customFaqs={faqs}
            customTitle="Häufige Fragen zur Webentwicklung"
            customCtaText="Weitere Fragen? Kontaktieren Sie uns"
          />
          <WebDevCTA />
        </div>
      </div>
      
      <WebDevSEOText />
    </>
  );
};

export default GermanWebentwicklung;
