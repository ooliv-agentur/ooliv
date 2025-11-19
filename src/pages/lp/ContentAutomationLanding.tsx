import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const ContentAutomationLanding = () => {
  const testimonial = {
    quote: "Früher haben wir Wochen für einen Blog-Post gebraucht. Jetzt produzieren wir hochwertigen Content in Stunden. Unsere Organic Leads sind um 300% gestiegen.",
    author: "Martin Schneider",
    role: "Marketing Director",
    company: "B2B Tech Solutions"
  };

  const problems = [
    "Content-Erstellung ist zu zeitaufwändig und bindet wertvolle Ressourcen?",
    "Sie posten unregelmäßig und Ihre Content-Strategie läuft ins Leere?",
    "Die Qualität Ihres Contents ist inkonsistent oder nicht überzeugend?",
    "Sie wissen, dass Content wichtig ist, aber haben keine Kapazitäten?"
  ];

  const solutions = [
    "Automatisierte Content-Erstellung spart 80% Zeit bei gleichbleibender Qualität",
    "Konsistente Content-Pipeline mit regelmäßigen Posts auf allen Kanälen",
    "KI-gestützte Content-Strategie basierend auf Daten und Best Practices",
    "Mehr Sichtbarkeit, mehr Traffic, mehr qualifizierte Leads durch Content"
  ];

  const steps = [
    {
      title: "Content-Audit & Strategie",
      description: "Wir analysieren Ihre bestehenden Content-Assets, Zielgruppe und Wettbewerb. Dann entwickeln wir eine Content-Strategie mit klaren Themen und Kanälen."
    },
    {
      title: "Automation-Setup",
      description: "Wir richten KI-gestützte Content-Tools ein, definieren Workflows und erstellen Templates für Ihre Brand Voice. Sie erhalten erste Content-Samples zur Freigabe."
    },
    {
      title: "Production & Optimierung",
      description: "Laufende Content-Produktion mit Quality Control, Publishing auf Ihren Kanälen und kontinuierliche Optimierung basierend auf Performance-Daten."
    }
  ];

  const faqs = [
    {
      question: "Wie gut ist KI-generierter Content wirklich?",
      answer: "Bei richtiger Anleitung und Quality Control: sehr gut. Wir nutzen KI für Research, Strukturierung und ersten Entwurf. Dann optimiert ein erfahrener Content-Spezialist für Ihre Brand Voice und Zielgruppe. Das Ergebnis ist hochwertig und authentisch."
    },
    {
      question: "Welche Content-Formate können automatisiert werden?",
      answer: "Blog-Posts, Social Media Posts, Newsletter, SEO-Texte, Produkt-Beschreibungen und FAQs. Für spezifische Thought-Leadership-Pieces oder komplexe Whitepapers empfehle ich weiterhin manuellen Content mit KI-Unterstützung."
    },
    {
      question: "Wie viel Content kann ich pro Monat erwarten?",
      answer: "Typisches Setup: 4-8 Blog-Posts, 20-30 Social Media Posts, 4 Newsletter pro Monat. Das hängt von Ihrem Budget und der gewünschten Qualität ab. Im Erstgespräch definieren wir Ihre ideale Content-Pipeline."
    },
    {
      question: "Was kostet Content Automation?",
      answer: "Setup (einmalig): 3.000-6.000€ für Strategie, Tool-Setup und Templates. Laufende Betreuung: 1.500-3.000€/Monat je nach Content-Volumen. Das ist 60-70% günstiger als traditionelle Content-Agenturen bei oft besserer Qualität."
    },
    {
      question: "Kann ich die Tools selbst nutzen oder brauche ich Sie?",
      answer: "Nach dem Setup können Sie die Tools selbst nutzen. Viele Kunden entscheiden sich aber für laufende Betreuung, weil Strategie, Quality Control und Optimierung den Unterschied zwischen mittelmäßigem und exzellentem Content machen."
    }
  ];

  return (
    <LandingPageLayout
      title="Content Automation für B2B-Unternehmen | ooliv"
      description="KI-gestützte Content-Erstellung für konsistente, hochwertige Inhalte. 80% Zeitersparnis bei besserer Qualität. Von Strategie bis Publishing. Jetzt starten!"
      canonicalUrl="https://ooliv.de/lp/content-automation"
      keywords="Content Automation, KI Content, Content Marketing, Automatisierte Content-Erstellung"
    >
      <LPHero
        headline="Content Automation – mehr hochwertiger Content in weniger Zeit"
        subheadline="Produzieren Sie konsistent hochwertigen Content ohne Ihr Team zu überlasten. KI-gestützt, strategisch geplant und kontinuierlich optimiert."
        benefits={["80% Zeitersparnis", "Konsistente Qualität", "Messbare Ergebnisse"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für Content, der skaliert?"
        subheadline="Lassen Sie uns in einem kostenlosen Content-Strategie-Gespräch analysieren, wie Automation Ihre Content-Produktion beschleunigen kann."
      />
    </LandingPageLayout>
  );
};

export default ContentAutomationLanding;
