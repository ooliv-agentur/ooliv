
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
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const titles = {
    'audit': t('contactForm.auditTitle') || 'Request Your Free Website Audit',
    'call': t('contactForm.callTitle') || 'Schedule a Strategy Call',
    'work': t('contactForm.workTitle') || 'Let\'s Work Together'
  };
  
  const descriptions = {
    'audit': t('contactForm.auditDescription') || 'We\'ll analyze your website and provide actionable insights to improve your online presence.',
    'call': t('contactForm.callDescription') || 'Schedule a call with our team to discuss your project and goals.',
    'work': t('contactForm.workDescription') || 'Tell us about your project and let\'s create something amazing together.'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      onOpenChange(false);
      
      toast({
        title: t('contactForm.successTitle') || 'Message sent!',
        description: t('contactForm.successDescription') || 'We\'ll get back to you soon.',
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] rounded-lg p-6">
        <DialogHeader>
          <DialogTitle className="text-brand-heading text-2xl">{titles[formType]}</DialogTitle>
          <DialogDescription className="text-brand-text mt-2">
            {descriptions[formType]}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-brand-heading">
              {t('contactForm.nameLabel') || 'Name'}
            </Label>
            <Input 
              id="name" 
              name="name" 
              required 
              placeholder={t('contactForm.namePlaceholder') || 'Enter your name'} 
              className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-brand-heading">
              {t('contactForm.emailLabel') || 'Email'}
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              required 
              placeholder={t('contactForm.emailPlaceholder') || 'Enter your email'} 
              className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-brand-heading">
              {t('contactForm.messageLabel') || 'Message'}
            </Label>
            <Textarea 
              id="message" 
              name="message" 
              required 
              placeholder={t('contactForm.messagePlaceholder') || 'How can we help you?'} 
              className="resize-none h-24 bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
            />
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="privacy" name="privacy" required />
            <Label 
              htmlFor="privacy" 
              className="text-sm font-normal leading-tight cursor-pointer"
            >
              {t('contactForm.privacyLabel') || 'I agree to the processing of my data as outlined in the privacy policy.'}
            </Label>
          </div>
          
          <DialogFooter className="mt-6 sm:mt-6 flex gap-4">
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline"
                className="flex-1"
              >
                {t('contactForm.cancelButton') || 'Cancel'}
              </Button>
            </DialogClose>
            
            <Button 
              type="submit" 
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {t('contactForm.sendingButton') || 'Sending...'}
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  {t('contactForm.sendButton') || 'Send Message'}
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
