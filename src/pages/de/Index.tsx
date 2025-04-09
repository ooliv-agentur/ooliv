
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero"; // Changed from DeutscherHero to PageHero
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamImpactSectionDE from "@/components/de/TeamImpactSectionDE";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider"; 
import GermanSolutionSection from "@/components/de/GermanSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import { Helmet } from 'react-helmet-async';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  // Update document title and meta description
  useEffect(() => {
    document.title = "Ihre Full-Service Werbeagentur Mainz entdecken";
  }, []);
  
  const simplifiedFaqs = [
    {
      question: "Wie läuft der Website-Erstellungsprozess bei ooliv ab?",
      answer: "Unsere Webprojekte folgen einem klaren Ablauf: Zunächst analysieren wir gemeinsam Ihre Ziele, Zielgruppen und Mitbewerber. Danach erstellen wir Inhalte und Struktur. Anschließend gestalten wir ein modernes, benutzerfreundliches Design und setzen Ihre Website technisch sauber um. Nach dem Go-Live betreuen Sie weiter – mit Support und Updates."
    },
    {
      question: "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?",
      answer: "Die Preise richten sich nach Umfang, Design und Funktionen. Einfache Onepager starten bei etwa 3.000 €, mittelgroße Websites mit SEO bei 5.000 bis 10.000 €. Für größere Projekte wie Shops oder Multilingual-Seiten starten die Kosten bei etwa 10.000 €. Wir erstellen immer transparente Angebote ohne versteckte Gebühren."
    },
    {
      question: "Wie lange dauert die Erstellung einer maßgeschneiderten Website?",
      answer: "Die Dauer hängt vom Umfang des Projekts ab. Kleinere Websites sind in wenigen Wochen umsetzbar, größere Seiten benötigen in der Regel 6 bis 10 Wochen. Wir stimmen den Zeitplan individuell mit Ihnen ab und arbeiten effizient auf gemeinsame Deadlines hin."
    },
    {
      question: "Was beinhaltet die laufende Betreuung nach dem Launch meiner Website?",
      answer: "Nach dem Go-Live lassen Sie nicht allein: Wir übernehmen technische Updates, kleine Änderungen und beraten bei der Weiterentwicklung Ihrer Website. Falls gewünscht, begleiten wir Sie auch langfristig bei SEO, Content oder Google Ads."
    },
    {
      question: "Warum ist ooliv die richtige Werbeagentur in Mainz für mein Projekt?",
      answer: "Wir arbeiten direkt, effizient und auf Augenhöhe. Bei uns sprechen Sie immer mit dem CEO. Strategie, Design und Technik kommen aus einer Hand. Unsere Websites sind SEO-stark, klar strukturiert und messbar erfolgreich – und wir sind in Mainz verwurzelt, mit Kunden weit darüber hinaus."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Ihre Full-Service Werbeagentur Mainz entdecken</title>
        <meta 
          name="description" 
          content="ooliv - Ihre Werbeagentur Mainz: Kreative Webdesigns, SEO & Marketingstrategien für Ihren digitalen Erfolg." 
        />
      </Helmet>
      <PageLayout className="overflow-x-hidden">
        <PageHero isHomepage={true} /> {/* Changed from DeutscherHero to PageHero */}
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen kämpfen mit Webseiten, die nicht performen. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gefunden werden.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <GermanSolutionSection />
        
        <TechnologiesSection />
        
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse von echten Kunden."
          customSubtitle="Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht."
          customBodyText="Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
        />
        
        <FAQ 
          customFaqs={simplifiedFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Kontaktieren Sie uns"
        />
        
        <CTA 
          lightBackground={true}
          title="Bereit, Ihre digitale Präsenz zu transformieren?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
          primaryCta="Starten Sie Ihr Website-Projekt"
          /* Removed custom footerNote to prevent duplication */
        />
      </PageLayout>
      
      {/* SEO Text Section placed after the PageLayout */}
      <SEOTextSection />
    </>
  );
};

export default GermanIndex;
