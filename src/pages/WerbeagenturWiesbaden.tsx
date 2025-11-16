
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';

// Import all dedicated Wiesbaden components
import WiesbadenHero from '@/components/de/WiesbadenHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import WiesbadenCaseStudies from '@/components/de/WiesbadenCaseStudies';
import WiesbadenFAQ from '@/components/de/WiesbadenFAQ';

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
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Werbeagentur Wiesbaden", url: "https://ooliv.de/werbeagentur-wiesbaden" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Werbeagentur Wiesbaden | ooliv aus Mainz"
          description="Werbeagentur Wiesbaden: Professionelle B2B-Websites, SEO & digitale Strategien. Messbar. Zielgerichtet. Ohne Schnickschnack. Jetzt Erstgespräch!"
          canonicalUrl="https://ooliv.de/werbeagentur-wiesbaden"
          keywords="Werbeagentur Wiesbaden, Webdesign Wiesbaden, Online Marketing Wiesbaden, SEO Wiesbaden"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Werbeagentur Wiesbaden"
          description="Full-Service Werbeagentur in Wiesbaden für Webdesign, SEO, Google Ads und digitales Marketing. Inhabergeführt seit 2008."
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
          url="https://ooliv.de/werbeagentur-wiesbaden"
          priceRange="€€€"
          openingHours={[
            "Monday 09:00-18:00",
            "Tuesday 09:00-18:00", 
            "Wednesday 09:00-18:00",
            "Thursday 09:00-18:00",
            "Friday 09:00-18:00"
          ]}
          areaServed={[
            "Wiesbaden",
            "Rhein-Main-Gebiet",
            "Mainz",
            "Frankfurt am Main",
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
        <WiesbadenHero />
        <WiesbadenAboutSection />
        <WiesbadenTeamSection />
        <WiesbadenBeforeAfterSection />
        <WiesbadenFullServiceTeaser />
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
