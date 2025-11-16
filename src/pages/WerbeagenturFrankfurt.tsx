
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';

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
          description="Werbeagentur Frankfurt: Digitale Lösungen für Banken, Konzerne & Startups in der Finanzmetropole. ROI-fokussiert, professionell. Projekt starten →"
          canonicalUrl="https://ooliv.de/werbeagentur-frankfurt"
          keywords="Werbeagentur Frankfurt, Webdesign Frankfurt, Online Marketing Frankfurt, SEO Frankfurt"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Werbeagentur Frankfurt"
          description="Full-Service Werbeagentur in Frankfurt für Webdesign, SEO, Google Ads und digitales Marketing. Inhabergeführt seit 2008."
          address={{
            streetAddress: "Mombacher Str. 25",
            addressLocality: "Mainz",
            postalCode: "55122",
            addressRegion: "Rheinland-Pfalz",
            addressCountry: "DE"
          }}
          geo={{
            latitude: 49.9969207,
            longitude: 8.2590653
          }}
          telephone="+49-6131-6367801"
          email="info@ooliv.de"
          url="https://ooliv.de/werbeagentur-frankfurt"
          priceRange="€€€"
          openingHours={[
            "Monday 09:00-18:00",
            "Tuesday 09:00-18:00", 
            "Wednesday 09:00-18:00",
            "Thursday 09:00-18:00",
            "Friday 09:00-18:00"
          ]}
          areaServed={[
            "Frankfurt am Main",
            "Frankfurt",
            "Rhein-Main-Gebiet",
            "Mainz",
            "Wiesbaden",
            "Darmstadt",
            "Hessen"
          ]}
          services={[
            "Webdesign",
            "Webentwicklung",
            "SEO-Optimierung",
            "Local SEO",
            "Google Ads",
            "Content Marketing",
            "Marketing Automation",
            "Digitale Strategieberatung",
            "KI-Technologien"
          ]}
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
