
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TeamTeaser from "@/components/TeamTeaser";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import { Link } from "react-router-dom";
import { useLanguage } from '@/contexts/LanguageContext';

const GermanIndex = () => {
  const { setLanguage } = useLanguage();
  
  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);
  
  return (
    <PageLayout className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <TeamImpactSection />
      <Challenge />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Erleben Sie den Unterschied einer strategischen Website</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Ziehen Sie den Slider, um veraltete Designs mit modernen, konversionsorientierten Websites zu vergleichen, die echte Geschäftsergebnisse liefern.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        description={
          <>
            Wir erstellen leistungsstarke Websites, die besser ranken, mehr konvertieren und messbaren Geschäftserfolg bringen. Unsere Expertise umfasst 
            <Link to="/de/webdesign" className="text-brand-primary hover:underline"> Webdesign</Link>, 
            <Link to="/de/webentwicklung" className="text-brand-primary hover:underline"> Webentwicklung</Link>, 
            <Link to="/de/content-erstellung" className="text-brand-primary hover:underline"> Content-Erstellung</Link>, 
            <Link to="/de/seo-optimierung" className="text-brand-primary hover:underline"> SEO-Optimierung</Link>, 
            <Link to="/de/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link> und 
            <Link to="/de/ki-technologien" className="text-brand-primary hover:underline"> KI-Technologien</Link>.
          </>
        }
      />
      <TeamTeaser />
      <ClientLogos />
      
      {/* Show all case studies with no limitation */}
      <CaseStudiesSection />
      
      <FAQ />
      <CTA 
        title="Bereit, Ihre digitale Präsenz zu transformieren?"
        subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
        primaryCta="Starten Sie Ihr Website-Projekt"
        secondaryCta="Sehen Sie unsere Arbeit"
      />
    </PageLayout>
  );
};

export default GermanIndex;
