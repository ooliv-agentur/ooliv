import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const DigitaleStrategieLanding = () => {
  const testimonial = {
    quote: "Uli hat nicht nur eine Strategie entwickelt, sondern uns geholfen, diese auch wirklich umzusetzen. Unser digitaler Vertrieb läuft jetzt strukturiert und messbar.",
    author: "Michael Schmidt",
    role: "Geschäftsführer",
    company: "TechSolutions GmbH"
  };

  const problems = [
    "Ihre digitale Präsenz ist veraltet und bringt keine qualifizierten Leads?",
    "Sie investieren in Marketing, aber die Ergebnisse sind nicht messbar?",
    "Ihre Konkurrenz ist digital besser aufgestellt und gewinnt Ihre Kunden?",
    "Sie wissen nicht, wo Sie mit der digitalen Transformation anfangen sollen?"
  ];

  const solutions = [
    "Wir analysieren Ihre aktuelle Situation und entwickeln eine klare Roadmap",
    "Sie erhalten eine priorisierte Strategie mit messbaren KPIs und ROI-Fokus",
    "Wir identifizieren Quick Wins und langfristige Wachstumshebel",
    "Sie bekommen einen konkreten Fahrplan für die nächsten 12 Monate"
  ];

  const steps = [
    {
      title: "IST-Analyse",
      description: "Wir analysieren Ihre aktuelle digitale Präsenz, Wettbewerb und Zielgruppe in einem 90-minütigen Workshop."
    },
    {
      title: "Strategie-Entwicklung",
      description: "Sie erhalten eine maßgeschneiderte Digital-Strategie mit priorisierten Maßnahmen und klarem ROI-Fokus."
    },
    {
      title: "Umsetzungs-Roadmap",
      description: "Wir erstellen einen konkreten Fahrplan mit Meilensteinen, Budget-Planung und Quick Wins für die ersten 90 Tage."
    }
  ];

  const faqs = [
    {
      question: "Was genau beinhaltet die digitale Strategie?",
      answer: "Eine umfassende Analyse Ihrer digitalen Touchpoints, eine priorisierte Roadmap mit konkreten Maßnahmen, Budget-Planung, Kanal-Mix-Empfehlung und messbare KPIs. Alles in einem 30-50 seitigen Strategiedokument."
    },
    {
      question: "Wie lange dauert die Strategie-Entwicklung?",
      answer: "Von Kick-off bis zur finalen Präsentation rechnen Sie mit 3-4 Wochen. Das beinhaltet Analyse-Phase (1 Woche), Strategie-Entwicklung (1-2 Wochen) und Finalisierung mit Ihrem Feedback."
    },
    {
      question: "Was kostet eine digitale Strategie?",
      answer: "Abhängig vom Umfang zwischen 8.000€ und 25.000€. Ein typisches Mittelstands-Projekt liegt bei 12.000-15.000€. Im Erstgespräch besprechen wir Ihren Bedarf und erstellen ein maßgeschneidertes Angebot."
    },
    {
      question: "Helfen Sie auch bei der Umsetzung?",
      answer: "Ja, das ist sogar empfehlenswert. Ich begleite Sie entweder als Sparringspartner (2-4 Tage/Monat) oder übernehme gemeinsam mit meinem Netzwerk die komplette Umsetzung. So stellen wir sicher, dass die Strategie auch wirklich funktioniert."
    },
    {
      question: "Unterscheidet sich das von einer Agentur-Strategie?",
      answer: "Absolut. Sie arbeiten direkt mit mir als erfahrenem Strategieberater, nicht mit wechselnden Junior-Consultants. Ich verstehe B2B-Geschäftsmodelle und entwickle umsetzbare Strategien, keine 100-Seiten-PDFs die in der Schublade landen."
    }
  ];

  return (
    <LandingPageLayout
      title="Digitale Strategie für B2B-Unternehmen | ooliv"
      description="Entwickeln Sie eine messbare Digital-Strategie für nachhaltiges Wachstum. Erfahrener Strategieberater statt Agentur-Fließband. Jetzt Erstgespräch buchen!"
      canonicalUrl="https://ooliv.de/lp/digitale-strategie"
      keywords="Digitale Strategie, Digital-Transformation, B2B-Marketing, Strategieberatung"
    >
      <LPHero
        headline="Digitale Strategie, die wirklich funktioniert – für B2B-Unternehmen im DACH-Raum"
        subheadline="Entwickeln Sie eine klare Roadmap für nachhaltiges digitales Wachstum. Mit messbaren KPIs, priorisierten Quick Wins und direktem Draht zu einem erfahrenen Strategieberater."
        benefits={["Keine Agentur-Hierarchie", "15+ Jahre Erfahrung", "Messbare Ergebnisse"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für Ihre digitale Transformation?"
        subheadline="Buchen Sie jetzt Ihr kostenloses Strategiegespräch und erfahren Sie, wie Sie Ihre digitale Präsenz auf das nächste Level heben."
      />
    </LandingPageLayout>
  );
};

export default DigitaleStrategieLanding;
