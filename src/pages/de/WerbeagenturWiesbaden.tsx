import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';

// Import all dedicated Wiesbaden components
import WiesbadenHero from '@/components/de/WiesbadenHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import WiesbadenLeistungen from '@/components/de/WiesbadenLeistungen';
import WiesbadenCaseStudies from '@/components/de/WiesbadenCaseStudies';
import WiesbadenFAQ from '@/components/de/WiesbadenFAQ';
import WiesbadenSEOText from '@/components/de/WiesbadenSEOText';
import WiesbadenTeamSection from '@/components/de/WiesbadenTeamSection';
import WiesbadenBeforeAfterSection from '@/components/de/WiesbadenBeforeAfterSection';
import WiesbadenFullServiceTeaser from '@/components/de/WiesbadenFullServiceTeaser';
import WiesbadenTechStack from '@/components/de/WiesbadenTechStack';

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    document.title = 'Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg';
  }, []);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg</title>
        <meta
          name="description"
          content="ooliv – Ihre kompetente Werbeagentur in Wiesbaden für digitale Strategien, professionelle Websites und messbare Online-Erfolge. Regional verwurzelt, digital führend."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout 
        className="overflow-x-hidden"
        seoText={<WiesbadenSEOText />}
      >
        <WiesbadenHero />
        <WiesbadenAboutSection />
        <WiesbadenTeamSection />
        <WiesbadenBeforeAfterSection />
        <WiesbadenFullServiceTeaser />
        <WiesbadenLeistungen />
        <WiesbadenTechStack />
        <WiesbadenCaseStudies />
        <WiesbadenFAQ />
        
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

export default WerbeagenturWiesbaden;
