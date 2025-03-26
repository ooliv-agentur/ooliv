
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

const AiToolsSection = ({ title, subtitle, tools = [], note }: AiToolsSectionProps) => {
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
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {Array.isArray(tools) && tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <img src={tool.logoSrc} alt={tool.name} className="h-20 w-20 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                  <p className="text-gray-700">{tool.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 italic max-w-3xl mx-auto">{note}</p>
        </div>
      </div>
    </section>
  );
};

export default AiToolsSection;
