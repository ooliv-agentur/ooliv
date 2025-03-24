
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <PageHero
        badge="Web Design Agency"
        title="Building High-Performance Websites for Measurable Business Growth"
        subtitle="We create websites that rank higher, convert better, and drive real business success. Whether it's a relaunch or a brand-new site, we ensure your website delivers measurable results."
        primaryCta={{
          text: "Start Your Website Project",
          link: "/contact"
        }}
        secondaryCta={{
          text: "See Our Work",
          link: "/case-studies"
        }}
      />
      <Challenge />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default Index;
