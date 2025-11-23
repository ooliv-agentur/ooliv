import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface BenefitsCardsProps {
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
  variant?: 'icon-top' | 'icon-side';
  background?: 'white' | 'light';
}

export const BenefitsCards: React.FC<BenefitsCardsProps> = ({
  benefits,
  columns = 4,
  variant = 'icon-top',
  background = 'white'
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  }[columns];

  const bgColor = background === 'light' ? 'bg-[#F5F7F7]' : 'bg-white';

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className={`grid gap-4 sm:gap-6 ${gridCols}`}>
      {benefits.map((benefit, index) => {
        const IconComponent = benefit.icon;
        
        return (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`${bgColor} rounded-lg p-4 sm:p-6 border border-[#E5E8E8] shadow-sm hover:shadow-md transition-all`}
          >
            {variant === 'icon-top' ? (
              <>
                <div className="flex items-center justify-center w-12 h-12 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg mb-4">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#555555]">
                  {benefit.description}
                </p>
              </>
            ) : (
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 bg-[#E0FBFA] text-[#0BC3C3] rounded-lg flex-shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-[#0A0A0A] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#555555]">
                    {benefit.description}
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
