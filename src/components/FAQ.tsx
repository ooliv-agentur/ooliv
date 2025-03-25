
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface FAQProps {
  customFaqs?: Array<{
    question: string;
    answer: string;
  }>;
}

const FAQ = ({ customFaqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const defaultFaqs = [
    {
      question: "What does ooliv do as a Web Design Agency?",
      answer: "We create strategy-led, conversion-focused websites for B2B companies — combining UX, SEO, design, and development in one streamlined process."
    },
    {
      question: "How long does a website project with ooliv take?",
      answer: "Most projects take 6–10 weeks, depending on scope. We define timelines clearly in the kickoff phase."
    },
    {
      question: "Will my website be optimized for SEO?",
      answer: "Yes. SEO strategy is integrated into every stage — from content to code."
    },
    {
      question: "Do I work with multiple people at ooliv?",
      answer: "No. All client communication runs through the CEO, while our team works behind the scenes."
    },
    {
      question: "What if I need a multilingual website?",
      answer: "We specialize in multilingual setups — content, design, and SEO are adapted for each language."
    },
    {
      question: "Does ooliv offer custom development?",
      answer: "Yes. We offer WordPress, Headless, and custom API-based solutions — tailored to your business."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Absolutely. We offer post-launch support, analytics, and continuous optimization."
    },
    {
      question: "What kind of companies do you work with?",
      answer: "Mostly B2B companies: tech, manufacturing, consulting, legal, and real estate."
    },
    {
      question: "Can you also help with content creation?",
      answer: "Yes — our team creates copy, visuals, video, and SEO content in-house, enhanced by AI tools."
    },
    {
      question: "What makes ooliv different from other agencies?",
      answer: "We work fast, strategic, and CEO-led — no middle layers, no slow handovers, just results."
    }
  ];

  // Use custom FAQs if provided, otherwise use the default FAQs
  const faqs = customFaqs || defaultFaqs;

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
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Common questions about our professional Webdesign Agency services and approach
          </p>
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
            Have more questions about our Webdesign Agency services? Contact Us →
          </Link>
        </div>

        <div className="fixed bottom-6 right-6 z-50">
          <button 
            className="bg-brand-primary text-brand-text p-4 rounded-full shadow-lg hover:bg-brand-primaryHover transition-colors"
            aria-label="Chat with our Webdesign Agency"
          >
            <MessageSquare className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
