
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHeroDE';
import WebDevBenefits from '@/components/web-development/WebDevBenefitsDE';
import WebDevServices from '@/components/web-development/WebDevServicesDE';
import WebDevProcess from '@/components/web-development/WebDevProcessDE';
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
      question: "Mit welchen Plattformen arbeitet ihr?",
      answer: "Wir entwickeln vollständig codierte Websites (ohne CMS) und maßgeschneiderte WordPress-Lösungen – je nachdem, was besser zu Ihrem Business passt."
    },
    {
      question: "Kann ooliv auch Shops entwickeln?",
      answer: "Ja – WooCommerce innerhalb von WordPress oder Shopify für gezielte B2B-Cases."
    },
    {
      question: "Ist Performance bei euch Standard?",
      answer: "Absolut. Unsere Seiten sind schnell, SEO-optimiert und laufen zuverlässig auf allen Geräten."
    },
    {
      question: "Gibt es Betreuung nach dem Launch?",
      answer: "Ja. Wir begleiten Sie weiter mit technischer Betreuung, Updates und Tracking."
    },
    {
      question: "Könnt ihr bestehende Websites verbessern?",
      answer: "Ja. Wir analysieren, ob Optimierung sinnvoll ist – oder ein Relaunch effizienter wäre."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStaticDE />
      <WebDevProcess />
      <WebDevServices />
      
      {/* Global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
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
