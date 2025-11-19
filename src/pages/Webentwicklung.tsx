
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHeroDE';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import WebDevBenefits from '@/components/web-development/WebDevBenefitsDE';
import WebDevWhyUs from '@/components/web-development/WebDevWhyUs';
import WebDevServices from '@/components/web-development/WebDevServicesDE';
import WebDevProcessNewDE from '@/components/web-development/WebDevProcessNewDE';
import WebDevCmsVsStaticDE from '@/components/web-development/WebDevCmsVsStaticDE';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import RelatedServicesGrid from '@/components/web-development/RelatedServicesGrid';
import FAQ from '@/components/FAQ';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';
import StickyCTA from '@/components/conversion/StickyCTA';

const GermanWebDevelopment = () => {
  const webDevFaqs = [
    {
      question: "Was kostet eine professionell entwickelte Website?",
      answer: "Die Kosten variieren je nach Umfang, Technologie-Stack und Anforderungen Ihres Projekts. Nach einem kostenlosen Erstgespräch erstellen wir Ihnen ein transparentes Festpreis-Angebot, das exakt auf Ihre Bedürfnisse zugeschnitten ist – ohne versteckte Kosten."
    },
    {
      question: "Arbeiten Sie mit WordPress oder programmieren Sie komplett neu?",
      answer: "Beides möglich. Für Content-lastige B2B-Websites nutzen wir oft WordPress – aber individuell entwickelt, keine fertigen Themes. Ich koordiniere die Technologie-Auswahl persönlich mit Ihnen. Für maximale Performance oder spezielle Anforderungen entwickeln wir auch komplett custom. Wir wählen die beste Lösung für Ihr Projekt."
    },
    {
      question: "Wie lange dauert die Entwicklung einer neuen Website?",
      answer: "Typischerweise 8–12 Wochen: 2 Wochen Strategie & Konzept, 3–4 Wochen Design, 3–4 Wochen Entwicklung, 2 Wochen Testing & Optimierung. Bei größeren Projekten entsprechend länger. Sie erhalten einen klaren Zeitplan vor Projektstart."
    },
    {
      question: "Können Sie auch Online-Shops entwickeln?",
      answer: "Ja. Für WordPress nutzen wir WooCommerce, für spezialisierte B2B-Shops auch Shopify oder Custom-Lösungen. Inklusive Payment-Integration, Produktverwaltung und Bestellprozess-Optimierung – alles aus einer Hand."
    },
    {
      question: "Ist Performance und Geschwindigkeit bei Ihnen Standard?",
      answer: "Absolut. Jede Website wird auf Geschwindigkeit optimiert: Schnelle Ladezeiten, SEO-optimierter Code, mobile-optimiert. Performance ist kein Nice-to-have, sondern Grundvoraussetzung – für Google-Rankings und Ihre Nutzer."
    },
    {
      question: "Was passiert nach dem Launch?",
      answer: "Das entscheiden Sie: Entweder vollständige Übergabe an Ihr Team – oder laufende Betreuung durch unser Team. Ich bleibe Ihr persönlicher Ansprechpartner, während unser Entwicklungsteam technische Updates und Performance-Optimierungen übernimmt. Viele Kunden nutzen monatliche Wartungsverträge für Content-Erweiterungen."
    }
  ];

  const webdevTestimonials = [
    {
      quote: "Die Website ist nicht nur schön, sie ist auch blitzschnell. Unsere Ladezeiten haben sich halbiert und Google-Rankings sind um 40% gestiegen.",
      author: "Michael Klaiber",
      role: "Geschäftsführer",
      company: "KLAIBER Steuerberatung",
      industry: "Steuerberatung"
    },
    {
      quote: "Technisch auf höchstem Niveau. Die API-Integration mit unserem CRM läuft perfekt und hat unsere Prozesse enorm beschleunigt.",
      author: "Dr. Stefan Wagner",
      role: "CEO",
      company: "IconPro GmbH",
      industry: "KI-Software"
    },
    {
      quote: "Endlich eine Website, die auch unter Last stabil läuft. Die Performance-Optimierung hat sich sofort in besseren Conversion-Rates gezeigt.",
      author: "Thomas Müller",
      role: "Geschäftsführer",
      company: "COBUS GmbH",
      industry: "Industrieservice"
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
        title="Webentwicklung für B2B | WordPress, Custom Code & APIs | ooliv Mainz"
        description="Professionelle Webentwicklung für B2B-Unternehmen. ✓ WordPress ✓ Custom Code ✓ API-Integration ✓ Performance-Optimierung. Von Strategie bis Launch."
        canonicalUrl="https://ooliv.de/webentwicklung"
        keywords="Webentwicklung, Webentwicklung Mainz, WordPress Entwicklung, Custom Code, Full Stack Development, API Integration, Progressive Web Apps, React Development, Performance-Optimierung"
        breadcrumbs={breadcrumbs}
      />

      <WebDevHero />
      <WebDevBenefits />
      <WebDevWhyUs />
      <WebDevCmsVsStaticDE />
      <WebDevProcessNewDE />
      <WebDevServices />
      <TestimonialsSection testimonials={webdevTestimonials} />
      
      {/* Global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>

      <RelatedServicesGrid />
      
      <FAQ customFaqs={webDevFaqs} />
      
      <CTA 
        title="Lassen Sie uns über Ihr Website-Projekt sprechen"
        subtitle="Wir entwickeln eine skalierbare, sichere Website, die perfekt zu Ihren Geschäftszielen passt."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
        lightBackground={true}
      />

      <StickyCTA 
        text="Kostenloses Entwicklungs-Beratungsgespräch"
      />
    </PageLayout>
  );
};

export default GermanWebDevelopment;
