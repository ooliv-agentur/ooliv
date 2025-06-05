import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
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
  
  // Use useEffect to set language once after component mounts
  useEffect(() => {
    setLanguage('de');
    console.log('GermanIndex component mounted - setting language to German');
    
    // Force title update immediately
    document.title = 'Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen';
  }, []);

  // Comprehensive LocalBusiness schema markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ooliv Werbeagentur Mainz",
    "alternateName": "ooliv",
    "description": "Werbeagentur Mainz für messbare Ergebnisse im Web. Wir entwickeln Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen.",
    "url": "https://ooliv.de",
    "telephone": "+49-6131-5544041",
    "email": "hallo@ooliv.de",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Große Bleiche 60-62",
      "addressLocality": "Mainz",
      "postalCode": "55116",
      "addressRegion": "Rheinland-Pfalz",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.9928617,
      "longitude": 8.2472526
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Mainz"
      },
      {
        "@type": "City", 
        "name": "Wiesbaden"
      },
      {
        "@type": "State",
        "name": "Rheinland-Pfalz"
      },
      {
        "@type": "State",
        "name": "Hessen"
      }
    ],
    "serviceType": [
      "Webdesign",
      "Webentwicklung", 
      "SEO-Optimierung",
      "Content-Erstellung",
      "Google Ads",
      "KI-Technologien"
    ],
    "priceRange": "€€€",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "foundingDate": "2008",
    "founder": {
      "@type": "Person",
      "name": "Uli Schönleber"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ooliv",
      "https://www.xing.com/companies/ooliv"
    ]
  };
  
  return (
    <>
      <Helmet prioritizeSeoTags>
        <html lang="de" />
        <title>Werbeagentur Mainz – Websites die besser ranken, konvertieren & verkaufen</title>
        <meta
          name="description"
          content="Werbeagentur Mainz für messbare Ergebnisse im Web. ooliv entwickelt Websites, die besser ranken, mehr konvertieren und gezielt neue Kunden gewinnen – ohne Templates, ohne Umwege. Webdesign Mainz."
        />
        
        {/* Geographic Metadata for Mainz */}
        <meta name="geo.region" content="DE-RP" />
        <meta name="geo.placename" content="Mainz" />
        <meta name="geo.position" content="49.9928617;8.2472526" />
        <meta name="ICBM" content="49.9928617, 8.2472526" />
        <meta name="DC.title" content="Werbeagentur Mainz - ooliv" />
        
        {/* LocalBusiness Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero />
        <GermanSolutionSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen kämpfen mit Websites, die nicht performant sind. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gut ranken.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <TechnologiesSection />
        
        <CaseStudiesSection />
        
        <FAQ 
          customFaqs={germanFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für eine Website, die Ihr Unternehmen voranbringt?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihnen helfen kann, Ihre Ziele zu erreichen."
          primaryCta="Projekt starten"
        />
      </PageLayout>
      
      <MainzSEOTextSection />
    </>
  );
};

export default GermanIndex;
