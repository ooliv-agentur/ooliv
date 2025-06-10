
import React from 'react';
import { LucideIcon, LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Icon variant definitions
const iconVariants = cva(
  "inline-flex items-center justify-center transition-colors",
  {
    variants: {
      variant: {
        default: "",
        round: "rounded-full",
        square: "rounded-none",
        rounded: "rounded-lg",
      },
      size: {
        xs: "h-3 w-3",
        sm: "h-4 w-4", 
        default: "h-5 w-5",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
        "2xl": "h-12 w-12",
      },
      background: {
        none: "",
        light: "bg-medico-mint/20 p-2",
        medium: "bg-medico-mint/40 p-2",
        strong: "bg-medico-turquoise/20 p-2",
        accent: "bg-medico-turquoise p-2 text-white",
      }
    },
    defaultVariants: {
      variant: "round",
      size: "default",
      background: "none",
    },
  }
);

export interface IconProps 
  extends Omit<LucideProps, 'size'>,
    VariantProps<typeof iconVariants> {
  icon: LucideIcon;
  className?: string;
}

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ icon: IconComponent, variant, size, background, className, ...props }, ref) => {
    const hasBackground = background && background !== "none";
    
    if (hasBackground) {
      return (
        <div className={cn(iconVariants({ variant, size: "default", background }), className)}>
          <IconComponent 
            ref={ref}
            className={cn(iconVariants({ size }))}
            {...props} 
          />
        </div>
      );
    }

    return (
      <IconComponent 
        ref={ref}
        className={cn(iconVariants({ variant, size, background }), className)}
        {...props} 
      />
    );
  }
);

Icon.displayName = "Icon";

export { Icon, iconVariants };
