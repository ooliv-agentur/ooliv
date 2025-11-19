import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface LPFinalCTAProps {
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  benefits?: string[];
}

const LPFinalCTA: React.FC<LPFinalCTAProps> = ({
  headline = "Bereit durchzustarten?",
  subheadline = "Buchen Sie jetzt Ihr kostenloses Erstgespräch und lassen Sie uns über Ihre Ziele sprechen.",
  ctaText = "Jetzt Erstgespräch buchen",
  benefits = [
    "30-minütiges Strategiegespräch",
    "Konkrete Handlungsempfehlungen",
    "Unverbindlich & kostenfrei"
  ]
}) => {
  const handleCTAClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-medico-turquoise via-medico-turquoise to-medico-turquoise/90 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {headline}
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90">
            {subheadline}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <CheckCircle2 className="w-5 h-5" />
                <span className="font-semibold">{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-white text-medico-turquoise hover:bg-white/90 font-bold text-lg px-10 py-7 h-auto shadow-2xl hover:scale-105 transition-transform"
          >
            {ctaText}
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>

          <p className="text-sm text-white/80 mt-6">
            Über 100 Unternehmen vertrauen bereits auf meine Expertise
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LPFinalCTA;
