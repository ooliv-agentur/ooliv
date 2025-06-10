
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import AiTechHero from '@/components/ai-technologies/AiTechHero';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import ClientLogos from '@/components/ClientLogos';

const EnglishAiTechnologies = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  const aiFaqs = [
    {
      question: "How can AI improve our business processes?",
      answer: "AI can automate repetitive tasks, improve content creation, enhance customer service through chatbots, optimize marketing campaigns, and provide data-driven insights. We assess your specific needs and implement AI solutions that deliver measurable efficiency gains."
    },
    {
      question: "What AI tools do you work with?",
      answer: "We work with leading AI platforms including ChatGPT, Claude, Google AI, Microsoft Copilot, and specialized tools for content creation, data analysis, and workflow automation. We select the best tools based on your specific requirements."
    },
    {
      question: "Is our data secure when using AI tools?",
      answer: "Yes, data security is our top priority. We only work with enterprise-grade AI platforms that meet strict security standards, implement proper data handling protocols, and ensure your sensitive information remains protected."
    },
    {
      question: "How do you measure the ROI of AI implementation?",
      answer: "We track metrics such as time savings, cost reduction, productivity improvements, quality enhancements, and revenue impact. We establish clear benchmarks before implementation and provide regular reports showing the measurable benefits."
    },
    {
      question: "Do you provide AI training for our team?",
      answer: "Absolutely! We offer comprehensive training programs to help your team effectively use AI tools and integrate them into daily workflows. This includes workshops, documentation, and ongoing support to maximize adoption and results."
    }
  ];

  return (
    <PageLayout>
      <Helmet>
        <title>AI Agency Mainz – Future Technologies</title>
        <meta name="description" content="As an AI agency in Mainz, we use cutting-edge technologies for individual solutions. We increase your efficiency and competitiveness." />
        <meta name="keywords" content="AI Agency Mainz, Artificial Intelligence Mainz, AI Solutions, Machine Learning Mainz, AI Consulting" />
        <meta name="focus-keyword" content="AI Agency Mainz" />
      </Helmet>
      
      <AiTechHero />
      
      <FAQ 
        customFaqs={aiFaqs}
        customTitle="Frequently Asked Questions About AI Technologies"
        customCtaText="More AI questions? Contact us"
      />
      
      <CTA 
        title="Ready to leverage AI for your business?"
        subtitle="Let's explore how artificial intelligence can transform your workflows and drive efficiency."
        primaryCta="Request AI Analysis"
        secondaryCta="AI Strategy Consultation"
      />
      
      <ClientLogos />
    </PageLayout>
  );
};

export default EnglishAiTechnologies;
