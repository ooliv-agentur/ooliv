import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ 
  size = 'default', 
  className,
  children 
}) => {
  // Global container: 1240px max-width, 32px padding desktop, 16px mobile
  const sizeClass = {
    default: 'max-w-[1240px]',
    narrow: 'max-w-4xl',
    wide: 'max-w-[1400px]'
  }[size];
  
  return (
    <div className={cn(sizeClass, 'mx-auto px-4 lg:px-8', className)}>
      {children}
    </div>
  );
};
