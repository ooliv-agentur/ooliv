import React from 'react';
import LandingPageLayout from '@/components/landing-page/LandingPageLayout';
import LPHero from '@/components/landing-page/LPHero';
import LPSocialProof from '@/components/landing-page/LPSocialProof';
import LPProblemSolution from '@/components/landing-page/LPProblemSolution';
import LPHowItWorks from '@/components/landing-page/LPHowItWorks';
import LPAboutUli from '@/components/landing-page/LPAboutUli';
import LPFAQ from '@/components/landing-page/LPFAQ';
import LPFinalCTA from '@/components/landing-page/LPFinalCTA';

const WebsiteRelaunchLanding = () => {
  const testimonial = {
    quote: "Unser Website-Relaunch war ein voller Erfolg. Moderne Optik, deutlich schnellere Ladezeiten und endlich eine Website, die für uns verkauft. Die Conversion-Rate hat sich verdoppelt.",
    author: "Sarah Weber",
    role: "Marketing-Leiterin",
    company: "IndustriePartner AG"
  };

  const problems = [
    "Ihre Website ist veraltet und wirkt unprofessionell gegenüber der Konkurrenz?",
    "Die Ladezeiten sind zu lang und Besucher springen sofort ab?",
    "Ihre Website ist nicht mobiloptimiert und verliert mobile Kunden?",
    "Sie bekommen Traffic, aber keine Anfragen oder Conversions?"
  ];

  const solutions = [
    "Wir analysieren Ihre aktuelle Website und definieren klare Verbesserungs-Potenziale",
    "Sie erhalten ein modernes, conversion-optimiertes Design mit schnellen Ladezeiten",
    "Mobile-First-Ansatz garantiert perfekte Darstellung auf allen Geräten",
    "Strategische Content-Struktur führt Besucher gezielt zur Kontaktaufnahme"
  ];

  const steps = [
    {
      title: "Analyse & Konzept",
      description: "Wir analysieren Ihre bestehende Website, Zielgruppe und Wettbewerb. Dann entwickeln wir ein strategisches Konzept für Ihren Relaunch."
    },
    {
      title: "Design & Entwicklung",
      description: "Modernes, conversion-optimiertes Design und Entwicklung mit modernsten Web-Technologien. Sie erhalten regelmäßige Updates und können Feedback geben."
    },
    {
      title: "Launch & Optimierung",
      description: "Professioneller Go-Live mit SEO-Migration, Performance-Optimierung und 30-Tage-Support. Danach laufende Optimierung basierend auf echten Nutzerdaten."
    }
  ];

  const faqs = [
    {
      question: "Wie lange dauert ein Website-Relaunch?",
      answer: "Ein typischer B2B-Website-Relaunch dauert 6-10 Wochen von Kick-off bis Go-Live. Das beinhaltet Konzeption (2 Wochen), Design & Entwicklung (3-5 Wochen), Testing & Content-Migration (1-2 Wochen) und Launch-Vorbereitung."
    },
    {
      question: "Was passiert mit meinen Google-Rankings?",
      answer: "Wir führen eine professionelle SEO-Migration durch: alle URLs werden korrekt weitergeleitet, Meta-Daten übernommen und technisches SEO optimiert. In der Regel verbessern sich die Rankings sogar durch bessere Performance und User Experience."
    },
    {
      question: "Kann ich meine bestehenden Inhalte behalten?",
      answer: "Ja, wir migrieren alle relevanten Inhalte und optimieren diese gleichzeitig. Veraltete Seiten können wir aussortieren, wichtige Inhalte überarbeiten und neue Conversion-Elemente hinzufügen."
    },
    {
      question: "Was kostet ein professioneller Website-Relaunch?",
      answer: "Abhängig vom Umfang 8.000€ bis 25.000€. Eine typische B2B-Website mit 10-15 Seiten liegt bei 12.000-15.000€. Im Erstgespräch analysieren wir Ihren Bedarf und erstellen ein transparentes Festpreis-Angebot."
    },
    {
      question: "Bekomme ich ein CMS zum selbst Bearbeiten?",
      answer: "Ja, Sie erhalten ein modernes, benutzerfreundliches CMS (z.B. WordPress oder Webflow) mit dem Sie Inhalte selbst anpassen können. Inklusive Schulung für Ihr Team und Dokumentation."
    }
  ];

  return (
    <LandingPageLayout
      title="Website Relaunch für B2B-Unternehmen | ooliv"
      description="Professioneller Website-Relaunch mit moderner Technologie und Conversion-Fokus. Von Konzept bis Launch – mit direktem Draht zum Experten. Jetzt Erstgespräch!"
      canonicalUrl="https://ooliv.de/lp/website-relaunch"
      keywords="Website Relaunch, Website neu gestalten, B2B Website, Conversion-Optimierung"
    >
      <LPHero
        headline="Website-Relaunch, der Leads generiert – nicht nur schön aussieht"
        subheadline="Verwandeln Sie Ihre veraltete Website in eine moderne Lead-Maschine. Mit strategischem Konzept, schneller Umsetzung und messbaren Ergebnissen."
        benefits={["Mobile-First", "SEO-optimiert", "Conversion-fokussiert"]}
      />

      <LPSocialProof testimonial={testimonial} />

      <LPProblemSolution problems={problems} solutions={solutions} />

      <LPHowItWorks steps={steps} />

      <LPAboutUli />

      <LPFAQ faqs={faqs} />

      <LPFinalCTA
        headline="Bereit für Ihren Website-Relaunch?"
        subheadline="Lassen Sie uns in einem kostenlosen Strategiegespräch das Potenzial Ihrer neuen Website ausloten."
      />
    </LandingPageLayout>
  );
};

export default WebsiteRelaunchLanding;
