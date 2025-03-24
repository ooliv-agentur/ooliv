
import React from 'react';
import PageLayout from "@/components/PageLayout";
import Hero from "@/components/Hero";
import Challenge from "@/components/Challenge";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <Hero />
      <Challenge />
      <Solution />
      <Testimonials />
      <FAQ />
      <CTA />
    </PageLayout>
  );
};

export default Index;
