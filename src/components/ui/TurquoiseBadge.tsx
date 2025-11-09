import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TurquoiseBadgeProps {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  variant?: 'solid' | 'outline' | 'soft' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const TurquoiseBadge = ({
  children,
  className,
  icon: Icon,
  iconPosition = 'left',
  variant = 'soft',
  size = 'md'
}: TurquoiseBadgeProps) => {
  const baseClasses = "inline-flex items-center gap-1.5 font-medium rounded-full transition-all";
  
  const variantClasses = {
    solid: "bg-turquoise text-white hover:bg-turquoise-hover",
    outline: "bg-transparent border-2 border-turquoise text-turquoise hover:bg-turquoise/10",
    soft: "bg-turquoise/10 text-turquoise-800 hover:bg-turquoise/20",
    ghost: "bg-transparent text-turquoise hover:bg-turquoise/10"
  };
  
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base"
  };
  
  const iconSizeClasses = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  };
  
  return (
    <span className={cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    )}>
      {Icon && iconPosition === 'left' && (
        <Icon className={iconSizeClasses[size]} />
      )}
      
      {children}
      
      {Icon && iconPosition === 'right' && (
        <Icon className={iconSizeClasses[size]} />
      )}
    </span>
  );
};

export default TurquoiseBadge;
