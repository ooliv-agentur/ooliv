
import { useLanguage } from '@/contexts/LanguageContext';

export interface FormValues {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
}

export interface ValidationErrors {
  [key: string]: string;
}

export const useContactFormValidation = () => {
  const { language } = useLanguage();

  const validateForm = (formValues: FormValues): ValidationErrors => {
    const errors: ValidationErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = language === 'de' ? 'Name ist erforderlich' : 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = language === 'de' ? 'E-Mail ist erforderlich' : 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = language === 'de' ? 'Ungültige E-Mail-Adresse' : 'Invalid email address';
    }
    
    if (!formValues.message.trim()) {
      errors.message = language === 'de' ? 'Nachricht ist erforderlich' : 'Message is required';
    }
    
    if (!formValues.privacy) {
      errors.privacy = language === 'de' ? 'Zustimmung erforderlich' : 'Consent is required';
    }
    
    return errors;
  };

  return { validateForm };
};
