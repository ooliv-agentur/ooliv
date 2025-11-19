
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
      question: "Was bringt mir KI konkret für mein Business?",
      answer: "Echte Zeitersparnis und Kostenreduktion: 70–80% weniger Aufwand bei Content-Erstellung, 30–50% niedrigere Kosten pro Lead, schnellere Reaktionszeiten. KI übernimmt Routine-Aufgaben – Sie konzentrieren sich auf Strategie und Kundenkontakt."
    },
    {
      question: "Kann KI wirklich gute Texte für meine Website schreiben?",
      answer: "Ja – wenn man es richtig macht. KI erstellt solide Rohtexte, die ein Experte dann verfeinert und auf Ihre Marke anpasst. Das Ergebnis: Professionelle Texte in Bruchteil der Zeit, mit Ihrer Tonalität und Ihrem Fachwissen."
    },
    {
      question: "Ist das mit KI nicht rechtlich problematisch?",
      answer: "Nicht, wenn man es richtig angeht. Wir achten auf Urheberrecht, Datenschutz und Transparenz. Alle KI-generierten Inhalte werden von Menschen geprüft und angepasst – Sie behalten die volle Kontrolle und Verantwortung."
    },
    {
      question: "Welche KI-Tools nutzen Sie für meine Projekte?",
      answer: "Je nach Bedarf: ChatGPT für Texte und FAQs, Midjourney für individuelle Bilder, Claude für komplexe Analysen, spezialisierte Tools für SEO. Wir wählen die Tools aus, die für Ihr Projekt am besten funktionieren – keine Experimente."
    },
    {
      question: "Wie integrieren Sie KI in meine bestehenden Prozesse?",
      answer: "Schritt für Schritt: Wir analysieren, wo KI wirklich Sinn macht, wählen die passenden Tools aus, schulen Ihr Team und begleiten die Einführung. Kein Big Bang, sondern pragmatische Integration mit messbaren Verbesserungen."
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
