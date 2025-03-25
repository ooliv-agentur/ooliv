
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  // AI tools data in German
  const aiTools = [
    {
      name: "ChatGPT",
      logoSrc: "/chatgpt-logo.svg",
      description: "Zur Entwicklung erster Content-Entwürfe, Meta-Daten, FAQs und SEO-Snippets – finalisiert und geprüft durch unser Redaktionsteam."
    },
    {
      name: "Midjourney",
      logoSrc: "/midjourney-logo.svg",
      description: "Für einzigartige Bildwelten, die Ihre Marke visuell aufwerten – besonders hilfreich, wenn keine Fotos vorliegen."
    },
    {
      name: "Sora (Video-KI)",
      logoSrc: "/sora-logo.svg",
      description: "Zum Erstellen kurzer Bewegtbildsequenzen oder Hintergrundvideos – stimmungsvoll, markengerecht, effizient."
    }
  ];
  
  // Custom FAQ items for AI Technologies page with focus on "ki agentur"
  const aiTechFaqs = [
    {
      question: "Ersetzt ooliv als KI Agentur Texter durch ChatGPT?",
      answer: "Nein. Wir nutzen ChatGPT, um Entwürfe zu generieren, aber alle Inhalte werden von Menschen überprüft und verfeinert. Als verantwortungsvolle KI Agentur setzen wir auf die richtige Balance."
    },
    {
      question: "Ist KI-generierter Content gut für SEO?",
      answer: "Ja – wenn er richtig eingesetzt wird. Als KI Agentur folgen wir SEO-Best-Practices und stellen sicher, dass jedes Wort Ihren Zielen entspricht und nicht als maschinell erzeugt erkennbar ist."
    },
    {
      question: "Wird meine Website als Produkt einer KI Agentur erkennbar sein?",
      answer: "Nein. Als KI Agentur nutzen wir KI, um kreative Arbeit zu beschleunigen – aber alle Visuals, Texte und Designs werden auf Ihre Marke zugeschnitten und erhalten eine menschliche Note."
    },
    {
      question: "Sind meine Daten bei einer KI Agentur und deren KI-Tools sicher?",
      answer: "Ja. Als vertrauenswürdige KI Agentur verwenden wir sichere Umgebungen und laden niemals sensible Daten auf öffentliche Plattformen hoch. Datenschutz ist für uns ein zentrales Anliegen."
    },
    {
      question: "Wie unterscheidet sich eure KI Agentur von anderen Digitalagenturen?",
      answer: "Als spezialisierte KI Agentur verbinden wir fundiertes Wissen über aktuelle KI-Tools mit jahrelanger Marketingerfahrung. Wir wissen genau, wo KI einen echten Mehrwert bietet und wo menschliche Expertise unersetzlich bleibt."
    },
    {
      question: "Welche KI-Tools setzt eure KI Agentur ein?",
      answer: "Als fortschrittliche KI Agentur arbeiten wir mit einer breiten Palette an Tools: ChatGPT für Texterstellung, Midjourney für Bildgenerierung, verschiedene Analyse-Tools für Datenauswertung und spezialisierte Lösungen für SEO und Content-Optimierung."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <AiTechHero />
      <AiTechBenefits />
      <AiToolsSection 
        title="KI im Einsatz – aber nie ohne Menschenverstand"
        subtitle="Wir setzen KI nur dort ein, wo sie wirklich Zeit spart und Qualität fördert – nicht als Ersatz für Expertise."
        tools={aiTools}
        note="KI ist für uns ein Kreativ-Turbo – aber kein Ersatz für Strategie, Handschrift oder finale Qualität."
      />
      <AiTechServices />
      <AiTechCaseStudies />
      <FAQ customFaqs={aiTechFaqs} />
      <CTA 
        title="Lassen Sie uns KI richtig einsetzen"
        subtitle="Mit ooliv beschleunigt KI den Prozess – ersetzt aber niemals Qualität oder Strategie. Lassen Sie uns gemeinsam etwas Besseres, Schnelleres und Intelligenteres schaffen."
        primaryCta="Projekt starten"
        secondaryCta="Kostenlose Demo anfordern"
      />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
