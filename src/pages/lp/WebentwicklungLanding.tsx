import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const WebentwicklungLanding = () => {
  const testimonial = {
    quote: "Schnelle Ladezeiten, perfekte Mobile-Performance und ein CMS das wir selbst bedienen können. Die technische Umsetzung war professionell und termingerecht.",
    author: "Dr. Andreas Müller",
    role: "Head of Digital",
    company: "MedTech Innovators"
  };

  const problems = [
    "Ihre Website ist langsam und Besucher springen frustriert ab?",
    "Die technische Basis ist veraltet und wartungsintensiv?",
    "Sie können Ihre Website nicht selbst bearbeiten oder erweitern?",
    "Ihre Website hat technische Probleme und niemand kann sie beheben?"
  ];

  const solutions = [
    "Moderne Web-Technologien für blitzschnelle Ladezeiten und perfekte Performance",
    "Skalierbare, wartbare Code-Basis die mit Ihrem Business mitwächst",
    "Benutzerfreundliches CMS zum selbstständigen Bearbeiten und Erweitern",
    "Langfristige technische Betreuung und Support wenn Sie es brauchen"
  ];

  const steps = [
    {
      title: "Technische Planung",
      description: "Wir analysieren Ihre Anforderungen und wählen die optimalen Technologien. Sie erhalten eine detaillierte Entwicklungs-Roadmap."
    },
    {
      title: "Agile Entwicklung",
      description: "Entwicklung in 2-Wochen-Sprints mit regelmäßigen Demos. Sie sehen kontinuierlich Fortschritt und können Feedback geben."
    },
    {
      title: "Testing & Go-Live",
      description: "Umfangreiche Tests auf allen Geräten, Performance-Optimierung und professioneller Launch. Inklusive Team-Schulung und Dokumentation."
    }
  ];

  const faqs = [
    {
      question: "Welche Technologien nutzen Sie für die Entwicklung?",
      answer: "Je nach Projekt React/Next.js für komplexe Web-Apps, WordPress für klassische Unternehmensseiten oder Webflow für Marketing-Websites. Die Technologie-Wahl hängt von Ihren Anforderungen, Budget und langfristigen Zielen ab."
    },
    {
      question: "Wie schnell wird meine Website sein?",
      answer: "Performance ist Priorität Nr. 1. Ziel sind Ladezeiten unter 2 Sekunden und ein Google PageSpeed Score von 90+. Das erreichen wir durch moderne Technologien, optimierte Assets und professionelles Hosting."
    },
    {
      question: "Ist die Website für Suchmaschinen optimiert?",
      answer: "Ja, technisches SEO ist Standard: sauberer Code, schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und korrekte Meta-Tags. Für Content-SEO arbeite ich mit spezialisierten Partnern."
    },
    {
      question: "Was kostet professionelle Webentwicklung?",
      answer: "Eine typische B2B-Website (10-15 Seiten) kostet 8.000-15.000€. Komplexe Web-Apps mit Custom-Features ab 20.000€. Im Erstgespräch analysieren wir Ihre Anforderungen und ich erstelle ein detailliertes Angebot."
    },
    {
      question: "Wer hostet und wartet die Website?",
      answer: "Ich empfehle modernes Cloud-Hosting (z.B. Vercel, Netlify) das automatisch skaliert. Wartung und Updates können Sie selbst übernehmen oder ich biete monatliche Support-Pakete ab 200€/Monat an."
    }
  ];

  return (
    <LandingPageLayout
      title="Professionelle Webentwicklung für B2B-Unternehmen | ooliv"
      description="Moderne Webentwicklung mit schnellen Ladezeiten, skalierbarer Architektur und benutzerfreundlichem CMS. Von Strategie bis Launch. Jetzt Erstgespräch!"
      canonicalUrl="https://ooliv.de/lp/webentwicklung"
      keywords="Webentwicklung, Web Development, React, WordPress, Website programmieren"
    >
      <LPHero
        headline="Webentwicklung, die performt – technisch exzellent und zukunftssicher"
        subheadline="Verwandeln Sie Designs in blitzschnelle Websites mit modernster Technologie. Skalierbar, wartbar und selbst bearbeitbar."
        benefits={["Blitzschnell", "Zukunftssicher", "Selbst bearbeitbar"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für moderne Webentwicklung?"
        subheadline="Lassen Sie uns in einem kostenlosen Tech-Call besprechen, welche Lösung am besten zu Ihren Anforderungen passt."
      />
    </LandingPageLayout>
  );
};

export default WebentwicklungLanding;
