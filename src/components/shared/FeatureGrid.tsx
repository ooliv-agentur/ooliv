import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description?: string;
  keywords?: string;
  items?: string[];
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
  showCheckmarks?: boolean;
  variant?: 'default' | 'compact' | 'detailed';
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  columns = 3,
  showCheckmarks = false,
  variant = 'default'
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${gridCols}`}>
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        
        return (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-lg p-4 sm:p-6 lg:p-8 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Icon & Title */}
            <div className={variant === 'detailed' ? 'flex items-center gap-4 mb-4' : 'mb-6'}>
              <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg">
                <IconComponent className="w-6 h-6" />
              </div>
              {variant === 'detailed' && (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-1">
                    {feature.title}
                  </h3>
                  {feature.keywords && (
                    <p className="text-xs text-[#0BC3C3] font-semibold">
                      {feature.keywords}
                    </p>
                  )}
                </div>
              )}
            </div>

            {variant !== 'detailed' && (
              <h3 className="text-lg sm:text-xl font-bold text-[#0A0A0A] mb-3">
                {feature.title}
              </h3>
            )}

            {/* Description */}
            {feature.description && (
              <p className="text-base text-[#555555] mb-4">
                {feature.description}
              </p>
            )}

            {/* Items List */}
            {feature.items && (
              <div className="space-y-3">
                {feature.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {showCheckmarks ? (
                      <CheckCircle2 className="w-5 h-5 text-[#0BC3C3] flex-shrink-0 mt-0.5" />
                    ) : (
                      <span className="text-[#0BC3C3] font-bold">•</span>
                    )}
                    <p className="text-base text-[#555555]">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
