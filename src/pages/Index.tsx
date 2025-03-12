
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add custom cursor styles to the body
  useEffect(() => {
    document.body.classList.add('custom-cursor');
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <main className="bg-white">
      <style jsx global>{`
        .custom-cursor * {
          cursor: none !important;
        }
      `}</style>
      <Navbar />
      <Hero />
      <Challenge />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
