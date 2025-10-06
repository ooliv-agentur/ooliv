
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
    ? "Content schreiben kostet Zeit? Wir machen das." 
    : "Content Writing Takes Time? We'll Handle It.";

  const subtitle = isGerman 
    ? "Content Agentur Mainz: Website-Texte, SEO-Artikel, Visuals – strategisch durchdacht und KI-optimiert. Sie kümmern sich um Ihr Business, wir um Ihren Content." 
    : "Content agency Mainz: Website copy, SEO articles, visuals – strategically planned and AI-optimized. You focus on your business, we handle your content.";

  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      primaryCta={{
        text: isGerman ? "Content auslagern" : "Outsource Content",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "Content-Beispiele" : "Content Examples",
        link: "/referenzen"
      }}
    />
  );
};

export default ContentHero;
