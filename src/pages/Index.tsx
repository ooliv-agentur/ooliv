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
    question: "Für wen sind Ihre Leistungen geeignet?",
    answer: "Ich arbeite hauptsächlich mit B2B-Unternehmen aus dem DACH-Raum, die digital besser werden wollen. Typischerweise Geschäftsführer oder Marketing-Verantwortliche, die merken, dass ihre Website oder digitale Strategie nicht die gewünschten Ergebnisse bringt. Egal ob Mittelstand, Tech-Startup oder Dienstleister – wenn Sie bereit sind, strategisch zu denken statt nur schnelle Lösungen zu suchen, passen wir gut zusammen."
  },
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer: "Wir starten immer mit einem kostenlosen Erstgespräch (30 Minuten), in dem wir Ihre Situation analysieren. Danach bekommen Sie von mir eine ehrliche Einschätzung und einen konkreten Vorschlag, wie wir vorgehen können. Je nach Projekt arbeiten wir entweder in einem Workshop-Format, als längerfristiger Sparringspartner oder mit konkreter Umsetzung. Sie entscheiden, was für Sie passt."
  },
  {
    question: "Was brauchen Sie von mir für den Start?",
    answer: "Vor allem Ihre Zeit und Offenheit. Für ein effektives Erstgespräch hilft es, wenn Sie Ihre aktuellen Herausforderungen schon grob umreißen können: Was funktioniert nicht? Wo sehen Sie Potenzial? Was haben Sie schon versucht? Konkrete Zahlen (Website-Besucher, Anfragen, etc.) sind hilfreich, aber kein Muss. Wichtiger ist, dass Sie bereit sind, ehrlich über Ihre Situation zu sprechen."
  },
  {
    question: "Arbeiten Sie nur remote oder auch vor Ort?",
    answer: "Beides ist möglich. Die meisten Projekte laufen remote ab – das funktioniert hervorragend und spart allen Zeit. Für strategische Workshops oder wichtige Kickoffs komme ich aber auch gerne zu Ihnen ins Büro, besonders in der DACH-Region (Mainz, Frankfurt, Wiesbaden, aber auch deutschlandweit und in der Schweiz). Wir finden gemeinsam die beste Arbeitsweise für Ihr Projekt."
  },
  {
    question: "Was unterscheidet Sie von anderen Agenturen?",
    answer: "Sie arbeiten direkt mit mir – einem erfahrenen Digital-Berater mit 16+ Jahren Praxis, nicht mit Junior-Mitarbeitern. Ich sage Ihnen offen, wenn etwas keinen Sinn macht, statt einfach nur zu verkaufen. Sie bekommen messbare Strategien statt schöner PowerPoints. Und Sie bekommen keine Standard-Agentur-Lösungen, sondern maßgeschneiderte Ansätze für Ihr spezifisches Business."
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
