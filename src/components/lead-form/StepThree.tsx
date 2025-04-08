
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepThreeProps {
  form: UseFormReturn<FormValues>;
}

const StepThree: React.FC<StepThreeProps> = ({ form }) => {
  const { language } = useLanguage();
  const watchGoal = form.watch("goal");
  const pleaseSpecify = language === 'de' ? "Bitte spezifizieren:" : "Please specify:";

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
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium text-white">
                {language === 'de' 
                  ? "Was ist das Hauptziel Ihres Projekts?" 
                  : "What's your main goal with this project?"}
              </FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue 
                      placeholder={language === 'de' 
                        ? "Hauptziel auswählen" 
                        : "Select your main goal"} 
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  {language === 'de' ? (
                    <>
                      <SelectItem value="generate-leads">Leads generieren</SelectItem>
                      <SelectItem value="improve-design">Design verbessern</SelectItem>
                      <SelectItem value="improve-rankings">Google-Rankings steigern</SelectItem>
                      <SelectItem value="launch-brand">Neue Marke einführen</SelectItem>
                      <SelectItem value="mobile-ready">Schneller machen / Mobil optimieren</SelectItem>
                      <SelectItem value="other">Anderes Ziel</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="generate-leads">Generate Leads</SelectItem>
                      <SelectItem value="improve-design">Improve Design</SelectItem>
                      <SelectItem value="improve-rankings">Improve Google Rankings</SelectItem>
                      <SelectItem value="launch-brand">Launch a New Brand</SelectItem>
                      <SelectItem value="mobile-ready">Make It Faster / Mobile-Ready</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        {watchGoal === "other" && (
          <FormField
            control={form.control}
            name="goalOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder={language === 'de' 
                      ? "Erzählen Sie uns Ihr Ziel" 
                      : "Tell us your goal"
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
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
