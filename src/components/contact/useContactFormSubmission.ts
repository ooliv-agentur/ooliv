
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';
import { FormValues } from './ContactFormValidation';

const sanitizeInput = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/=20/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
};

export const useContactFormSubmission = (formType: 'audit' | 'call' | 'work', onClose: () => void) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const submitForm = async (formValues: FormValues) => {
    setIsSubmitting(true);
    setFormError(null);
    
    try {
      const formData = {
        projectType: sanitizeInput(formType),
        companyName: '',
        industry: '',
        name: sanitizeInput(formValues.name),
        email: sanitizeInput(formValues.email),
        message: sanitizeInput(formValues.message),
        websiteUrl: '',
        location: '',
        goal: sanitizeInput(formType === 'audit' ? 'website_audit' : (formType === 'call' ? 'strategy_call' : 'collaboration')),
        phone: '',
        language: language
      };
      
      const headers = getSupabaseHeaders();
      console.log("ContactForm - Headers being sent:", headers);
      console.log("ContactForm - Sending form with language:", language);
      
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error details:", errorData);
        throw new Error(errorData.message || 'Network response was not ok');
      }
      
      const responseData = await response.json();
      console.log("Form submission successful:", responseData);
      
      onClose();
      
      toast({
        title: language === 'de' ? 'Nachricht gesendet!' : 'Message sent!',
        description: language === 'de' ? 'Wir melden uns in Kürze bei Ihnen.' : 'We\'ll get back to you soon.',
        duration: 5000,
        className: "bg-[#004d51] text-white border-[#006064]",
      });

      setTimeout(() => {
        window.location.href = language === 'de' ? "/danke" : "/en/thank-you";
      }, 1000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setFormError(language === 'de' 
        ? 'Es gab ein Problem bei der Übermittlung Ihrer Nachricht. Bitte versuchen Sie es erneut.' 
        : 'There was a problem submitting your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, formError };
};
