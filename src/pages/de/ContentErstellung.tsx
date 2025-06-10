
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import ContentProcessUnified from '@/components/content-creation/ContentProcessUnified';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import CTA from '@/components/CTA';
import ContentSEOText from '@/components/content-creation/ContentSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<ContentSEOText />}
    >
      <Helmet>
        <title>Content Agentur Mainz – Texte, die wirken</title>
        <meta name="description" content="ooliv – Ihre Content Agentur in Mainz. Wir erstellen überzeugende Texte, die Ihre Zielgruppe erreichen und Ihre Marke stärken." />
        <meta name="keywords" content="Content Agentur Mainz, Content Marketing Mainz, SEO Texte Mainz, Social Media Content, Professionelle Texte Mainz, Content Erstellung Mainz" />
        <meta name="focus-keyword" content="Content Agentur Mainz" />
      </Helmet>
      
      <ContentHero />
      <ContentServiceDE />
      <ContentProcessUnified />
      <ContentBenefits />
      <ContentCaseStudies />
      <CTA 
        title="Starten Sie Ihr Content-Projekt"
        subtitle="Lassen Sie uns gemeinsam Inhalte erstellen, die Ihre Zielgruppe begeistern und zu echten Ergebnissen führen."
        primaryCta="Content-Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanContentCreation;
