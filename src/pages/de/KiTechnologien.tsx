
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import KiSEOText from '@/components/ai-technologies/KiSEOText';

const GermanAiTechnologies = () => {
  // AI tools data for German page
  const aiTools = [
    {
      name: "ChatGPT",
      logoSrc: "/lovable-uploads/chatgpt.png",
      description: "Texte, FAQs, SEO-Snippets und Übersetzungen – entwickelt mit KI, veredelt von unseren Redakteur:innen."
    },
    {
      name: "Midjourney",
      logoSrc: "/lovable-uploads/Midjourney.png", 
      description: "Individuelle Visuals & Illustrationen für Marken, die keine Stockfotos wollen."
    },
    {
      name: "Sora (Video AI)",
      logoSrc: "/lovable-uploads/sora.png",
      description: "Animierte Videoelemente, Hintergrundvideos und Motion Design – auf Ihre Marke zugeschnitten."
    }
  ];

  // Custom FAQ items for AI page
  const aiFaqs = [
    {
      question: "Wie integrieren wir KI in bestehende Marketingprozesse?",
      answer: "Wir analysieren Ihre aktuellen Prozesse, identifizieren die größten Effizienzpotenziale und integrieren die passenden KI-Tools nahtlos in Ihren Workflow."
    },
    {
      question: "Bleiben wir bei KI-erstellten Inhalten im rechtlichen Rahmen?",
      answer: "Absolut. Wir achten auf rechtliche und ethische Compliance, vom Urheberrecht bis zum Datenschutz, und behalten die menschliche Kontrolle über alle Outputs."
    },
    {
      question: "Welche konkreten ROI-Vorteile bringt KI im Marketing?",
      answer: "Typische Vorteile: 70-80% Zeitersparnis bei Content-Erstellung, 30-50% geringere Kosten pro Lead und deutlich schnellere Reaktionszeiten auf Marktveränderungen."
    },
    {
      question: "Ist die Qualität von KI-generiertem Content wirklich gut?",
      answer: "Mit dem richtigen Prompt-Engineering und menschlicher Nachbearbeitung ist die Qualität hervorragend. KI erstellt den Rohtext, Experten verfeinern ihn für optimale Ergebnisse."
    },
    {
      question: "Welche KI-Tools setzen wir in unseren Projekten ein?",
      answer: "Wir nutzen ein breites Spektrum: ChatGPT für Texterstellung, DALL-E und Midjourney für Bildgenerierung, Claude für komplexe Aufgaben und spezialisierte Tools für SEO und Datenanalyse."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden" seoText={<KiSEOText />}>
      <Helmet>
        <title>KI Agentur Mainz – KI-Technologien für Webdesign, Content & Marketing | ooliv</title>
        <meta name="description" content="Ihre KI Agentur Mainz: Schneller, skalierbarer, effizienter mit KI-gestütztem Webdesign, Content und Strategie. Jetzt Potenzialanalyse sichern!" />
      </Helmet>

      <AiTechHero />
      <AiTechBenefits />
      <AiTechServices />
      <AiToolsSection 
        title="KI-gesteuert – menschlich geführt"
        subtitle="Wir integrieren KI dort, wo sie Zeit spart und Mehrwert bietet – nicht um Expertise zu ersetzen."
        tools={aiTools}
        note="Wir setzen KI als kreativen Beschleuniger ein – nie als Abkürzung. Qualität und Strategie kommen immer von Menschen."
      />
      
      <CaseStudiesSection />
      
      <FAQ customFaqs={aiFaqs} />
      <CTA 
        title="KI-basierte Marketinglösungen für Ihr Unternehmen"
        subtitle="Entdecken Sie, wie wir mit KI-gestützten Strategien und Tools Ihr Marketing auf die nächste Stufe heben können."
        primaryCta="KI-Potenzialanalyse anfordern"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
