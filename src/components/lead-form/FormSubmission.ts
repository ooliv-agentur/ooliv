
import { FormValues } from './FormSchema';
import { useToast } from "@/hooks/use-toast";
import { useCallback, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';
import { z } from 'zod';

// Server-side validation schema to prevent malicious input
const serverValidationSchema = z.object({
  name: z.string().min(2).max(200),
  email: z.string().email().max(255),
  phone: z.string().max(50).optional(),
  companyName: z.string().max(200).optional(),
  industry: z.string().max(100),
  websiteUrl: z.string().url().max(500).optional().or(z.literal('')),
  location: z.string().max(200).optional(),
  projectType: z.string().max(500),
  goal: z.string().max(500),
  message: z.string().max(2000).optional(),
  language: z.enum(['de', 'en']),
});

// Helper function to sanitize text input to avoid MIME encoding issues
const sanitizeInput = (text: string | undefined): string => {
  if (!text) return '';
  // Replace problematic characters or sequences that might cause MIME encoding issues
  return text
    .replace(/=20/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
};

export const useFormSubmission = (
  onSuccess: () => void,
  setIsSubmitting: (isSubmitting: boolean) => void
) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const abortControllerRef = useRef<AbortController | null>(null);
  
  const submitForm = useCallback(async (data: FormValues) => {
    // Don't proceed if essential data is missing
    if (!data || !data.name || !data.email) {
      console.error("Form submission aborted: Missing required data");
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de' 
          ? "Bitte füllen Sie alle Pflichtfelder aus." 
          : "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    
    // Sanitize text fields to avoid MIME encoding issues
    const formData = {
      projectType: sanitizeInput(data.projectType.includes('other') 
        ? data.projectType.filter(type => type !== 'other').concat(data.projectTypeOther || '').join(', ')
        : data.projectType.join(', ')),
      companyName: sanitizeInput(data.companyName || ''),
      industry: sanitizeInput(data.industry),
      websiteUrl: sanitizeInput(data.website || ''),
      location: sanitizeInput(data.location || ''),
      goal: sanitizeInput(data.goal.includes('other') 
        ? data.goal.filter(goal => goal !== 'other').concat(data.goalOther || '').join(', ')
        : data.goal.join(', ')),
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: sanitizeInput(data.phone || ''),
      message: sanitizeInput(data.message || ''),
      language: language // Add the current language to the form data
    };
    
    // Perform server-side validation
    const validationResult = serverValidationSchema.safeParse(formData);
    
    if (!validationResult.success) {
      console.error('Server-side validation failed:', validationResult.error);
      setIsSubmitting(false);
      toast({
        title: language === 'de' ? "Validierungsfehler" : "Validation Error",
        description: language === 'de' 
          ? "Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut."
          : "Please check your inputs and try again.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      const headers = getSupabaseHeaders();
      console.log("Sending request with headers:", headers);
      console.log("Sending form data with language:", language);
      
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData),
        signal: abortController.signal
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error details:", errorData);
        throw new Error(errorData.message || 'Network response was not ok');
      }
      
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);
      
      setIsSubmitting(false);
      
      // Call onSuccess callback to show thank you screen
      onSuccess();
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log("Request was aborted");
        return;
      }
      
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de' 
          ? "Es gab ein Problem bei der Übermittlung Ihrer Anfrage. Bitte versuchen Sie es erneut." 
          : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    }
  }, [language, toast, setIsSubmitting, onSuccess]);

  return { submitForm };
};
