
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDesignHero from '@/components/web-design/WebDesignHero';
import WebDesignBenefits from '@/components/web-design/WebDesignBenefits';
import WebDesignServices from '@/components/web-design/WebDesignServices';
import WebDesignProcess from '@/components/web-design/WebDesignProcess';
import WebDesignCaseStudies from '@/components/web-design/WebDesignCaseStudies';
import { useLanguage } from '@/contexts/LanguageContext';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

const WebDesign = () => {
  const { t } = useLanguage();
  
  // Add any custom FAQ items if needed
  const webDesignFaqs = [
    {
      question: "What design principles do you follow?",
      answer: "We follow modern, user-centered design principles with a focus on conversion optimization and brand consistency."
    },
    {
      question: "Do you customize designs for each project?",
      answer: "Yes, every design is custom-crafted based on your brand identity, business goals, and target audience needs."
    },
    {
      question: "How do you ensure mobile responsiveness?",
      answer: "We design with a mobile-first approach, ensuring perfect functionality and appearance across all device sizes."
    },
    {
      question: "What design deliverables can I expect?",
      answer: "You'll receive complete design files, style guides, UI component libraries, and all assets optimized for web use."
    },
    {
      question: "How many design revisions are included?",
      answer: "Our standard packages include up to three revision rounds to ensure your complete satisfaction with the final design."
    }
  ];
  
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDesignHero />
      <WebDesignBenefits />
      <WebDesignServices />
      <WebDesignProcess />
      <WebDesignCaseStudies />
      <FAQ customFaqs={webDesignFaqs} />
      <CTA 
        title="Let's Create A Website Design That Drives Results"
        subtitle="From brand identity to UI/UX design, we build websites that look great and perform even better."
        primaryCta="Start Your Design Project"
        secondaryCta="See Our Portfolio"
      />
    </PageLayout>
  );
};

export default WebDesign;
