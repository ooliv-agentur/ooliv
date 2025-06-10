import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import AiTechServices from '@/components/ai-technologies/AiTechServices';
import AiToolsSection from '@/components/ai-technologies/AiToolsSection';
import AiTechBenefits from '@/components/ai-technologies/AiTechBenefits';
import AiTechCaseStudies from '@/components/ai-technologies/AiTechCaseStudies';
import CTA from '@/components/CTA';
import KiSEOText from '@/components/ai-technologies/KiSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<KiSEOText />}
    >
      <Helmet>
        <title>KI Technologien | Innovative AI-Lösungen für Ihr Business</title>
        <meta name="description" content="Entdecken Sie innovative KI-Technologien für Ihr Unternehmen. Von Automatisierung bis hin zu intelligenten Datenanalysen - wir bringen AI in Ihr Business." />
        <meta name="keywords" content="KI Technologien Mainz, Künstliche Intelligenz Mainz, AI Integration Mainz, Machine Learning Mainz, KI Beratung Mainz, AI Lösungen Mainz" />
      </Helmet>
      
      <AiTechHero />
      <AiTechServices />
      <AiToolsSection />
      <AiTechBenefits />
      <AiTechCaseStudies />
      <CTA />
    </PageLayout>
  );
};

export default GermanAiTechnologies;
