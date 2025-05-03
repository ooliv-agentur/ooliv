
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { language } = useLanguage();

  // Use the faqs passed from the page component or use default ones
  const faqs = [
    {
      question: "Which platforms do you work with?",
      answer: "We develop fully coded websites (without CMS) and custom WordPress solutions - depending on what better suits your business."
    },
    {
      question: "Can ooliv develop e-commerce shops?",
      answer: "Yes - WooCommerce within WordPress or Shopify for targeted B2B cases."
    },
    {
      question: "Is performance a standard?",
      answer: "Absolutely. Our pages are fast, SEO-optimized and run reliably on all devices."
    },
    {
      question: "Is there support after launch?",
      answer: "Yes. We continue to support you with technical assistance, updates and tracking."
    },
    {
      question: "Can you improve existing websites?",
      answer: "Yes. We analyze whether optimization makes sense - or if a relaunch would be more efficient."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const contactPath = language === 'de' ? "/kontakt" : "/en/contact";

  return (
    <section className="py-20 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-brand-text">
            Common questions about our web development services and approach
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
          <Link to={contactPath} className="text-brand-primary font-medium hover:text-brand-primaryHover transition-colors">
            Have more questions about our web development services? Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevFAQ;
