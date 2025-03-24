
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebDevFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What CMS options do you offer?",
      answer: "We work with a variety of content management systems including WordPress, Shopify, and headless CMS solutions like Strapi and Contentful. We'll recommend the best option based on your specific needs, workflow requirements, and growth plans."
    },
    {
      question: "What's the difference between custom and template-based development?",
      answer: "Template-based development uses pre-designed themes that are customized to your brand, which can be cost-effective for certain projects. Custom development builds your site entirely from scratch, giving you complete control over functionality, user experience, and scalability—ideal for businesses with specific workflows or unique requirements."
    },
    {
      question: "Can you maintain or optimize an existing WordPress site?",
      answer: "Absolutely! We offer WordPress maintenance, optimization, and redesign services. We'll audit your existing site, identify improvement opportunities, and implement changes that enhance performance, security, and user experience while preserving your content and SEO value."
    },
    {
      question: "Do you offer Shopify-only development support?",
      answer: "Yes, we provide specialized Shopify development services including theme customization, app integration, performance optimization, and custom functionality development. Whether you're starting a new store or enhancing an existing one, our Shopify experts can help."
    },
    {
      question: "How long does web development typically take?",
      answer: "Development timelines vary based on project complexity. A standard WordPress or Shopify site typically takes 6-8 weeks from concept to launch. Custom web applications may take 3-6 months depending on functionality requirements. We'll provide a detailed timeline during our initial planning phase."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <Link to="/contact" className="text-brand-primary font-medium hover:text-brand-primaryHover transition-colors">
            Have more questions about our web development services? Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WebDevFAQ;
