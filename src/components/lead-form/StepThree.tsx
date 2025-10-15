
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepThreeProps {
  form: UseFormReturn<FormValues>;
}

const StepThree: React.FC<StepThreeProps> = ({ form }) => {
  const watchGoal = form.watch("goal");

  const goalOptions = [
    {
      value: "generate-leads",
      label: "Mehr qualifizierte Anfragen generieren"
    },
    {
      value: "improve-rankings",
      label: "Bei Google auf Seite 1 kommen"
    },
    {
      value: "improve-performance",
      label: "Website schneller & mobilfreundlicher machen"
    },
    {
      value: "automate-content",
      label: "Content-Produktion automatisieren"
    },
    {
      value: "brand-development",
      label: "Markenentwicklung & Positionierung"
    },
    {
      value: "leverage-ai",
      label: "KI-Potenzial im Unternehmen nutzen"
    },
    {
      value: "other",
      label: "Anderes Ziel"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="goal"
          render={() => (
          <FormItem>
            <FormLabel className="text-xl font-semibold text-white mb-3 block">
              Was ist das Hauptziel Ihres Projekts?
            </FormLabel>
            <p className="text-white/80 text-sm mb-4">Wählen Sie alle zutreffenden Ziele aus:</p>
              <div className="space-y-3">
                {goalOptions.map((option) => (
                  <FormField
                    key={option.value}
                    control={form.control}
                    name="goal"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={option.value}
                          className="flex flex-row items-center space-x-3 space-y-0 rounded-md border border-white/20 p-4 hover:bg-white/5 transition-colors"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(option.value)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, option.value])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value: string) => value !== option.value
                                      )
                                    )
                              }}
                            />
                          </FormControl>
                          <div className="flex items-center leading-none">
                            <FormLabel className="text-white text-base font-medium cursor-pointer">
                              {option.label}
                            </FormLabel>
                          </div>
                        </FormItem>
                      )
                    }}
                  />
                ))}
              </div>
              <div className="min-h-[40px]">
                <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
              </div>
            </FormItem>
          )}
        />
        
        {watchGoal?.includes("other") && (
          <FormField
            control={form.control}
            name="goalOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium">Bitte spezifizieren:</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Erzählen Sie uns Ihr Ziel"
                    className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40" 
                  />
                </FormControl>
                <div className="min-h-[40px]">
                  <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
                </div>
              </FormItem>
            )}
          />
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(StepThree);
