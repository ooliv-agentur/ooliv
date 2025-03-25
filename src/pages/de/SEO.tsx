
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEOHero from '@/components/seo/SEOHero';
import SEOBenefits from '@/components/seo/SEOBenefits';
import SEOServices from '@/components/seo/SEOServices';
import SEOProcess from '@/components/seo/SEOProcess';
import SEOCaseStudies from '@/components/seo/SEOCaseStudies';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanSEO = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  // Custom FAQ items for SEO page with focus on "seo agentur mainz"
  const seoFaqs = [
    {
      question: "Wie lange dauert es, bis SEO-Maßnahmen Ergebnisse zeigen?",
      answer: "Erste Ergebnisse zeigen sich oft innerhalb weniger Wochen (z.B. technische Korrekturen), aber langfristiges Wachstum benötigt typischerweise 3-6 Monate. Als SEO Agentur in Mainz setzen wir auf eine Kombination aus schnellen Verbesserungen und nachhaltigen Strategien."
    },
    {
      question: "Was macht den SEO-Ansatz von ooliv als SEO Agentur in Mainz besonders?",
      answer: "Wir verbinden schnelle Korrekturen mit langfristigen Strategien. Unser Ansatz ist datengesteuert und fokussiert auf Geschäftsergebnisse. Als SEO Agentur in Mainz verstehen wir sowohl den lokalen als auch den globalen Markt."
    },
    {
      question: "Bietet eure SEO Agentur auch lokale SEO-Dienste an?",
      answer: "Ja, wir helfen Unternehmen, ihre Sichtbarkeit in bestimmten Regionen (z.B. Mainz, Rhein-Main-Gebiet) durch lokale Einträge und Unternehmensverzeichnisse zu verbessern. Als SEO Agentur in Mainz kennen wir den lokalen Markt besonders gut."
    },
    {
      question: "Ist Linkaufbau Teil eurer SEO-Dienstleistungen als SEO Agentur?",
      answer: "Ja, wir konzentrieren uns auf hochwertige Backlinks, um die Autorität Ihrer Website zu verbessern und relevanten Traffic zu generieren. Unsere SEO Agentur in Mainz setzt auf qualitative statt quantitative Linkbuilding-Strategien."
    },
    {
      question: "Wie stellt ihr als SEO Agentur sicher, dass die technische SEO einer Website auf dem neuesten Stand ist?",
      answer: "Wir prüfen Geschwindigkeit, Indexierung und Core Web Vitals und beheben alle Probleme, die Ihre Rankings beeinträchtigen. Als fortschrittliche SEO Agentur in Mainz bleiben wir stets auf dem neuesten Stand der technischen Entwicklungen."
    },
    {
      question: "Warum sollte ich eine lokale SEO Agentur in Mainz beauftragen?",
      answer: "Eine lokale SEO Agentur aus Mainz versteht den regionalen Markt besser und kann persönliche Betreuung bieten. Wir kombinieren diese lokale Expertise mit internationalen Best Practices für optimale Ergebnisse."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <SEOHero />
      <SEOBenefits />
      <SEOServices />
      <SEOApproachDE />
      <SEOProcess />
      <SEOCaseStudies />
      <FAQ customFaqs={seoFaqs} />
      <CTA 
        title="Lassen Sie Ihre Website intelligenter arbeiten"
        subtitle="SEO ist keine Checkliste, sondern ein Wachstumshebel. Erschließen wir gemeinsam das volle Potenzial Ihrer Website mit einer auf Ergebnisse ausgerichteten Strategie."
        primaryCta="Kostenloses SEO-Audit anfordern"
        secondaryCta="Strategiegespräch vereinbaren"
      />
    </PageLayout>
  );
};

export default GermanSEO;
