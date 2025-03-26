
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
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
      answer: "Wir starten mit Strategie & SEO-Analyse und liefern dann Inhalte: Texte, Bilder, Videos – einsatzbereit für Ihre Website."
    },
    {
      question: "Kann ich Content-Erstellung ohne Webdesign beauftragen?",
      answer: "Ja – wir bieten Content auch unabhängig vom Designprozess an."
    },
    {
      question: "Was, wenn ich kein Logo oder visuelle Elemente habe?",
      answer: "Wir gestalten Logos, Icons und Illustrationen – abgestimmt auf Ihre Marke."
    },
    {
      question: "Nutzt ihr KI für die Content-Erstellung?",
      answer: "Ja – mit GPT, Midjourney und Sora. Jedes Ergebnis wird manuell geprüft."
    },
    {
      question: "Wird der Content für SEO optimiert?",
      answer: "Ja – Keyword-Strategie, Struktur und Lesbarkeit sind fest integriert."
    },
    {
      question: "Was unterscheidet eure Content-Erstellung von anderen?",
      answer: "Wir verbinden strategische KI-Nutzung mit redaktioneller Qualität und strukturierter Umsetzung."
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
      
      {/* Use the custom section for case studies */}
      <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
            Echte Ergebnisse von echten Kunden
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto text-brand-text">
            Wir liefern Websites und Strategien, die sichtbar machen, was Ihr Unternehmen besonders macht.
          </p>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Sehen Sie, wie wir Unternehmen durch klare Positionierung, starke Inhalte, SEO-Performance und messbare UX-Optimierung zu nachhaltigem Wachstum verholfen haben.
          </p>
          
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={contentFaqs} 
        customTitle="Häufige Fragen zur Content Erstellung"
        customCtaText="Noch Fragen? Jetzt Kontakt aufnehmen"
      />
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
