
import React from 'react';
import PageHero from '@/components/PageHero';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useLanguage } from '@/contexts/LanguageContext';

const ContentHero = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  return (
    <div className="relative">
      <PageHero
        badge={isGerman ? "Content Erstellung" : "Content Creation"}
        title={isGerman 
          ? "Content Agentur Mainz – Inhalte, die verkaufen und gefunden werden" 
          : "Web Content Strategy & Creation"
        }
        subtitle={isGerman 
          ? "Wir entwickeln Inhalte, die Vertrauen schaffen, bei Google gefunden werden und echte Geschäftsergebnisse liefern – von Text bis Video – als erfahrene Content Agentur aus Mainz."
          : "From tailored text and visuals to SEO-focused structure — we create content that builds trust, boosts visibility, and generates qualified leads."
        }
        primaryCta={{
          text: isGerman ? "Content-Projekt starten" : "Start Your Content Project",
          link: "#"
        }}
        secondaryCta={{
          text: isGerman ? "Case Studies ansehen" : "View Case Studies",
          link: isGerman ? "/case-studies" : "/en/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default ContentHero;
