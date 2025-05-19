
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import WiesbadenAboutSection from "@/components/wiesbaden/WiesbadenAboutSection";
import WiesbadenTeamTeaser from "@/components/wiesbaden/WiesbadenTeamTeaser";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import WiesbadenSolutionSection from "@/components/wiesbaden/WiesbadenSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import WiesbadenSEOTextSection from "@/components/wiesbaden/WiesbadenSEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';

const wiesbadenFaqs = [
  {
    question: "Wie unterstützt ooliv Unternehmen bei der Markenentwicklung?",
    answer: "Wir analysieren die bestehende Markenidentität, entwickeln prägnante Markenstrategien und setzen kreative Kampagnen um. Dabei achten wir auf eine klare Zielgruppenansprache und eine nachhaltige Positionierung."
  },
  {
    question: "Kann ooliv lokale Marktkenntnisse in Wiesbaden einbringen?",
    answer: "Ja, unsere Expertise in der Region Wiesbaden ermöglicht es uns, maßgeschneiderte Lösungen zu entwickeln, die den lokalen Markt und seine Besonderheiten berücksichtigen."
  },
  {
    question: "Welche Vorteile bietet eine starke Markenpositionierung?",
    answer: "Eine starke Markenpositionierung erhöht die Sichtbarkeit, schafft Vertrauen bei der Zielgruppe und ermöglicht es Unternehmen, sich erfolgreich im Wettbewerb zu behaupten."
  },
  {
    question: "Gibt es Beispiele für erfolgreiche Markenentwicklungsprojekte von ooliv?",
    answer: "Ja, wir haben beispielsweise für ein Wiesbadener Start-up eine nachhaltige Marke entwickelt, die sich klar positionieren konnte und schnell Anerkennung im Markt gefunden hat."
  },
  {
    question: "Was sind die ersten Schritte bei einem Markenentwicklungsprojekt?",
    answer: "Wir beginnen mit einer Analyse Ihrer aktuellen Marke und Zielgruppe, entwickeln eine maßgeschneiderte Strategie und setzen diese mit kreativen Kampagnen und Designs um."
  }
];

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  // Use useEffect to set language once after component mounts
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    
    // Force title update immediately
    document.title = 'Werbeagentur Wiesbaden – Digitales Branding & Online-Marketing für Ihr Unternehmen';
  }, []);
  
  // Update to correct video path in lovable-uploads folder
  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  console.log('Wiesbaden page: Using video path:', videoPath);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Wiesbaden – Digitales Branding & Online-Marketing für Ihr Unternehmen</title>
        <meta
          name="description"
          content="ooliv, die kreative Werbeagentur in Wiesbaden: Wir entwickeln strategische Markenauftritte, maßgeschneiderte Websites und performanceorientierte Online-Kampagnen für zukunftsorientierte Unternehmen."
        />
        <link rel="canonical" href="https://ooliv.de/werbeagentur-wiesbaden" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <PageHero 
          isHomepage={false} 
          backgroundVideo={videoPath}
          title="Werbeagentur Wiesbaden für starke Marken und digitale Sichtbarkeit"
          subtitle="Wir gestalten Websites und Markenauftritte, die begeistern – visuell, strategisch und messbar erfolgreich."
          startProjectText="Projekt starten"
          seeWorkText="Arbeiten ansehen"
        />
        <WiesbadenAboutSection />
        <WiesbadenTeamTeaser />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen in Wiesbaden kämpfen mit Websites, die nicht performant sind. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gut ranken.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <WiesbadenSolutionSection />
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={wiesbadenFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die Ihr Unternehmen in Wiesbaden voranbringt?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen."
          primaryCta="Projekt starten"
        />
      </PageLayout>
      
      <WiesbadenSEOTextSection />
    </>
  );
};

export default WerbeagenturWiesbaden;
