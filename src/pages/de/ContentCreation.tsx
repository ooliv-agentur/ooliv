
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContentCreation = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for Content Creation page with focus on "content erstellung"
  const contentFaqs = [
    {
      question: "Wie läuft die Content-Erstellung für Websites ab?",
      answer: "Bei der Content-Erstellung starten wir mit einer umfassenden Strategie und Keyword-Recherche. Anschließend liefern wir modulare, konversionsorientierte Inhalte: Texte, Bilder, Videos und Illustrationen – alles bereit zum Einsatz."
    },
    {
      question: "Kann ich nur Content-Erstellung ohne Design beauftragen?",
      answer: "Ja – wir können auch ausschließlich Content-Erstellung anbieten (Texte, Bilder, Videos), den Sie dann in Ihre bestehende Website integrieren können."
    },
    {
      question: "Was, wenn ich kein Logo oder visuelle Markenelemente für die Content-Erstellung habe?",
      answer: "Auch dabei können wir helfen. Unser Team erstellt Logos, Icons und visuelle Systeme, die mit Ihrer Markenidentität übereinstimmen und die Content-Erstellung perfekt ergänzen."
    },
    {
      question: "Nutzt ihr KI für die Content-Erstellung?",
      answer: "Ja, aber wir verlassen uns nicht blind auf KI. Bei der Content-Erstellung verwenden wir Tools wie ChatGPT und Midjourney als Unterstützung, aber alles wird von unserem Team verfeinert und kuratiert."
    },
    {
      question: "Wird der Content bei der Erstellung für SEO optimiert?",
      answer: "Ja. Bei der Content-Erstellung ist jedes Element SEO-freundlich, von den Überschriften bis zu den Metadaten. Professionelle Content-Erstellung bedeutet für uns immer auch SEO-Optimierung."
    },
    {
      question: "Wie unterscheidet sich eure Content-Erstellung von der Konkurrenz?",
      answer: "Unsere Content-Erstellung verbindet strategisches Denken mit kreativer Umsetzung. Wir fokussieren uns nicht nur auf Ästhetik, sondern auf Content-Erstellung, die messbare Geschäftsergebnisse liefert."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <ContentHero />
      <ContentBenefits />
      <ContentServiceDE />
      <ContentServices />
      <ContentProcess />
      <ContentExpertInsight />
      <ContentCaseStudies />
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Lassen Sie uns Content erstellen, der konvertiert"
        subtitle="Wir füllen nicht nur Seiten – wir bauen Momentum auf. Lassen Sie uns Content erstellen, der rankt, resoniert und echte Geschäftsergebnisse liefert."
        primaryCta="Kostenloses Content-Strategie-Gespräch"
        secondaryCta="Beispielprojekt anfordern"
      />
    </PageLayout>
  );
};

export default GermanContentCreation;
