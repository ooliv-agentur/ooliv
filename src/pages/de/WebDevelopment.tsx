
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import { useLanguage } from '@/contexts/LanguageContext';
import CTA from '@/components/CTA';

const GermanWebDevelopment = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const webDevFaqs = [
    {
      question: "Mit welchen Plattformen arbeitet ihr als WordPress Agentur in Mainz?",
      answer: "Wir entwickeln sowohl vollständig kodierte Websites (ohne CMS) als auch maßgeschneiderte WordPress-Lösungen. Als spezialisierte WordPress Agentur in Mainz bieten wir Ihnen beide Optionen an."
    },
    {
      question: "Kann eine WordPress Agentur auch Websites ohne CMS erstellen?",
      answer: "Ja – wir entwickeln oft auch vollständig maßgeschneiderte Websites mit HTML, CSS und JavaScript. Sauber, schnell und sicher. Als WordPress Agentur in Mainz kennen wir die Vor- und Nachteile beider Ansätze."
    },
    {
      question: "Kann eure WordPress Agentur in Mainz auch Shop-Funktionen einbauen?",
      answer: "Absolut – wir arbeiten mit WooCommerce (für WordPress) und Shopify (für ausgewählte Projekte) und integrieren diese nahtlos in Ihre Website."
    },
    {
      question: "Bietet ihr als WordPress Agentur auch Support nach dem Launch?",
      answer: "Ja. Wir bleiben für Updates, Verbesserungen und Performance-Monitoring verfügbar. Als verlässliche WordPress Agentur in Mainz lassen wir Sie nicht allein."
    },
    {
      question: "Wie stellt ihr als WordPress Agentur schnelle Ladezeiten sicher?",
      answer: "Wir verwenden leichtgewichtigen Code, optimieren jedes Asset und führen während der Entwicklung Performance-Tests durch. Schnelligkeit ist ein zentrales Merkmal unserer Arbeit als WordPress Agentur in Mainz."
    },
    {
      question: "Kann eure WordPress Agentur auch bestehende Websites verbessern?",
      answer: "Absolut. Wir übernehmen auch Redesigns, Geschwindigkeitsverbesserungen und CMS-Bereinigungen. Als erfahrene WordPress Agentur in Mainz kennen wir die typischen Probleme und deren Lösungen."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStaticDE />
      <WebDevProcess />
      <WebDevServices />
      
      {/* Global Case Studies Section instead of WebDevCaseStudies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            Webentwicklung Erfolgsgeschichten
          </h2>
          <CaseStudiesSection showAll={true} showCta={true} />
        </div>
      </section>
      
      <FAQ customFaqs={webDevFaqs} />
      <CTA 
        title="Lassen Sie uns Ihr Webentwicklungs-Projekt besprechen"
        subtitle="Wir entwickeln eine skalierbare, sichere Website, die perfekt zu Ihren Geschäftszielen passt."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanWebDevelopment;
