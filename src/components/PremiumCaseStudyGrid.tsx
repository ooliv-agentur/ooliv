import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { caseStudiesData } from '@/components/CaseStudiesSection';

interface PremiumCaseStudyGridProps {
  title?: string;
  subtitle?: string;
}

const PremiumCaseStudyGrid = ({ 
  title = "Ausgewählte Projekte",
  subtitle = "Referenzen, die messbar mehr Leads generieren."
}: PremiumCaseStudyGridProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cases = caseStudiesData.de;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  return (
    <section id="premium-case-studies" className="py-24 bg-gradient-to-br from-background via-white to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cases.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`
                bg-white rounded-2xl p-8 border border-border
                hover:border-primary/30 hover:shadow-xl
                transition-all duration-300
                flex flex-col relative
                ${index === 4 ? 'lg:col-start-2' : ''}
              `}
            >
              {/* Key Metric Badge */}
              {study.keyMetric && (
                <div className="absolute top-4 right-4 bg-[#0BC3C3] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {study.keyMetric}
                </div>
              )}

              {/* Logo */}
              <div className="h-16 mb-6 flex items-center">
                <img 
                  src={study.logo} 
                  alt={`${study.client} logo`}
                  className="h-full w-auto object-contain"
                />
              </div>

              {/* Company & Industry */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {study.client}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {study.industry}
                </p>
              </div>

              {/* Outcome Description */}
              <p className="text-base text-foreground/80 mb-6 leading-relaxed">
                {study.headline}
              </p>

              {/* Key Bullets */}
              <div className="space-y-3 mb-8 flex-grow">
                {study.impact.slice(0, 3).map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Website Link */}
              <a
                href={study.websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group"
              >
                Website ansehen
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumCaseStudyGrid;
