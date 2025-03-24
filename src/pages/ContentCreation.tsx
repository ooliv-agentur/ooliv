
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const ContentCreation = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Content Creation page
  const contentFaqs = [
    {
      question: "Wie läuft die Content-Erstellung bei ooliv ab?",
      answer: "Wir starten mit einer klaren Content-Strategie und liefern alle Website-Inhalte: Text, Bild, Video und Illustration – schnell, SEO-optimiert und im Corporate Design."
    },
    {
      question: "Welche Tools nutzt ooliv zur Content-Produktion?",
      answer: "Wir kombinieren KI-Tools wie ChatGPT, Midjourney und Sora mit manueller Kontrolle – für maximale Effizienz und Qualität."
    },
    {
      question: "Kann ich nur Content ohne Webdesign buchen?",
      answer: "Ja. Wir liefern auch Content für bestehende Websites oder als Unterstützung für Inhouse-Teams und Agenturen."
    },
    {
      question: "Erhalte ich Texte in mehreren Sprachen?",
      answer: "Klar. Wir bieten Content in Deutsch, Englisch und auf Wunsch auch in weiteren Sprachen."
    },
    {
      question: "Was ist, wenn ich noch kein Logo oder Bilder habe?",
      answer: "Kein Problem – unser Design-Team entwickelt alle nötigen Assets für Ihren Markenauftritt."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentServices />
      <ContentProcess />
      <ContentCaseStudies />
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Website-Inhalte, die verkaufen statt nur zu informieren"
        subtitle="Ob komplette Website-Texte, passgenaue Bilder oder Videos – wir liefern den Content, der wirkt."
        primaryCta="Jetzt unverbindlich beraten lassen"
        secondaryCta="Beispielprojekt anfragen"
      />
    </PageLayout>
  );
};

export default ContentCreation;
