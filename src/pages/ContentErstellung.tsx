
import React from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import ContentHero from '@/components/content-creation/ContentHero';
import ContentServices from '@/components/content-creation/ContentServices';
import ContentProcess from '@/components/content-creation/ContentProcess';
import ContentBenefits from '@/components/content-creation/ContentBenefits';
import ContentServiceDE from '@/components/content-creation/ContentServiceDE';
import ContentCaseStudies from '@/components/content-creation/ContentCaseStudies';
import ContentExpertInsight from '@/components/content-creation/ContentExpertInsight';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const ContentErstellung = () => {
  // Custom FAQ items for Content Creation page in German
  const contentFaqs = [
    {
      question: "Welche Content-Arten erstellt ooliv?",
      answer: "Wir erstellen Website-Texte, Blog-Artikel, Whitepaper, E-Books, Fallstudien, Newsletter, Produkt- und Servicebeschreibungen, SEO-Texte und Video-Skripte – alles an Ihre Zielgruppe angepasst."
    },
    {
      question: "Wie läuft die Zusammenarbeit ab?",
      answer: "Wir beginnen mit einem Briefing zu Ihren Zielen, analysieren Ihre Zielgruppe, erstellen einen Content-Plan, schreiben die Inhalte und überarbeiten sie basierend auf Ihrem Feedback. Der gesamte Prozess ist transparent."
    },
    {
      question: "Wie lange dauert die Content-Erstellung?",
      answer: "Die Dauer hängt vom Projektumfang ab. Ein Blog-Artikel kann innerhalb weniger Tage fertig sein, während ein komplettes Website-Relaunch-Projekt mehrere Wochen benötigen kann."
    },
    {
      question: "Kann ooliv in mehreren Sprachen Content erstellen?",
      answer: "Ja, wir erstellen Content auf Deutsch und Englisch und bieten auch Übersetzungen in weitere Sprachen an."
    },
    {
      question: "Warum sollte ich nicht selbst Content schreiben?",
      answer: "Professioneller Content spart Zeit, vermittelt Expertise und überzeugt Kunden. Unsere Texte sind SEO-optimiert und auf Conversion ausgerichtet – was direkt zu messbaren Geschäftsergebnissen führt."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>Content Erstellung | Professionelle Texte für Ihre Website</title>
        <meta name="description" content="Content-Erstellung und Texte für Unternehmen. Wir erstellen SEO-optimierte, zielgruppengerechte Inhalte, die überzeugen und konvertieren." />
        <meta name="keywords" content="content erstellung, web texte, seo content, blog artikel, content marketing" />
      </Helmet>
      
      <ContentHero />
      <ContentServices />
      <ContentProcess />
      <ContentBenefits />
      <ContentServiceDE />
      <ContentCaseStudies />
      <ContentExpertInsight />
      <FAQ customFaqs={contentFaqs} />
      <CTA 
        title="Content, der Kunden überzeugt"
        subtitle="Lassen Sie uns hochwertige Inhalte für Ihre Website erstellen."
        primaryCta="Projekt starten"
      />
    </PageLayout>
  );
};

export default ContentErstellung;
