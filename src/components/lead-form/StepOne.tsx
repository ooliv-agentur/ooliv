
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
  const watchProjectType = form.watch("projectType");

  const projectOptions = [
    {
      value: "website-project",
      label: "Website erstellen/relaunchen"
    },
    {
      value: "seo-optimization",
      label: "SEO-Optimierung"
    },
    {
      value: "ai-content-automation",
      label: "Automatisierte Content-Marketing Lösung"
    },
    {
      value: "ai-integration",
      label: "KI-Integration (ChatGPT, Midjourney, Sora)"
    },
    {
      value: "google-ads",
      label: "Google Ads Betreuung"
    },
    {
      value: "web-development",
      label: "Webentwicklung & technische Betreuung"
    },
    {
      value: "other",
      label: "Sonstiges / individuelles Anliegen"
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
            <FormLabel className="text-xl font-semibold text-white mb-3 block">Was planen Sie mit uns?</FormLabel>
            <p className="text-white/80 text-sm mb-2">Wählen Sie alle zutreffenden Optionen aus:</p>
            <p className="text-white/60 text-xs mb-4 italic">
              Damit wir Ihnen die passende Lösung empfehlen können
            </p>
              <div className="space-y-3">
                {projectOptions.map((option) => (
                  <FormField
                    key={option.value}
                    control={form.control}
                    name="projectType"
                    render={({ field }) => {
                      const currentValue = Array.isArray(field.value) ? field.value : [];
                      const isChecked = currentValue.includes(option.value);

                      return (
                        <FormItem
                          key={option.value}
                          className="flex flex-row items-center space-x-3 space-y-0 rounded-md border border-white/20 p-4 hover:bg-white/5 transition-colors"
                        >
                          <FormControl>
                            <Checkbox
                              checked={isChecked}
                              onCheckedChange={(checked) => {
                                const newValue = checked
                                  ? [...currentValue, option.value]
                                  : currentValue.filter((value: string) => value !== option.value);
                                field.onChange(newValue);
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
        
        {watchProjectType?.includes("other") && (
          <FormField
            control={form.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white text-base font-medium">Bitte spezifizieren:</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder="Erzählen Sie uns, was Sie benötigen" 
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

export default React.memo(StepOne);
