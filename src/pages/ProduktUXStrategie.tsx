
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductUXHero from '@/components/product-ux/ProductUXHero';
import ProductUXBenefits from '@/components/product-ux/ProductUXBenefits';
import ProductUXServices from '@/components/product-ux/ProductUXServices';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';

const ProductUXStrategy = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Product & UX Strategy", url: "https://ooliv.de/produkt-ux-strategie" }
  ];

  const faq = [
    {
      question: "Was unterscheidet Product Strategy von Projektmanagement?",
      answer: "Product Strategy definiert die langfristige Vision, Roadmap und strategische Ausrichtung, während Projektmanagement die operative Umsetzung koordiniert. Wir fokussieren uns auf strategische Führung und Produktvision."
    },
    {
      question: "Wie integriert ihr UX-Strategie in den Produktprozess?",
      answer: "UX-Strategie ist von Anfang an integriert: von Customer Journey Mapping über Information Architecture bis zu Conversion-Optimization. Nutzerbedürfnisse und Business-Ziele werden strategisch verbunden."
    },
    {
      question: "Arbeitet ihr hands-on oder strategisch?",
      answer: "Strategisch. Ich führe die Product & UX Strategy, erstelle Konzepte und Wireframes, koordiniere aber internationale Teams für die technische Umsetzung."
    },
    {
      question: "Für welche Unternehmensgrößen ist Product Strategy relevant?",
      answer: "Vor allem für B2B-Unternehmen und Scale-ups mit komplexen digitalen Produkten, die strategische Führung und strukturierte Produktentwicklung benötigen."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Product & UX Strategy | Strategische Produktführung | ooliv"
        description="Product & UX Strategy für B2B-Unternehmen: Product Roadmaps, UX Strategy, Information Architecture und strategische Produktführung mit messbaren Outcomes."
        canonicalUrl="https://ooliv.de/produkt-ux-strategie"
        keywords="Product Strategy, UX Strategy, Product Roadmap, Information Architecture, Requirements Engineering"
        breadcrumbs={breadcrumbs}
      />

      <ProductUXHero />
      <ProductUXBenefits />
      <ProductUXServices />
      
      <CaseStudiesSection />
      
      <FAQ customFaqs={faq} />
      
      <CTA 
        title="Produktstrategie für Ihr Unternehmen"
        subtitle="Lassen Sie uns gemeinsam eine klare Product & UX Strategy entwickeln – von der Vision bis zur messbaren Umsetzung."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Mehr erfahren"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default ProductUXStrategy;
