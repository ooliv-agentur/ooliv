
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

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Hero />
      <AboutSection />
      <TeamImpactSection />
      <Challenge />
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-brand-heading">See the Difference a Strategic Website Makes</h2>
          <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
            Drag the slider to compare outdated designs with modern, conversion-focused websites that drive real business results.
          </p>
          <BeforeAfterSlider />
        </div>
      </div>
      <Solution 
        description={
          <>
            We create high-performance websites that rank higher, convert better, and drive measurable business success. Our expertise spans 
            <Link to="/web-design" className="text-brand-primary hover:underline"> Web Design</Link>, 
            <Link to="/web-development" className="text-brand-primary hover:underline"> Web Development</Link>, 
            <Link to="/content-creation" className="text-brand-primary hover:underline"> Content Creation</Link>, 
            <Link to="/seo-optimization" className="text-brand-primary hover:underline"> SEO Optimization</Link>, 
            <Link to="/google-ads" className="text-brand-primary hover:underline"> Google Ads</Link>, and 
            <Link to="/ai-technologies" className="text-brand-primary hover:underline"> AI Technologies</Link>.
          </>
        }
      />
      <TeamTeaser />
      <ClientLogos />
      
      {/* Show all 5 case studies with standardized headers */}
      <CaseStudiesSection />
      
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
