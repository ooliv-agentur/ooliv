import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import DeutscherHero from '@/components/de/DeutscherHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import WiesbadenTeamSection from '@/components/de/WiesbadenTeamSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';
import SEOTextSection from '@/components/de/SEOTextSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Werbeagentur Wiesbaden | ooliv - Webdesign & Marketing</title>
        <meta name="description" content="ooliv Werbeagentur in Wiesbaden: Professionelles Webdesign, SEO und digitales Marketing für Unternehmen im Rhein-Main-Gebiet." />
        <meta name="keywords" content="Werbeagentur Wiesbaden, Webdesign Wiesbaden, SEO Wiesbaden, Online Marketing Wiesbaden, Digitalagentur Wiesbaden, ooliv Wiesbaden" />
        <meta name="focus-keyword" content="Werbeagentur Wiesbaden" />
      </Helmet>
      
      <DeutscherHero />

      <WiesbadenAboutSection />

      <GermanSolutionSection />

      <WiesbadenTeamSection />

      <CaseStudiesSection />

      <FAQ />

      <CTA 
        title="Ihre digitale Zukunft beginnt jetzt"
        subtitle="Lassen Sie uns gemeinsam Ihr Unternehmen in Wiesbaden digital erfolgreich machen."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />

      <ClientLogos />

      <SEOTextSection />
    </PageLayout>
  );
};

export default GermanWiesbaden;
