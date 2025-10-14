
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepOneProps {
  form: UseFormReturn<FormValues>;
}

const StepOne: React.FC<StepOneProps> = ({ form }) => {
  const { language } = useLanguage();
  const watchProjectType = form.watch("projectType");
  
  const whatArePlanning = language === 'de' ? "Was planen Sie mit uns?" : "What are you planning with us?";
  const pleaseSpecify = language === 'de' ? "Bitte spezifizieren:" : "Please specify:";
  const tellUsWhat = language === 'de' ? "Erzählen Sie uns, was Sie benötigen" : "Tell us what you need";
  const selectMultiple = language === 'de' ? "Wählen Sie alle zutreffenden Optionen aus:" : "Select all that apply:";

  const projectOptions = [
    {
      value: "website-relaunch",
      label: language === 'de' ? "Relaunch einer bestehenden Website" : "Relaunch of an existing website"
    },
    {
      value: "new-website", 
      label: language === 'de' ? "Neue Website erstellen" : "Create a new website"
    },
    {
      value: "seo-optimization",
      label: language === 'de' ? "SEO-Optimierung" : "SEO Optimization"
    },
    {
      value: "lead-generation",
      label: language === 'de' ? "Lead-Generierung mit Google Ads" : "Lead Generation with Google Ads"
    },
    {
      value: "ai-content",
      label: language === 'de' ? "KI-Inhalte & ChatGPT-Integration" : "AI Content & ChatGPT Integration"
    },
    {
      value: "other",
      label: language === 'de' ? "Sonstiges / individuelles Anliegen" : "Other / Custom Request"
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
          name="projectType"
          render={() => (
            <FormItem>
              <FormLabel className="text-xl font-semibold text-white mb-3 block">{whatArePlanning}</FormLabel>
              <p className="text-white/80 text-sm mb-4">{selectMultiple}</p>
              <div className="space-y-3">
                {projectOptions.map((option) => (
                  <FormField
                    key={option.value}
                    control={form.control}
                    name="projectType"
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
        
        {watchProjectType?.includes("other") && (
          <FormField
            control={form.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder={tellUsWhat} 
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

export default React.memo(StepOne);
