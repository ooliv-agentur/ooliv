
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import WiesbadenHero from '@/components/de/WiesbadenHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import WiesbadenTeamSection from '@/components/de/WiesbadenTeamSection';
import WiesbadenSolutionSection from '@/components/de/WiesbadenSolutionSection';

// Use the actual homepage components instead
import DeutscherAboutSection from '@/components/de/DeutscherAboutSection';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';

// Updated FAQ items for Wiesbaden
const wiesbadenFaqs = [
  {
    question: "Wie arbeitet eine Werbeagentur in Wiesbaden mit lokalen Unternehmen?",
    answer: "Als Werbeagentur in Wiesbaden verstehen wir die besonderen Herausforderungen lokaler Unternehmen. Wir entwickeln maßgeschneiderte Strategien, die sowohl regional als auch überregional wirken – von der lokalen Sichtbarkeit bis zur deutschlandweiten Expansion."
  },
  {
    question: "Was unterscheidet ooliv von anderen Werbeagenturen in Wiesbaden?",
    answer: "Unsere Stärke liegt in der Kombination aus strategischer Planung und technischer Exzellenz. Während andere Agenturen oft nur Teilbereiche abdecken, bieten wir als Werbeagentur einen ganzheitlichen Ansatz – von der Konzeption bis zur Umsetzung und Betreuung."
  },
  {
    question: "Welche Investition ist für eine professionelle Website nötig?",
    answer: "Die Investition richtet sich nach Ihren Zielen und Anforderungen. Einfache Websites beginnen bei 4.000 €, umfassende Projekte mit erweiterten Funktionen liegen zwischen 8.000 € und 15.000 €. Wir erstellen transparente Angebote ohne versteckte Kosten."
  },
  {
    question: "Wie schnell kann eine neue Website realisiert werden?",
    answer: "Die Umsetzungsdauer variiert je nach Projektumfang. Standardprojekte realisieren wir in 4-8 Wochen, komplexere Vorhaben benötigen entsprechend mehr Zeit. Eine strukturierte Planung sorgt für verlässliche Termine."
  },
  {
    question: "Warum ist ooliv die ideale Werbeagentur für Wiesbadener Unternehmen?",
    answer: "Weil wir die Bedürfnisse von Unternehmen im Rhein-Main-Gebiet genau kennen. Als Werbeagentur kombinieren wir regionale Expertise mit überregionaler Erfahrung und liefern messbare Resultate statt leerer Versprechungen."
  }
];

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
      
      <PageLayout className="overflow-x-hidden">
        <WiesbadenHero />
        <DeutscherAboutSection />
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
        
        <GermanSolutionSection />
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={wiesbadenFaqs}
          customTitle="Häufige Fragen zur Werbeagentur-Zusammenarbeit"
          customCtaText="Weitere Fragen? Sprechen Sie direkt mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die wirklich funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich."
          primaryCta="Digitales Projekt starten"
        />
      </PageLayout>
      
      <SEOTextSection />
    </>
  );
};

export default WerbeagenturWiesbaden;
