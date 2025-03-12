
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      question: "What services does ooliv offer as a digital agency?",
      answer: "We provide comprehensive web solutions, including: Website Relaunch & Redesign, SEO & Performance Optimization, Google Ads & Online Marketing, Branding & Corporate Design, and Full-Service Digital Strategy. We create future-proof, modern websites tailored to your brand with targeted campaigns for measurable success."
    },
    {
      question: "How long does it take to develop a website with ooliv?",
      answer: "The timeline depends on the project's complexity: Standard websites: 4-6 weeks, Larger corporate websites: 6-8 weeks, E-commerce platforms & complex integrations: 8+ weeks. We prioritize quality, performance, and user experience to deliver high-performing websites efficiently."
    },
    {
      question: "Why should I choose ooliv over other agencies?",
      answer: "We specialize in high-performance websites that drive business growth. Our clients choose us for our 16+ years of experience in digital strategy, web design & marketing, our full-service approach from concept to development to marketing, and our AI-powered efficiency with cutting-edge tools like ChatGPT-4, Midjourney, Sora AI, and Ahrefs & Google Ads. We also understand the needs of mid-sized businesses (KMUs)."
    },
    {
      question: "What are the benefits of Local SEO?",
      answer: "Local SEO ensures that your business is highly visible to customers in your region. You'll get higher rankings for local search queries, increased website traffic from nearby customers, and an optimized Google My Business profile helping you appear in Google Maps & search results. Our strategies have helped businesses achieve +45% visibility and double their local leads within six months."
    },
    {
      question: "What makes ooliv's website designs unique?",
      answer: "Our web design approach is customized, user-focused, and results-driven. We ensure that your website is visually impressive with professional, modern designs that represent your brand, SEO-optimized and built with best practices for high Google rankings, fast & responsive for all devices with lightning-fast performance, and easy to update using CMS solutions like WordPress, Webflow, and Shopify."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </h3>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
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
          <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors">
            Didn't Find Your Question? Contact Us →
          </button>
        </div>

        {/* Chat Support Icon */}
        <div className="fixed bottom-6 right-6 z-50">
          <button 
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
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
