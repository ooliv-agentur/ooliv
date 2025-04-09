
import { FormValues } from './FormSchema';
import { useToast } from "@/hooks/use-toast";
import { useCallback, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

export const useFormSubmission = (
  onSuccess: () => void,
  setIsSubmitting: (isSubmitting: boolean) => void
) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const abortControllerRef = useRef<AbortController | null>(null);
  
  const submitForm = useCallback(async (data: FormValues) => {
    setIsSubmitting(true);
    
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    
    const formData = {
      projectType: data.projectType === 'other' ? data.projectTypeOther : data.projectType,
      companyName: data.companyName || '',
      industry: data.industry,
      websiteUrl: data.website || '',
      location: data.location || '',
      goal: data.goal === 'other' ? data.goalOther : data.goal,
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      message: data.message || ''
    };
    
    try {
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: "POST",
        headers: getSupabaseHeaders(),
        body: JSON.stringify(formData),
        signal: abortController.signal
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error details:", errorData);
        throw new Error(errorData.message || 'Network response was not ok');
      }
      
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);
      
      setIsSubmitting(false);
      onSuccess();
      
      toast({
        title: language === 'de' ? "Anfrage erhalten!" : "Inquiry received!",
        description: language === 'de' ? "Wir melden uns innerhalb von 24 Stunden bei Ihnen." : "We'll get back to you within 24 hours.",
        duration: 5000,
        className: "bg-[#004d51] text-white border-[#006064]",
      });
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
