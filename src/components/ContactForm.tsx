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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

const sanitizeInput = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/=20/g, ' ')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .trim();
};

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formType: 'audit' | 'call' | 'work';
}

const ContactForm = ({ open, onOpenChange, formType }: ContactFormProps) => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formError, setFormError] = React.useState<string | null>(null);
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    message: '',
    privacy: false
  });
  const [validationErrors, setValidationErrors] = React.useState<{[key: string]: string}>({});
  
  React.useEffect(() => {
    if (open) {
      setFormValues({
        name: '',
        email: '',
        message: '',
        privacy: false
      });
      setValidationErrors({});
      setFormError(null);
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

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
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
    
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
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
        phone: ''
      };
      
      const headers = getSupabaseHeaders();
      console.log("ContactForm - Headers being sent:", headers);
      
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
      
      onOpenChange(false);
      
      toast({
        title: language === 'de' ? 'Nachricht gesendet!' : 'Message sent!',
        description: language === 'de' ? 'Wir melden uns in Kürze bei Ihnen.' : 'We\'ll get back to you soon.',
        duration: 5000,
        className: "bg-[#004d51] text-white border-[#006064]",
      });

      setTimeout(() => {
        window.location.href = "/danke";
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
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              {language === 'de' ? 'Name' : 'Name'}
            </Label>
            <Input 
              id="name" 
              name="name" 
              value={formValues.name}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onCheckedChange={handleCheckboxChange}
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
