
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

  return (
    <PageLayout>
      <Helmet>
        <title>KI-Technologien | KI-gestütztes Marketing & Content</title>
        <meta name="description" content="KI-gestütztes Marketing und Content für Unternehmen. Wir nutzen künstliche Intelligenz, um Ihre Marketingstrategie zu optimieren und effektiver zu gestalten." />
        <meta name="keywords" content="ki marketing, künstliche intelligenz, chatgpt marketing, ki content erstellung" />
      </Helmet>
      
      <AiTechHero />
      <AiTechServices />
      <AiToolsSection />
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
