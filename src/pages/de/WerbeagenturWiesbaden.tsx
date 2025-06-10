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
      </Helmet>
      
      <DeutscherHero 
        title="Ihre Werbeagentur in Wiesbaden"
        subtitle="Wir machen Websites, die verkaufen. Und gefunden werden."
        primaryCta={{
          text: "Kostenlose Beratung",
          link: "/kontakt"
        }}
        secondaryCta={{
          text: "Unsere Referenzen",
          link: "/referenzen"
        }}
      />

      <WiesbadenAboutSection />

      <GermanSolutionSection />

      <WiesbadenTeamSection />

      <CaseStudiesSection />

      <FAQ />

      <CTA />

      <ClientLogos />

      <SEOTextSection />
    </PageLayout>
  );
};

export default GermanWiesbaden;
