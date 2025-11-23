import React from 'react';
import { LucideIcon } from 'lucide-react';
import { H3, Paragraph } from '@/components/ui/typography';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'large';
  index?: number;
  className?: string;
}

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  variant = 'default',
  index = 0,
  className 
}: FeatureCardProps) => {
  const iconSize = variant === 'large' ? 'w-16 h-16' : 'w-12 h-12';
  const iconInnerSize = variant === 'large' ? 'w-8 h-8' : 'w-6 h-6';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={cn(
        "bg-secondary rounded-lg p-8 text-center border border-border",
        className
      )}
    >
      <div className={cn(
        "flex items-center justify-center bg-primary/10 text-primary rounded-lg mx-auto mb-6",
        iconSize
      )}>
        <Icon className={iconInnerSize} />
      </div>
      <H3 className="mb-3">
        {title}
      </H3>
      <Paragraph color="secondary">
        {description}
      </Paragraph>
    </motion.div>
  );
};

export default FeatureCard;
