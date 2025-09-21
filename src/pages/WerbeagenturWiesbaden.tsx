
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';

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
          title="Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg"
          description="Werbeagentur Wiesbaden – ooliv bietet digitale Strategien, professionelle Websites und messbare Online-Erfolge. Regional verwurzelt, digital führend."
          canonicalUrl="https://ooliv.de/werbeagentur-wiesbaden"
          keywords="Werbeagentur Wiesbaden, Webdesign Wiesbaden, Online Marketing Wiesbaden, SEO Wiesbaden"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Werbeagentur Wiesbaden"
          description="Full-Service Werbeagentur in Wiesbaden für Webdesign, SEO, Google Ads und digitale Strategien."
          serviceType="AdvertisingAgency"
          areaServed={["Wiesbaden", "Mainz", "Frankfurt", "Rhein-Main-Gebiet", "Hessen"]}
          priceRange="€3000-€25000"
          offers={[
            {
              name: "Webdesign Wiesbaden",
              description: "Professionelle Websites für Unternehmen in Wiesbaden",
              priceRange: "€4000-€15000"
            },
            {
              name: "SEO Wiesbaden",
              description: "Suchmaschinenoptimierung für lokale Sichtbarkeit",
              priceRange: "€1500-€5000"
            },
            {
              name: "Online Marketing Wiesbaden",
              description: "Ganzheitliche digitale Marketing-Strategien",
              priceRange: "€2000-€8000"
            }
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
