
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
      className="space-y-6"
    >
      <div className="space-y-4">
        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-xl font-semibold text-white mb-4 block">
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
                  <SelectTrigger className="w-full h-12 bg-white/10 border-medico-mint/30 text-white text-base hover:bg-white/15 focus:border-medico-turquoise">
                    <SelectValue 
                      placeholder={language === 'de' 
                        ? "Hauptziel auswählen" 
                        : "Select your main goal"} 
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-medico-darkGreen text-white border-medico-mint/30 max-h-60">
                  {language === 'de' ? (
                    <>
                      <SelectItem value="generate-leads" className="text-base py-3 hover:bg-medico-turquoise/20">Leads generieren</SelectItem>
                      <SelectItem value="improve-design" className="text-base py-3 hover:bg-medico-turquoise/20">Design verbessern</SelectItem>
                      <SelectItem value="improve-rankings" className="text-base py-3 hover:bg-medico-turquoise/20">Google-Rankings steigern</SelectItem>
                      <SelectItem value="launch-brand" className="text-base py-3 hover:bg-medico-turquoise/20">Neue Marke einführen</SelectItem>
                      <SelectItem value="mobile-ready" className="text-base py-3 hover:bg-medico-turquoise/20">Schneller machen / Mobil optimieren</SelectItem>
                      <SelectItem value="other" className="text-base py-3 hover:bg-medico-turquoise/20">Anderes Ziel</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="generate-leads" className="text-base py-3 hover:bg-medico-turquoise/20">Generate Leads</SelectItem>
                      <SelectItem value="improve-design" className="text-base py-3 hover:bg-medico-turquoise/20">Improve Design</SelectItem>
                      <SelectItem value="improve-rankings" className="text-base py-3 hover:bg-medico-turquoise/20">Improve Google Rankings</SelectItem>
                      <SelectItem value="launch-brand" className="text-base py-3 hover:bg-medico-turquoise/20">Launch a New Brand</SelectItem>
                      <SelectItem value="mobile-ready" className="text-base py-3 hover:bg-medico-turquoise/20">Make It Faster / Mobile-Ready</SelectItem>
                      <SelectItem value="other" className="text-base py-3 hover:bg-medico-turquoise/20">Other</SelectItem>
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
                <FormLabel className="text-white text-base font-medium">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder={language === 'de' 
                      ? "Erzählen Sie uns Ihr Ziel" 
                      : "Tell us your goal"
                    }
                    className="h-12 bg-white/10 border-medico-mint/30 text-white placeholder:text-white/70 text-base focus:border-medico-turquoise" 
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
