import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Stat {
  icon?: LucideIcon;
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  variant?: 'horizontal' | 'grid';
}

export const StatsBar: React.FC<StatsBarProps> = ({
  stats,
  variant = 'horizontal'
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  if (variant === 'grid') {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          
          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              {IconComponent && (
                <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg mx-auto mb-3">
                  <IconComponent className="w-6 h-6" />
                </div>
              )}
              <div className="text-3xl md:text-4xl font-bold text-[#0BC3C3] mb-2">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-[#0A0A0A]">
                {stat.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Horizontal variant
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        
        return (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-3"
          >
            {IconComponent && (
              <IconComponent className="w-6 h-6 text-[#0BC3C3] flex-shrink-0" />
            )}
            <div>
              <div className="text-2xl font-bold text-[#0BC3C3]">
                {stat.value}
              </div>
              <p className="text-sm font-medium text-[#0A0A0A]">
                {stat.label}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
