
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import HeroWebentwicklung from '@/components/hero/HeroWebentwicklung';
import WebDevBenefits from '@/components/web-development/WebDevBenefitsDE';
import WebDevServices from '@/components/web-development/WebDevServicesDE';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';

const Webentwicklung = () => {
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
      <Helmet>
        <title>WordPress Agentur Mainz | Flexible Websites mit System</title>
        <meta name="description" content="Ihre WordPress Agentur aus Mainz: ooliv entwickelt skalierbare Websites mit Pagebuilder oder individuellem Code – flexibel, sicher, SEO-ready." />
      </Helmet>

      <HeroWebentwicklung />
      <WebDevBenefits />
      <WebDevCmsVsStaticDE />
      <WebDevProcessNewDE />
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

export default Webentwicklung;
