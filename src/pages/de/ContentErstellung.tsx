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
        <title>Content Creation Mainz | Professionelle Inhalte für Ihr Marketing</title>
        <meta name="description" content="Professionelle Content-Erstellung aus Mainz: SEO-optimierte Texte, Bilder und Videos für Ihre Website und Social Media Kanäle." />
        <meta name="keywords" content="Content Creation Mainz, Content Marketing Mainz, SEO Texte Mainz, Social Media Content, Professionelle Texte Mainz, Content Erstellung Mainz" />
        <meta name="focus-keyword" content="Content Creation Mainz" />
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
