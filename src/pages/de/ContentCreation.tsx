
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
      
      <CaseStudiesSection customTitle="Echte Ergebnisse von echten Kunden" 
                         customSubtitle="Wir erstellen Inhalte, die echten Impact haben"
                         customBodyText="Sehen Sie, wie wir Unternehmen mit maßgeschneiderter Content Erstellung, SEO-Strategie und visueller Klarheit zu mehr Sichtbarkeit und Leads verholfen haben." />
      
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
