
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ContentSEOText from '@/components/content-creation/ContentSEOText';
import { useLanguage } from '@/contexts/LanguageContext';

const contentFaqs = [
  {
    question: "Wie entwickeln Sie Content-Strategien für B2B-Unternehmen?",
    answer: "Wir beginnen mit einer umfassenden Analyse Ihrer Zielgruppen, Wettbewerber und Geschäftsziele. Darauf basierend entwickeln wir eine maßgeschneiderte Content-Strategie, die Ihre Expertise sichtbar macht und qualifizierte Leads generiert."
  },
  {
    question: "Welche Content-Formate erstellen Sie?",
    answer: "Wir erstellen vielfältige Content-Formate: Website-Texte, Blog-Artikel, Case Studies, Whitepapers, Social Media Content, Newsletter, Produktbeschreibungen und SEO-optimierte Landingpages – alles abgestimmt auf Ihre Zielgruppen."
  },
  {
    question: "Wie stellen Sie sicher, dass der Content bei Google gefunden wird?",
    answer: "Jeder Content wird SEO-optimiert erstellt: von der Keyword-Recherche über die Content-Struktur bis hin zu technischen SEO-Faktoren. Wir kombinieren strategische Inhalte mit messbarer Sichtbarkeit in den Suchmaschinen."
  },
  {
    question: "Können Sie auch bestehenden Content überarbeiten?",
    answer: "Ja, wir führen Content-Audits durch und optimieren bestehende Inhalte. Oft lässt sich durch gezielte Überarbeitung die Performance erheblich steigern – sowohl für Nutzer als auch für Suchmaschinen."
  }
];

const GermanContentErstellung = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <>
      <Helmet>
        <title>Content Agentur Mainz – Inhalte, die verkaufen und gefunden werden</title>
        <meta 
          name="description" 
          content="Content Marketing aus Mainz: Strategische Inhalte für B2B-Unternehmen. Von SEO-Texten bis Video-Content – wir entwickeln Content, der konvertiert." 
        />
      </Helmet>
      
      {/* Fixed Hero Section */}
      <div className="fixed inset-0 z-10">
        <ContentHero />
      </div>
      
      {/* Scrollable Content Overlay */}
      <div className="relative z-20" style={{ marginTop: '100vh' }}>
        <div className="bg-white relative">
          <ContentServiceDE />
          <ContentProcess />
          <ContentBenefits />
          <ContentCaseStudies />
          <ContentExpertInsight />
          <FAQ 
            customFaqs={contentFaqs}
            customTitle="Häufige Fragen zu Content Marketing"
            customCtaText="Weitere Fragen? Sprechen Sie mit uns"
          />
          <CTA 
            title="Bereit für Content, der Ihr Business voranbringt?"
            subtitle="Lassen Sie uns gemeinsam eine Content-Strategie entwickeln, die messbare Ergebnisse liefert."
            primaryCta="Content-Projekt starten"
          />
        </div>
      </div>
      
      <ContentSEOText />
    </>
  );
};

export default GermanContentErstellung;
