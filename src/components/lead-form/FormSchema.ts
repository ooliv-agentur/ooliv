
import { z } from "zod";
import { useMemo } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

export const useFormSchema = () => {
  const { language } = useLanguage();
  
  const validationMessages = useMemo(() => ({
    projectType: language === 'de' 
      ? "Bitte wählen Sie einen Projekttyp aus" 
      : "Please select a project type",
    name: language === 'de'
      ? "Bitte geben Sie Ihren Namen ein"
      : "Please enter your name",
    email: language === 'de'
      ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
      : "Please enter a valid email address",
    goal: language === 'de'
      ? "Bitte wählen Sie ein Ziel aus"
      : "Please select your main goal",
    otherProjectType: language === 'de'
      ? "Bitte geben Sie Ihren Projekttyp an"
      : "Please specify your project type",
    otherGoal: language === 'de'
      ? "Bitte geben Sie Ihr Ziel an"
      : "Please specify your goal",
    industry: language === 'de'
      ? "Bitte wählen Sie eine Branche aus"
      : "Please select an industry"
  }), [language]);
  
  const formSchema = useMemo(() => z.object({
    projectType: z.array(z.string()).min(1, { message: validationMessages.projectType }),
    projectTypeOther: z.string().optional(),
    
    companyName: z.string().optional(),
    industry: z.string().min(1, { message: validationMessages.industry }),
    website: z.string().optional(),
    location: z.string().optional(),
    
    goal: z.string().min(1, { message: validationMessages.goal }),
    goalOther: z.string().optional(),
    
    name: z.string().min(2, { message: validationMessages.name }),
    email: z.string().email({ message: validationMessages.email }),
    phone: z.string().optional(),
    message: z.string().optional(),
  }), [validationMessages]);

  return { formSchema, validationMessages };
};

export type FormValues = z.infer<ReturnType<typeof useFormSchema>["formSchema"]>;
