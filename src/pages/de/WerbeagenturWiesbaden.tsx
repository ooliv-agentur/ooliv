
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GermanSolutionSection from "@/components/de/GermanSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import PageHero from '@/components/PageHero';
import WiesbadenAboutSection from '@/components/de/WiesbadenAboutSection';
import WiesbadenTeamSection from '@/components/de/WiesbadenTeamSection';
import Reveal from '@/components/animations/Reveal';

// Updated FAQ items for Wiesbaden
const wiesbadenFaqs = [
  {
    question: "Wie läuft ein Website-Projekt mit ooliv ab?",
    answer: "Wir starten mit einem klar strukturierten Plan: Strategie, Inhalte, Design, Technik – alles modular aufgebaut. Sie erhalten feste Ansprechpartner, volle Transparenz und eine Website, die wirkt."
  },
  {
    question: "Was kostet eine individuelle Website bei ooliv?",
    answer: "Der Preis hängt vom Umfang ab – einfache Seiten starten bei rund 4.000 €, größere Projekte liegen meist zwischen 8.000 € und 15.000 €. Wir liefern Ihnen ein transparentes Angebot, ohne versteckte Kosten."
  },
  {
    question: "Wie lange dauert die Umsetzung?",
    answer: "Typische Projekte dauern zwischen 4 und 8 Wochen – abhängig von Komplexität und Abstimmung. Eine saubere Vorbereitung sorgt für einen reibungslosen Ablauf."
  },
  {
    question: "Was passiert nach dem GoLive?",
    answer: "Wir bleiben an Ihrer Seite – für Updates, technische Betreuung oder neue Inhalte. Auf Wunsch übernehmen wir Hosting, Wartung und Weiterentwicklung."
  },
  {
    question: "Warum ist ooliv die richtige Werbeagentur für Unternehmen aus Wiesbaden?",
    answer: "Weil wir verstehen, was B2B-Unternehmen im Raum Wiesbaden brauchen: Sichtbarkeit, Klarheit und messbare Ergebnisse. Keine Floskeln, sondern funktionierende Websites – individuell mit System."
  }
];

const WerbeagenturWiesbaden = () => {
  const { setLanguage } = useLanguage();
  
  // Use useEffect to set language once after component mounts
  useEffect(() => {
    setLanguage('de');
    console.log('WerbeagenturWiesbaden component mounted - setting language to German');
    
    // Force title update immediately
    document.title = 'Werbeagentur Wiesbaden – Sichtbarkeit & Weblösungen für Unternehmen';
  }, []);
  
  // Update to correct video path in lovable-uploads folder - using same as homepage
  const videoPath = "/lovable-uploads/Startpage-german-english.mp4";
  console.log('Wiesbaden page: Using video path:', videoPath);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Wiesbaden – Sichtbarkeit & Weblösungen für Unternehmen</title>
        <meta
          name="description"
          content="ooliv ist Ihre strategische Werbeagentur in Wiesbaden: Websites, SEO & Google Ads – individuell umgesetzt, messbar im Ergebnis."
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <PageHero 
          isHomepage={true} 
          backgroundVideo={videoPath}
          title={
            <div className="flex flex-col">
              <span>Werbeagentur Wiesbaden</span>
              <span className="text-2xl md:text-3xl lg:text-4xl mt-2 text-brand-primary font-medium">
                Klar positioniert. Digital sichtbar. Erfolgreich im Wettbewerb.
              </span>
            </div>
          }
          subtitle="Wir gestalten Websites, die wirken: sichtbar, überzeugend, strategisch durchdacht. Ohne Templates, ohne Umwege – sondern mit System und Substanz."
        />
        <WiesbadenAboutSection />
        <WiesbadenTeamSection />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website soll Kunden gewinnen – nicht nur gut aussehen.</h2>
              <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
                Viele Unternehmen aus Wiesbaden kämpfen mit hübschen, aber wirkungslosen Websites. Wir entwickeln Auftritte, die Vertrauen schaffen, Leads generieren und bei Google sichtbar sind – technisch sauber, strategisch geplant, klar auf Zielgruppen ausgerichtet.
              </p>
            </Reveal>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={wiesbadenFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die Kunden gewinnt?"
          subtitle="Lassen Sie uns gemeinsam besprechen, wie wir Ihre Website zum leistungsstarken Vertriebskanal machen – strategisch, klar und messbar."
          primaryCta="Projekt starten"
        />
      </PageLayout>
      
      <SEOTextSection />
    </>
  );
};

export default WerbeagenturWiesbaden;
