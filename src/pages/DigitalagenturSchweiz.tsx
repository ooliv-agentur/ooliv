
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
    document.title = 'Strategic Digital Advisory Schweiz | Uli Schönleber | ooliv';
  }, []);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Strategic Digital Advisory Schweiz", url: "https://ooliv.de/digitalagentur-schweiz" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Strategic Digital Advisory Schweiz | Uli Schönleber | ooliv"
          description="Strategic Digital Advisory für Schweizer B2B-KMUs: Product & UX Strategy, AI Integration. Transparente Preise in CHF. 16+ Jahre Track Record."
          canonicalUrl="https://ooliv.de/digitalagentur-schweiz"
          keywords="Strategic Digital Advisory Schweiz, Digital Strategy Lead Schweiz, Product Strategy Schweiz, B2B Transformation Schweiz"
          breadcrumbs={breadcrumbs}
        />
        
        <ServiceSchemaGenerator
          serviceName="Strategic Digital Advisory Schweiz"
          description="Digital Strategy Lead für Schweizer B2B-Unternehmen. Strategic Discovery, AI Integration, Product & UX Strategy aus Deutschland für die Schweiz."
          serviceType="ProfessionalService"
          areaServed={["Schweiz", "Zürich", "Bern", "Basel", "DACH-Region"]}
          priceRange="CHF 17000-CHF 90000"
          offers={[
            {
              name: "Strategic Discovery Schweiz",
              description: "4-6 Wochen Strategic Discovery Phase für Schweizer B2B-Unternehmen",
              priceRange: "CHF 17000-CHF 28000"
            },
            {
              name: "Product & UX Strategy Schweiz",
              description: "End-to-End Product & UX Transformation für den Schweizer Markt",
              priceRange: "CHF 45000-CHF 90000"
            },
            {
              name: "AI Integration Schweiz",
              description: "Strategic AI Integration Advisory für Schweizer KMUs",
              priceRange: "CHF 20000-CHF 50000"
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
