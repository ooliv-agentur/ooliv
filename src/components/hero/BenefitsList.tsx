import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitsListProps {
  benefits: string[];
  prefix?: string;
  className?: string;
}

const BenefitsList = ({ benefits, prefix, className = "" }: BenefitsListProps) => {
  // Animation variants for staggered fade-in
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

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`text-left ${className}`}>
      {prefix && (
        <h3 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
          {prefix}
        </h3>
      )}
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-3 group"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0 mt-1">
              <CheckCircle2 
                className="w-6 h-6 text-accent-primary transition-transform duration-200 group-hover:scale-110" 
                strokeWidth={2.5}
              />
            </div>
            <p className="text-base sm:text-lg font-medium text-foreground leading-relaxed">
              {benefit}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BenefitsList;
