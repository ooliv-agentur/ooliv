import React from 'react';
import { motion } from 'framer-motion';
import { Star, Users, TrendingUp, Award } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from 'react-intersection-observer';
import { useCountUp } from '@/hooks/useCountUp';
import AnimatedCounter from './AnimatedCounter';

interface TrustMetric {
  icon?: 'star' | 'users' | 'trending' | 'award';
  value: string;
  label: string;
}

interface TrustIndicatorsProps {
  metrics?: TrustMetric[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
  logos?: {
    src: string;
    alt: string;
  }[];
  variant?: 'default' | 'minimal' | 'bordered';
  className?: string;
}

const iconMap = {
  star: Star,
  users: Users,
  trending: TrendingUp,
  award: Award,
};

const TrustIndicators = ({
  metrics = [
    { icon: 'award', value: '16+', label: 'Jahre Erfahrung' },
    { icon: 'users', value: '100+', label: 'Zufriedene Kunden' },
    { icon: 'star', value: '4.9/5', label: 'Kundenzufriedenheit' },
  ],
  testimonial,
  logos,
  variant = 'default',
  className = '',
}: TrustIndicatorsProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const containerClasses = cn(
    'py-8 sm:py-12',
    variant === 'bordered' && 'border-t border-border/50',
    variant === 'minimal' && 'py-6',
    className
  );

  // Intersection observer to trigger animation when in view
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className={containerClasses}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        {/* Metrics Grid */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon ? iconMap[metric.icon] : Award;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-3 p-3 rounded-full bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-colors duration-200">
                    <IconComponent className="w-6 h-6 text-accent-primary" strokeWidth={2} />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">
                    <AnimatedCounter value={metric.value} isInView={inView} />
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Testimonial Quote */}
        {testimonial && (
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center mb-8"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-2 text-6xl text-accent-primary/20 font-serif">
                "
              </div>
              <blockquote className="text-lg sm:text-xl text-muted-foreground italic mb-4 relative z-10">
                {testimonial.quote}
              </blockquote>
              <div className="text-sm sm:text-base">
                <span className="font-semibold text-foreground">{testimonial.author}</span>
                {testimonial.role && (
                  <span className="text-muted-foreground"> · {testimonial.role}</span>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Company Logos */}
        {logos && logos.length > 0 && (
          <motion.div variants={itemVariants} className="mt-8">
            <div className="text-center mb-6">
              <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                Vertrauen von führenden Unternehmen
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-60 hover:opacity-80 transition-opacity">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-8 sm:h-10 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TrustIndicators;
