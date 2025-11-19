
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHeroDE';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import WebDevBenefits from '@/components/web-development/WebDevBenefitsDE';
import WebDevServices from '@/components/web-development/WebDevServicesDE';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';

import { Link } from 'react-router-dom';

const GermanWebDevelopment = () => {
  const webDevFaqs = [
    {
      question: "Was kostet eine professionell entwickelte Website?",
      answer: "Eine maßgeschneiderte B2B-Website startet bei 15.000–25.000€ mit Strategie, Design und Entwicklung. Komplexe Projekte mit Custom-Features oder Shop-Integration liegen bei 30.000–80.000€. Sie erhalten vorab ein transparentes Festpreis-Angebot."
    },
    {
      question: "Arbeiten Sie mit WordPress oder programmieren Sie komplett neu?",
      answer: "Beides möglich. Für Content-lastige B2B-Websites nutze ich oft WordPress – aber individuell entwickelt, keine fertigen Themes. Für maximale Performance oder spezielle Anforderungen entwickle ich auch komplett custom. Wir wählen die beste Lösung für Ihr Projekt."
    },
    {
      question: "Wie lange dauert die Entwicklung einer neuen Website?",
      answer: "Typischerweise 8–12 Wochen: 2 Wochen Strategie & Konzept, 3–4 Wochen Design, 3–4 Wochen Entwicklung, 2 Wochen Testing & Optimierung. Bei größeren Projekten entsprechend länger. Sie erhalten einen klaren Zeitplan vor Projektstart."
    },
    {
      question: "Können Sie auch Online-Shops entwickeln?",
      answer: "Ja. Für WordPress nutze ich WooCommerce, für spezialisierte B2B-Shops auch Shopify oder Custom-Lösungen. Inklusive Payment-Integration, Produktverwaltung und Bestellprozess-Optimierung – alles aus einer Hand."
    },
    {
      question: "Ist Performance und Geschwindigkeit bei Ihnen Standard?",
      answer: "Absolut. Jede Website wird auf Geschwindigkeit optimiert: Schnelle Ladezeiten, SEO-optimierter Code, mobile-optimiert. Performance ist kein Nice-to-have, sondern Grundvoraussetzung – für Google-Rankings und Ihre Nutzer."
    },
    {
      question: "Was passiert nach dem Launch?",
      answer: "Das entscheiden Sie: Entweder vollständige Übergabe an Ihr Team – oder laufende Betreuung durch mich. Viele Kunden nutzen monatliche Wartungsverträge für technische Updates, Performance-Optimierung und Content-Erweiterungen."
    }
  ];

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Webentwicklung", url: "https://ooliv.de/webentwicklung" }
  ];

  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="WordPress Agentur Mainz – Schnelle, SEO-optimierte Websites"
        description="ooliv Werbeagentur aus Mainz: WordPress-Agentur für B2B-Unternehmen. Mehr Leads durch Webdesign, SEO, Google Ads & Content-Marketing. Jetzt informieren."
        canonicalUrl="https://ooliv.de/webentwicklung"
        keywords="Webentwicklung Mainz, Website Entwicklung, Full Stack Development, ooliv"
        breadcrumbs={breadcrumbs}
      />

      <WebDevHero />
      <WebDevBenefits />
      <WebDevCmsVsStaticDE />
      <WebDevProcessNewDE />
       <WebDevServices />

       <p className="text-center text-sm text-medico-darkGreen mt-4">
         Mehr über <Link to="/" className="underline hover:no-underline">ooliv und unsere Arbeitsweise</Link>.
       </p>
      
      {/* Global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ customFaqs={webDevFaqs} />
      <CTA 
        title="Lassen Sie uns über Ihr Website-Projekt sprechen"
        subtitle="Wir entwickeln eine skalierbare, sichere Website, die perfekt zu Ihren Geschäftszielen passt."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
        lightBackground={true}
      />
    </PageLayout>
  );
};

export default GermanWebDevelopment;
