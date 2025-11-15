import React, { useEffect, useState } from 'react';
import PageLayout from "@/components/PageLayout";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Button } from '@/components/ui/button';

// Import all dedicated Mainz components
import MainzHero from '@/components/de/MainzHero';
import MainzAboutSection from '@/components/de/MainzAboutSection';
import MainzCaseStudies from '@/components/de/MainzCaseStudies';
import MainzFAQ from '@/components/de/MainzFAQ';
import MainzTeamSection from '@/components/de/MainzTeamSection';
import MainzBeforeAfterSection from '@/components/de/MainzBeforeAfterSection';
import MainzFullServiceTeaser from '@/components/de/MainzFullServiceTeaser';
import MainzTechStack from '@/components/de/MainzTechStack';

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
          description="Werbeagentur Mainz ✓ Webdesign ✓ SEO ✓ Google Ads ✓ Content Marketing. Inhabergeführt, messbar, erfolgreich. Jetzt Projekt starten!"
          canonicalUrl="https://ooliv.de/werbeagentur-mainz"
          keywords="Werbeagentur Mainz, Webagentur Mainz, Marketingagentur Mainz, Digitalagentur Mainz, Online Marketing Mainz, SEO Mainz"
          breadcrumbs={breadcrumbs}
        />
        <MainzHero />
        <MainzAboutSection />
        <MainzTeamSection />
        <MainzBeforeAfterSection />
        <MainzFullServiceTeaser />
        <MainzTechStack />
        <MainzCaseStudies />
        <MainzFAQ />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich."
          primaryCta="Digitales Projekt starten"
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
