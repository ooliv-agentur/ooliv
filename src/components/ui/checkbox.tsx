// LEAD FORM CHECKBOX - Custom styled checkbox for lead generation forms
// Uses #003347 (medico-darkGreen) for borders/checked state and #38B593 (medico-turquoise) for hover
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Debug log to verify checkbox is rendering
  console.log('🎨 Custom Checkbox rendering');
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      style={{
        backgroundColor: props.checked || props.defaultChecked ? '#003347' : 'white',
        borderColor: '#003347',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
      className={cn(
        "peer h-5 w-5 shrink-0 rounded-sm border-2 bg-white transition-colors",
        "border-[#003347] hover:border-[#38B593]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003347] focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-[#003347] data-[state=checked]:border-[#003347] data-[state=checked]:text-white",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-white")}
      >
        <Check className="h-4 w-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
