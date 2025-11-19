
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductUXHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title={isGerman 
        ? "Product & UX Strategy" 
        : "Product & UX Strategy"
      }
      subtitle={isGerman 
        ? "Von der Vision zur messbaren Umsetzung. Product Roadmaps, UX Strategy, Information Architecture und strategische Produktführung mit klaren Outcomes." 
        : "From vision to measurable implementation. Product roadmaps, UX strategy, information architecture, and strategic product leadership with clear outcomes."
      }
      primaryCta={{
        text: isGerman ? "Produktstrategie entwickeln" : "Develop Product Strategy",
        link: "#",
        onClick: handleStartProject
      }}
      secondaryCta={{
        text: isGerman ? "UX-Projekte ansehen" : "View UX Projects",
        link: "/referenzen"
      }}
    />
  );
};

export default ProductUXHero;
