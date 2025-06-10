
import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useLanguage } from '@/contexts/LanguageContext';
import { FormValues, ValidationErrors } from './ContactFormValidation';

interface ContactFormFieldsProps {
  formValues: FormValues;
  validationErrors: ValidationErrors;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCheckboxChange: (checked: boolean) => void;
}

const ContactFormFields = ({ 
  formValues, 
  validationErrors, 
  onInputChange, 
  onCheckboxChange 
}: ContactFormFieldsProps) => {
  const { language } = useLanguage();

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white">
          {language === 'de' ? 'Name' : 'Name'}
        </Label>
        <Input 
          id="name" 
          name="name" 
          value={formValues.name}
          onChange={onInputChange}
          className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 ${validationErrors.name ? 'border-red-500' : ''}`}
          aria-required="true"
          placeholder={language === 'de' ? 'Geben Sie Ihren Namen ein' : 'Enter your name'}
        />
        {validationErrors.name && (
          <p className="text-sm text-red-500 mt-1">{validationErrors.name}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-white">
          {language === 'de' ? 'E-Mail' : 'Email'}
        </Label>
        <Input 
          id="email" 
          name="email" 
          type="email"
          value={formValues.email}
          onChange={onInputChange}
          className={`bg-white/10 border-white/20 text-white placeholder:text-white/60 ${validationErrors.email ? 'border-red-500' : ''}`}
          aria-required="true"
          placeholder={language === 'de' ? 'Geben Sie Ihre E-Mail-Adresse ein' : 'Enter your email'}
        />
        {validationErrors.email && (
          <p className="text-sm text-red-500 mt-1">{validationErrors.email}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-white">
          {language === 'de' ? 'Nachricht' : 'Message'}
        </Label>
        <Textarea 
          id="message" 
          name="message" 
          value={formValues.message}
          onChange={onInputChange}
          className={`resize-none h-24 bg-white/10 border-white/20 text-white placeholder:text-white/60 ${validationErrors.message ? 'border-red-500' : ''}`}
          aria-required="true"
          placeholder={language === 'de' ? 'Wie können wir Ihnen helfen?' : 'How can we help you?'}
        />
        {validationErrors.message && (
          <p className="text-sm text-red-500 mt-1">{validationErrors.message}</p>
        )}
      </div>
      
      <div className="flex items-start space-x-3">
        <Checkbox 
          id="privacy" 
          name="privacy" 
          checked={formValues.privacy}
          onCheckedChange={onCheckboxChange}
          className={`data-[state=checked]:bg-[#006064] data-[state=checked]:border-[#006064] ${validationErrors.privacy ? 'border-red-500' : ''}`} 
        />
        <div className="flex flex-col">
          <Label 
            htmlFor="privacy" 
            className="text-sm font-normal leading-tight cursor-pointer text-white/90"
          >
            {language === 'de' 
              ? 'Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzrichtlinie zu.' 
              : 'I agree to the processing of my data as outlined in the privacy policy.'}
          </Label>
          {validationErrors.privacy && (
            <p className="text-sm text-red-500 mt-1">{validationErrors.privacy}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactFormFields;
