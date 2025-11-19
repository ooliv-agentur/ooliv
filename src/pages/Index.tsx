import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from "@/components/PageLayout";
import WhyChooseUs from "@/components/de/WhyChooseUs";
import TeamSection from "@/components/de/TeamSection";
import StrategicChallengesSection from "@/components/de/StrategicChallengesSection";
import HowWeWorkSection from "@/components/de/HowWeWorkSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ServicesOverview from "@/components/services/ServicesOverview";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import StickyCTA from "@/components/conversion/StickyCTA";
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
    answer: "Wir arbeiten hauptsächlich mit B2B-Unternehmen aus dem DACH-Raum, die digital besser werden wollen. Typischerweise Geschäftsführer oder Marketing-Verantwortliche, die merken, dass ihre Website oder digitale Strategie nicht die gewünschten Ergebnisse bringt. Egal ob Mittelstand, Tech-Startup oder Dienstleister – wenn Sie bereit sind, strategisch zu denken statt nur schnelle Lösungen zu suchen, passen wir gut zusammen. Mehr über unsere Leistungen finden Sie unter <a href='/strategie' class='text-primary hover:underline'>Digitale Strategie</a>, <a href='/webdesign' class='text-primary hover:underline'>Webdesign</a> und <a href='/ki-technologien' class='text-primary hover:underline'>KI-Integration</a>."
  },
  {
    question: "Wie läuft eine Zusammenarbeit ab?",
    answer: "Wir starten immer mit einem kostenlosen Erstgespräch (30 Minuten), in dem wir Ihre Situation analysieren. Danach bekommen Sie von uns eine ehrliche Einschätzung und einen konkreten Vorschlag, wie wir vorgehen können. Je nach Projekt arbeiten wir entweder in einem Workshop-Format, als längerfristiger Sparringspartner oder mit konkreter Umsetzung. Sie entscheiden, was für Sie passt."
  },
  {
    question: "Was brauchen Sie von mir für den Start?",
    answer: "Vor allem Ihre Zeit und Offenheit. Für ein effektives Erstgespräch hilft es, wenn Sie Ihre aktuellen Herausforderungen schon grob umreißen können: Was funktioniert nicht? Wo sehen Sie Potenzial? Was haben Sie schon versucht? Konkrete Zahlen (Website-Besucher, Anfragen, etc.) sind hilfreich, aber kein Muss. Wichtiger ist, dass Sie bereit sind, ehrlich über Ihre Situation zu sprechen."
  },
  {
    question: "Arbeiten Sie nur remote oder auch vor Ort?",
    answer: "Beides ist möglich. Die meisten Projekte laufen remote ab – das funktioniert hervorragend und spart allen Zeit. Für strategische Workshops oder wichtige Kickoffs kommen wir aber auch gerne zu Ihnen ins Büro, besonders in der DACH-Region (Mainz, Frankfurt, Wiesbaden, aber auch deutschlandweit und in der Schweiz). Wir finden gemeinsam die beste Arbeitsweise für Ihr Projekt."
  },
  {
    question: "Was unterscheidet Sie von anderen Agenturen?",
    answer: "Sie arbeiten direkt mit einem erfahrenen Digital-Berater zusammen – mit 16+ Jahren Praxis, nicht mit Junior-Mitarbeitern. Wir sagen Ihnen offen, wenn etwas keinen Sinn macht, statt einfach nur zu verkaufen. Sie bekommen messbare Strategien statt schöner PowerPoints. Und Sie bekommen keine Standard-Agentur-Lösungen, sondern maßgeschneiderte Ansätze für Ihr spezifisches Business."
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
          title="Digitale Strategie & Transformation | Uli Schönleber + Team – B2B Digital-Beratung DACH"
          description="Uli Schönleber und das ooliv-Team: Digitale Strategie, Webdesign & KI-Integration für B2B im DACH-Raum. 16+ Jahre Expertise – persönliche Beratung mit messbaren Ergebnissen. Jetzt durchstarten!"
          keywords="Digitale Strategie, Digital Transformation, Website Relaunch, KI-Integration, Webdesign, B2B Digital-Beratung, DACH, Uli Schönleber, Digitale Beratung"
          ogImage="/og-home-de.jpg"
          canonicalUrl="https://ooliv.de/"
        />
        <CompleteBusinessSchemaGenerator 
          businessName="ooliv Digital Consultancy"
          description="Digitale Strategie & Transformation für B2B-Unternehmen im DACH-Raum. 16+ Jahre Expertise in Webdesign, KI-Integration & Website-Relaunch."
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
          services={["Digitale Strategie", "Webdesign", "KI-Integration", "Website Relaunch", "Digital Transformation"]}
        />
        <CanonicalUrlHelper />
        
        <DeutscherHero />

        <TestimonialsSection />
        
        <WhyChooseUs />

        <ServicesOverview />
        
        <CaseStudiesSection />
        
        <StrategicChallengesSection />
        <HowWeWorkSection />
        <TeamSection />
        
        <FAQ 
          customFaqs={strategicFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Sprechen Sie mit uns"
        />
        
        <CTA
          lightBackground={true}
          title="Bereit für messbare digitale Transformation?"
          subtitle="Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Ihr Business digital voranbringen können – mit klarer Strategie, durchdachter UX und praktischen KI-Lösungen."
          primaryCta="Kostenloses Erstgespräch vereinbaren"
        />

        <StickyCTA text="Kostenloses Erstgespräch" />
      </PageLayout>
    </>
  );
};

export default GermanIndex;
