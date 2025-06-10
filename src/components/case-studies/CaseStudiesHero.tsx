
import React from 'react';
import PageHero from '@/components/PageHero';
import { useLanguage } from '@/contexts/LanguageContext';

const CaseStudiesHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  const handleOpenLeadForm = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };
  
  return (
    <PageHero
      title={isGerman 
        ? "Marketing aus Mainz mit echten Ergebnissen." 
        : "Marketing from Mainz with Real Results."
      }
      subtitle={isGerman 
        ? "Sehen Sie, wie wir B2B-Unternehmen durch Strategie, Design und Performance-Marketing in Mainz nachweislich beim Wachstum unterstützen." 
        : "See how we demonstrably help B2B companies grow through strategy, design and performance marketing in Mainz."
      }
      primaryCta={{
        text: isGerman ? "Projekt starten" : "Start Project",
        link: "#",
        onClick: handleOpenLeadForm
      }}
      secondaryCta={{
        text: isGerman ? "Strategiegespräch buchen" : "Book Strategy Call",
        link: isGerman ? "/kontakt" : "/en/contact"
      }}
    />
  );
};

export default CaseStudiesHero;
