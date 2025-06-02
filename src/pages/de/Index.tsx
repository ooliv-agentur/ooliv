
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
import MainzSEOTextSection from "@/components/de/MainzSEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';
import DeutscherHero from '@/components/de/DeutscherHero';

const germanFaqs = [
  {
    question: "Wie läuft der Website-Erstellungsprozess bei der Werbeagentur Mainz ooliv ab?",
    answer: "Unsere Webprojekte folgen einem klaren Ablauf: Zunächst analysieren wir gemeinsam Ihre Ziele, Zielgruppen und Mitbewerber. Danach erstellen wir Inhalte und Struktur. Anschließend gestalten wir ein modernes, benutzerfreundliches Design und setzen Ihre Website technisch sauber um. Nach dem Go-Live betreuen Sie weiter – mit Support und Updates."
  },
  {
    question: "Was kostet eine individuell entwickelte WordPress-Website bei der Werbeagentur Mainz?",
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
  
  // Use useEffect to set language once after component mounts
  useEffect(() => {
    setLanguage('de');
    console.log('GermanIndex component mounted - setting language to German');
    
    // Force title update immediately
    document.title = 'Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen';
  }, []);
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen</title>
        <meta
          name="description"
          content="ooliv – Ihre Werbeagentur Mainz entwickelt Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege. Webdesign Mainz."
        />
        
        {/* Structured Data for Local Business - Werbeagentur Mainz */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AdvertisingAgency",
            "name": "ooliv Werbeagentur Mainz",
            "description": "Werbeagentur Mainz für digitale Markenführung, Webdesign und Online-Marketing. Seit über 16 Jahren entwickeln wir Websites, die besser ranken und konvertieren.",
            "url": "https://ooliv.de",
            "telephone": "+49-6131-6365656",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Große Langgasse 29",
              "addressLocality": "Mainz",
              "postalCode": "55116",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "49.9929",
              "longitude": "8.2473"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Mainz und Rhein-Main-Gebiet"
            },
            "serviceType": [
              "Werbeagentur",
              "Webdesign",
              "SEO",
              "Online Marketing",
              "Webentwicklung"
            ],
            "founder": {
              "@type": "Person",
              "name": "Oliver Eckl"
            },
            "foundingDate": "2008",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "25"
            }
          })}
        </script>
        
        {/* Additional meta tags for better local SEO */}
        <meta name="geo.region" content="DE-RP" />
        <meta name="geo.placename" content="Mainz" />
        <meta name="geo.position" content="49.9929;8.2473" />
        <meta name="ICBM" content="49.9929, 8.2473" />
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero />
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen kämpfen mit Websites, die nicht performant sind. Wir entwickeln als Werbeagentur Mainz Websites, die Leads generieren, Vertrauen aufbauen und bei Google gut ranken.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <GermanSolutionSection />
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={germanFaqs}
          customTitle="Häufig gestellte Fragen zur Werbeagentur Mainz"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die Ihr Unternehmen voranbringt?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihnen als Werbeagentur Mainz helfen kann, Ihre Ziele zu erreichen."
          primaryCta="Projekt starten"
        />
      </PageLayout>
      
      <MainzSEOTextSection />
    </>
  );
};

export default GermanIndex;
