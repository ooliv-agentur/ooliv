
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepFourProps {
  form: UseFormReturn<FormValues>;
}

const StepFour: React.FC<StepFourProps> = ({ form }) => {
  const { language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-white">
          {language === 'de' ? "Wie können wir Sie erreichen?" : "Where can we reach you?"}
        </h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Name" : "Name"} <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "Ihr Name" : "Your name"} 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                  value={field.value || ''}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "E-Mail-Adresse" : "Email"} <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "ihre@emailadresse.de" : "your.email@example.com"} 
                  type="email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                  value={field.value || ''}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Telefonnummer" : "Phone"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "z. B. +49 123 456 789" : "+49 123 456 789"} 
                  type="tel" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                  value={field.value || ''}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Nachricht oder Hinweise" : "Message / Notes"}
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Gibt es etwas, das wir vorab wissen sollten?" 
                    : "Any additional information about your project"
                  }
                  className="min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  value={field.value || ''}
                  onChange={(e) => {
                    field.onChange(e);
                  }}
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  );
};

export default React.memo(StepFour);
