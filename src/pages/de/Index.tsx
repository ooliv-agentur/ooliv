
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import DeutscherHero from "@/components/de/DeutscherHero";
import DeutscherAboutSection from "@/components/de/DeutscherAboutSection";
import TeamImpactSectionDE from "@/components/de/TeamImpactSectionDE";
import TeamTeaserDE from "@/components/de/TeamTeaserDE";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import GermanSolutionSection from "@/components/de/GermanSolutionSection";
import TechnologiesSection from "@/components/de/TechnologiesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import SEOTextSection from "@/components/de/SEOTextSection";
import { useLanguage } from '@/contexts/LanguageContext';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  const newFaqs = [
    {
      question: "Wie läuft der Website-Erstellungsprozess bei ooliv ab?",
      answer: "Unser bewährter Prozess umfasst fünf klare Schritte, um Ihre Website strategisch aufzubauen und Ihre Ziele zu erreichen:\n\n1. **Strategie & Konzept** – Wir analysieren Ihre Ziele, Zielgruppen und Mitbewerber, um die optimale Grundlage zu schaffen.\n2. **Content-Erstellung** – Erstellung maßgeschneiderter Inhalte, abgestimmt auf Ihre Zielgruppe und SEO-Anforderungen.\n3. **UX/UI-Design** – Individuelle Gestaltung eines modernen und benutzerfreundlichen Designs.\n4. **Entwicklung** – Umsetzung Ihrer Website mit neuester Technik, zuverlässig und optimiert für alle Endgeräte.\n5. **Launch & Support** – Veröffentlichung der Website mit laufender Betreuung und technischen Updates."
    },
    {
      question: "Was kostet eine individuell entwickelte WordPress-Website bei ooliv?",
      answer: "Die Kosten einer individuell gestalteten WordPress-Website beginnen meist bei etwa 3.500 € bis 5.000 €. Der genaue Preis hängt von Faktoren wie dem Umfang der Inhalte, der Komplexität individueller Funktionen und der benötigten Designarbeit ab. In einem unverbindlichen Erstgespräch klären wir Ihre Anforderungen genau, damit Sie eine präzise Kalkulation erhalten."
    },
    {
      question: "Wie lange dauert die Erstellung einer maßgeschneiderten Website?",
      answer: "Die Entwicklung einer maßgeschneiderten Website dauert durchschnittlich 4 bis 8 Wochen. Der exakte Zeitraum hängt von Umfang und Komplexität Ihres Projekts ab. Kleinere Projekte setzen wir in etwa einem Monat um, größere Projekte oder Websites mit speziellen Funktionen können etwas länger dauern. Transparente Zeitplanung ist fester Bestandteil unserer Zusammenarbeit."
    },
    {
      question: "Was beinhaltet die laufende Betreuung nach dem Launch meiner Website?",
      answer: "Nach der Veröffentlichung Ihrer Website kümmern wir uns kontinuierlich um technische Wartung, regelmäßige Sicherheits-Updates und bei Bedarf um inhaltliche Anpassungen. Zudem überwachen wir auf Wunsch Ihre SEO-Performance und unterstützen Sie langfristig dabei, Ihre Website aktuell und wettbewerbsfähig zu halten."
    },
    {
      question: "Warum ist ooliv die richtige Werbeagentur in Mainz für mein Projekt?",
      answer: "ooliv ist seit 2008 in Mainz etabliert und kombiniert kreative Lösungen mit datengetriebenen Strategien. Unser erfahrenes Team verbindet tiefgehendes technisches Know-how, kreative Kompetenz und lokale Marktkenntnisse, um Ihre digitale Präsenz nachhaltig zu stärken. Wir pflegen transparente Kommunikation und entwickeln individuelle Lösungen, die exakt auf Ihre Ziele zugeschnitten sind."
    }
  ];
  
  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <DeutscherHero />
        <DeutscherAboutSection />
        <TeamTeaserDE />
        
        <div className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Ihre Website sollte für Sie arbeiten – nicht gegen Sie.</h2>
            <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
              Viele Unternehmen kämpfen mit Webseiten, die nicht performen. Wir entwickeln Websites, die Leads generieren, Vertrauen aufbauen und bei Google gefunden werden.
            </p>
            <BeforeAfterSlider />
          </div>
        </div>
        
        <GermanSolutionSection />
        
        <TechnologiesSection />
        
        <CaseStudiesSection 
          customTitle="Echte Ergebnisse von echten Kunden."
          customSubtitle="Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht."
          customBodyText="Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben."
        />
        
        <FAQ 
          customFaqs={newFaqs}
          customTitle="Häufig gestellte Fragen"
          customCtaText="Weitere Fragen? Kontaktieren Sie uns"
        />
        
        <CTA 
          lightBackground={true}
          title="Bereit, Ihre digitale Präsenz zu transformieren?"
          subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
          primaryCta="Starten Sie Ihr Website-Projekt"
          secondaryCta="Sehen Sie unsere Arbeit"
          footerNote="100+ erfolgreiche Projekte umgesetzt • Vertrauenspartner führender Unternehmen • KI-Strategien, die messbar und menschlich sind"
        />
      </PageLayout>
      
      {/* SEO Text Section placed after the PageLayout */}
      <SEOTextSection />
    </>
  );
};

export default GermanIndex;
