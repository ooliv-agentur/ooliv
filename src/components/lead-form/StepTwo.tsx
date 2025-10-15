
import React from 'react';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from './FormSchema';

interface StepTwoProps {
  form: UseFormReturn<FormValues>;
}

const StepTwo: React.FC<StepTwoProps> = ({ form }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">
          Erzählen Sie uns etwas über Ihr Unternehmen
        </h3>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-medium">
                Unternehmensname
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Name Ihres Unternehmens"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-medium">
                Branche <span className="text-red-400">*</span>
              </FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="h-12 bg-white/10 border-white/20 text-white text-base hover:bg-white/15 focus:border-white/40">
                    <SelectValue placeholder="Branche auswählen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-black text-white border-white/20 max-h-60 z-[350]">
                  <SelectItem value="technology" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Technologie / Software</SelectItem>
                  <SelectItem value="retail" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Einzelhandel / E-Commerce</SelectItem>
                  <SelectItem value="finance" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Finanzen / Banking</SelectItem>
                  <SelectItem value="healthcare" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Gesundheit / Medizin</SelectItem>
                  <SelectItem value="education" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Bildung / Training</SelectItem>
                  <SelectItem value="manufacturing" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Produktion / Industrie</SelectItem>
                  <SelectItem value="hospitality" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Gastronomie / Tourismus</SelectItem>
                  <SelectItem value="construction" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Bau / Immobilien</SelectItem>
                  <SelectItem value="food" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Lebensmittel / Restaurant</SelectItem>
                  <SelectItem value="professional" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Beratung / Dienstleistungen</SelectItem>
                  <SelectItem value="other" className="text-base py-3 hover:bg-white/10 focus:bg-white/20">Andere Branche</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-medium">
                Website URL
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="www.example.com" 
                  type="url"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b] bg-red-900/20 p-2 rounded mt-1" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white text-base font-medium">
                Standort
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="Stadt, Land"
                  className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-base focus:border-white/40"
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

export default React.memo(StepTwo);
