
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const KITechnologien = () => {
  // Custom FAQ items for AI Technologies page
  const aiFaqs = [
    {
      question: "Welche KI-Technologien setzt ooliv für Marketing ein?",
      answer: "Wir nutzen GPT-4, Claude, Midjourney, DALL-E und Stable Diffusion für Text-, Bild- und Videoerstellung sowie verschiedene Analyse-Tools."
    },
    {
      question: "Wie verbessert KI konkret unsere Marketing-Ergebnisse?",
      answer: "KI beschleunigt Content-Erstellung, personalisiert Kundenerlebnisse, automatisiert Tests und generiert datengestützte Insights – das spart Zeit und verbessert ROI."
    },
    {
      question: "Ersetzt KI menschliche Kreativität und Strategie?",
      answer: "Nein, KI ergänzt menschliche Expertise. Wir kombinieren KI-Effizienz mit strategischem Denken und kreativem Feinschliff."
    },
    {
      question: "Benötigen wir eigene KI-Experten für die Zusammenarbeit?",
      answer: "Nein, wir bringen alle nötigen KI-Kenntnisse mit und schulen Ihr Team im Umgang mit den neuen Werkzeugen."
    },
    {
      question: "Wie sichert ooliv Daten und Datenschutz beim KI-Einsatz?",
      answer: "Wir folgen strengen Datenschutzprotokollen, arbeiten nur mit vertrauenswürdigen KI-Anbietern und nutzen private Instanzen für sensible Daten."
    }
  ];

  // AI tools data
  const aiTools = [
    {
      name: "ChatGPT & Claude",
      logoSrc: "/lovable-uploads/ac2faaf0-3c11-47bd-a829-aafb0bd09f24.png",
      description: "Text-KI für Content-Erstellung, Ideenfindung und Marketingtexte."
    },
    {
      name: "Midjourney",
      logoSrc: "/lovable-uploads/c2e2bd92-40a4-4a70-a1bd-6a3d5d936f87.png",
      description: "Bildgenerierung für einzigartige Visuals und Illustrationen."
    },
    {
      name: "DALL-E",
      logoSrc: "/lovable-uploads/996a7b08-e2fe-4996-8254-2af3eded918c.png",
      description: "Erstellung präziser Bildkonzepte für Marketing-Assets."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>KI-Technologien | KI-gestütztes Marketing & Content</title>
        <meta name="description" content="KI-gestütztes Marketing und Content für Unternehmen. Wir nutzen künstliche Intelligenz, um Ihre Marketingstrategie zu optimieren und effektiver zu gestalten." />
        <meta name="keywords" content="ki marketing, künstliche intelligenz, chatgpt marketing, ki content erstellung" />
      </Helmet>
      
      <AiTechHero />
      <AiTechServices />
      <AiToolsSection 
        title="KI-Tools in unserem Marketing-Stack"
        subtitle="Wir nutzen modernste KI-Technologien als Werkzeuge – immer kombiniert mit menschlicher Expertise"
        tools={aiTools}
        note="Alle KI-generierten Inhalte durchlaufen eine kritische Überprüfung durch unsere Experten, bevor sie zum Einsatz kommen."
      />
      <AiTechBenefits />
      <AiTechCaseStudies />
      <FAQ customFaqs={aiFaqs} />
      <CTA 
        title="KI-gestützte Marketinglösungen für Ihr Business"
        subtitle="Entdecken Sie, wie wir mit KI-Technologien Ihre Marketingstrategie revolutionieren können."
        primaryCta="Beratungsgespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default KITechnologien;
