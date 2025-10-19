
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';

// Import all dedicated Schweiz components
import SchweizHero from '@/components/de/SchweizHero';
import SchweizAboutSection from '@/components/de/SchweizAboutSection';
import SchweizPricing from '@/components/de/SchweizPricing';
import SchweizCaseStudies from '@/components/de/SchweizCaseStudies';
import SchweizFAQ from '@/components/de/SchweizFAQ';

import SchweizTeamSection from '@/components/de/SchweizTeamSection';
import SchweizBeforeAfterSection from '@/components/de/SchweizBeforeAfterSection';
import SchweizFullServiceTeaser from '@/components/de/SchweizFullServiceTeaser';
import SchweizTechStack from '@/components/de/SchweizTechStack';

const DigitalagenturSchweiz = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('DigitalagenturSchweiz component mounted - setting language to German');
    document.title = 'Digitalagentur Schweiz | ooliv aus Deutschland';
  }, []);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digitalagentur Schweiz", url: "https://ooliv.de/digitalagentur-schweiz" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Digitalagentur Schweiz | ooliv aus Deutschland"
          description="Digitalagentur für Schweizer B2B-Unternehmen. ✓ Webdesign ✓ SEO ✓ Google Ads. Von Deutschland aus, für die Schweiz optimiert. Beratung in CHF!"
          canonicalUrl="https://ooliv.de/digitalagentur-schweiz"
          keywords="Digitalagentur Schweiz, Webdesign Schweiz, SEO Schweiz, Online Marketing Schweiz, B2B Marketing"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Digitalagentur Schweiz"
          description="Digitalagentur für Schweizer B2B-Unternehmen. Webdesign, SEO, Google Ads aus Deutschland für die Schweiz."
          serviceType="AdvertisingAgency"
          areaServed={["Schweiz", "Zürich", "Bern", "Basel", "DACH-Region"]}
          priceRange="CHF 7000-CHF 25000"
          offers={[
            {
              name: "Webdesign Schweiz",
              description: "Professionelle B2B-Websites für Schweizer Unternehmen, mehrsprachig verfügbar",
              priceRange: "CHF 7000-CHF 18000"
            },
            {
              name: "SEO Schweiz",
              description: "Suchmaschinenoptimierung für .ch-Domains und den Schweizer Markt",
              priceRange: "CHF 7000-CHF 12000"
            },
            {
              name: "Google Ads Schweiz",
              description: "Performance-Marketing für Schweizer B2B-Unternehmen",
              priceRange: "CHF 2500-CHF 10000"
            }
          ]}
        />
        <SchweizHero />
        <SchweizAboutSection />
        <SchweizPricing />
        <SchweizTeamSection />
        <SchweizBeforeAfterSection />
        <SchweizFullServiceTeaser />
        <SchweizTechStack />
        <SchweizCaseStudies />
        <SchweizFAQ />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – über die Grenze hinweg, ohne Qualitätsverlust."
          primaryCta="Schweizer Projekt starten"
        />
      </PageLayout>
    </>
  );
};

export default DigitalagenturSchweiz;
