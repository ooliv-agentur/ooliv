
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import DeutscherHero from '@/components/de/DeutscherHero';
import DeutscherAboutSection from '@/components/de/DeutscherAboutSection';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';
import SEOTextSection from '@/components/de/SEOTextSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Marketing Agentur Mainz – ooliv</title>
        <meta name="description" content="ooliv – Ihre Marketing Agentur in Mainz: Kreativ, strategisch und individuell. Wir bringen Ihr Unternehmen mit durchdachten Konzepten und Expertise voran." />
        <meta name="keywords" content="Marketing Agentur Mainz, Werbeagentur Mainz, Webdesign Mainz, SEO Mainz, Online Marketing Mainz, Website erstellen Mainz, Digitalagentur Mainz" />
        <meta name="focus-keyword" content="Marketing Agentur Mainz" />
      </Helmet>
      
      <DeutscherHero />
      <DeutscherAboutSection />
      <GermanSolutionSection />
      <TeamTeaserDE />
      <CaseStudiesSection />
      <FAQ />
      <CTA 
        title="Bereit für Ihren digitalen Erfolg?"
        subtitle="Lassen Sie uns gemeinsam eine Website erstellen, die nicht nur gut aussieht, sondern auch messbare Ergebnisse liefert."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
      <ClientLogos />
      <SEOTextSection />
    </PageLayout>
  );
};

export default GermanIndex;
