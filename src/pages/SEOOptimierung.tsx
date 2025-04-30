
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import FAQ from '@/components/FAQ';
import SEOCtaDE from '@/components/seo/SEOCtaDE';

const SEOOptimierung = () => {
  // Custom FAQ items for SEO page
  const seoFaqs = [
    {
      question: "Wie lange dauert es, bis SEO-Maßnahmen Wirkung zeigen?",
      answer: "SEO ist eine langfristige Strategie – erste Verbesserungen sehen Sie oft nach 2-3 Monaten, signifikante Ergebnisse nach 6-12 Monaten."
    },
    {
      question: "Welche Faktoren beeinflussen das SEO-Ranking am stärksten?",
      answer: "Relevanter Inhalt, Nutzerfreundlichkeit, technische Seitenqualität und hochwertige Backlinks sind die wichtigsten Faktoren."
    },
    {
      question: "Wie unterscheidet sich die SEO für lokale und internationale Unternehmen?",
      answer: "Lokales SEO konzentriert sich auf geografische Keywords und lokale Verzeichnisse, während internationales SEO sprachoptimierte Inhalte und länderspezifische Domains erfordert."
    },
    {
      question: "Wie misst ooliv den Erfolg der SEO-Maßnahmen?",
      answer: "Wir tracken Rankingverbesserungen, organische Traffic-Steigerungen, Conversion-Raten und ROI durch regelmäßige Reports."
    },
    {
      question: "Arbeitet ooliv auch mit bestehenden SEO-Teams zusammen?",
      answer: "Ja, wir ergänzen bestehende Teams oder schulen diese in fortgeschrittenen SEO-Techniken."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>SEO Optimierung | Professionelle Suchmaschinenoptimierung</title>
        <meta name="description" content="Professionelle SEO-Optimierung für mehr Sichtbarkeit in Google. Wir steigern Ihre Rankings, Traffic und Conversions durch ganzheitliche Suchmaschinenoptimierung." />
        <meta name="keywords" content="seo optimierung, suchmaschinenoptimierung, google ranking verbessern, seo agentur" />
      </Helmet>
      
      <SEOHeroDE />
      <SEOServicesDE />
      <SEOProcessDE />
      <SEOBenefitsDE />
      <SEOApproachDE />
      <SEOCaseStudies />
      <FAQ customFaqs={seoFaqs} />
      <SEOCtaDE />
    </PageLayout>
  );
};

export default SEOOptimierung;
