import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StrategicChallengesSection from "@/components/de/StrategicChallengesSection";
import StrategicFrameworksSection from "@/components/de/StrategicFrameworksSection";
import TrackRecordSection from "@/components/de/TrackRecordSection";
import EngagementModelsTeaser from "@/components/de/EngagementModelsTeaser";
import ROICalculatorTeaser from "@/components/de/ROICalculatorTeaser";
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
import TurquoiseCard from '@/components/ui/TurquoiseCard';
import TurquoiseBadge from '@/components/ui/TurquoiseBadge';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CompleteBusinessSchemaGenerator from '@/components/seo/CompleteBusinessSchemaGenerator';

const strategicFaqs = [
  {
    question: "Was ist Strategic Discovery und wann macht sie Sinn?",
    answer: "Strategic Discovery ist eine intensive 4–6-wöchige Phase, in der wir Ihre Business Challenges systematisch analysieren, User Research durchführen und eine fundierte Digital Strategy entwickeln. Sie macht Sinn, wenn Sie vor einer Digital Transformation stehen, neue Produkte launchen oder bestehende Systeme strategisch optimieren wollen. Investment: €15k–25k."
  },
  {
    question: "Wie unterscheidet sich Product & UX Strategy von klassischem Webdesign?",
    answer: "Klassisches Webdesign fokussiert auf visuelle Gestaltung. Product & UX Strategy beginnt mit Strategic Discovery, User Journey Mapping, Business Model Validation und resultiert in einem datengetriebenen, conversion-optimierten Digital Product. Wir arbeiten nicht nach Templates, sondern entwickeln maßgeschneiderte Strategic Frameworks für Ihr Business."
  },
  {
    question: "Welche Business Outcomes kann ich erwarten?",
    answer: "Basierend auf 16+ Jahren Track Record: durchschnittlich +240% Conversion Rate nach Strategic Discovery & UX Optimization, +180% Lead Quality durch Strategic Positioning, und -45% Time-to-Decision bei C-Level Stakeholders durch klare Strategic Roadmaps. Jedes Projekt ist individuell – nutzen Sie unseren ROI Calculator für Ihre Projektionen."
  },
  {
    question: "Wie funktioniert die Zusammenarbeit bei einem Strategic Retainer?",
    answer: "Strategic Retainer (€8k–15k/Monat) ist eine langfristige C-Level Advisory Partnership. Sie erhalten kontinuierlichen Zugang zu Strategic Consulting, Ongoing Optimization, AI Integration Support und Innovation Leadership. Ideal für Unternehmen, die Digital Transformation als continuous Journey verstehen, nicht als One-time Project."
  },
  {
    question: "Für welche Unternehmen ist dieses Engagement-Modell geeignet?",
    answer: "Unser Strategic Advisory richtet sich an B2B-Unternehmen im DACH-Raum, die digitale Transformation ernst nehmen. Typische Kunden: Tech-Startups mit Product-Market Fit Challenges, Mittelstand vor Digital Transformation, etablierte Unternehmen mit Innovation Gaps. Investment-Range: €15k–80k für Transformations-Projekte, €8k–15k/Monat für Strategic Retainer."
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
          title="Digital Strategy Lead | Uli Schönleber - AI-Driven Transformation für B2B"
          description="16+ Jahre Digital Strategy & Transformation für B2B-Unternehmen im DACH-Raum. Strategic Discovery, AI Integration, Product & UX Strategy. C-Level Advisory mit messbaren Ergebnissen."
          canonicalUrl="https://ooliv.de/"
          keywords="B2B Website Agentur, Lead-Generierung, strategisches Webdesign, SEO Beratung, Google Ads Agentur, Website-Konzept"
          ogImage="/lovable-uploads/cfb33e9a-d195-4aee-a3f5-649636005e5b.png"
        />
        
        <CompleteBusinessSchemaGenerator
          businessName="ooliv Digital Consultancy"
          description="Digital Strategy Lead für B2B-Transformationen im DACH-Raum. Strategic Discovery, AI Integration, Product & UX Strategy. 16+ Jahre C-Level Advisory mit messbaren Business Outcomes."
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
          services={["Digital Strategy", "AI Integration", "Product & UX Strategy", "Strategic Discovery", "C-Level Advisory", "Digital Transformation"]}
        />
        
        <DeutscherHero />
        
        <DeutscherAboutSection />
        
        {/* CostCalculator removed - no longer fits Strategic Advisory positioning */}
        {/* For investment models, see /investition page instead */}

        {/* Before/After früher positioniert für sofortige Ergebnisse */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Von der Strategic Discovery zur messbaren Transformation</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
              Digitale Transformation braucht mehr als nur Technik – sie braucht strategische Klarheit, durchdachte UX und AI-Integration. Mit bewährter <Link to="/methodik" className="text-primary hover:underline font-medium">Methodik</Link> zur erfolgreichen Umsetzung.
            </p>
            <BeforeAfterSlider />
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-6">
                Weitere Beispiele gerne auf Anfrage – <a href="mailto:info@ooliv.de" className="text-turquoise hover:underline">info@ooliv.de</a>
              </p>
              <Button 
                variant="primary"
                size="lg" 
                className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={handleStartProject}
                aria-label="Strategic Discovery vereinbaren"
              >
                Strategic Discovery vereinbaren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
        
        <TrackRecordSection />
        <CaseStudiesSection />
        
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-turquoise mr-3" />
                NEU: Automatisierte Content-Marketing Lösung
              </h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Ihr Content-Team, das niemals schläft – AI-gestützte tägliche Content-Erstellung und automatische Verteilung. 
                Täglich frische SEO-Artikel, Social Media Automation und Backlink-Aufbau im Autopilot.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  variant="outline" 
                  className="text-turquoise border-turquoise hover:bg-turquoise/10 w-full sm:w-auto"
                  asChild
                >
                  <Link to="/automatisierte-content-marketing">
                    Mehr zur Automation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  onClick={handleStartProject}
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Projekt starten
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <StrategicChallengesSection />
        <EngagementModelsTeaser />
        <ROICalculatorTeaser />
        <TeamTeaserDE />
        <StrategicFrameworksSection />
        
        <FAQ 
          customFaqs={strategicFaqs}
          customTitle="Strategic Advisory FAQs"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für Strategic Digital Transformation?"
          subtitle="Vereinbaren Sie ein unverbindliches Strategiegespräch mit Uli Schönleber – Digital Strategy Lead mit 16+ Jahren Track Record."
          primaryCta="Strategiegespräch vereinbaren"
        />

        {/* Standort Mainz, bundesweit aktiv */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                Standort Mainz – Strategic Advisory im gesamten DACH-Raum
              </h2>
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-base text-muted-foreground" style={{ lineHeight: '1.6' }}>
                  Von unserem Standort in Mainz aus führen wir Digital Transformationen für B2B-Unternehmen in ganz Deutschland, 
                  <strong> der Schweiz</strong> und Österreich. Seit 2008 entwickeln wir Strategic Frameworks, 
                  die messbare Business Outcomes liefern – unabhängig vom Standort unserer Kunden.
                </p>
                <p className="text-base text-muted-foreground" style={{ lineHeight: '1.6' }}>
                  Unser Strategic Advisory verbindet C-Level Expertise mit hands-on Implementation Leadership. Als Digital Strategy Lead biete ich Ihnen End-to-End Begleitung – von Strategic Discovery über AI Integration bis zur messbaren Transformation.
                </p>
                
                {/* Strategic outgoing links */}
                <div className="bg-white p-4 rounded-lg shadow-sm mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    Nützliche Ressourcen für Unternehmen
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a 
                      href="https://www.rheinhessen.ihk24.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-turquoise hover:text-foreground font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      IHK Rheinhessen
                    </a>
                    <a 
                      href="https://isb.rlp.de/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-turquoise hover:text-foreground font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Wirtschaftsförderung RLP
                    </a>
                    <a 
                      href="https://www.mainz.de/wirtschaft/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-turquoise hover:text-foreground font-medium transition-colors text-sm"
                    >
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Wirtschaftsförderung Mainz
                    </a>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <TurquoiseCard variant="default" hoverLift>
                    <div className="text-center p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Strategic Excellence</h3>
                      <p className="text-sm text-muted-foreground">16+ Jahre Digital Strategy Leadership</p>
                    </div>
                  </TurquoiseCard>
                  <TurquoiseCard variant="default" hoverLift>
                    <div className="text-center p-4">
                      <h3 className="font-semibold mb-2 text-foreground">Messbare Ergebnisse</h3>
                      <p className="text-sm text-muted-foreground">+240% avg. Conversion Rate Steigerung</p>
                    </div>
                  </TurquoiseCard>
                  <TurquoiseCard variant="default" hoverLift>
                    <div className="text-center p-4">
                      <h3 className="font-semibold mb-2 text-foreground">C-Level Expertise</h3>
                      <p className="text-sm text-muted-foreground">100+ erfolgreiche Transformationen</p>
                    </div>
                  </TurquoiseCard>
                </div>
                
                {/* Internal linking */}
                <div className="flex flex-wrap justify-center gap-3 mt-6">
                  <Link 
                    to="/webdesign" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-foreground hover:text-turquoise font-medium transition-all text-sm rounded-md hover:bg-turquoise/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 min-h-[44px]"
                    aria-label="Erfahren Sie mehr über unsere Webdesign Services"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    Webdesign Services
                  </Link>
                  <Link 
                    to="/seo-optimierung" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-foreground hover:text-turquoise font-medium transition-all text-sm rounded-md hover:bg-turquoise/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 min-h-[44px]"
                    aria-label="Entdecken Sie unsere SEO-Optimierungsservices"
                  >
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    SEO Services
                  </Link>
                  <Link 
                    to="/kontakt" 
                    className="group inline-flex items-center gap-2 px-4 py-2 text-foreground hover:text-turquoise font-medium transition-all text-sm rounded-md hover:bg-turquoise/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise focus-visible:ring-offset-2 min-h-[44px]"
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
