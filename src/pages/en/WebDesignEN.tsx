
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignStructureFirst from '@/components/web-design/WebDesignStructureFirst';
import WebDesignBuildOptions from '@/components/web-design/WebDesignBuildOptions';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignFAQ from '@/components/web-design/WebDesignFAQ';
import CTA from '@/components/CTA';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WebDesignSEOTextEN from '@/components/web-design/WebDesignSEOTextEN';
import { useLanguage } from '@/contexts/LanguageContext';
import Reveal from '@/components/animations/Reveal';
import StaggerReveal from '@/components/animations/StaggerReveal';

const EnglishWebDesign = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  // Example demonstration section for our new animation components
  const AnimationShowcase = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">
            Smooth Animations for Better User Experience
          </h2>
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Our websites include subtle animations that guide users and highlight important content.
          </p>
        </Reveal>
        
        <StaggerReveal className="grid md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-brand-backgroundAlt p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-bold mb-3 text-brand-heading">Animation Example {item}</h3>
              <p className="text-brand-text">Smooth, subtle animations make your website feel more responsive and engaging.</p>
            </div>
          ))}
        </StaggerReveal>
        
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <Reveal direction="left">
            <div className="bg-brand-backgroundAlt p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Left Animation</h3>
              <p>This content slides in from the left side.</p>
            </div>
          </Reveal>
          
          <Reveal direction="right" delay={0.2}>
            <div className="bg-brand-backgroundAlt p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Right Animation</h3>
              <p>This content slides in from the right side.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <PageLayout className="overflow-x-hidden">
        <Helmet>
          <title>Webdesign by ooliv – Custom Websites for Business Growth</title>
          <meta name="description" content="Discover tailor-made webdesign solutions by ooliv. Scalable WordPress websites, SEO strategies, and high-performance design for international businesses." />
        </Helmet>
        
        <WebDesignHero />
        <WebDesignBenefits />
        <WebDesignStructureFirst />
        <AnimationShowcase />
        <WebDesignBuildOptions />
        <WebDesignProcess />
        
        {/* Full Case Studies Section with global titles */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CaseStudiesSection />
          </div>
        </section>
        
        <WebDesignFAQ />
        
        {/* Final CTA Section - removed footerNote to prevent duplication */}
        <CTA 
          title="Let's talk about your web design project"
          subtitle="Let's develop a website together that not only looks good but also becomes visible and converts."
          primaryCta="Start Project"
          secondaryCta="Schedule Strategy Talk"
          secondaryCtaLink="/en/contact"
        />
      </PageLayout>
      
      {/* SEO Text Section moved outside PageLayout to appear after footer */}
      <WebDesignSEOTextEN />
    </>
  );
};

export default EnglishWebDesign;
