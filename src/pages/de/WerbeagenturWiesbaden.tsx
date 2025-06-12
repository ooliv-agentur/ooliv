
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CTA from "@/components/CTA";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

// Import all dedicated Wiesbaden components
import WiesbadenHero from '@/components/de/WiesbadenHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import WiesbadenLeistungen from '@/components/de/WiesbadenLeistungen';
import WiesbadenCaseStudies from '@/components/de/WiesbadenCaseStudies';
import WiesbadenFAQ from '@/components/de/WiesbadenFAQ';
import WiesbadenSEOText from '@/components/de/WiesbadenSEOText';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    document.title = 'Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg';
  }, []);

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Wiesbaden – Digitale Lösungen für nachhaltigen Erfolg</title>
        <meta
          name="description"
          content="ooliv – Ihre kompetente Werbeagentur in Wiesbaden für digitale Strategien, professionelle Websites und messbare Online-Erfolge. Regional verwurzelt, digital führend."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout 
        className="overflow-x-hidden"
        seoText={<WiesbadenSEOText />}
      >
        <WiesbadenHero />
        <WiesbadenAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre digitale Präsenz sollte Geschäfte generieren – nicht nur existieren.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Wiesbadener Unternehmen haben Websites, die nicht zum Unternehmenserfolg beitragen. Als erfahrene Werbeagentur entwickeln wir digitale Auftritte, die aktiv Kunden gewinnen, Vertrauen schaffen und nachweislich zu besseren Geschäftsergebnissen führen.
            </p>
            <BeforeAfterSlider />
            <div className="mt-8 text-center">
              <p className="text-brand-text mb-6">
                Weitere Referenzen gerne im persönlichen Gespräch – <a href="mailto:info@ooliv.de" className="text-brand-primary hover:underline">info@ooliv.de</a>
              </p>
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                onClick={handleStartProject}
              >
                Digitales Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <WiesbadenLeistungen />
        <TechnologiesSection />
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
