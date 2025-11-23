import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  background?: 'white' | 'light' | 'dark';
  spacing?: 'small' | 'medium' | 'large';
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  background = 'white', 
  spacing = 'medium', 
  className,
  children 
}) => {
  const bgClass = {
    white: 'bg-background',
    light: 'bg-secondary',
    dark: 'bg-foreground'
  }[background];
  
  // Global spacing: 120px desktop, 64px mobile
  const spacingClass = {
    small: 'py-16 md:py-20',
    medium: 'py-20 md:py-24 lg:py-[120px]',
    large: 'py-24 md:py-28 lg:py-[120px]'
  }[spacing];
  
  return (
    <section 
      id={id} 
      className={cn(bgClass, spacingClass, className)}
    >
      {children}
    </section>
  );
};
