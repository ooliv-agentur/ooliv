import React, { useEffect, useState } from 'react';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Button } from '@/components/ui/button';

// Import all dedicated Mainz components
import MainzHero from '@/components/de/MainzHero';
import MainzAboutSection from '@/components/de/MainzAboutSection';
import MainzWorkflow from '@/components/de/MainzWorkflow';
import MainzCaseStudies from '@/components/de/MainzCaseStudies';
import MainzFAQ from '@/components/de/MainzFAQ';
import MainzTeamSection from '@/components/de/MainzTeamSection';
import MainzTechStack from '@/components/de/MainzTechStack';
import MainzSEOFooter from '@/components/de/MainzSEOFooter';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';
import FAQSchemaGenerator from '@/components/seo/FAQSchemaGenerator';
import ReviewSchemaGenerator from '@/components/seo/ReviewSchemaGenerator';

const WerbeagenturMainz = () => {
  const { setLanguage } = useLanguage();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturMainz component mounted - setting language to German');
    document.title = 'Digital Strategy Lead Mainz | Uli Schönleber | ooliv';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowStickyCTA(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Digital Strategy Lead Mainz", url: "https://ooliv.de/werbeagentur-mainz" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Digital Strategy Lead Mainz | Uli Schönleber | ooliv"
          description="Digital Strategy Lead in Mainz: Strategic Discovery, AI Integration & Product Strategy für B2B-Unternehmen. 16+ Jahre Track Record, vor Ort in Mainz."
          canonicalUrl="https://ooliv.de/werbeagentur-mainz"
          keywords="Digital Strategy Lead Mainz, Strategic Advisory Mainz, Product Strategy Mainz, UX Strategy Mainz, AI Integration Mainz"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Digital Strategy Lead Mainz"
          description="Digital Strategy Lead für B2B-Transformationen in Mainz. Strategic Discovery, AI Integration, Product & UX Strategy. 16+ Jahre C-Level Advisory."
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
          url="https://ooliv.de/werbeagentur-mainz"
          priceRange="€€€"
          openingHours={[
            "Monday 09:00-18:00",
            "Tuesday 09:00-18:00", 
            "Wednesday 09:00-18:00",
            "Thursday 09:00-18:00",
            "Friday 09:00-18:00"
          ]}
          areaServed={[
            "Mainz",
            "Wiesbaden", 
            "Frankfurt am Main",
            "Darmstadt",
            "Rhein-Main-Gebiet",
            "Rheinland-Pfalz",
            "Hessen"
          ]}
          services={[
            "Digital Strategy",
            "Strategic Discovery",
            "AI Integration",
            "Product & UX Strategy",
            "C-Level Advisory",
            "Digital Transformation",
            "Strategic Retainer"
          ]}
        />
        
        <FAQSchemaGenerator
          pageUrl="https://ooliv.de/werbeagentur-mainz"
          faqs={[
            {
              question: "Was kostet eine Zusammenarbeit?",
              answer: "Die Kosten richten sich nach Umfang und Zielen. Websites werden pauschal angeboten, SEO und Ads monatlich betreut."
            },
            {
              question: "Arbeitet ooliv nur mit Mainzer Unternehmen?",
              answer: "Schwerpunkt Mainz und Rhein-Main, aber wir betreuen Kunden im gesamten DACH-Raum."
            },
            {
              question: "Wie lange dauert ein Website-Projekt?",
              answer: "In der Regel 4 bis 10 Wochen – abhängig von Struktur und Inhalt."
            },
            {
              question: "Welche Branchen betreut ihr?",
              answer: "Beratung, Industrie, SaaS, Handwerk und regionale Dienstleister."
            },
            {
              question: "Bietet ihr SEO für Mainz an?",
              answer: "Ja, einschließlich technischer Optimierung, Local SEO, Content und Monitoring."
            },
            {
              question: "Wie erfolgt die Abstimmung?",
              answer: "Persönlich vor Ort oder digital – flexibel nach Bedarf."
            }
          ]}
        />
        
        <ReviewSchemaGenerator
          businessName="ooliv Werbeagentur Mainz"
          ratingValue={4.9}
          reviewCount={25}
        />
        
        <MainzHero />
        <MainzAboutSection />
        <MainzWorkflow />
        <MainzTeamSection />
        <MainzCaseStudies />
        <MainzTechStack />
        <MainzSEOFooter />
        <MainzFAQ />
        
        <CTA
          lightBackground={true}
          title="Starten wir Ihr digitales Projekt"
          subtitle="Eine Website, die klar strukturiert ist, Vertrauen schafft und messbare Ergebnisse liefert – das ist unser Anspruch. Lassen Sie uns gemeinsam klären, wie wir Ihre digitale Präsenz verbessern können."
          primaryCta="Kostenloses Erstgespräch"
          secondaryCta="Kontakt aufnehmen"
          secondaryCtaLink="/kontakt"
        />
      </PageLayout>

      {/* Sticky Mobile CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
          showStickyCTA ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-3">
          <Button 
            onClick={scrollToForm}
            size="lg"
            className="w-full bg-turquoise hover:bg-turquoise-hover text-white font-semibold shadow-md"
          >
            Jetzt Termin vereinbaren →
          </Button>
        </div>
      </div>
    </>
  );
};

export default WerbeagenturMainz;
