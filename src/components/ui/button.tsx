
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-satoshi",
  {
    variants: {
      variant: {
        default: "bg-primary-yellow text-primary-darkgreen hover:bg-tertiary-lightyellow hover:shadow-lg font-bold border-2 border-transparent hover:border-primary-darkgreen/20",
        destructive: "bg-red-500 text-white hover:bg-red-600 border-2 border-transparent",
        outline: "border-2 border-primary-darkgreen bg-secondary-white text-primary-darkgreen hover:bg-primary-mintgreen hover:border-secondary-lightblue hover:text-primary-darkgreen",
        secondary: "bg-secondary-lightblue text-primary-darkgreen hover:bg-tertiary-pastelgreen hover:shadow-lg border-2 border-transparent hover:border-primary-darkgreen/20",
        ghost: "hover:bg-primary-mintgreen hover:text-primary-darkgreen border-2 border-transparent hover:border-primary-mintgreen",
        link: "text-primary-darkgreen underline-offset-4 hover:underline hover:text-secondary-lightblue",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base font-bold",
        icon: "h-11 w-11",
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
