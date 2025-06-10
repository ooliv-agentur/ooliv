
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import CTA from '@/components/CTA';
import KiSEOText from '@/components/ai-technologies/KiSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // AI tools data for German page
  const aiTools = [
    {
      name: "ChatGPT",
      logoSrc: "/lovable-uploads/chatgpt.png",
      description: "Texte, FAQs, SEO-Snippets und Übersetzungen – entwickelt mit KI, verfeinert von unseren Redakteuren."
    },
    {
      name: "Midjourney",
      logoSrc: "/lovable-uploads/Midjourney.png", 
      description: "Individuelle Visuals & Illustrationen für Marken, die keine Stock-Fotos wollen."
    },
    {
      name: "Sora (Video-KI)",
      logoSrc: "/lovable-uploads/sora.png",
      description: "Animierte Video-Elemente, Hintergrundvideos und Motion Design – passend zu Ihrer Marke."
    }
  ];

  return (
    <PageLayout 
      seoText={<KiSEOText />}
    >
      <Helmet>
        <title>KI Agentur Mainz – Zukunftstechnologien</title>
        <meta name="description" content="Als KI Agentur in Mainz nutzen wir modernste Technologien für individuelle Lösungen. Wir steigern Ihre Effizienz und Wettbewerbsfähigkeit." />
        <meta name="keywords" content="KI Agentur Mainz, Künstliche Intelligenz Mainz, AI Integration Mainz, Machine Learning Mainz, KI Beratung Mainz, AI Lösungen Mainz" />
        <meta name="focus-keyword" content="KI Agentur Mainz" />
      </Helmet>
      
      <AiTechHero />
      <AiTechServices />
      <AiToolsSection 
        title="KI-gestützt – menschlich geführt"
        subtitle="Wir integrieren KI dort, wo sie Zeit spart und Mehrwert schafft – nicht um Expertise zu ersetzen."
        tools={aiTools}
        note="Wir nutzen KI als kreativen Beschleuniger – niemals als Abkürzung. Qualität und Strategie kommen immer vom Menschen."
      />
      <AiTechBenefits />
      <AiTechCaseStudies />
      <CTA 
        title="Revolutionieren Sie Ihr Business mit KI"
        subtitle="Entdecken Sie, wie künstliche Intelligenz Ihre Geschäftsprozesse optimieren und neue Möglichkeiten schaffen kann."
        primaryCta="KI-Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
