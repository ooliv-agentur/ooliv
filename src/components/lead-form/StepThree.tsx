
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
  const { language } = useLanguage();
  const watchGoal = form.watch("goal");
  const pleaseSpecify = language === 'de' ? "Bitte spezifizieren:" : "Please specify:";
  const selectMultiple = language === 'de' ? "Wählen Sie alle zutreffenden Ziele aus:" : "Select all goals that apply:";

  const goalOptions = [
    {
      value: "generate-leads",
      label: language === 'de' ? "Leads generieren" : "Generate Leads"
    },
    {
      value: "improve-design", 
      label: language === 'de' ? "Design verbessern" : "Improve Design"
    },
    {
      value: "improve-rankings",
      label: language === 'de' ? "Google-Rankings steigern" : "Improve Google Rankings"
    },
    {
      value: "launch-brand",
      label: language === 'de' ? "Neue Marke einführen" : "Launch a New Brand"
    },
    {
      value: "mobile-ready",
      label: language === 'de' ? "Schneller machen / Mobil optimieren" : "Make It Faster / Mobile-Ready"
    },
    {
      value: "other",
      label: language === 'de' ? "Anderes Ziel" : "Other"
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
                {language === 'de' 
                  ? "Was ist das Hauptziel Ihres Projekts?" 
                  : "What's your main goal with this project?"}
              </FormLabel>
              <p className="text-white/80 text-sm mb-4">{selectMultiple}</p>
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
                          className="flex flex-row items-center space-x-3 space-y-0 rounded-md border border-medico-mint/30 p-4 hover:bg-white/5 transition-colors"
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
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        {watchGoal?.includes("other") && (
          <FormField
            control={form.control}
            name="goalOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder={language === 'de' 
                      ? "Erzählen Sie uns Ihr Ziel" 
                      : "Tell us your goal"
                    }
                    className="h-12 bg-white/10 border-medico-mint/30 text-white placeholder:text-white/70 text-base focus:border-accent-primary" 
                  />
                </FormControl>
                <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
              </FormItem>
            )}
          />
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(StepThree);
