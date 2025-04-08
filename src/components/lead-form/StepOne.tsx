
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepOneProps {
  form: UseFormReturn<FormValues>;
}

const StepOne: React.FC<StepOneProps> = ({ form }) => {
  const { language } = useLanguage();
  const watchProjectType = form.watch("projectType");
  
  const whatArePlanning = language === 'de' ? "Was planen Sie mit uns?" : "What are you planning with us?";
  const selectProjectType = language === 'de' ? "Projekttyp auswählen" : "Select project type";
  const pleaseSpecify = language === 'de' ? "Bitte spezifizieren:" : "Please specify:";
  const tellUsWhat = language === 'de' ? "Erzählen Sie uns, was Sie benötigen" : "Tell us what you need";

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium text-white">{whatArePlanning}</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder={selectProjectType} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  <SelectItem value="website-relaunch">
                    {language === 'de' ? "Relaunch einer bestehenden Website" : "Relaunch of an existing website"}
                  </SelectItem>
                  <SelectItem value="new-website">
                    {language === 'de' ? "Neue Website erstellen" : "Create a new website"}
                  </SelectItem>
                  <SelectItem value="seo-optimization">
                    {language === 'de' ? "SEO-Optimierung" : "SEO Optimization"}
                  </SelectItem>
                  <SelectItem value="lead-generation">
                    {language === 'de' ? "Lead-Generierung mit Google Ads" : "Lead Generation with Google Ads"}
                  </SelectItem>
                  <SelectItem value="ai-content">
                    {language === 'de' ? "KI-Inhalte & ChatGPT-Integration" : "AI Content & ChatGPT Integration"}
                  </SelectItem>
                  <SelectItem value="other">
                    {language === 'de' ? "Sonstiges / individuelles Anliegen" : "Other / Custom Request"}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        {watchProjectType === "other" && (
          <FormField
            control={form.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={tellUsWhat} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
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
