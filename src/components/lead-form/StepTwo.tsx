
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
          {language === 'de' 
            ? "Erzählen Sie uns etwas über Ihr Unternehmen" 
            : "Tell us a bit about your business"}
        </h3>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Unternehmensname" : "Company Name"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Name Ihres Unternehmens" 
                    : "Your company name"
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
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
              <FormLabel className="text-white">
                {language === 'de' ? "Branche" : "Industry"}
              </FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
                value={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue 
                      placeholder={language === 'de' 
                        ? "Branche auswählen" 
                        : "Select your industry"
                      } 
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  {language === 'de' ? (
                    <>
                      <SelectItem value="technology">Technologie / Software</SelectItem>
                      <SelectItem value="retail">Einzelhandel / E-Commerce</SelectItem>
                      <SelectItem value="finance">Finanzen / Banking</SelectItem>
                      <SelectItem value="healthcare">Gesundheit / Medizin</SelectItem>
                      <SelectItem value="education">Bildung / Training</SelectItem>
                      <SelectItem value="manufacturing">Produktion / Industrie</SelectItem>
                      <SelectItem value="hospitality">Gastronomie / Tourismus</SelectItem>
                      <SelectItem value="construction">Bau / Immobilien</SelectItem>
                      <SelectItem value="food">Lebensmittel / Restaurant</SelectItem>
                      <SelectItem value="professional">Beratung / Dienstleistungen</SelectItem>
                      <SelectItem value="other">Andere Branche</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="technology">Technology / Software</SelectItem>
                      <SelectItem value="retail">Retail / E-commerce</SelectItem>
                      <SelectItem value="finance">Finance / Banking</SelectItem>
                      <SelectItem value="healthcare">Healthcare / Medical</SelectItem>
                      <SelectItem value="education">Education / Training</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing / Industrial</SelectItem>
                      <SelectItem value="hospitality">Hospitality / Tourism</SelectItem>
                      <SelectItem value="construction">Construction / Real Estate</SelectItem>
                      <SelectItem value="food">Food / Restaurant</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  )}
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
              <FormLabel className="text-white">
                {language === 'de' ? "Website URL" : "Website URL"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="www.example.com" 
                  type="url"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
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
              <FormLabel className="text-white">
                {language === 'de' ? "Standort" : "Location"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Stadt, Land" 
                    : "City, Country"
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
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
