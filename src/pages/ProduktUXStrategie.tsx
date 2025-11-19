
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductUXHero from '@/components/product-ux/ProductUXHero';
import ProductUXBenefits from '@/components/product-ux/ProductUXBenefits';
import ProductStrategyFramework from '@/components/product-ux/ProductStrategyFramework';
import UserResearchMethodology from '@/components/product-ux/UserResearchMethodology';
import UXBusinessTransformation from '@/components/product-ux/UXBusinessTransformation';
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
      question: "Was ist der Unterschied zwischen Product Strategy und Product Management?",
      answer: "Product Strategy definiert die langfristige Vision, Positionierung und strategische Roadmap – das 'Warum' und 'Was'. Product Management fokussiert auf die operative Umsetzung und Koordination – das 'Wie'. Als Digital Strategy Lead fokussiere ich auf die strategische Ebene: Vision, Discovery, Prioritization und Frameworks."
    },
    {
      question: "Wie misst ihr den ROI von UX-Investitionen?",
      answer: "Durch klare KPI-Frameworks: Conversion Rate Improvements, Lead Quality Metrics, Time-to-Decision Reduction, Feature Adoption Rates und User Satisfaction Scores. Beispiel: Eine strukturierte UX-Transformation führte zu +240% Conversion Rate und +180% Lead Quality bei einem B2B-Client."
    },
    {
      question: "Welche User Research Methoden nutzt ihr?",
      answer: "Kombinierte Methodology: Qualitative Research (User Interviews, Jobs-to-be-Done), quantitative Validation (Surveys, Analytics), Usability Testing und evidenzbasierte Persona Development. Die Methode wird projekt-spezifisch gewählt – basierend auf Research Questions und Validation Goals."
    },
    {
      question: "Wie lange dauert ein typisches Product Strategy Projekt?",
      answer: "Product Discovery & Strategy: 4-8 Wochen für Vision, Opportunity Mapping und initiale Roadmap. End-to-End Product & UX Strategy: 8-16 Wochen für vollständige Strategic Discovery, User Research, IA-Entwicklung und Validation. Abhängig von Scope und Komplexität."
    },
    {
      question: "Was sind typische Outcomes einer UX-Transformation?",
      answer: "Messbare Business Impacts: Höhere Conversion Rates (+150-300%), verbesserte Lead Quality (+80-200%), reduzierte Time-to-Decision (-30-50%), höhere Feature Adoption (+100-250%). Plus: Skalierbare Design Systems, evidenzbasierte Product Decisions und strukturierte UX-Prozesse."
    }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Product & UX Strategy Framework | User Research Methodology | ooliv"
        description="Product Strategy Framework, evidenzbasierte User Research Methodology und UX-driven Business Transformation: Von Product Discovery über User Research bis zu messbaren Business Outcomes."
        canonicalUrl="https://ooliv.de/produkt-ux-strategie"
        keywords="Product Strategy Framework, User Research Methodology, UX Transformation, Product Discovery, UX Analytics, Product Roadmap, User Research, Information Architecture"
        breadcrumbs={breadcrumbs}
      />

      <ProductUXHero />
      <ProductUXBenefits />
      <ProductStrategyFramework />
      <UserResearchMethodology />
      <UXBusinessTransformation />
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
