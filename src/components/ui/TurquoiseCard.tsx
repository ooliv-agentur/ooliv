import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TurquoiseCardProps {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconClassName?: string;
  number?: string | number;
  numberClassName?: string;
  hoverLift?: boolean;
  variant?: 'default' | 'soft' | 'large';
}

const TurquoiseCard = ({
  children,
  className,
  icon: Icon,
  iconClassName,
  number,
  numberClassName,
  hoverLift = false,
  variant = 'default'
}: TurquoiseCardProps) => {
  const baseClasses = "bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all";
  
  const variantClasses = {
    default: "p-6",
    soft: "p-8",
    large: "p-10"
  };
  
  const hoverLiftClass = hoverLift ? "hover:-translate-y-1" : "";
  
  return (
    <div className={cn(
      baseClasses,
      variantClasses[variant],
      hoverLiftClass,
      className
    )}>
      {Icon && (
        <Icon className={cn("w-12 h-12 mb-4 text-turquoise", iconClassName)} />
      )}
      
      {number !== undefined && (
        <div className={cn("text-5xl font-bold mb-4 text-turquoise", numberClassName)}>
          {number}
        </div>
      )}
      
      {children}
    </div>
  );
};

export default TurquoiseCard;
