import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const WebdesignLanding = () => {
  const testimonial = {
    quote: "Das Design ist nicht nur schön, es funktioniert auch. Unsere Conversion-Rate ist um 180% gestiegen und wir bekommen endlich die richtigen Anfragen.",
    author: "Thomas Becker",
    role: "CEO",
    company: "ProTech Solutions"
  };

  const problems = [
    "Ihre Website sieht veraltet aus und schreckt potenzielle Kunden ab?",
    "Das Design ist nicht konsistent und wirkt unprofessionell?",
    "Ihre Website funktioniert auf Mobilgeräten schlecht oder gar nicht?",
    "Sie haben viel Traffic, aber kaum Anfragen oder Conversions?"
  ];

  const solutions = [
    "Modernes, professionelles Design das Vertrauen schafft und Ihre Marke stärkt",
    "Conversion-optimierte User Experience führt Besucher gezielt zur Kontaktaufnahme",
    "Mobile-First-Design garantiert perfekte Darstellung auf allen Geräten",
    "Strategische Content-Hierarchie hebt Ihre USPs und Angebote hervor"
  ];

  const steps = [
    {
      title: "Brand & Zielgruppen-Analyse",
      description: "Wir verstehen Ihre Marke, Zielgruppe und Wettbewerb. Dann entwickeln wir ein Design-Konzept das zu Ihrem Business passt."
    },
    {
      title: "Design & Prototyping",
      description: "Sie erhalten moderne Design-Entwürfe und interaktive Prototypen. Nach Ihrem Feedback verfeinern wir das Design bis es perfekt ist."
    },
    {
      title: "Entwicklung & Launch",
      description: "Professionelle Umsetzung mit modernsten Technologien, umfangreichen Tests und reibungslosem Go-Live. Inklusive Schulung und Dokumentation."
    }
  ];

  const faqs = [
    {
      question: "Was macht gutes Webdesign für B2B aus?",
      answer: "Gutes B2B-Webdesign schafft Vertrauen, kommuniziert Expertise und führt Besucher zur Kontaktaufnahme. Es ist professionell, aber nicht steril. Modern, aber nicht verspielt. Und vor allem: es ist conversion-optimiert, nicht nur schön."
    },
    {
      question: "Wie lange dauert die Design-Entwicklung?",
      answer: "Von ersten Entwürfen bis zum finalen Design rechnen Sie mit 3-5 Wochen. Das beinhaltet Konzeption, Design-Entwürfe, Feedback-Runden und Finalisierung aller Seiten und Komponenten."
    },
    {
      question: "Bekomme ich auch das fertige Design zur Entwicklung?",
      answer: "Ja, Sie erhalten alle Design-Dateien (Figma/Adobe) und wenn gewünscht auch einen Styleguide. Noch besser: ich übernehme die komplette Entwicklung, damit das Design auch technisch perfekt umgesetzt wird."
    },
    {
      question: "Was kostet professionelles Webdesign?",
      answer: "Ein komplettes Website-Design (10-15 Seiten) für B2B liegt typischerweise bei 6.000-12.000€. Landing Page Designs ab 2.000€. Im Erstgespräch besprechen wir Ihren Umfang und ich erstelle ein transparentes Angebot."
    },
    {
      question: "Kann ich später selbst Änderungen am Design vornehmen?",
      answer: "Das Design ist modular aufgebaut mit wiederverwendbaren Komponenten. Kleinere Anpassungen können Sie im CMS selbst vornehmen. Für größere Design-Änderungen stehe ich als Sparringspartner zur Verfügung."
    }
  ];

  return (
    <LandingPageLayout
      title="Professionelles Webdesign für B2B-Unternehmen | ooliv"
      description="Conversion-optimiertes Webdesign das Vertrauen schafft und Leads generiert. Modern, strategisch und mit direktem Draht zum Designer. Jetzt Erstgespräch!"
      canonicalUrl="https://ooliv.de/lp/webdesign"
      keywords="Webdesign, UI/UX Design, B2B Webdesign, Conversion-Design, Website-Design"
    >
      <LPHero
        headline="Webdesign, das verkauft – nicht nur schön aussieht"
        subheadline="Verwandeln Sie Ihre Website in eine Lead-generierungs-Maschine. Mit strategischem Design, klarer User Experience und messbaren Conversion-Steigerungen."
        benefits={["Conversion-optimiert", "Mobile-First", "Marken-konform"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für ein Design, das konvertiert?"
        subheadline="Lassen Sie uns in einem kostenlosen Design-Review besprechen, wie wir Ihre Conversion-Rate steigern können."
      />
    </LandingPageLayout>
  );
};

export default WebdesignLanding;
