
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const buildOptions = [
  {
    title: "Custom Website Development",
    description: "Fully bespoke websites with unique design and functionality, built from scratch to meet specific business goals.",
    benefits: [
      "Completely unique design and functionality",
      "Maximum flexibility and control",
      "Optimized for performance and SEO",
      "Seamless integration with third-party tools",
      "Advanced interactions and animations"
    ],
    idealFor: "Businesses with specific functionality requirements, digital platforms, and companies with unique UX needs."
  },
  {
    title: "CMS-Based Website",
    description: "Professional sites built on WordPress or Webflow with customized templates for efficient, manageable websites.",
    benefits: [
      "More affordable than custom development",
      "Easy content management",
      "Quicker development timeline",
      "Still customized to your brand",
      "Regular updates and security"
    ],
    idealFor: "Small to mid-sized businesses, service providers, and companies needing regular content updates."
  }
];

const WebDesignBuildOptionsEN = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
            Which Build Option Is Right for You?
          </h2>
          <p className="text-xl text-brand-text">
            At ooliv advertising agency Mainz, we offer different development approaches based on your needs, timeline, and budget.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {buildOptions.map((option, index) => (
            <motion.div 
              key={index}
              className={cn(
                "bg-[#f7fafa] rounded-lg border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300",
                "flex flex-col"
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="p-8 flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-brand-heading">{option.title}</h3>
                <p className="mb-6 text-brand-text">{option.description}</p>
                
                <h4 className="text-md font-bold mb-3 text-brand-heading">Key Benefits:</h4>
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-[#004d51] mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-brand-text">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-[#e9efef] p-6">
                <h4 className="text-md font-bold mb-2 text-brand-heading">Ideal for:</h4>
                <p className="text-brand-text">{option.idealFor}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignBuildOptionsEN;
