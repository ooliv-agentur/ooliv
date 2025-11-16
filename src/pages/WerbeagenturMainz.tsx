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

const WerbeagenturMainz = () => {
  const { setLanguage } = useLanguage();
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturMainz component mounted - setting language to German');
    document.title = 'Werbeagentur Mainz | ooliv – Full-Service Digitalagentur seit 2008';
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
    { name: "Werbeagentur Mainz", url: "https://ooliv.de/werbeagentur-mainz" }
  ];
  
  return (
    <>
      <PageLayout 
        className="overflow-x-hidden"
      >
        <EnhancedSEOHead
          title="Werbeagentur Mainz | ooliv – Full-Service Digitalagentur seit 2008"
          description="Werbeagentur Mainz: Websites & SEO für Medien-, B2B- und Dienstleister. Seit 2008 direkt vor Ort. Messbare Resultate statt Agentur-Buzzwords."
          canonicalUrl="https://ooliv.de/werbeagentur-mainz"
          keywords="Werbeagentur Mainz, Webagentur Mainz, Marketingagentur Mainz, Digitalagentur Mainz, Online Marketing Mainz, SEO Mainz"
          breadcrumbs={breadcrumbs}
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Werbeagentur Mainz"
          description="Full-Service Werbeagentur in Mainz für Webdesign, SEO, Google Ads und digitales Marketing. Inhabergeführt seit 2008."
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
          email="hallo@ooliv.de"
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
