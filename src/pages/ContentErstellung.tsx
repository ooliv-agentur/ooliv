
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const ContentErstellung = () => {
  // Custom FAQ items for Content Creation page
  const contentFaqs = [
    {
      question: "Wie erstellt ihr Content für Websites?",
      answer: "Wir entwickeln eine umfassende Content-Strategie, beginnend mit Keyword-Recherche, und liefern dann modulare, konversionsorientierte Assets: Text, Bilder, Videos und Illustrationen – alles startbereit."
    },
    {
      question: "Kann ich nur Content ohne Design bestellen?",
      answer: "Ja – wir können nur Content (Texte, Bilder, Videos) liefern, den Sie in Ihre bestehende Website integrieren können."
    },
    {
      question: "Was, wenn ich kein Logo oder visuelle Markenelemente habe?",
      answer: "Dabei können wir auch helfen. Unser Team erstellt Logos, Icons und visuelle Systeme, die zu Ihrer Markenidentität passen."
    },
    {
      question: "Verwendet ihr KI für Content?",
      answer: "Ja, aber wir verlassen uns nicht blind auf KI. Wir nutzen Tools wie ChatGPT und Midjourney, aber alles wird von unserem Team verfeinert und kuratiert."
    },
    {
      question: "Optimiert ihr Content für SEO?",
      answer: "Ja. Jedes Content-Element ist SEO-freundlich, von den Überschriften bis zu den Metadaten."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Content Erstellung für B2B | Texte, die konvertieren</title>
        <meta name="description" content="ooliv erstellt strategischen B2B-Content: Website-Texte, Landingpages & SEO-Inhalte mit Plan – klar, durchdacht, leistungsstark." />
      </Helmet>

      <ContentHero />
      <ContentBenefits />
      <ContentServiceDE />
      <ContentServices />
      <ContentProcess />
      
      {/* Use the standardized global CaseStudiesSection */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={contentFaqs}
        customTitle="Häufig gestellte Fragen zur Content-Erstellung" 
      />
      <CTA 
        title="Lassen Sie uns Content erstellen, der konvertiert"
        subtitle="Wir füllen nicht nur Seiten – wir bauen Momentum. Lassen Sie uns Content erstellen, der rankt, resoniert und echte Geschäftsergebnisse liefert."
        primaryCta="Content-Projekt besprechen"
        secondaryCta="Showcase ansehen"
        secondaryCtaLink="/case-studies"
      />
    </PageLayout>
  );
};

export default ContentErstellung;
