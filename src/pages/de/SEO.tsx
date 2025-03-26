
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOCtaDE from '@/components/seo/SEOCtaDE';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
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
      answer: "Erste Effekte in wenigen Wochen, nachhaltige Ergebnisse meist ab 3 Monaten."
    },
    {
      question: "Was macht euren SEO-Ansatz in Mainz besonders?",
      answer: "Strategie, Tech-Knowhow und Content – kombiniert in einem skalierbaren Prozess."
    },
    {
      question: "Bietet ihr auch lokale SEO-Dienste an?",
      answer: "Ja – inkl. Google Business, Branchenverzeichnisse und gezielter Sichtbarkeit in Mainz & Region."
    },
    {
      question: "Ist Linkaufbau Teil eurer SEO-Leistungen?",
      answer: "Ja – wir koordinieren nachhaltige Backlink-Kampagnen inkl. Autoritätsaufbau."
    },
    {
      question: "Wie stellt ihr sicher, dass die technische SEO aktuell ist?",
      answer: "Durch strukturierte Audits, Core Web Vitals Checks und technische Umsetzung durch unser Team."
    },
    {
      question: "Warum sollte ich mit einer lokalen SEO Agentur in Mainz arbeiten?",
      answer: "Weil regionale Marktkenntnis, Sprache und SEO-Taktik einen entscheidenden Unterschied machen."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <SEOHeroDE />
      <SEOBenefitsDE />
      <SEOServicesDE />
      <SEOApproachDE />
      <SEOProcessDE />
      
      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-heading mb-6">Echte Ergebnisse von echten Kunden</h2>
          </div>
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={seoFaqs} 
        customTitle="Häufige Fragen zur SEO Agentur Mainz"
      />
      
      <SEOCtaDE />
    </PageLayout>
  );
};

export default GermanSEO;
