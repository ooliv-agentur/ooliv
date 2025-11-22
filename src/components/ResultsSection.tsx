import React from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const ResultsSection = () => {
  const handleCTA = () => {
    window.dispatchEvent(new CustomEvent('open-lead-form', { 
      detail: { source: 'ResultsSection', variant: 'project' } 
    }));
  };

  const metrics = [
    { label: "+300% Anfragen", highlight: true },
    { label: "Bounce Rate –45%", highlight: true },
    { label: "Klare Struktur", highlight: false },
    { label: "Bessere UX", highlight: false },
    { label: "Höhere Sichtbarkeit", highlight: false }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
            Ergebnisse sprechen für sich.
          </h2>
          
          {/* Metric Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {metrics.map((metric, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
                  inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                  ${metric.highlight 
                    ? 'bg-[#2DAEAA] text-white' 
                    : 'bg-[#F7F8FC] text-[#666666] border border-[#E5E5E5]'
                  }
                `}
              >
                {metric.label}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Before/After Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <BeforeAfterSlider />
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-6"
        >
          <p className="text-[#666666] text-base sm:text-lg">
            Weitere Beispiele gerne auf Anfrage – <a href="mailto:info@ooliv.de" className="text-[#2DAEAA] hover:underline font-medium">info@ooliv.de</a>
          </p>
          
          <Button 
            variant="default"
            size="lg" 
            className="group text-base sm:text-lg px-8 py-6 h-auto"
            onClick={handleCTA}
            aria-label="Projekt starten"
          >
            Projekt starten
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ResultsSection;
