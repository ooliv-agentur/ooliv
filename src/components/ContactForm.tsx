
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError(null);
    
    // Form data collection
    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const formValues = Object.fromEntries(formData.entries());
    
    // Simulate form submission
    setTimeout(() => {
      try {
        // Success case
        setIsSubmitting(false);
        onOpenChange(false);
        
        toast({
          title: language === 'de' ? 'Nachricht gesendet!' : 'Message sent!',
          description: language === 'de' ? 'Wir melden uns in Kürze bei Ihnen.' : 'We\'ll get back to you soon.',
          duration: 5000,
          className: "bg-[#004d51] text-white border-[#006064]", // Higher contrast confirmation
        });
      } catch (error) {
        // Error handling
        setIsSubmitting(false);
        setFormError(language === 'de' 
          ? 'Es gab ein Problem bei der Übermittlung Ihrer Nachricht. Bitte versuchen Sie es erneut.' 
          : 'There was a problem submitting your message. Please try again.');
      }
    }, 1000);
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
              required 
              placeholder={language === 'de' ? 'Geben Sie Ihren Namen ein' : 'Enter your name'} 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              aria-required="true"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white">
              {language === 'de' ? 'E-Mail' : 'Email'}
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder={language === 'de' ? 'Geben Sie Ihre E-Mail-Adresse ein' : 'Enter your email'} 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              aria-required="true"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              {language === 'de' ? 'Nachricht' : 'Message'}
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              placeholder={language === 'de' ? 'Wie können wir Ihnen helfen?' : 'How can we help you?'} 
              className="resize-none h-24 bg-white/10 border-white/20 text-white placeholder:text-white/60"
              aria-required="true"
            />
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="privacy" name="privacy" required className="data-[state=checked]:bg-[#006064] data-[state=checked]:border-[#006064]" />
            <Label 
              htmlFor="privacy" 
              className="text-sm font-normal leading-tight cursor-pointer text-white/90"
            >
              {language === 'de' 
                ? 'Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzrichtlinie zu.' 
                : 'I agree to the processing of my data as outlined in the privacy policy.'}
            </Label>
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
