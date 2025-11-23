import React from 'react';
import { LucideIcon } from 'lucide-react';
import { H3, Paragraph } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface StatCardProps {
  metric: string;
  description: string;
  icon?: LucideIcon;
  index?: number;
  className?: string;
}

const StatCard = ({ 
  metric, 
  description, 
  icon: Icon,
  index = 0,
  className 
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "bg-secondary rounded-lg p-6 text-center border border-border",
        className
      )}
    >
      {Icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mx-auto mb-4">
          <Icon className="w-6 h-6" />
        </div>
      )}
      <H3 className="mb-2 text-primary">
        {metric}
      </H3>
      <Paragraph color="secondary" className="text-sm">
        {description}
      </Paragraph>
    </motion.div>
  );
};

export default StatCard;
