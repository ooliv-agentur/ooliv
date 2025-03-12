
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Index;
