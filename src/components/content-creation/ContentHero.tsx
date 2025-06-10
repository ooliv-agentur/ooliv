
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const title = isGerman 
    ? "Ihre Content Agentur Mainz – strategische Inhalte für B2B-Erfolg" 
    : "Content Creation for B2B Companies with Strategy";

  const subtitle = isGerman 
    ? "Wir entwickeln durchdachte Inhalte für Websites, Blogs, SEO und Visuals – effizient, konversionsstark und KI-unterstützt." 
    : "We create strategic B2B content: website copy, blog articles, SEO content, images, videos and infographics – clear, thoughtful, powerful.";

  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      primaryCta={{
        text: isGerman ? "Content-Projekt starten" : "Start Content Project",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "Referenzen ansehen" : "View Case Studies",
        link: isGerman ? "/referenzen" : "/en/case-studies"
      }}
    />
  );
};

export default ContentHero;
