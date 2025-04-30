
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import HeroHome from '@/components/hero/HeroHome';
import CTA from '@/components/CTA';
import DeutscherAboutSection from '@/components/de/DeutscherAboutSection';
import TeamImpactSectionDE from '@/components/de/TeamImpactSectionDE';
import GermanSolutionSection from '@/components/de/GermanSolutionSection';
import BasecampSection from '@/components/de/BasecampSection';
import TeamTeaserDE from '@/components/de/TeamTeaserDE';
import ClientLogos from '@/components/ClientLogos';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import TechnologiesSection from '@/components/de/TechnologiesSection';
import FAQ from '@/components/FAQ';
import SEOTextSection from '@/components/de/SEOTextSection';

const GermanIndex = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Helmet>
        <title>Werbeagentur Mainz für B2B | Webdesign & SEO | ooliv</title>
        <meta name="description" content="ooliv ist die Werbeagentur Mainz für B2B-Marken. Webdesign, Webentwicklung & SEO, die messbar zu mehr Sichtbarkeit und Leads führen." />
      </Helmet>
      
      <HeroHome />
      <DeutscherAboutSection />
      <TeamImpactSectionDE />
      <BasecampSection />
            
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Sehen Sie den Unterschied, den strategisches Webdesign macht</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Schieben Sie den Regler, um veraltete Designs mit modernen, konversionsorientierten Websites zu vergleichen, die echte Geschäftsergebnisse liefern.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      
      <GermanSolutionSection />
      <TeamTeaserDE />
      <TechnologiesSection />
      <ClientLogos />
      
      {/* Show all 5 case studies with standardized headers */}
      <CaseStudiesSection />
      
      <FAQ customTitle="Häufig gestellte Fragen" />
      <SEOTextSection />
      
      <CTA 
        title="Bereit, Ihre digitale Präsenz zu transformieren?"
        subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
        primaryCta="Projekt starten"
      />
    </PageLayout>
  );
};

export default GermanIndex;
