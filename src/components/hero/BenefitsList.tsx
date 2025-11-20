import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// Background style variants
const benefitsContainerVariants = cva(
  "relative rounded-2xl p-6 sm:p-8",
  {
    variants: {
      variant: {
        gradient: "bg-gradient-to-br from-accent-primary/5 via-background/50 to-medico-turquoise/5 border border-border/50 backdrop-blur-sm shadow-sm",
        solid: "bg-accent/5 border border-border shadow-sm",
        pattern: "bg-gradient-to-br from-accent-primary/5 via-background/50 to-medico-turquoise/5 border border-border/50 backdrop-blur-sm shadow-sm",
        none: "",
      },
    },
    defaultVariants: {
      variant: "gradient",
    },
  }
);

interface BenefitsListProps extends VariantProps<typeof benefitsContainerVariants> {
  benefits: string[];
  prefix?: string;
  className?: string;
}

const BenefitsList = ({ benefits, prefix, variant, className = "" }: BenefitsListProps) => {
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

  // Show pattern overlay only for "pattern" variant
  const showPattern = variant === "pattern";

  return (
    <div className={cn("text-left", className)}>
      <div className={cn(benefitsContainerVariants({ variant }))}>
        {/* Subtle pattern overlay - only for "pattern" variant */}
        {showPattern && (
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        )}
        
        <div className={cn("relative", variant !== "none" && "z-10")}>
          {prefix && (
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6">
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
      </div>
    </div>
  );
};

export default BenefitsList;
