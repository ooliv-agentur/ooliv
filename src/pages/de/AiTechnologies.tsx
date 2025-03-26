
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const GermanAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for AI page
  const aiFaqs = [
    {
      question: "Wie integrieren wir KI in bestehende Marketingprozesse?",
      answer: "Wir analysieren Ihre aktuellen Prozesse, identifizieren die größten Effizienzpotenziale und integrieren die passenden KI-Tools nahtlos in Ihren Workflow."
    },
    {
      question: "Bleiben wir bei KI-erstellten Inhalten im rechtlichen Rahmen?",
      answer: "Absolut. Wir achten auf rechtliche und ethische Compliance, vom Urheberrecht bis zum Datenschutz, und behalten die menschliche Kontrolle über alle Outputs."
    },
    {
      question: "Welche konkreten ROI-Vorteile bringt KI im Marketing?",
      answer: "Typische Vorteile: 70-80% Zeitersparnis bei Content-Erstellung, 30-50% geringere Kosten pro Lead und deutlich schnellere Reaktionszeiten auf Marktveränderungen."
    },
    {
      question: "Ist die Qualität von KI-generiertem Content wirklich gut?",
      answer: "Mit dem richtigen Prompt-Engineering und menschlicher Nachbearbeitung ist die Qualität hervorragend. KI erstellt den Rohtext, Experten verfeinern ihn für optimale Ergebnisse."
    },
    {
      question: "Welche KI-Tools setzen wir in unseren Projekten ein?",
      answer: "Wir nutzen ein breites Spektrum: ChatGPT für Texterstellung, DALL-E und Midjourney für Bildgenerierung, Claude für komplexe Aufgaben und spezialisierte Tools für SEO und Datenanalyse."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <AiTechHero />
      <AiTechBenefits />
      <AiTechServices />
      <AiToolsSection />
      
      {/* Add the global Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ customFaqs={aiFaqs} />
      <CTA 
        title="KI-basierte Marketinglösungen für Ihr Unternehmen"
        subtitle="Entdecken Sie, wie wir mit KI-gestützten Strategien und Tools Ihr Marketing auf die nächste Stufe heben können."
        primaryCta="KI-Potenzialanalyse anfordern"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
