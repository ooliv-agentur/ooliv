import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import StrategicChallengesSection from "@/components/de/StrategicChallengesSection";
import StrategicFrameworksSection from "@/components/de/StrategicFrameworksSection";
import TrackRecordSection from "@/components/de/TrackRecordSection";
import HowWeWorkSection from "@/components/de/HowWeWorkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import CanonicalUrlHelper from "@/components/seo/CanonicalUrlHelper";
import H1Validator from "@/components/seo/H1Validator";

import { useLanguage } from '@/contexts/LanguageContext';
import DeutscherHero from '@/components/de/DeutscherHero';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CompleteBusinessSchemaGenerator from '@/components/seo/CompleteBusinessSchemaGenerator';

const strategicFaqs = [
  {
    question: "Was kostet eine professionelle Website?",
    answer: "Eine strategisch entwickelte B2B-Website startet bei €15.000–25.000 für Strategie-Workshop, Konzept und Design. Komplexe Projekte mit individuellen Funktionen liegen bei €30.000–80.000. Wir arbeiten transparent mit Festpreis – Sie wissen vorher, was Sie bekommen und was es kostet."
  },
  {
    question: "Wie lange dauert ein Website-Projekt?",
    answer: "Ein typisches Projekt dauert 8–12 Wochen: 2 Wochen Strategie & Konzept, 3–4 Wochen Design & Entwicklung, 2 Wochen Testing & Optimierung, 1 Woche Launch-Vorbereitung. Bei komplexeren Projekten planen wir 3–4 Monate ein. Sie erhalten einen klaren Zeitplan vor Projektstart."
  },
  {
    question: "Kann ich die Website später selbst pflegen?",
    answer: "Ja! Wir setzen auf benutzerfreundliche Content-Management-Systeme. Nach dem Launch schulen wir Sie persönlich – Sie können dann selbstständig Texte, Bilder und News aktualisieren. Für komplexere Änderungen unterstützen wir Sie gerne im Rahmen eines Wartungsvertrags."
  },
  {
    question: "Bekomme ich auch Unterstützung nach dem Launch?",
    answer: "Definitiv! Wir bieten verschiedene Betreuungspakete: Von monatlicher Wartung (ab €500/Monat) über kontinuierliche Optimierung (€2.000–5.000/Monat) bis zu strategischer Begleitung (€8.000–15.000/Monat). Sie entscheiden, wie viel Unterstützung Sie brauchen."
  },
  {
    question: "Was unterscheidet Sie von anderen Agenturen?",
    answer: "Sie arbeiten direkt mit einem erfahrenen Digital-Berater – keine Junior-Mitarbeiter, keine ewigen Abstimmungsschleifen. 16+ Jahre Erfahrung, messbare Ergebnisse statt schöner Worte, und ehrliche Beratung: Wenn etwas keinen Sinn macht, sage ich das offen."
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
        
        <StrategicChallengesSection />
        <HowWeWorkSection />
        <TeamTeaserDE />
        <StrategicFrameworksSection />
        
        <FAQ 
          customFaqs={strategicFaqs}
          customTitle="Strategic Advisory FAQs"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Lassen Sie uns über Ihr Projekt sprechen"
          subtitle="In einem kostenlosen 30-Minuten-Gespräch schauen wir uns Ihre Situation an und ich zeige Ihnen konkrete Ansätze, wie Sie digital besser werden können."
          primaryCta="Kostenloses Erstgespräch vereinbaren"
        />
      </PageLayout>
    </>
  );
};

export default GermanIndex;
