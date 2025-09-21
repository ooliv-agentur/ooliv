
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
    ? "Content, der konvertiert – statt nur zu informieren" 
    : "Content That Converts – Not Just Informs";

  const subtitle = isGerman 
    ? "Als Content Agentur in Mainz entwickeln wir strategische Inhalte für B2B-Erfolg: Websites, Blogs, SEO und Visuals – durchdacht, effizient, konversionsstark und KI-unterstützt." 
    : "As content agency in Mainz, we create strategic B2B content for success: website copy, blog articles, SEO content, images, videos and infographics – clear, thoughtful, powerful.";

  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      primaryCta={{
        text: "Projekt starten",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: "Über ooliv",
        link: "/ueber-uns"
      }}
    />
  );
};

export default ContentHero;
