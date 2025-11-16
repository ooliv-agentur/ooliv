
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';

// Import all dedicated Darmstadt components
import DarmstadtHero from '@/components/de/DarmstadtHero';
import DarmstadtAboutSection from '@/components/de/DarmstadtAboutSection';
import DarmstadtCaseStudies from '@/components/de/DarmstadtCaseStudies';
import DarmstadtFAQ from '@/components/de/DarmstadtFAQ';

import DarmstadtTeamSection from '@/components/de/DarmstadtTeamSection';
import DarmstadtBeforeAfterSection from '@/components/de/DarmstadtBeforeAfterSection';
import DarmstadtFullServiceTeaser from '@/components/de/DarmstadtFullServiceTeaser';
import DarmstadtTechStack from '@/components/de/DarmstadtTechStack';

const WerbeagenturDarmstadt = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturDarmstadt component mounted - setting language to German');
    document.title = 'Werbeagentur Darmstadt – Strategisch statt oberflächlich';
  }, []);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Werbeagentur Darmstadt", url: "https://ooliv.de/werbeagentur-darmstadt" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Werbeagentur Darmstadt | ooliv aus Mainz"
          description="Werbeagentur Darmstadt: Websites für Tech & Wissenschaft. TU-Umfeld, Engineering, Hightech-Startups. Technisch präzise, strategisch fundiert."
          canonicalUrl="https://ooliv.de/werbeagentur-darmstadt"
          keywords="Werbeagentur Darmstadt, Webdesign Darmstadt, Online Marketing Darmstadt, SEO Darmstadt"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Werbeagentur Darmstadt"
          description="Full-Service Werbeagentur in Darmstadt für Webdesign, SEO, Google Ads und digitales Marketing. Inhabergeführt seit 2008."
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
          url="https://ooliv.de/werbeagentur-darmstadt"
          priceRange="€€€"
          openingHours={[
            "Monday 09:00-18:00",
            "Tuesday 09:00-18:00", 
            "Wednesday 09:00-18:00",
            "Thursday 09:00-18:00",
            "Friday 09:00-18:00"
          ]}
          areaServed={[
            "Darmstadt",
            "Rhein-Main-Gebiet",
            "Mainz",
            "Frankfurt am Main",
            "Wiesbaden",
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
        <DarmstadtHero />
        <DarmstadtAboutSection />
        <DarmstadtTeamSection />
        <DarmstadtBeforeAfterSection />
        <DarmstadtFullServiceTeaser />
        <DarmstadtTechStack />
        <DarmstadtCaseStudies />
        <DarmstadtFAQ />
        
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

export default WerbeagenturDarmstadt;
