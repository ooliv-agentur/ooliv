
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import FAQ from '@/components/FAQ';
import SEOCtaDE from '@/components/seo/SEOCtaDE';
import { useLanguage } from '@/contexts/LanguageContext';

const seoFaqs = [
  {
    question: "Wie lange dauert es, bis SEO-Ergebnisse sichtbar werden?",
    answer: "Erste Verbesserungen sind oft nach 3-6 Monaten messbar, signifikante Erfolge zeigen sich meist nach 6-12 Monaten. SEO ist eine langfristige Investition, die sich durch nachhaltiges Wachstum auszahlt."
  },
  {
    question: "Was unterscheidet Ihre SEO-Strategie von anderen Agenturen?",
    answer: "Wir setzen auf datengetriebene Strategien und transparente Kommunikation. Unsere SEO-Maßnahmen sind immer an Ihre Geschäftsziele gekoppelt – es geht um qualifizierte Leads, nicht nur um Rankings."
  },
  {
    question: "Können Sie auch bei technischen SEO-Problemen helfen?",
    answer: "Ja, technische SEO ist einer unserer Schwerpunkte. Wir optimieren Ladezeiten, beheben Crawling-Probleme, implementieren strukturierte Daten und sorgen für eine saubere technische Basis."
  },
  {
    question: "Wie transparent ist Ihr SEO-Reporting?",
    answer: "Vollständig transparent. Sie erhalten regelmäßige Reports mit allen wichtigen KPIs, Fortschritten und geplanten Maßnahmen. Jederzeit können Sie den Stand Ihrer SEO-Kampagne einsehen."
  }
];

const GermanSEOOptimierung = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>SEO Agentur Mainz – Sichtbarkeit, die zu Leads wird</title>
        <meta 
          name="description" 
          content="SEO-Optimierung aus Mainz für nachhaltige Google-Rankings. Wir steigern Ihre Sichtbarkeit und generieren qualifizierte Leads durch strategische Suchmaschinenoptimierung." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <SEOHeroDE />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <SEOServicesDE />
          <SEOProcessDE />
          <SEOApproachDE />
          <SEOBenefitsDE />
          <SEOCaseStudies />
          <FAQ 
            customFaqs={seoFaqs}
            customTitle="Häufige Fragen zu SEO"
            customCtaText="Weitere Fragen? Kontaktieren Sie uns"
          />
          <SEOCtaDE />
        </div>
      </div>
    </>
  );
};

export default GermanSEOOptimierung;
