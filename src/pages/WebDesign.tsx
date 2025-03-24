
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDesign = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Web Design page
  const webDesignFaqs = [
    {
      question: "Was macht ein gutes Webdesign aus?",
      answer: "Gutes Webdesign verbindet Ästhetik mit Funktionalität. Es schafft eine intuitive Benutzerführung, vermittelt Ihre Markenwerte und optimiert die Conversion-Rate."
    },
    {
      question: "Wie lange dauert ein Webdesign-Projekt?",
      answer: "Ein typisches Webdesign-Projekt dauert 4-8 Wochen – abhängig vom Umfang, Ihrer Mitwirkung und den technischen Anforderungen."
    },
    {
      question: "Arbeitet ihr mit einem bestimmten CMS?",
      answer: "Wir sind spezialisiert auf WordPress, Webflow und Shopify, können aber auch mit anderen CMS arbeiten oder Headless-Lösungen entwickeln."
    },
    {
      question: "Sind eure Designs mobiloptimiert?",
      answer: "Absolut. Jedes unserer Designs ist von Grund auf responsive und für alle Bildschirmgrößen optimiert."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignCaseStudies />
      <FAQ customFaqs={webDesignFaqs} />
      <CTA 
        title="Premium Webdesign für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam eine Website gestalten, die Ihre Marke stärkt und Kunden überzeugt."
        primaryCta="Unverbindliches Gespräch vereinbaren"
        secondaryCta="Portfolio ansehen"
      />
    </PageLayout>
  );
};

export default WebDesign;
