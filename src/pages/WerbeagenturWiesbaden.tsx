
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';
import FAQSchemaGenerator from '@/components/seo/FAQSchemaGenerator';
import ReviewSchemaGenerator from '@/components/seo/ReviewSchemaGenerator';

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
    document.title = 'Digital Strategy Lead Wiesbaden | Uli Schönleber | ooliv';
  }, []);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digital Strategy Lead Wiesbaden", url: "https://ooliv.de/werbeagentur-wiesbaden" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Digital Strategy Lead Wiesbaden | Uli Schönleber | ooliv"
          description="Strategic Digital Advisory in Wiesbaden: Product & UX Strategy, AI Integration für B2B-Unternehmen. 16+ Jahre Track Record. Kein Agentur-Theater."
          canonicalUrl="https://ooliv.de/werbeagentur-wiesbaden"
          keywords="Digital Strategy Lead Wiesbaden, Strategic Advisory Wiesbaden, Product Strategy Wiesbaden, UX Strategy Wiesbaden"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Digital Strategy Lead Wiesbaden"
          description="Digital Strategy Lead für B2B-Transformationen in Wiesbaden. Strategic Discovery, AI Integration, Product & UX Strategy mit messbaren Outcomes."
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
            "Digital Strategy",
            "Strategic Discovery",
            "AI Integration",
            "Product & UX Strategy",
            "C-Level Advisory",
            "Digital Transformation"
          ]}
        />
        
        <FAQSchemaGenerator
          pageUrl="https://ooliv.de/werbeagentur-wiesbaden"
          faqs={[
            {
              question: "Betreut ooliv Unternehmen in Wiesbaden?",
              answer: "Ja, Wiesbaden ist Teil unseres Fokusgebiets. Wir arbeiten mit vielen Wiesbadener B2B-Unternehmen zusammen."
            },
            {
              question: "Was kostet eine Website?",
              answer: "Die Kosten richten sich nach Umfang und Zielen. Websites werden pauschal angeboten, SEO und Ads monatlich betreut."
            },
            {
              question: "Bietet ihr Local SEO für Wiesbaden an?",
              answer: "Ja, Local SEO ist eine unserer Kernkompetenzen – inklusive Google Business Profile und lokale Keyword-Optimierung."
            },
            {
              question: "Wie lange dauert ein Website-Projekt?",
              answer: "In der Regel 4 bis 10 Wochen, abhängig von Struktur, Inhalt und Projektumfang."
            },
            {
              question: "Welche Branchen betreut ihr in Wiesbaden?",
              answer: "B2B-Dienstleister, Beratung, Industrie, Handwerk und professionelle Services."
            }
          ]}
        />
        
        <ReviewSchemaGenerator
          businessName="ooliv Werbeagentur Wiesbaden"
          ratingValue={4.9}
          reviewCount={25}
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
