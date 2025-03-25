
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
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
      <PageHero
        badge="Strategy, Performance & Growth"
        title="Building High-Performance Websites That Drive Growth"
        subtitle="We design and develop websites that rank higher, convert better, and create measurable business success. Whether it's a relaunch or a fresh build — your site will deliver results."
        primaryCta={{
          text: "Start Your Website Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "See Our Work",
          link: "/case-studies"
        }}
      />
      <AboutSection />
      <TeamImpactSection />
      <Challenge />
      <Solution />
      <TeamTeaser />
      <ClientLogos />
      <Testimonials />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default Index;
