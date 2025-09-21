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

import { useLanguage } from '@/contexts/LanguageContext';
import DeutscherHero from '@/components/de/DeutscherHero';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import LocalBusinessSchemaGenerator from '@/components/seo/LocalBusinessSchemaGenerator';

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
  
  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <EnhancedSEOHead
          title="ooliv Werbeagentur Mainz - Webdesign & Marketing für B2B"
          description="ooliv - Ihre Werbeagentur in Mainz für professionelles Webdesign, SEO-Optimierung und digitale Strategien. Wir entwickeln Websites für B2B-Unternehmen, die messbar mehr Leads generieren. Seit 2008 in Mainz verwurzelt."
          canonicalUrl="https://ooliv.de/"
          keywords="Werbeagentur Mainz, Webdesign Mainz, SEO Agentur Mainz, Online Marketing Mainz, Digitalagentur Mainz"
          ogImage="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
        />
        
        <LocalBusinessSchemaGenerator
          businessName="ooliv Werbeagentur Mainz"
          description="Etablierte Werbeagentur Mainz seit 2008. Spezialisiert auf Webdesign Mainz, SEO Optimierung, Online Marketing Mainz und digitale Strategien für Unternehmen in Rheinland-Pfalz."
          address={{
            streetAddress: "Am Brand 8",
            addressLocality: "Mainz",
            postalCode: "55116",
            addressRegion: "Rheinland-Pfalz",
            addressCountry: "DE"
          }}
          geo={{
            latitude: 49.9928617,
            longitude: 8.2472526
          }}
          telephone="+49-6131-9027640"
          email="hallo@ooliv.de"
          url="https://ooliv.de"
          priceRange="€€€"
          areaServed={["Mainz", "Wiesbaden", "Frankfurt", "Rheinland-Pfalz", "Hessen"]}
          services={["Webdesign Mainz", "SEO Optimierung Mainz", "Google Ads Betreuung Mainz", "Online Marketing Mainz", "Digitale Strategieberatung"]}
        />
        <DeutscherHero />
        
        <DeutscherAboutSection />
        
        {/* Automated Content Marketing Highlight */}
        <section className="py-12 bg-gradient-to-r from-medico-yellow/10 to-medico-turquoise/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-medico-darkGreen mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-medico-turquoise mr-3" />
                NEU: Automatisierte Content-Marketing Lösung
              </h2>
              <p className="text-lg text-medico-darkGreen mb-6 max-w-3xl mx-auto">
                Ihr Content-Team, das niemals schläft – AI-gestützte tägliche Content-Erstellung und automatische Verteilung. 
                Täglich frische SEO-Artikel, Social Media Automation und Backlink-Aufbau im Autopilot.
              </p>
              <Button 
                variant="outline" 
                className="text-medico-turquoise border-medico-turquoise hover:bg-medico-turquoise/10 mr-4"
                asChild
              >
                <Link to="/automatisierte-content-marketing">
                  Mehr zur Automation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                onClick={handleStartProject}
                className="bg-medico-turquoise text-white hover:bg-medico-turquoise/90"
              >
                Demo anfragen
              </Button>
            </div>
          </div>
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
        
        {/* Case Studies früher für sofortiges Vertrauen */}
        <CaseStudiesSection />
        
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

        {/* Moved Mainz-specific positioning section to just before footer for better UX */}
        <div className="py-12 bg-medico-mint">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-medico-darkGreen">
                Ihre Werbeagentur in Mainz für digitalen Erfolg
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-base text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Als etablierte <strong>Werbeagentur in Mainz</strong> verstehen wir die Besonderheiten des rheinland-pfälzischen Marktes. Seit 2008 entwickeln wir für Unternehmen in Mainz und Umgebung digitale Strategien, die messbare Ergebnisse liefern.
                </p>
                <p className="text-base text-medico-darkGreen" style={{ lineHeight: '1.6' }}>
                  Unser <strong>Webdesign Mainz</strong> Service verbindet lokale Marktkenntnis mit modernster Technologie. Als <strong>Digitalagentur Mainz</strong> bieten wir Ihnen den kompletten Service aus einer Hand.
                </p>
                
                {/* Strategic outgoing links */}
                <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-medico-darkGreen">
                    Nützliche Ressourcen für Unternehmen in Mainz
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="https://www.rheinhessen.ihk24.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      IHK Rheinhessen
                    </a>
                    <a 
                      href="https://isb.rlp.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Wirtschaftsförderung RLP
                    </a>
                    <a 
                      href="https://www.mainz.de/wirtschaft/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-medico-turquoise hover:text-medico-darkGreen font-medium transition-colors text-sm"
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
                      Lokale Marktkenntnis
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Als <strong>SEO Agentur Mainz</strong> kennen wir die lokalen Suchtrends und Zielgruppen.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-base font-semibold mb-2 text-medico-darkGreen">
                      Persönliche Betreuung
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Kurze Wege, direkte Kommunikation – als <strong>Webdesign Agentur Mainz</strong> sind wir vor Ort erreichbar.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h4 className="text-base font-semibold mb-2 text-medico-darkGreen">
                      Messbare Erfolge
                    </h4>
                    <p className="text-sm text-medico-darkGreen">
                      Unsere <strong>digitalen Strategien für Mainz</strong> basieren auf Daten und liefern messbare Ergebnisse.
                    </p>
                  </div>
                </div>
                
                {/* Internal linking */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Link to="/webdesign" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors text-sm">
                    ➤ Webdesign Mainz Services
                  </Link>
                  <Link to="/seo-optimierung" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors text-sm">
                    ➤ SEO Agentur Mainz
                  </Link>
                  <Link to="/kontakt" className="inline-flex items-center text-medico-darkGreen hover:text-medico-turquoise font-medium transition-colors text-sm">
                    ➤ Beratung in Mainz
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
