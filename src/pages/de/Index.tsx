
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
import { useLanguage } from '@/contexts/LanguageContext';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  return (
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
        customFaqs={[
          {
            question: "Wie läuft der Webseitenerstellungsprozess ab?",
            answer: "Wir haben einen klaren 5-Schritte-Prozess: 1) Strategie und Konzeption, 2) UX/UI-Design, 3) Entwicklung, 4) Content-Erstellung, 5) Launch und Support."
          },
          {
            question: "Wie viel kostet eine WordPress-Website?",
            answer: "Die Kosten hängen von Umfang und Komplexität ab. Projekte starten typischerweise bei 5.000 € für kleine Business-Websites und können je nach Funktionsumfang, SEO-Optimierung und Content-Strategie variieren."
          },
          {
            question: "Wie lange dauert die Erstellung einer Website?",
            answer: "Der Zeitrahmen variiert je nach Projektumfang. Kleine Websites können innerhalb von 4-6 Wochen abgeschlossen sein, während komplexere Projekte 2-3 Monate benötigen können."
          },
          {
            question: "Optimiert ihr Websites für Mobilgeräte?",
            answer: "Absolut, Mobiloptimierung ist Standard. Wir entwickeln nach dem Mobile-First-Prinzip und stellen sicher, dass alle unsere Websites auf allen Geräten perfekt funktionieren."
          },
          {
            question: "Bietet ihr laufenden Support nach dem Launch an?",
            answer: "Ja, wir bieten verschiedene Support- und Wartungspakete an, die technischen Support, Sicherheitsupdates, Backups und Content-Updates umfassen können."
          }
        ]}
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
  );
};

export default GermanIndex;
