
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TeamImpactSection from "@/components/TeamImpactSection";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import TeamTeaser from "@/components/TeamTeaser";
import ClientLogos from "@/components/ClientLogos";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">Sehen Sie den Unterschied einer strategischen Website</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Ziehen Sie den Schieberegler, um veraltete Designs mit modernen, konversionsorientierten Websites zu vergleichen, die echte Geschäftsergebnisse liefern.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution />
      <TeamTeaser />
      <ClientLogos />
      <Testimonials />
      <FAQ />
      <CTA 
        title="Bereit, Ihre digitale Präsenz zu transformieren?"
        subtitle="Lassen Sie uns besprechen, wie unser Team Ihrem Unternehmen helfen kann, seine Online-Ziele zu erreichen."
        primaryCta="Projekt starten"
        secondaryCta="Unsere Arbeiten ansehen"
      />
    </PageLayout>
  );
};

export default GermanIndex;
