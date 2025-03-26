
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
        badge={isGerman ? "Web Content Strategie & Erstellung" : "Web Content Strategy & Creation"}
        title={isGerman ? "Web Content Strategie & Erstellung" : "Web Content Strategy & Creation"}
        subtitle={isGerman 
          ? "Von maßgeschneiderten Texten und Visuals bis hin zur SEO-basierten Struktur – wir erstellen Inhalte, die Vertrauen schaffen, Sichtbarkeit erhöhen und qualifizierte Leads generieren."
          : "From tailored text and visuals to SEO-focused structure — we create content that builds trust, boosts visibility, and generates qualified leads."
        }
        primaryCta={{
          text: isGerman ? "Content-Projekt starten" : "Start Your Content Project",
          link: isGerman ? "/de/kontakt" : "/contact"
        }}
        secondaryCta={{
          text: isGerman ? "Case Studies ansehen" : "View Case Studies",
          link: isGerman ? "/de/case-studies" : "/case-studies"
        }}
      />
      <ScrollIndicator />
    </div>
  );
};

export default ContentHero;
