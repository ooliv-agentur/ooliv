import React from 'react';
import { LucideIcon } from 'lucide-react';
import { H3, Paragraph, Caption } from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  price?: string;
  features?: string[];
  icon?: LucideIcon;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  price,
  features = [],
  icon: Icon,
  ctaText,
  ctaLink,
  onCtaClick,
  className
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "bg-secondary rounded-lg p-8 border border-border flex flex-col h-full",
        className
      )}
    >
      {Icon && (
        <div className="flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-6">
          <Icon className="w-6 h-6" />
        </div>
      )}
      
      <H3 className="mb-3">
        {title}
      </H3>
      
      <Paragraph color="secondary" className="mb-4">
        {description}
      </Paragraph>
      
      {price && (
        <Caption className="text-primary font-bold mb-4">
          {price}
        </Caption>
      )}
      
      {features.length > 0 && (
        <ul className="space-y-2 mb-6 flex-grow">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
              <Paragraph className="text-sm">
                {feature}
              </Paragraph>
            </li>
          ))}
        </ul>
      )}
      
      {(ctaText || ctaLink) && (
        <Button 
          variant="outline" 
          className="w-full"
          onClick={onCtaClick}
          asChild={!!ctaLink}
        >
          {ctaLink ? (
            <a href={ctaLink}>{ctaText}</a>
          ) : (
            ctaText
          )}
        </Button>
      )}
    </div>
  );
};

export default ServiceCard;
