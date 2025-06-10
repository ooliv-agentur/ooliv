import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import CaseStudiesHero from '@/components/case-studies/CaseStudiesHero';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TeamSection from '@/components/TeamSection';
import CTA from '@/components/CTA';
import CaseStudiesSEOText from '@/components/case-studies/CaseStudiesSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanCaseStudies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout 
      seoText={<CaseStudiesSEOText />}
    >
      <Helmet>
        <title>Referenzen & Case Studies | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Entdecken Sie unsere Erfolgsgeschichten: Case Studies und Referenzen von ooliv, Ihrer Werbeagentur aus Mainz für digitales Marketing." />
        <meta name="keywords" content="Referenzen Werbeagentur Mainz, Case Studies Webdesign Mainz, Portfolio ooliv Mainz, Erfolgsgeschichten Digital Marketing, Kundenprojekte Mainz" />
        <meta name="focus-keyword" content="Referenzen Werbeagentur Mainz" />
      </Helmet>
      
      <CaseStudiesHero />
      <CaseStudiesSection />
      <TeamSection />
      <CTA 
        title="Lassen Sie uns Ihre Erfolgsgeschichte schreiben"
        subtitle="Werden Sie Teil unserer Referenzen und profitieren Sie von unserer Expertise im digitalen Marketing."
        primaryCta="Projekt starten"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanCaseStudies;
