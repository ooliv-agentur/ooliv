
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GermanContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for Content Creation page with focus on "content erstellung"
  const contentFaqs = [
    {
      question: "Wie läuft die Content-Erstellung für Websites ab?",
      answer: "Wir starten mit Strategie & SEO-Analyse, dann liefern wir modulare Inhalte: Texte, Bilder, Videos, Illustrationen – alles bereit für die Website."
    },
    {
      question: "Kann ich nur Content-Erstellung ohne Design beauftragen?",
      answer: "Ja, wir bieten Content-Strategie & Umsetzung auch unabhängig vom Designprozess an."
    },
    {
      question: "Was, wenn ich kein Logo oder visuelle Elemente habe?",
      answer: "Kein Problem – wir entwickeln auf Wunsch Logos, Icons und Illustrationen passend zu Ihrer Marke."
    },
    {
      question: "Nutzt ihr KI für die Content-Erstellung?",
      answer: "Ja – aber wir setzen KI wie ChatGPT, Midjourney und Sora gezielt ein und prüfen jedes Ergebnis manuell."
    },
    {
      question: "Wird der Content für SEO optimiert?",
      answer: "Immer. Struktur, Keywords und Lesbarkeit sind zentraler Teil unserer Inhalte."
    },
    {
      question: "Was unterscheidet eure Content-Erstellung von anderen?",
      answer: "Wir kombinieren individuelle KI-Workflows mit redaktioneller Qualität und strategischer Struktur – für Inhalte, die wirken."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentServiceDE />
      <ContentServices />
      <ContentProcess />
      <ContentExpertInsight />
      
      {/* Use the global case study component instead of the specific ContentCaseStudies */}
      <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            Echte Ergebnisse von echten Kunden
          </h2>
          <CaseStudiesSection showAll={true} showCta={true} />
        </div>
      </section>
      
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Lassen Sie uns Inhalte erstellen, die konvertieren"
        subtitle="Wir füllen nicht nur Seiten – wir schaffen Momentum. Inhalte, die ranken, resonieren und Ergebnisse liefern."
        primaryCta="Kostenloses Content-Strategie-Gespräch"
        secondaryCta="Beispielprojekt anfordern"
      />
    </PageLayout>
  );
};

export default GermanContentCreation;
