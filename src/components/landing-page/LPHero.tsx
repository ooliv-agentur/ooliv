import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface LPHeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  benefits?: string[];
}

const LPHero: React.FC<LPHeroProps> = ({
  headline,
  subheadline,
  ctaText = "Jetzt kostenloses Erstgespräch buchen",
  benefits = []
}) => {
  const handleCTAClick = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-medico-turquoise/5 via-background to-medico-turquoise/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-medico-darkGreen mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {headline}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subheadline}
          </motion.p>

          {benefits.length > 0 && (
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-medico-turquoise/20"
                >
                  <div className="w-2 h-2 bg-medico-turquoise rounded-full"></div>
                  <span className="text-sm font-semibold text-medico-darkGreen">{benefit}</span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={handleCTAClick}
              size="lg"
              className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white font-bold text-lg px-8 py-6 h-auto"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Keine Agentur-Fließband-Betreuung ✓ Direkter Draht zu Uli ✓ 15+ Jahre Erfahrung
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LPHero;
