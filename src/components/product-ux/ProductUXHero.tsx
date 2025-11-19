
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
        ? "Product Strategy Framework, evidenzbasierte User Research Methodology und UX-driven Business Transformation – von der Vision über Discovery bis zu messbaren Business Outcomes." 
        : "Product strategy framework, evidence-based user research methodology, and UX-driven business transformation – from vision through discovery to measurable business outcomes."
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
