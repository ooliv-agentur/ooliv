import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import UliSection from "@/components/de/UliSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import LeistungenSection from "@/components/de/LeistungenSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import CanonicalUrlHelper from "@/components/seo/CanonicalUrlHelper";
import H1Validator from "@/components/seo/H1Validator";

import { useLanguage } from '@/contexts/LanguageContext';
import PremiumHero from '@/components/PremiumHero';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import CompleteBusinessSchemaGenerator from '@/components/seo/CompleteBusinessSchemaGenerator';
import CostCalculator from '@/components/pricing/CostCalculator';

const germanFaqs = [
  {
    question: "Wie läuft ein Projekt bei ooliv ab?",
    answer: "Strukturierte Analyse → Konzept → Wireframes → Design → Umsetzung → Launch."
  },
  {
    question: "Was kostet eine Website?",
    answer: "Typischer Rahmen: 5.400–45.000 €. Der Kalkulator gibt einen Richtwert."
  },
  {
    question: "Wie lange dauert ein Projekt?",
    answer: "6–10 Wochen je nach Umfang."
  },
  {
    question: "Was unterscheidet ooliv von anderen Agenturen?",
    answer: "Direkter Zugang zur Geschäftsführung, keine Junioren, klare Struktur, messbare Ergebnisse."
  },
  {
    question: "Machen Sie auch SEO und Content?",
    answer: "Ja – technisches SEO + Onpage + AI-gestützte Inhalte."
  },
  {
    question: "Kann ich mit Ihnen langfristig zusammenarbeiten?",
    answer: "Ja – SEO, Performance, monatlicher Support."
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
          title="B2B-Websites, die Leads generieren | ooliv Digitalagentur"
          description="Strategische B2B-Websites bundesweit: Lead-Generierung, Webdesign, SEO & Google Ads. Inhabergeführt. Messbare KPIs. Kostenloses Website-Konzept in 48h."
          canonicalUrl="https://ooliv.de/"
          keywords="B2B Website Agentur, Lead-Generierung, strategisches Webdesign, SEO Beratung, Google Ads Agentur, Website-Konzept"
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
        
        {/* 1. HERO */}
        <PremiumHero />
        
        {/* 2. WHY DIFFERENT */}
        <WhyDifferentSection />
        
        {/* 3. LEISTUNGEN */}
        <LeistungenSection />
        
        {/* 4. BUDGET-TRANSPARENZ */}
        <section className="py-16 bg-background">
          <CostCalculator />
        </section>

        {/* 5. VORHER/NACHHER */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-foreground">Ergebnisse sprechen für sich.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-muted-foreground">
              Klarere Struktur. Bessere UX. Mehr Sichtbarkeit. Mehr Anfragen.
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
                aria-label="Starten Sie Ihr Webdesign-Projekt"
              >
                Projekt starten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* 6. CASE STUDIES */}
        <CaseStudiesSection />
        
        {/* 7. ULI SECTION */}
        <UliSection />
        
        {/* 8. TOOLS & METHODEN */}
        <TechnologiesSection />
        
        {/* 9. FAQ */}
        <FAQ 
          customFaqs={germanFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        {/* 10. CTA + FOOTER */}
        <CTA
          lightBackground={true}
          title="Bereit für digitale Klarheit?"
          subtitle="Lassen Sie uns besprechen, wie wir Ihnen helfen können."
          primaryCta="Projekt starten"
        />

        {/* Location in Footer */}
        <footer className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>ooliv GmbH</strong> · Mainz · Deutschlandweit tätig
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Webdesign · UX · Strategie · SEO · KI-gestützte Workflows
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:info@ooliv.de" className="text-turquoise hover:underline">info@ooliv.de</a> · +49 6131 6367801
            </p>
          </div>
        </footer>
      </PageLayout>
    </>
  );
};

export default GermanIndex;
