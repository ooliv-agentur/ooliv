
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';

// Import all dedicated Frankfurt components
import FrankfurtWerbeagenturHero from '@/components/de/FrankfurtWerbeagenturHero';
import FrankfurtWerbeagenturAboutSection from '@/components/de/FrankfurtWerbeagenturAboutSection';
import FrankfurtWerbeagenturCaseStudies from '@/components/de/FrankfurtWerbeagenturCaseStudies';
import FrankfurtWerbeagenturFAQ from '@/components/de/FrankfurtWerbeagenturFAQ';
import FrankfurtWerbeagenturSEOText from '@/components/de/FrankfurtWerbeagenturSEOText';
import FrankfurtWerbeagenturTeamSection from '@/components/de/FrankfurtWerbeagenturTeamSection';
import FrankfurtWerbeagenturBeforeAfterSection from '@/components/de/FrankfurtWerbeagenturBeforeAfterSection';
import FrankfurtWerbeagenturFullServiceTeaser from '@/components/de/FrankfurtWerbeagenturFullServiceTeaser';
import FrankfurtWerbeagenturTechStack from '@/components/de/FrankfurtWerbeagenturTechStack';

const WerbeagenturFrankfurt = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturFrankfurt component mounted - setting language to German');
    document.title = 'Werbeagentur Frankfurt – Digitale Lösungen für nachhaltigen Erfolg';
  }, []);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Frankfurt – Digitale Lösungen für nachhaltigen Erfolg</title>
        <meta
          name="description"
          content="Werbeagentur Frankfurt – ooliv bietet digitale Strategien, professionelle Websites und messbare Online-Erfolge. Regional verwurzelt, digital führend."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout 
        className="overflow-x-hidden"
        seoText={<FrankfurtWerbeagenturSEOText />}
      >
        <FrankfurtWerbeagenturHero />
        <FrankfurtWerbeagenturAboutSection />
        <FrankfurtWerbeagenturTeamSection />
        <FrankfurtWerbeagenturBeforeAfterSection />
        <FrankfurtWerbeagenturFullServiceTeaser />
        <FrankfurtWerbeagenturTechStack />
        <FrankfurtWerbeagenturCaseStudies />
        <FrankfurtWerbeagenturFAQ />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich."
          primaryCta="Digitales Projekt starten"
        />
      </PageLayout>
    </>
  );
};

export default WerbeagenturFrankfurt;
