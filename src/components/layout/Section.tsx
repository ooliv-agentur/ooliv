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
    light: 'bg-secondary/30 dark:bg-secondary/10',
    dark: 'bg-foreground dark:bg-card'
  }[background];
  
  const spacingClass = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24',
    large: 'py-24 md:py-32'
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
