
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GermanSolutionSection from "@/components/de/GermanSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';

const germanFaqs = [
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

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    console.log('GermanIndex component mounted - setting language to German');
    document.title = 'Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen';
  }, []);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen</title>
        <meta
          name="description"
          content="ooliv entwickelt Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege. Webdesign Mainz."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <PageHero 
          isHomepage={true}
        />
        
        <DeutscherAboutSection />
        
        <div className="bg-section-gradient-1">
          <TeamTeaserDE />
        </div>
        
        <div className="py-20 bg-section-gradient-2">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-8 text-medico-navy">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-xl mb-16 max-w-4xl mx-auto text-medico-navyLight">
              Viele Unternehmen kämpfen mit Websites, die nicht performant sind. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gut ranken.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <GermanSolutionSection />
        
        <div className="bg-medico-lightGray">
          <TechnologiesSection />
        </div>
        
        <div className="bg-case-studies-gradient">
          <CaseStudiesSection />
        </div>
        
        <div className="bg-section-gradient-1">
          <FAQ 
            customFaqs={germanFaqs}
            customTitle="Häufig gestellte Fragen"
            customCtaText="Weitere Fragen? Sprechen Sie mit uns"
          />
        </div>
        
        <CTA
          lightBackground={false}
          title="Bereit für eine Website, die Ihr Unternehmen voranbringt?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen."
          primaryCta="Projekt starten"
        />
      </PageLayout>
      
      <div className="bg-medico-softMint">
        <SEOTextSection />
      </div>
    </>
  );
};

export default GermanIndex;
