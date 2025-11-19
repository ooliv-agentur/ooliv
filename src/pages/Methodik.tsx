import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import MethodologyHero from '@/components/methodology/MethodologyHero';
import ProcessTimeline from '@/components/methodology/ProcessTimeline';
import ProcessPhases from '@/components/methodology/ProcessPhases';
import MethodologyBenefits from '@/components/methodology/MethodologyBenefits';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import CTA from '@/components/CTA';

const Methodology = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "Methodik", url: "https://ooliv.de/methodik" }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="Strategic Methodology | End-to-End Transformation Process | ooliv"
        description="Strukturierter 5-Phasen-Prozess für Digital Transformation: Strategic Discovery, UX & Product Strategy, AI Integration, Implementation Leadership, Optimization."
        canonicalUrl="https://ooliv.de/methodik"
        keywords="Strategic Methodology, Digital Transformation Process, Strategic Discovery, UX Strategy, AI Integration, Implementation Leadership"
        breadcrumbs={breadcrumbs}
      />

      <MethodologyHero />
      <ProcessTimeline />
      <MethodologyBenefits />
      <ProcessPhases />
      
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Transformationen nach dieser Methodik
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Erfolgreiche Projekte mit strukturiertem Prozess und messbaren Outcomes
            </p>
          </div>
          <CaseStudiesSection hideHeaderText />
        </div>
      </section>

      <CTA 
        title="Bereit für eine strukturierte Digital Transformation?"
        subtitle="Lassen Sie uns gemeinsam Ihr Projekt mit unserem bewährten 5-Phasen-Prozess umsetzen – von der Strategic Discovery bis zur messbaren Optimization."
        primaryCta="Strategiegespräch vereinbaren"
        secondaryCta="Mehr erfahren"
        secondaryCtaLink="/kontakt"
      />
    </PageLayout>
  );
};

export default Methodology;
