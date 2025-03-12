
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Why choose ooliv?",
      answer: "We combine AI-powered efficiency with 16+ years of industry experience to deliver full-service web solutions that drive measurable business growth. Our approach focuses on performance, aesthetics, and conversion optimization."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "Standard websites typically take 4-6 weeks from concept to launch. More complex projects with custom functionality or e-commerce capabilities may require 8+ weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What AI tools do you use in your web development?",
      answer: "We leverage cutting-edge AI technologies including ChatGPT-4 for content creation, Midjourney for unique image generation, and Sora AI for video production. These tools enhance efficiency while maintaining quality and personalization."
    },
    {
      question: "Can I update my website easily after it's built?",
      answer: "Absolutely! We build our sites on user-friendly platforms like WordPress, Webflow, or Shopify, depending on your specific needs. We'll provide training so your team can make routine updates, while we're always available for more complex changes."
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
            Frequently Asked Questions
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
