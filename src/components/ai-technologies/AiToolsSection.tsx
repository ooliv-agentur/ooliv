
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

interface AiToolsSectionProps {
  title: string;
  subtitle: string;
  tools: {
    name: string;
    logoSrc: string;
    description: string;
  }[];
  note: string;
}

const AiToolsSection = ({ title, subtitle, tools, note }: AiToolsSectionProps) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-brand-heading">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <div className="h-full flex flex-col items-center justify-between p-6 w-full">
                <div className="flex items-center justify-center mb-5 h-24 w-full">
                  <img 
                    src={tool.logoSrc} 
                    alt={tool.name} 
                    className="max-h-full max-w-full object-contain" 
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 h-8">
                    {tool.name}
                  </h3>
                  <p className="text-gray-700">
                    {tool.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {note && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-6"
          >
            <p className="text-sm text-gray-600 max-w-4xl mx-auto">
              {note}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AiToolsSection;
