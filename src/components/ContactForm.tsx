
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactFormFields from './contact/ContactFormFields';
import { useContactFormValidation, FormValues } from './contact/ContactFormValidation';
import { useContactFormSubmission } from './contact/useContactFormSubmission';

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formType: 'audit' | 'call' | 'work';
}

const ContactForm = ({ open, onOpenChange, formType }: ContactFormProps) => {
  const { language } = useLanguage();
  const [formValues, setFormValues] = React.useState<FormValues>({
    name: '',
    email: '',
    message: '',
    privacy: false
  });
  const [validationErrors, setValidationErrors] = React.useState<{[key: string]: string}>({});
  
  const { validateForm } = useContactFormValidation();
  const { submitForm, isSubmitting, formError } = useContactFormSubmission(formType, () => onOpenChange(false));
  
  React.useEffect(() => {
    if (open) {
      setFormValues({
        name: '',
        email: '',
        message: '',
        privacy: false
      });
      setValidationErrors({});
    }
  }, [open]);
  
  const titles = {
    'audit': language === 'de' ? 'Fordern Sie Ihr kostenloses Website-Audit an' : 'Request Your Free Website Audit',
    'call': language === 'de' ? 'Planen Sie ein Strategiegespräch' : 'Schedule a Strategy Call',
    'work': language === 'de' ? 'Lassen Sie uns zusammenarbeiten' : 'Let\'s Work Together'
  };
  
  const descriptions = {
    'audit': language === 'de' 
      ? 'Wir analysieren Ihre Website und bieten umsetzbare Erkenntnisse zur Verbesserung Ihrer Online-Präsenz.' 
      : 'We\'ll analyze your website and provide actionable insights to improve your online presence.',
    'call': language === 'de' 
      ? 'Vereinbaren Sie einen Termin mit unserem Team, um Ihr Projekt und Ihre Ziele zu besprechen.' 
      : 'Schedule a call with our team to discuss your project and goals.',
    'work': language === 'de' 
      ? 'Erzählen Sie uns von Ihrem Projekt und lassen Sie uns gemeinsam etwas Besonderes erschaffen.' 
      : 'Tell us about your project and let\'s create something amazing together.'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const updated = {...prev};
        delete updated[name];
        return updated;
      });
    }
  };
  
  const handleCheckboxChange = (checked: boolean) => {
    setFormValues(prev => ({
      ...prev,
      privacy: checked
    }));
    
    if (validationErrors['privacy']) {
      setValidationErrors(prev => {
        const updated = {...prev};
        delete updated['privacy'];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateForm(formValues);
    setValidationErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      await submitForm(formValues);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] rounded-lg p-6 bg-gradient-to-b from-[#0c2036] to-[#1a2630] text-white border-white/10">
        <DialogHeader>
          <DialogTitle className="text-white text-2xl">{titles[formType]}</DialogTitle>
          <DialogDescription className="text-white/70 mt-2">
            {descriptions[formType]}
          </DialogDescription>
        </DialogHeader>
        
        {formError && (
          <div className="bg-red-900/60 border border-red-700 text-white px-4 py-3 rounded mb-4">
            <p className="text-sm">{formError}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <ContactFormFields
            formValues={formValues}
            validationErrors={validationErrors}
            onInputChange={handleInputChange}
            onCheckboxChange={handleCheckboxChange}
          />
          
          <DialogFooter className="mt-6 sm:mt-6 flex gap-4">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                {language === 'de' ? 'Abbrechen' : 'Cancel'}
              </Button>
            </DialogClose>
            
            <Button 
              type="submit" 
              className="flex-1 bg-[#006064] hover:bg-[#004d51] text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {language === 'de' ? 'Wird gesendet...' : 'Sending...'}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {language === 'de' ? 'Nachricht senden' : 'Send Message'}
                </span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
