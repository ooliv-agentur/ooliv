
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

// Use the actual homepage components instead
import DeutscherAboutSection from '@/components/de/DeutscherAboutSection';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';

// Updated FAQ items for Wiesbaden
const wiesbadenFaqs = [
  {
    question: "Wie arbeitet eine Werbeagentur in Wiesbaden mit lokalen Unternehmen?",
    answer: "Als Werbeagentur verstehen wir die besonderen Herausforderungen von Wiesbadener Unternehmen. Wir entwickeln maßgeschneiderte digitale Strategien, die sowohl lokal als auch überregional wirken – von der regionalen Sichtbarkeit bis zur deutschlandweiten Expansion."
  },
  {
    question: "Was unterscheidet ooliv von anderen Werbeagenturen in der Region?",
    answer: "Unsere Stärke liegt in der Kombination aus strategischer Planung und technischer Exzellenz. Während andere Agenturen oft nur Teilbereiche abdecken, bieten wir einen ganzheitlichen Ansatz – von der digitalen Konzeption bis zur technischen Umsetzung und langfristigen Betreuung."
  },
  {
    question: "Welche Investition ist für eine professionelle Website in Wiesbaden nötig?",
    answer: "Die Investition richtet sich nach Ihren Zielen und Anforderungen. Strategische Websites beginnen bei 4.000 €, umfassende Projekte mit erweiterten Funktionen liegen zwischen 8.000 € und 15.000 €. Wir erstellen transparente Angebote ohne versteckte Kosten."
  },
  {
    question: "Wie schnell kann eine neue Website für Wiesbadener Unternehmen realisiert werden?",
    answer: "Die Umsetzungsdauer variiert je nach Projektumfang. Standardprojekte realisieren wir in 4-8 Wochen, komplexere digitale Vorhaben benötigen entsprechend mehr Zeit. Eine strukturierte Planung sorgt für verlässliche Termine."
  },
  {
    question: "Warum ist ooliv die ideale digitale Agentur für Wiesbadener Unternehmen?",
    answer: "Weil wir die Bedürfnisse von Unternehmen in der Region Wiesbaden genau kennen. Als spezialisierte Digitalagentur kombinieren wir regionale Expertise mit überregionaler Erfahrung und liefern messbare Resultate statt leerer Versprechungen."
  }
];

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    document.title = 'Digitalagentur Wiesbaden – Wo Strategie auf Umsetzung trifft';
  }, []);

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Digitalagentur Wiesbaden – Wo Strategie auf Umsetzung trifft</title>
        <meta
          name="description"
          content="ooliv – Ihre spezialisierte Digitalagentur in Wiesbaden für strategische Websites, die Geschäftsergebnisse liefern. Über 16 Jahre Erfahrung mit B2B-Unternehmen in der Region."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout 
        className="overflow-x-hidden"
        seoText={<SEOTextSection />}
      >
        <WiesbadenHero />
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Strategische Websites, die Wiesbadener Unternehmen digital voranbringen.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen in Wiesbaden haben Websites, die nicht zu ihrem Geschäftserfolg beitragen. Als erfahrene Digitalagentur entwickeln wir strategische Online-Auftritte, die aktiv Kunden gewinnen, Vertrauen schaffen und nachweislich zu besseren Geschäftsergebnissen führen. Seit über 16 Jahren für B2B-Unternehmen in der Region aktiv.
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
          customTitle="Häufige Fragen zur Zusammenarbeit mit einer Digitalagentur in Wiesbaden"
          customCtaText="Weitere Fragen? Sprechen Sie direkt mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die strategisch funktioniert?"
          subtitle="Lassen Sie uns in einem unverbindlichen Gespräch klären, wie wir Ihre digitale Präsenz zu einem echten Geschäftsinstrument machen – strategisch fundiert, technisch ausgereift und messbar erfolgreich. Für Wiesbadener Unternehmen, die digital wachsen wollen."
          primaryCta="Digitales Projekt starten"
        />
      </PageLayout>
    </>
  );
};

export default WerbeagenturWiesbaden;
