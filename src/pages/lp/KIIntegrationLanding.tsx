import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const KIIntegrationLanding = () => {
  const testimonial = {
    quote: "Die KI-Integration hat unseren Kundenservice revolutioniert. 70% der Anfragen werden automatisch beantwortet und unser Team kann sich auf komplexe Fälle konzentrieren.",
    author: "Claudia Hofmann",
    role: "COO",
    company: "ServiceTech GmbH"
  };

  const problems = [
    "Ihre Mitarbeiter verbringen zu viel Zeit mit repetitiven Aufgaben?",
    "Sie verpassen Chancen, weil Ihnen Zeit oder Ressourcen fehlen?",
    "Ihre Konkurrenz nutzt bereits KI und wird effizienter?",
    "Sie wissen nicht, wo und wie Sie KI sinnvoll einsetzen können?"
  ];

  const solutions = [
    "Wir identifizieren konkrete Use Cases mit messbarem ROI in Ihrem Business",
    "Sie erhalten maßgeschneiderte KI-Lösungen die zu Ihren Prozessen passen",
    "Ihre Mitarbeiter werden geschult und begleiten die KI-Integration aktiv",
    "Sie sparen Zeit, reduzieren Fehler und können schneller skalieren"
  ];

  const steps = [
    {
      title: "KI-Potenzial-Analyse",
      description: "Wir analysieren Ihre Geschäftsprozesse und identifizieren konkrete Use Cases wo KI messbaren Mehrwert bringt. Inklusive ROI-Berechnung."
    },
    {
      title: "Prototyp & Testing",
      description: "Wir entwickeln einen funktionalen Prototyp für Ihren wichtigsten Use Case. Sie testen ihn im echten Betrieb und wir optimieren basierend auf Feedback."
    },
    {
      title: "Integration & Skalierung",
      description: "Professionelle Integration in Ihre bestehenden Systeme, Team-Schulung und schrittweise Skalierung auf weitere Prozesse. Mit laufendem Support."
    }
  ];

  const faqs = [
    {
      question: "Welche KI-Anwendungen sind für B2B sinnvoll?",
      answer: "Häufigste Use Cases: KI-Chatbots für Kundensupport, automatisierte Content-Erstellung, Lead-Qualifizierung, Dokumenten-Analyse und Prozess-Automatisierung. Im Erstgespräch analysieren wir, was für Ihr Business den größten Impact hat."
    },
    {
      question: "Brauche ich technisches Know-how für KI?",
      answer: "Nein, genau dafür bin ich da. Ich übersetze technische KI-Möglichkeiten in Business-Lösungen, entwickle die Integration und schule Ihr Team. Sie brauchen nur Verständnis für Ihre Geschäftsprozesse."
    },
    {
      question: "Wie schnell sehe ich ROI bei KI-Projekten?",
      answer: "Bei gut gewählten Use Cases rechnet sich die Investition in 6-12 Monaten. Einfache Automatisierungen wie Chatbots noch schneller. Wir starten mit Quick Wins die schnell Mehrwert bringen, bevor wir komplexere Projekte angehen."
    },
    {
      question: "Was kostet eine KI-Integration?",
      answer: "Abhängig vom Use Case 8.000€ bis 30.000€. Ein typisches Chatbot-Projekt liegt bei 10.000-15.000€. Komplexe Custom-KI-Lösungen entsprechend höher. Im Erstgespräch besprechen wir Ihren Use Case und erstellen ein transparentes Angebot."
    },
    {
      question: "Werden meine Daten für KI-Training verwendet?",
      answer: "Nein, wir nutzen nur Enterprise-KI-Lösungen die Ihre Daten nicht für Training verwenden. Alternativ setze ich auf selbst-gehostete KI-Modelle bei denen Ihre Daten komplett in Ihrer Infrastruktur bleiben. Datenschutz hat höchste Priorität."
    }
  ];

  return (
    <LandingPageLayout
      title="KI-Integration für B2B-Unternehmen | ooliv"
      description="Praktische KI-Lösungen für echten Business-Mehrwert. Von der Potenzial-Analyse bis zur erfolgreichen Integration. Mit messbarem ROI. Jetzt Erstgespräch!"
      canonicalUrl="https://ooliv.de/lp/ki-integration"
      keywords="KI-Integration, Künstliche Intelligenz, AI Integration, Business Automation, ChatGPT für Unternehmen"
    >
      <LPHero
        headline="KI-Integration, die wirklich funktioniert – nicht nur Buzzword-Bingo"
        subheadline="Nutzen Sie KI für messbaren Business-Mehrwert. Automatisieren Sie Prozesse, sparen Sie Zeit und skalieren Sie Ihr Business intelligent."
        benefits={["Messbare Effizienz", "Schneller ROI", "Datenschutz-konform"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für intelligente Automatisierung?"
        subheadline="Lassen Sie uns in einem kostenlosen KI-Potenzial-Gespräch analysieren, wo KI in Ihrem Business den größten Impact hat."
      />
    </LandingPageLayout>
  );
};

export default KIIntegrationLanding;
