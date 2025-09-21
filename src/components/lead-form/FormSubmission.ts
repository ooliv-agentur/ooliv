
import { FormValues } from './FormSchema';
import { useToast } from "@/hooks/use-toast";
import { useCallback, useRef } from "react";
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

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
      
      // Call onSuccess callback first (for any necessary state cleanup)
      onSuccess();
      
      // Display toast notification
      toast({
        title: language === 'de' ? "Anfrage erhalten!" : "Inquiry received!",
        description: language === 'de' ? "Wir melden uns innerhalb von 24 Stunden bei Ihnen." : "We'll get back to you within 24 hours.",
        duration: 3000, // Reduced duration to make redirect more seamless
        className: "bg-[#004d51] text-white border-[#006064]",
      });

      // Add a small delay to ensure the toast is visible before redirecting
      setTimeout(() => {
        // Redirect to appropriate thank you page based on language
        window.location.href = language === 'de' ? "/danke" : "/en/thank-you";
      }, 1000);
      
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
