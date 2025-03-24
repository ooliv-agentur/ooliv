
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDevelopment = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Web Development page
  const webDevFaqs = [
    {
      question: "Welche Technologien setzt ihr ein?",
      answer: "Wir arbeiten mit modernen Frameworks wie React, Vue.js und Next.js sowie verschiedenen CMS-Plattformen, je nach Projektanforderungen."
    },
    {
      question: "Bietet ihr auch Wartung und Support nach dem Launch?",
      answer: "Ja, wir bieten verschiedene Wartungspakete an, die regelmäßige Updates, Sicherheitschecks und technischen Support umfassen."
    },
    {
      question: "Könnt ihr meine bestehende Website verbessern?",
      answer: "Absolut. Wir analysieren Ihre bestehende Website und schlagen gezielte Verbesserungen vor – von Performance-Optimierung bis Redesign."
    },
    {
      question: "Wie werden SEO-Aspekte bei der Entwicklung berücksichtigt?",
      answer: "SEO ist von Anfang an Teil unseres Entwicklungsprozesses – von technisch sauberer Struktur über Ladezeiten bis zu strukturierten Daten."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <CTA 
        title="Maßgeschneiderte Webentwicklung für Ihr Business"
        subtitle="Von modernen Websites bis zu komplexen Webapplikationen – wir setzen Ihre Anforderungen technisch perfekt um."
        primaryCta="Projekt besprechen"
        secondaryCta="Technische Beratung buchen"
      />
    </PageLayout>
  );
};

export default WebDevelopment;
