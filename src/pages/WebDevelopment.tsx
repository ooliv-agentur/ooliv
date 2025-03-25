
import React from 'react';
import PageLayout from '@/components/PageLayout';
import WebDevHero from '@/components/web-development/WebDevHero';
import WebDevBenefits from '@/components/web-development/WebDevBenefits';
import WebDevServices from '@/components/web-development/WebDevServices';
import WebDevProcess from '@/components/web-development/WebDevProcess';
import WebDevCaseStudies from '@/components/web-development/WebDevCaseStudies';
import WebDevCTA from '@/components/web-development/WebDevCTA';
import FAQ from '@/components/FAQ';

const webDevFaqs = [
  {
    question: "What technologies do you use for development?",
    answer: "We primarily work with WordPress, WooCommerce, Headless (e.g. Next.js), and Shopify (select projects)."
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes. We offer ongoing technical support, maintenance, and optimization services post-launch."
  },
  {
    question: "Can you build custom features without plugins?",
    answer: "Absolutely. We prefer writing clean custom code rather than relying on heavy plugins that slow down your site."
  },
  {
    question: "Do you work with Headless CMS setups?",
    answer: "Yes, we specialize in Headless architecture using modern frameworks like Next.js paired with various CMS solutions."
  },
  {
    question: "What's the best setup for scaling internationally?",
    answer: "For international scaling, we recommend either WordPress multisite with WPML or a Headless approach with localization support, depending on your specific requirements."
  },
  {
    question: "How do you ensure fast loading and SEO readiness?",
    answer: "We implement technical SEO best practices from the ground up, including optimized asset loading, proper schema markup, and adherence to Core Web Vitals standards."
  }
];

const WebDevelopment = () => {
  return (
    <PageLayout className="overflow-x-hidden">
      <WebDevHero />
      <WebDevBenefits />
      <WebDevServices />
      <WebDevProcess />
      <WebDevCaseStudies />
      <FAQ customFaqs={webDevFaqs} />
      <WebDevCTA />
    </PageLayout>
  );
};

export default WebDevelopment;
