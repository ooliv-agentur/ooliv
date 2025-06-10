
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-satoshi",
  {
    variants: {
      variant: {
        // Primary yellow variant - main CTA button
        default: "bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 hover:shadow-lg font-bold border-2 border-transparent hover:border-medico-darkGreen/20",
        
        // Primary yellow with enhanced styling for major CTAs
        primary: "bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 hover:shadow-xl font-bold border-2 border-transparent hover:border-medico-darkGreen/20 transform hover:scale-105",
        
        // Secondary turquoise variant
        secondary: "bg-medico-turquoise text-white hover:bg-teal-600 hover:shadow-lg border-2 border-transparent hover:border-medico-darkGreen/20 font-semibold",
        
        // Outline variant for secondary actions
        outline: "border-2 border-medico-darkGreen bg-white text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise hover:text-medico-darkGreen font-semibold",
        
        // Outline with turquoise border
        outlineTurquoise: "border-2 border-medico-turquoise bg-white text-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise hover:text-medico-darkGreen font-semibold",
        
        // Ghost variant for subtle actions
        ghost: "hover:bg-medico-mint hover:text-medico-darkGreen border-2 border-transparent hover:border-medico-mint text-medico-darkGreen font-medium",
        
        // Destructive variant
        destructive: "bg-red-500 text-white hover:bg-red-600 border-2 border-transparent font-semibold",
        
        // Link variant
        link: "text-medico-darkGreen underline-offset-4 hover:underline hover:text-medico-turquoise font-medium",
        
        // Dark variant for use on light backgrounds
        dark: "bg-medico-darkGreen text-white hover:bg-medico-darkGreen/90 hover:shadow-lg border-2 border-transparent font-semibold",
        
        // Light variant for use on dark backgrounds  
        light: "bg-white text-medico-darkGreen hover:bg-medico-mint hover:shadow-lg border-2 border-transparent hover:border-medico-turquoise font-semibold",
        
        // Special variant for floating action buttons
        floating: "bg-medico-yellow text-medico-darkGreen hover:bg-yellow-400 hover:shadow-lg border-none font-semibold transform hover:scale-105 shadow-md",
        
        // Minimal variant for navigation back buttons
        minimal: "bg-white text-medico-darkGreen border-2 border-medico-darkGreen hover:bg-medico-mint hover:border-medico-turquoise hover:text-medico-darkGreen font-semibold"
      },
      size: {
        sm: "h-9 px-4 text-sm",
        default: "h-11 px-6 py-2",
        lg: "h-12 px-8 text-base font-bold",
        xl: "h-14 px-10 text-lg font-bold",
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
