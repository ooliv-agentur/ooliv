
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import AboutHero from '@/components/about/AboutHero';
import AboutValues from '@/components/about/AboutValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutStory from '@/components/about/AboutStory';
import AboutClients from '@/components/about/AboutClients';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const AboutUs = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for About Us page
  const aboutFaqs = [
    {
      question: "When was ooliv founded?",
      answer: "ooliv was founded in 2020 with the mission to create digital experiences that drive measurable business results."
    },
    {
      question: "Where is ooliv located?",
      answer: "Our headquarters are in Mainz, Germany, with a distributed team working across Europe."
    },
    {
      question: "What makes ooliv different from other agencies?",
      answer: "We combine technical excellence with strategic thinking, focusing on measurable results rather than just aesthetics or trends."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Yes, we serve clients across Europe and beyond, with particular expertise in German and English-speaking markets."
    },
    {
      question: "What industries do you specialize in?",
      answer: "While we work across sectors, we have deep expertise in B2B services, manufacturing, e-commerce, and technology companies."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <AboutHero />
      <AboutValues />
      <AboutTeam />
      <AboutStory />
      <AboutClients />
      <FAQ customFaqs={aboutFaqs} />
      <CTA 
        title="Let's Create Digital Success Together"
        subtitle="From strategy to execution, we're your partner for sustainable digital growth."
        primaryCta="Get to Know Us Better"
        secondaryCta="Start a Project"
      />
    </PageLayout>
  );
};

export default AboutUs;
