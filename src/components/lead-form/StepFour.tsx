
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';
import { Shield, Clock, CheckCircle } from "lucide-react";

interface StepFourProps {
  form: UseFormReturn<FormValues>;
}

const StepFour: React.FC<StepFourProps> = ({ form }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-2">
            Wie können wir Sie erreichen?
          </h3>
          <p className="text-white/60 text-xs italic">
            Wir melden uns innerhalb von 24 Stunden bei Ihnen
          </p>
        </div>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-medium">
                Name <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Ihr Name"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
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
              <FormLabel className="text-white text-base font-medium">
                E-Mail-Adresse <span className="text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="ihre@emailadresse.de"
                  type="email" 
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
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
              <FormLabel className="text-white text-base font-medium">
                Telefonnummer
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="z. B. +49 123 456 789"
                  type="tel" 
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
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
              <FormLabel className="text-white text-base font-medium">
                Nachricht oder Hinweise
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Gibt es etwas, das wir vorab wissen sollten?"
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40 resize-none"
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

        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center justify-center gap-6 text-xs text-white/70">
            <span className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              SSL-verschlüsselt
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              24h Antwort
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Unverbindlich
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default React.memo(StepFour);
