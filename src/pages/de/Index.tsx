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
        <title>Werbeagentur Mainz – Leistungsstarke Websites für SEO, Konversionen & Wachstum</title>
        <meta name="description" content="Bei ooliv erstellen wir Websites, die besser ranken, mehr konvertieren und messbaren Geschäftserfolg bringen." />
        <meta name="keywords" content="Werbeagentur Mainz, Webdesign Mainz, SEO Mainz, Online Marketing Mainz, Website erstellen Mainz, Digitalagentur Mainz" />
        <meta name="focus-keyword" content="Werbeagentur Mainz" />
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
