// LEAD FORM CHECKBOX - Custom styled checkbox for lead generation forms
// Uses #003347 (medico-darkGreen) for borders/checked state and #38B593 (medico-turquoise) for hover
import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, checked, ...props }, ref) => {
  const isChecked = checked === true || checked === "indeterminate";
  
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      checked={checked}
      data-medicosearch-checkbox="true"
      data-checked={isChecked ? "true" : "false"}
      style={{
        backgroundColor: isChecked ? '#003347' : 'white',
        borderColor: '#003347',
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
      className={cn(
        "medico-checkbox peer h-5 w-5 shrink-0 rounded-sm transition-colors",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="flex items-center justify-center medico-checkbox-indicator"
        style={{ color: 'white' }}
      >
        <Check 
          className="h-4 w-4 medico-checkbox-icon" 
          style={{ 
            stroke: 'white', 
            color: 'white',
            fill: 'none'
          }} 
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
