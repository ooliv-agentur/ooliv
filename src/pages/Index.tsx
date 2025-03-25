
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

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <TeamImpactSection />
      <Challenge />
      <Solution />
      <TeamTeaser />
      <ClientLogos />
      <Testimonials />
      <FAQ />
      <CTA 
        title="Ready to transform your digital presence?"
        subtitle="Let's discuss how our team can help your business achieve its online goals."
        primaryCta="Start Your Website Project"
        secondaryCta="See Our Work"
      />
    </PageLayout>
  );
};

export default Index;
