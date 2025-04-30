
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "UX Research First",
    description: "Before we design, we research your users' needs, behavior, and goals to create interfaces that truly connect."
  },
  {
    title: "Strategic Information Architecture",
    description: "We organize your content to prioritize key information and guide visitors toward conversion goals."
  },
  {
    title: "Wireframes & Prototypes",
    description: "Testing interaction flows and layouts before final design ensures a smooth user journey and fewer revisions."
  }
];

const WebDesignStructureFirstEN = () => {
  return (
    <section className="py-24 bg-[#f7fafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Structure First, Visual Design Second
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-brand-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              At ooliv advertising agency Mainz, we don't just make pretty websites. We build strategic digital experiences that start with robust planning and information architecture.
            </motion.p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                >
                  <div className="mr-4 mt-1">
                    <div className="h-6 w-6 rounded-full bg-[#b1b497] flex items-center justify-center text-white font-medium">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-brand-heading">{feature.title}</h3>
                    <p className="text-brand-text">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/9295d42e-6141-4877-8671-1431a4640a5c.png" 
                alt="Web design planning process - ooliv advertising agency Mainz" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#b1b497]/20 rounded-full"></div>
            <div className="absolute -top-8 -right-8 w-16 h-16 bg-[#004d51]/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignStructureFirstEN;
