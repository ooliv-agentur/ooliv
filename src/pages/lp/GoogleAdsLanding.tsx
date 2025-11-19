import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const GoogleAdsLanding = () => {
  const testimonial = {
    quote: "Die Google Ads Kampagnen von Uli haben unsere Lead-Generierung komplett verändert. Niedrigere Kosten pro Lead, höhere Qualität und endlich voller Transparenz über den ROI.",
    author: "Robert Wagner",
    role: "Sales Director",
    company: "B2B Software GmbH"
  };

  const problems = [
    "Ihre Google Ads Kampagnen verbrennen Budget ohne qualifizierte Leads zu liefern?",
    "Die Kosten pro Klick sind hoch, aber die Conversion-Rate ist niedrig?",
    "Sie haben keine Ahnung ob sich Google Ads wirklich lohnt?",
    "Ihre bisherige Agentur liefert nur Metriken, keine Business-Ergebnisse?"
  ];

  const solutions = [
    "Strategisches Kampagnen-Setup fokussiert auf Ihre profitabelsten Keywords",
    "Conversion-optimierte Landingpages die Klicks in Anfragen verwandeln",
    "Transparentes Tracking zeigt Ihnen genau welche Kampagnen ROI bringen",
    "Kontinuierliche Optimierung senkt Ihre Kosten und steigert die Lead-Qualität"
  ];

  const steps = [
    {
      title: "Strategie & Setup",
      description: "Keyword-Recherche, Wettbewerbs-Analyse und Kampagnen-Struktur. Wir entwickeln eine ROI-fokussierte Strategie mit realistischen Erwartungen und Budget-Planung."
    },
    {
      title: "Launch & Testing",
      description: "Professionelles Kampagnen-Setup, Tracking-Implementation und Launch. In den ersten 4 Wochen testen wir verschiedene Ansätze und sammeln Performance-Daten."
    },
    {
      title: "Optimierung & Skalierung",
      description: "Kontinuierliche Optimierung basierend auf echten Conversion-Daten. Wir pausieren was nicht funktioniert, skalieren was profitabel ist. Mit transparentem Reporting."
    }
  ];

  const faqs = [
    {
      question: "Wie viel Budget brauche ich für Google Ads?",
      answer: "Für den Start mindestens 1.000-1.500€/Monat Werbebudget, besser 2.000-3.000€. Dazu kommen meine Betreuungskosten. Mit weniger Budget können wir kaum statistisch relevante Daten sammeln und optimieren."
    },
    {
      question: "Wann lohnt sich Google Ads vs. SEO?",
      answer: "Google Ads wenn Sie schnell Leads brauchen, spezifische Conversion-Ziele haben oder saisonal aktiv werden wollen. SEO für langfristigen, kostengünstigen Traffic. Ideal: beides kombinieren – Ads für sofortige Leads, SEO für nachhaltiges Wachstum."
    },
    {
      question: "Was unterscheidet Ihre Betreuung von anderen Agenturen?",
      answer: "Sie arbeiten direkt mit mir, einem erfahrenen Google Ads Experten mit 10+ Jahren Erfahrung. Keine Junior-Account-Manager, keine generischen Templates. Ich verstehe B2B-Verkaufszyklen und optimiere auf Business-Ergebnisse, nicht nur Klicks."
    },
    {
      question: "Wie messen Sie den Erfolg der Kampagnen?",
      answer: "Vollständiges Conversion-Tracking von Klick bis zur Anfrage/Verkauf. Sie sehen: Kosten pro Lead, Lead-Qualität, ROI und welche Keywords tatsächlich Umsatz bringen. Transparentes monatliches Reporting mit klaren Handlungsempfehlungen."
    },
    {
      question: "Was kostet die Google Ads Betreuung?",
      answer: "Einmaliges Setup: 1.500-2.500€ (Strategie, Kampagnen-Setup, Tracking). Laufende Betreuung: 800-1.500€/Monat je nach Kampagnen-Komplexität. Flexible Vertragsmodelle – Sie können jederzeit pausieren oder beenden."
    }
  ];

  return (
    <LandingPageLayout
      title="Google Ads für B2B-Unternehmen | ooliv"
      description="Professionelle Google Ads Kampagnen für qualifizierte B2B-Leads. ROI-fokussiert, transparent und mit direktem Draht zum Experten. Jetzt Erstgespräch!"
      canonicalUrl="https://ooliv.de/lp/google-ads"
      keywords="Google Ads, PPC, B2B Lead-Generierung, Google Werbung, Performance Marketing"
    >
      <LPHero
        headline="Google Ads, die wirklich Leads bringen – nicht nur Klicks"
        subheadline="Generieren Sie qualifizierte B2B-Leads über Google Ads. Mit strategischem Setup, kontinuierlicher Optimierung und transparentem ROI-Tracking."
        benefits={["ROI-fokussiert", "Transparentes Tracking", "B2B-Expertise"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für Google Ads, die funktionieren?"
        subheadline="Lassen Sie uns in einem kostenlosen Strategie-Gespräch analysieren, ob Google Ads der richtige Kanal für Ihr Business ist."
      />
    </LandingPageLayout>
  );
};

export default GoogleAdsLanding;
