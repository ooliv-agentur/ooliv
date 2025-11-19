
import React from 'react';
import PageLayout from '@/components/PageLayout';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';


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
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "KI Technologien", url: "https://ooliv.de/ki-technologien" }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="AI-Enabled Business Transformation | LLM Integration | ooliv"
        description="Strategische AI-Integration für B2B: LLM Use Cases, AI Workflow Strategy, Automation und messbare Effizienzgewinne durch intelligente AI-Transformation."
        canonicalUrl="https://ooliv.de/ki-technologien"
        keywords="AI Transformation, LLM Integration, AI Workflow Strategy, AI Automation, Business AI"
        breadcrumbs={breadcrumbs}
      />

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
        title="AI-Transformation für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam strategische AI-Integration entwickeln – LLM Use Cases, Workflow Automation und messbare Effizienzgewinne."
        primaryCta="AI-Transformation starten"
        secondaryCta="Strategiegespräch vereinbaren"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
