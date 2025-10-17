
import React from 'react';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentImportance from '@/components/content-creation/ContentImportance';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServicesUnified from '@/components/content-creation/ContentServicesUnified';
import ContentProcessUnified from '@/components/content-creation/ContentProcessUnified';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';


const GermanContentCreation = () => {
  // Custom FAQ items for Content Creation page
  const contentFaqs = [
    {
      question: "Wie erstellt ihr Content für Websites?",
      answer: "Als Content Agentur Mainz entwickeln wir eine umfassende Content-Strategie, beginnend mit Keyword-Recherche, und liefern dann modulare, konversionsorientierte Assets: Text, Bilder, Videos und Illustrationen – alles startbereit."
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
      answer: "Ja. Als Content Agentur Mainz wird jedes Content-Element SEO-freundlich gestaltet, von den Überschriften bis zu den Metadaten."
    }
  ];
  
  return (
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="Content-Erstellung Mainz – SEO-Texte & Copywriting | ooliv"
        description="Professionelle Content-Erstellung Mainz – SEO-Texte, die ranken & verkaufen. Von Keyword-Recherche bis Backlink-Strategie. Jetzt Beratung!"
        canonicalUrl="https://ooliv.de/content-erstellung"
        keywords="Content Agentur, Content Erstellung, Texterstellung, Copywriting, ooliv Mainz"
      />

      {/* 1. Hero Section - White background */}
      <ContentHero />
      
      {/* 2. New Section: Warum Content entscheidend ist - Light mint background */}
      <div className="bg-medico-mint/20">
        <ContentImportance />
      </div>
      
      {/* 3. Problem-Lösungs-Bereich - White background */}
      <ContentBenefits />
      
      {/* 4. Unified Services Section - Mint background */}
      <ContentServicesUnified />
      
      {/* 5. Unified Process Section - Light gray background */}
      <ContentProcessUnified />
      
      {/* 6. Why ooliv? with added elements - White background */}
      <ContentExpertInsight />
      
      {/* 7. Case Studies - White background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      {/* 8. FAQs - White background */}
      <div className="bg-white">
        <FAQ 
          customFaqs={contentFaqs}
          customTitle="Häufig gestellte Fragen zur Content-Erstellung" 
        />
      </div>
      
      {/* 9. CTA - Mint background */}
      <div className="bg-medico-mint/30">
        <CTA 
          title="Lassen Sie uns Content erstellen, der konvertiert"
          subtitle="Wir füllen nicht nur Seiten – wir bauen Momentum. Lassen Sie uns als Ihre Content Agentur Mainz Inhalte erstellen, die ranken, resonieren und echte Geschäftsergebnisse liefern."
          primaryCta="Content-Projekt besprechen"
          secondaryCta="Showcase ansehen"
          secondaryCtaLink="/case-studies"
        />
      </div>
    </PageLayout>
  );
};

export default GermanContentCreation;
