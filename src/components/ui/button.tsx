
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#32B2AB] text-white hover:bg-[#28A29B] rounded-[12px]",
        primary: "bg-[#32B2AB] text-white hover:bg-[#28A29B] rounded-[12px]",
        secondary: "bg-transparent border-2 border-[#0B0B0B] text-[#0B0B0B] hover:border-[#32B2AB] hover:text-[#32B2AB] rounded-[12px]",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-[12px]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[12px]",
      },
      size: {
        default: "text-[18px] px-[32px] py-[18px]",
        sm: "text-[16px] px-[24px] py-[14px]",
        lg: "text-[18px] px-[32px] py-[18px]",
        xl: "text-[20px] px-[40px] py-[20px]",
        icon: "h-10 w-10",
        iconSm: "h-8 w-8",
        iconLg: "h-12 w-12",
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
