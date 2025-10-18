
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import SEOHeroDE from '@/components/seo/SEOHeroDE';
import SEOBenefitsDE from '@/components/seo/SEOBenefitsDE';
import SEOServicesDE from '@/components/seo/SEOServicesDE';
import SEOProcessDE from '@/components/seo/SEOProcessDE';
import SEOApproachDE from '@/components/seo/SEOApproachDE';
import SEOCtaDE from '@/components/seo/SEOCtaDE';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import FAQ from '@/components/FAQ';
import { useLanguage } from '@/contexts/LanguageContext';
import { setHybridMinimalTheme, resetToColorfulTheme } from '@/styles/minimalTheme';

import GooglePartnerBadgeSEO from '@/components/seo/GooglePartnerBadgeSEO';
import ServiceSchemaGenerator from '@/components/seo/ServiceSchemaGenerator';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Link } from 'react-router-dom';

const GermanSEO = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    setHybridMinimalTheme();
    
    return () => {
      resetToColorfulTheme();
    };
  }, [setLanguage]);
  
  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "SEO Optimierung", url: "https://ooliv.de/seo-optimierung" }
  ];
  
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
    <PageLayout 
      className="overflow-x-hidden"
    >
      <EnhancedSEOHead
        title="SEO Mainz – Google Rankings verbessern | ooliv"
        description="SEO Mainz – Top Rankings bei Google. Technisches SEO, Content-Strategie & Backlinks. ✓ Messbar mehr Traffic ✓ Mehr Leads. Jetzt SEO-Analyse!"
        canonicalUrl="https://ooliv.de/seo-optimierung"
        keywords="SEO Agentur Mainz, Suchmaschinenoptimierung, Google Rankings, Online Marketing"
        breadcrumbs={breadcrumbs}
      />
      
      <ServiceSchemaGenerator
        serviceName="Suchmaschinenoptimierung Mainz"
        description="Professionelle SEO-Dienstleistungen für bessere Google-Rankings und mehr organische Sichtbarkeit."
        serviceType="SearchEngineOptimization"
        priceRange="€1500-€5000"
        offers={[
          {
            name: "SEO Basis-Audit",
            description: "Technische Analyse und erste Optimierungen",
            priceRange: "€1500-€2500"
          },
          {
            name: "Lokale SEO",
            description: "Google My Business und lokale Sichtbarkeit",
            priceRange: "€2000-€3500"
          },
          {
            name: "SEO-Komplettbetreuung",
            description: "Umfassende SEO-Strategie mit Content und Linkaufbau",
            priceRange: "€3000-€5000"
          }
        ]}
      />

      <SEOHeroDE />
      <SEOBenefitsDE />
      
      <GooglePartnerBadgeSEO />
      
      <SEOServicesDE />
      <SEOApproachDE />
      <SEOProcessDE />

      <p className="text-center text-sm text-medico-darkGreen mt-4">
        Mehr über <Link to="/" className="underline hover:no-underline">ooliv und unsere Arbeitsweise</Link>.
      </p>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesSection />
        </div>
      </section>
      
      <FAQ 
        customFaqs={seoFaqs} 
        customTitle="Häufig gestellte Fragen zu SEO & Rankings"
      />
      
      <SEOCtaDE />
    </PageLayout>
  );
};

export default GermanSEO;
