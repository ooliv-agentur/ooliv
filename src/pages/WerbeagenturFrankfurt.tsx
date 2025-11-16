
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

// Import all dedicated Frankfurt components
import FrankfurtWerbeagenturHero from '@/components/de/FrankfurtWerbeagenturHero';
import FrankfurtWerbeagenturAboutSection from '@/components/de/FrankfurtWerbeagenturAboutSection';
import FrankfurtWerbeagenturCaseStudies from '@/components/de/FrankfurtWerbeagenturCaseStudies';
import FrankfurtWerbeagenturFAQ from '@/components/de/FrankfurtWerbeagenturFAQ';

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

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Werbeagentur Frankfurt", url: "https://ooliv.de/werbeagentur-frankfurt" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Werbeagentur Frankfurt | ooliv aus Mainz"
          description="Werbeagentur Frankfurt: B2B-Websites für Banken, Konzerne & Startups. ROI-fokussiert, professionell, skalierbar. Projekt starten →"
          canonicalUrl="https://ooliv.de/werbeagentur-frankfurt"
          keywords="Werbeagentur Frankfurt, Webdesign Frankfurt, Online Marketing Frankfurt, SEO Frankfurt"
          breadcrumbs={breadcrumbs}
        />
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
