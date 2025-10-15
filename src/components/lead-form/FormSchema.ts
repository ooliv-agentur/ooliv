
import { z } from "zod";
import { useMemo } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

export const useFormSchema = () => {
  const { language } = useLanguage();
  
  const validationMessages = useMemo(() => ({
    projectType: "Bitte wählen Sie einen Projekttyp aus",
    name: "Bitte geben Sie Ihren Namen ein",
    email: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    goal: "Bitte wählen Sie ein Ziel aus",
    otherProjectType: "Bitte geben Sie Ihren Projekttyp an",
    otherGoal: "Bitte geben Sie Ihr Ziel an",
    industry: "Bitte wählen Sie eine Branche aus"
  }), []);
  
  const formSchema = useMemo(() => z.object({
    projectType: z.array(z.string()).min(1, { message: validationMessages.projectType }),
    projectTypeOther: z.string().optional(),
    
    companyName: z.string().optional(),
    industry: z.string().min(1, { message: validationMessages.industry }),
    website: z.string().optional(),
    location: z.string().optional(),
    
    goal: z.array(z.string()).min(1, { message: validationMessages.goal }),
    goalOther: z.string().optional(),
    
    name: z.string().min(2, { message: validationMessages.name }),
    email: z.string().email({ message: validationMessages.email }),
    phone: z.string().optional(),
    message: z.string().optional(),
  }), [validationMessages]);

  return { formSchema, validationMessages };
};

export type FormValues = z.infer<ReturnType<typeof useFormSchema>["formSchema"]>;
