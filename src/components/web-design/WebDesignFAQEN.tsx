
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How long does it take to design and build a website?",
    answer: "Project timelines vary based on complexity and scope. A typical brochure website takes 6-8 weeks, while more complex sites with custom functionality may take 12-16 weeks. During our initial consultation, we'll provide a specific timeline for your project."
  },
  {
    question: "How much does a website cost?",
    answer: "Website costs depend on your specific needs, functionality requirements, and content scope. Simple brochure sites typically start from €5,000, while more complex sites with custom development start from €10,000. We provide detailed proposals after understanding your requirements."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes, we offer various maintenance packages to keep your site secure, updated, and performing optimally. These include regular updates, security monitoring, backups, technical support, and performance optimization."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. All websites we design follow responsive design principles and are thoroughly tested across devices of all sizes. Mobile optimization is a standard part of our process, not an optional extra."
  },
  {
    question: "Can you help with content creation for my website?",
    answer: "Yes, our team includes professional copywriters who can create strategic, SEO-optimized content for your website. We also offer photography, video, and graphic design services to help with visual content needs."
  },
  {
    question: "Do you optimize websites for search engines (SEO)?",
    answer: "Yes. Every website we build includes on-page SEO best practices, proper heading structure, optimized metadata, semantic markup, and performance optimization. We also offer comprehensive SEO strategies beyond the basic foundation."
  }
];

const WebDesignFAQEN = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-brand-text">
            Everything you need to know about our web design services at ooliv advertising agency Mainz.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium py-5 text-brand-heading hover:text-[#004d51] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-brand-text">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default WebDesignFAQEN;
