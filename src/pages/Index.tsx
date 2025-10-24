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
import CanonicalUrlHelper from "@/components/seo/CanonicalUrlHelper";
import H1Validator from "@/components/seo/H1Validator";

import { useLanguage } from '@/contexts/LanguageContext';
import DeutscherHero from '@/components/de/DeutscherHero';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CompleteBusinessSchemaGenerator from '@/components/seo/CompleteBusinessSchemaGenerator';
import CostCalculator from '@/components/pricing/CostCalculator';

const germanFaqs = [
  {
    question: "Wie läuft der Website-Erstellungsprozess bei ooliv ab?",
    answer: "Unsere Webprojekte folgen einem klaren Ablauf: Zunächst analysieren wir gemeinsam Ihre Ziele, Zielgruppen und Mitbewerber. Danach erstellen wir Inhalte und Struktur. Anschließend gestalten wir ein modernes, benutzerfreundliches Design und setzen Ihre Website technisch sauber um. Nach dem Go-Live betreuen Sie weiter – mit Support und Updates."
  },
  {
    question: "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?",
    answer: "Die Preise richten sich nach Ihren Anforderungen und Unternehmensgröße. Professionelle Business-Websites starten bei 5.000 €, mittlere Projekte mit SEO bei 8.000–12.000 €. Für größere Projekte wie Shops oder mehrsprachige Websites starten die Kosten bei etwa 15.000 €. Wir erstellen immer transparente Angebote ohne versteckte Gebühren."
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
  
  return (
    <>
      <H1Validator />
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="ooliv Digitalagentur – Websites, die Leads generieren"
          description="ooliv Digitalagentur entwickelt B2B-Websites bundesweit, die Leads generieren – Webdesign, SEO, Google Ads & Content-Marketing. Kostenloses Website-Konzept in 48h."
          canonicalUrl="https://ooliv.de/"
          keywords="Digitalagentur, B2B Webdesign, SEO Agentur, Online Marketing, Website Entwicklung, Lead-Generierung"
          ogImage="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
        />
        
        <CompleteBusinessSchemaGenerator
          businessName="ooliv Digitalagentur"
          description="Digitalagentur für B2B-Unternehmen in Deutschland. Webdesign, SEO, Google Ads und Content-Marketing für messbar mehr Leads."
          address={{
            streetAddress: "Mombacher Str. 25",
            addressLocality: "Mainz",
            postalCode: "55122",
            addressRegion: "Rheinland-Pfalz",
            addressCountry: "DE"
          }}
          telephone="+49-6131-6367801"
          email="info@ooliv.de"
          url="https://ooliv.de"
          areaServed={["Deutschland", "Schweiz", "Österreich", "DACH-Region"]}
          services={["Webdesign", "Webentwicklung", "SEO", "Google Ads", "Content Marketing", "KI-Technologien"]}
        />
        
        <DeutscherHero />
        
        <DeutscherAboutSection />
        
      {/* Budget-Transparenz mit interaktivem Kalkulator */}
      <section className="py-16 bg-background">
        <CostCalculator />
      </section>

        {/* Before/After früher positioniert für sofortige Ergebnisse */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-medico-darkGreen">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-medico-darkGreen">
              Viele Unternehmen kämpfen mit Websites, die nicht performant sind. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google sichtbar werden.
            </p>
            <BeforeAfterSlider />
            <div className="mt-8 text-center">
              <p className="text-medico-darkGreen mb-6">
                Weitere Beispiele gerne auf Anfrage – <a href="mailto:info@ooliv.de" className="text-accent-primary hover:underline">info@ooliv.de</a>
              </p>
              <Button 
                variant="primary"
                size="lg" 
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={handleStartProject}
                aria-label="Starten Sie Ihr Webdesign-Projekt"
              >
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Case Studies früher für sofortiges Vertrauen */}
        <CaseStudiesSection />
        
        {/* Automated Content Marketing Highlight - repositioned for better flow */}
        <section className="py-12 bg-gradient-to-r from-accent-complementary/10 to-accent-primary/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-medico-darkGreen mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-accent-primary mr-3" />
                NEU: Automatisierte Content-Marketing Lösung
              </h2>
              <p className="text-lg text-medico-darkGreen mb-6 max-w-3xl mx-auto">
                Ihr Content-Team, das niemals schläft – AI-gestützte tägliche Content-Erstellung und automatische Verteilung. 
                Täglich frische SEO-Artikel, Social Media Automation und Backlink-Aufbau im Autopilot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline" 
                  className="text-accent-primary border-accent-primary hover:bg-accent-primary/10 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                  asChild
                >
                  <Link to="/automatisierte-content-marketing">
                    Mehr zur Automation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  onClick={handleStartProject}
                  className="bg-accent-primary text-white hover:bg-accent-primary/90 w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2"
                  aria-label="Starten Sie Ihr Content-Marketing Projekt"
                >
                  Projekt starten
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <GermanSolutionSection />
        <TeamTeaserDE />
        <TechnologiesSection />
        
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

        {/* Standort Mainz, bundesweit aktiv */}
        <div className="py-12 bg-medico-mint">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-medico-darkGreen">
                Standort Mainz – Bundesweit für Sie da
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-base text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Von unserem Standort in Mainz aus betreuen wir Unternehmen in ganz Deutschland, 
                  <strong> der Schweiz</strong> und Österreich. Seit 2008 entwickeln wir digitale Strategien, 
                  die messbare Ergebnisse liefern – unabhängig vom Standort unserer Kunden.
                </p>
                <p className="text-base text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Unser Webdesign- und Marketing-Service verbindet persönliche Betreuung mit modernster Technologie. Als Digitalagentur bieten wir Ihnen den kompletten Service aus einer Hand – für lokale und überregionale Projekte.
                </p>
                
                {/* Strategic outgoing links */}
                <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-medico-darkGreen">
                    Nützliche Ressourcen für Unternehmen
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="https://www.rheinhessen.ihk24.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-primary hover:text-medico-darkGreen font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      IHK Rheinhessen
                    </a>
                    <a 
                      href="https://isb.rlp.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-primary hover:text-medico-darkGreen font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Wirtschaftsförderung RLP
                    </a>
                    <a 
                      href="https://www.mainz.de/wirtschaft/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-primary hover:text-medico-darkGreen font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Wirtschaftsförderung Mainz
                    </a>
                  </div>
                </div>
                
                {/* Condensed benefits section */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-base font-semibold mb-2 text-medico-darkGreen">
                      Persönliche Betreuung
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Direkter Draht zum CEO – kurze Wege, schnelle Entscheidungen, egal wo Sie sind.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-base font-semibold mb-2 text-medico-darkGreen">
                      Bundesweite Projekte
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Von Mainz bis München – wir arbeiten mit Unternehmen im gesamten DACH-Raum zusammen.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-base font-semibold mb-2 text-medico-darkGreen">
                      Messbare Erfolge
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Unsere digitalen Strategien basieren auf Daten und liefern nachweisbare Ergebnisse.
                    </p>
                  </div>
                </div>
                
                {/* Internal linking */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Link 
                    to="/webdesign" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-medico-darkGreen hover:text-brand-primary font-medium transition-all text-sm rounded-md hover:bg-brand-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 min-h-[44px]"
                    aria-label="Erfahren Sie mehr über unsere Webdesign Services"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    Webdesign Services
                  </Link>
                  <Link 
                    to="/seo-optimierung" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-medico-darkGreen hover:text-brand-primary font-medium transition-all text-sm rounded-md hover:bg-brand-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 min-h-[44px]"
                    aria-label="Entdecken Sie unsere SEO-Optimierungsservices"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    SEO Services
                  </Link>
                  <Link 
                    to="/kontakt" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-medico-darkGreen hover:text-brand-primary font-medium transition-all text-sm rounded-md hover:bg-brand-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 min-h-[44px]"
                    aria-label="Kontaktieren Sie uns für eine Beratung"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    Beratung anfragen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default GermanIndex;
