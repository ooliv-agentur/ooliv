
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import CareersHero from '@/components/careers/CareersHero';
import CareersValues from '@/components/careers/CareersValues';
import CareersOpenings from '@/components/careers/CareersOpenings';
import CareersTestimonials from '@/components/careers/CareersTestimonials';
import CareersPerks from '@/components/careers/CareersPerks';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const Careers = () => {
  const { t } = useLanguage();
  
  // Custom FAQ items for Careers page
  const careersFaqs = [
    {
      question: "What is the hiring process like?",
      answer: "Our process typically includes an initial application review, a phone interview, a skills assessment or portfolio review, and a final team interview, taking 2-3 weeks in total."
    },
    {
      question: "Do you offer remote work options?",
      answer: "Yes, we operate with a hybrid model allowing for significant remote work flexibility combined with occasional in-person collaboration."
    },
    {
      question: "What training and development opportunities do you offer?",
      answer: "We provide a personal development budget, regular internal workshops, conference attendance, and mentorship programs to support continuous learning."
    },
    {
      question: "What benefits do you offer?",
      answer: "Our benefits include competitive salaries, flexible working hours, health insurance, retirement plans, continuous learning budgets, and team events."
    },
    {
      question: "What is your company culture like?",
      answer: "We foster a collaborative, innovative culture focused on results and continuous improvement, balancing professional excellence with work-life harmony."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <CareersHero />
      <CareersValues />
      <CareersPerks />
      <CareersOpenings />
      <CareersTestimonials />
      <FAQ customFaqs={careersFaqs} />
      <CTA 
        title="Join Our Team of Digital Experts"
        subtitle="Build your career in a supportive, innovative environment focused on results and growth."
        primaryCta="View Open Positions"
        secondaryCta="Learn About Our Culture"
      />
    </PageLayout>
  );
};

export default Careers;
