import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ProcessStep {
  number?: number;
  icon?: LucideIcon;
  title: string;
  description: string;
  duration?: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
  variant?: 'horizontal' | 'vertical';
  showNumbers?: boolean;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({
  steps,
  variant = 'horizontal',
  showNumbers = true
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  if (variant === 'vertical') {
    return (
      <div className="space-y-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex gap-6"
            >
              {/* Timeline Indicator */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-[#0BC3C3] text-white rounded-full font-bold text-lg flex-shrink-0">
                  {showNumbers ? (step.number || index + 1) : (
                    IconComponent && <IconComponent className="w-6 h-6" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-full bg-[#E5E8E8] mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A]">
                    {step.title}
                  </h3>
                  {step.duration && (
                    <span className="text-sm text-[#0BC3C3] font-semibold">
                      {step.duration}
                    </span>
                  )}
                </div>
                <p className="text-base text-[#555555]">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {steps.map((step, index) => {
        const IconComponent = step.icon;
        
        return (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-8 h-0.5 bg-[#E5E8E8]"></div>
            )}

            {/* Step Number/Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-[#0BC3C3] text-white rounded-full font-bold text-lg mb-4">
              {showNumbers ? (step.number || index + 1) : (
                IconComponent && <IconComponent className="w-6 h-6" />
              )}
            </div>

            {/* Content */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-base sm:text-lg font-bold text-[#0A0A0A]">
                {step.title}
              </h3>
              {step.duration && (
                <span className="text-xs text-[#0BC3C3] font-semibold">
                  {step.duration}
                </span>
              )}
            </div>
            <p className="text-sm text-[#555555]">
              {step.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};
