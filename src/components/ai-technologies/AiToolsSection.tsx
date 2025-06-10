
import React from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';

interface AiTool {
  name: string;
  logoSrc: string;
  description: string;
}

interface AiToolsSectionProps {
  title: string;
  subtitle: string;
  tools: AiTool[];
  note: string;
}

const AiToolsSection = ({ title, subtitle, tools, note }: AiToolsSectionProps) => {
  const { language } = useLanguage();
  
  return (
    <section className="py-16 bg-white font-satoshi">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen">
            {title}
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-medico-mint rounded-full flex items-center justify-center p-3">
                      <img 
                        src={tool.logoSrc} 
                        alt={`${tool.name} Logo`}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-center text-medico-darkGreen">
                    {tool.name}
                  </h3>
                  <p className="text-gray-700 text-center flex-grow leading-relaxed">
                    {tool.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-600 italic max-w-4xl mx-auto leading-relaxed">
            {note}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AiToolsSection;
