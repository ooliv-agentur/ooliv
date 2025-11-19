
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
      question: "Was bringt mir eine bessere Nutzerführung konkret?",
      answer: "Mehr Anfragen über Ihre Website, weniger Absprünge, schnellere Kaufentscheidungen. Typische Ergebnisse meiner Kunden: +150–300% mehr Conversions, +80–200% bessere Lead-Qualität, -30–50% kürzere Entscheidungszeiten. Ihre Website wird vom Informations-Friedhof zum Lead-Generator."
    },
    {
      question: "Wie finden Sie heraus, was meine Nutzer wirklich wollen?",
      answer: "Durch echte Gespräche mit Ihren Kunden und Zielgruppen – keine Bauchgefühl-Entscheidungen. Wir führen strukturierte Interviews, analysieren das Nutzerverhalten auf Ihrer Website und testen konkrete Lösungen. Sie bekommen klare Erkenntnisse, keine Vermutungen."
    },
    {
      question: "Brauche ich wirklich einen Strategie-Workshop?",
      answer: "Wenn Ihre Website nicht die gewünschten Ergebnisse bringt oder Sie unsicher sind, was als nächstes kommt – ja. In 4–8 Wochen entwickeln wir ein fundiertes Konzept mit klarer Roadmap. Das spart Ihnen später Zeit, Geld und Nerven – und führt zu besseren Ergebnissen."
    },
    {
      question: "Was kostet so eine Produkt- und UX-Strategie?",
      answer: "Ein fokussierter Workshop mit Konzept startet bei €15.000–25.000. Umfassende Strategieprojekte mit User Research und detaillierter Roadmap liegen bei €30.000–50.000. Sie erhalten vorab ein transparentes Angebot – und wissen genau, was Sie bekommen."
    },
    {
      question: "Wie lange dauert die Entwicklung eines neuen Konzepts?",
      answer: "Die Strategie-Phase dauert 4–8 Wochen: Analyse, User Research, Konzeptentwicklung. Die komplette Umsetzung mit Design und Entwicklung dauert dann 8–16 Wochen – abhängig vom Umfang. Sie erhalten einen klaren Zeitplan vor Projektstart."
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
