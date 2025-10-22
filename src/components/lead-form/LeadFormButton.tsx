import React from 'react';
import { cn } from '@/lib/utils';

interface LeadFormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const LeadFormButton = React.forwardRef<HTMLButtonElement, LeadFormButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50";
    
    const variantStyles = {
      primary: "bg-white text-black hover:bg-white/90 h-11 px-8",
      secondary: "bg-transparent text-white border-2 border-white hover:bg-white/20 h-11 px-8"
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

LeadFormButton.displayName = 'LeadFormButton';

export default LeadFormButton;
