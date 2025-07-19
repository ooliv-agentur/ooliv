
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
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

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
  }, []);

  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  // Comprehensive LocalBusiness schema markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ooliv Werbeagentur Mainz",
    "alternateName": "ooliv",
    "description": "Werbeagentur Mainz für messbare Ergebnisse im Web. Professionelles Webdesign Mainz, SEO-Optimierung und digitale Strategien für nachhaltigen Unternehmenserfolg.",
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
        <title>Werbeagentur Mainz | ooliv - Ihre digitale Marketing Agentur</title>
        <meta
          name="description"
          content="ooliv - Ihre Werbeagentur in Mainz für professionelles Webdesign, SEO-Optimierung und digitale Strategien. Wir entwickeln Websites für B2B-Unternehmen, die messbar mehr Leads generieren. Seit 2008 in Mainz verwurzelt."
        />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="Werbeagentur Mainz | ooliv - Ihre digitale Marketing Agentur" />
        <meta property="og:description" content="Individuelle Websites für mehr Sichtbarkeit und Vertrauen. Jetzt starten." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1518770660439-4636190af475" />
        <meta property="og:url" content="https://ooliv.de/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ooliv Werbeagentur Mainz" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ooliv – Werbeagentur Mainz" />
        <meta name="twitter:description" content="Individuelle Websites für mehr Sichtbarkeit und Vertrauen." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1518770660439-4636190af475" />
        
        {/* Geographic Metadata for Mainz */}
        <meta name="geo.region" content="DE-RP" />
        <meta name="geo.placename" content="Mainz" />
        <meta name="geo.position" content="49.9928617;8.2472526" />
        <meta name="ICBM" content="49.9928617, 8.2472526" />
        <meta name="DC.title" content="ooliv - Werbeagentur Mainz" />
        
        {/* LocalBusiness Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Helmet>
      
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero />
        
        {/* Enhanced Mainz-specific positioning section with more content */}
        <div className="py-16 bg-medico-mint">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-medico-darkGreen">
                Ihre Werbeagentur in Mainz für digitalen Erfolg
              </h2>
              <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-lg text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Als etablierte <strong>Werbeagentur in Mainz</strong> verstehen wir die Besonderheiten des rheinland-pfälzischen Marktes. Seit 2008 entwickeln wir für Unternehmen in Mainz und Umgebung digitale Strategien, die messbare Ergebnisse liefern – von der ersten Idee bis zum nachhaltigen Online-Erfolg.
                </p>
                <p className="text-lg text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Unser <strong>Webdesign Mainz</strong> Service verbindet lokale Marktkenntnis mit modernster Technologie. Wir gestalten Websites, die nicht nur optisch überzeugen, sondern auch bei Google gefunden werden und Ihre Zielgruppe in qualifizierte Leads verwandeln.
                </p>
                <p className="text-lg text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Als <strong>Digitalagentur Mainz</strong> bieten wir Ihnen den kompletten Service aus einer Hand: Strategieentwicklung, Webdesign, SEO-Optimierung, Content-Erstellung und Online-Marketing. Dabei arbeiten Sie direkt mit unserem Gründer zusammen – ohne Umwege, ohne Missverständnisse.
                </p>
                
                {/* Strategic outgoing links */}
                <div className="bg-white p-6 rounded-lg shadow-sm mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-medico-darkGreen">
                    Nützliche Ressourcen für Unternehmen in Mainz
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="https://www.rheinhessen.ihk24.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      IHK Rheinhessen
                    </a>
                    <a 
                      href="https://isb.rlp.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Wirtschaftsförderung RLP
                    </a>
                    <a 
                      href="https://www.mainz.de/wirtschaft/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Wirtschaftsförderung Mainz
                    </a>
                  </div>
                </div>
                
                {/* Internal linking with location-based anchor text */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Link to="/webdesign" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors">
                    ➤ Webdesign Mainz Services
                  </Link>
                  <Link to="/seo-optimierung" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors">
                    ➤ SEO Agentur Mainz
                  </Link>
                  <Link to="/kontakt" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors">
                    ➤ Beratung in Mainz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-medico-darkGreen">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-medico-darkGreen">
              Viele Unternehmen kämpfen mit Websites, die nicht performant sind. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google sichtbar werden.
            </p>
            <BeforeAfterSlider />
            <div className="mt-8 text-center">
              <p className="text-medico-darkGreen mb-6">
                Weitere Beispiele gerne auf Anfrage – <a href="mailto:info@ooliv.de" className="text-medico-turquoise hover:underline">info@ooliv.de</a>
              </p>
              <Button 
                variant="primary"
                size="lg" 
                className="group"
                onClick={handleStartProject}
              >
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
        
        <GermanSolutionSection />
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
