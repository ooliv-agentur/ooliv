import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      question: "What industries does ooliv specialize in?",
      answer: "We focus exclusively on B2B clients, helping mid-sized companies, enterprises, and startups improve their digital presence. Our expertise covers industries like: IT & SaaS Solutions, Manufacturing & Engineering, Professional Services & Consulting, Finance & Legal, Real Estate & Construction."
    },
    {
      question: "What project management approach does ooliv use?",
      answer: "We use structured Agile & Scrum methodologies to ensure transparency and efficiency. This includes regular updates & feedback loops, dedicated project manager for every client, and Basecamp for seamless file sharing & communication."
    },
    {
      question: "How does ooliv integrate AI-powered tools into web design?",
      answer: "We leverage AI-driven technologies like ChatGPT-4 for content optimization & automation, Midjourney & Sora AI for AI-generated visuals & videos, and Ahrefs & SEMrush for advanced SEO & performance tracking."
    },
    {
      question: "What certifications & recognitions has ooliv received?",
      answer: "Our expertise has been recognized through Google Partner Certification, features in leading digital marketing publications, and strategic partnerships with major B2B brands."
    },
    {
      question: "Does ooliv provide long-term website maintenance?",
      answer: "Yes! We offer ongoing support & maintenance including regular security updates & performance monitoring, AI-powered analytics & tracking, and content updates & conversion optimization."
    },
    {
      question: "How does ooliv ensure SEO success?",
      answer: "We use data-driven SEO strategies that include technical SEO audits & speed optimization, AI-enhanced content strategy, and local & international SEO for B2B visibility."
    },
    {
      question: "What web technologies does ooliv use?",
      answer: "We build future-proof websites with Headless CMS (Strapi, Contentful) for flexibility, WordPress & Webflow for easy management, Shopify & WooCommerce for eCommerce, and React & Next.js for high-performance web applications."
    },
    {
      question: "How does ooliv improve lead generation through web design?",
      answer: "We implement conversion-driven strategies, including AI-powered forms & chatbots for higher engagement, heatmap & A/B testing to optimize conversions, and CRM & automation tools for lead nurturing."
    },
    {
      question: "How does web design impact brand strategy?",
      answer: "Your website is the digital foundation of your brand. We ensure strong brand consistency across design & messaging, strategic UX/UI design that reinforces credibility, and seamless integration with marketing automation tools."
    },
    {
      question: "Why choose ooliv over other web design agencies?",
      answer: "We specialize in B2B clients (not generic web design), offer AI-powered efficiency for smarter, faster results, take a strategic approach focusing on business growth, and build long-term partnerships, not just one-time projects."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            {t('faq.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border-b border-gray-200 pb-4 last:border-0 last:pb-0"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left py-4 px-0 focus:outline-none group"
              >
                <h3 className="text-lg font-medium text-brand-heading group-hover:text-brand-primary transition-colors">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-brand-primary" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-brand-primary transition-colors" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="pb-4 animate-fade-in">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Link to="/contact" className="text-brand-primary font-medium hover:text-brand-primaryHover transition-colors">
            Didn't Find Your Question? Contact Us →
          </Link>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <button 
            className="bg-brand-primary text-brand-text p-4 rounded-full shadow-lg hover:bg-brand-primaryHover transition-colors"
            aria-label="Chat support"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
