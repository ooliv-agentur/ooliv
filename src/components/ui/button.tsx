
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA - Teal background
        default: "bg-[#2DAEAA] text-white hover:bg-[#258A87] hover:scale-[1.02] rounded-[10px] font-medium shadow-sm",
        
        // Primary with enhanced styling
        primary: "bg-[#2DAEAA] text-white hover:bg-[#258A87] hover:scale-[1.02] rounded-[10px] font-medium shadow-sm",
        
        // Secondary CTA - Outline teal
        secondary: "bg-transparent border border-[#2DAEAA] text-[#2DAEAA] hover:bg-[#2DAEAA]/5 hover:scale-[1.02] rounded-[10px] font-medium",
        
        // Outline variant
        outline: "border border-[#2DAEAA] bg-transparent text-[#2DAEAA] hover:bg-[#2DAEAA]/5 hover:scale-[1.02] rounded-[10px] font-medium",
        
        // Ghost variant
        ghost: "hover:bg-[#F4F7F7] text-[#0D0D0D] rounded-[10px] font-medium",
        
        // Destructive variant
        destructive: "bg-red-500 text-white hover:bg-red-600 rounded-[10px] font-medium",
        
        // Link variant
        link: "text-[#2DAEAA] underline-offset-4 hover:underline font-medium",
        
        // Dark variant
        dark: "bg-[#0D0D0D] text-white hover:bg-[#0D0D0D]/90 hover:scale-[1.02] rounded-[10px] font-medium",
        
        // Light variant
        light: "bg-white text-[#0D0D0D] hover:bg-[#F4F7F7] rounded-[10px] font-medium border border-[#e5e5e5]",
        
        // Floating action button variant
        floating: "bg-[#2DAEAA] text-white hover:bg-[#258A87] hover:scale-[1.02] rounded-full font-medium shadow-md",
        
        // Outline with teal border
        outlineTurquoise: "border border-[#2DAEAA] bg-white text-[#2DAEAA] hover:bg-[#2DAEAA]/5 hover:scale-[1.02] rounded-[10px] font-medium"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "px-7 py-[14px]",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-11 w-11",
        iconSm: "h-9 w-9",
        iconLg: "h-12 w-12",
        floating: "h-14 w-14 rounded-full p-4"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
