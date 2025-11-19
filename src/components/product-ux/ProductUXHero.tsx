
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
        ? "Website & UX, die Kunden überzeugen" 
        : "Product & UX Strategy"
      }
      subtitle={isGerman 
        ? "Ich entwickle User Experiences, die aus Besuchern Kunden machen. Von der Analyse Ihrer Zielgruppe über durchdachte User Journeys bis zum fertigen Design – mit messbaren Ergebnissen (+60-140% mehr Conversions)." 
        : "Product strategy framework, evidence-based user research methodology, and UX-driven business transformation – from vision through discovery to measurable business outcomes."
      }
      primaryCta={{
        text: isGerman ? "UX-Strategie entwickeln" : "Develop Product Strategy",
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
