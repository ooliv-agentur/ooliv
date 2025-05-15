import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Send, ArrowRight } from 'lucide-react';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

export const ConsultationRequestSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (!formData.privacy) {
      newErrors.privacy = 'You must agree to the privacy policy';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
    
    if (errors.privacy) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.privacy;
        return newErrors;
      });
    }
  };

  const handleSuccess = () => {
    toast({
      title: "Success",
      description: "Your consultation request has been submitted",
      className: "bg-[#004d51] text-white border-[#006064]",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
      privacy: false
    });
    
    // Redirect to thank you page
    setTimeout(() => {
      window.location.href = "/en/thank-you";
    }, 1000);
  };

  const handleError = () => {
    toast({
      title: "Error",
      description: "There was a problem submitting your request",
      variant: "destructive",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        projectType: 'consultation',
        goal: 'consultation_request',
        language: 'en',
        companyName: '',
        industry: '',
        websiteUrl: '',
        location: '',
        phone: ''
      };
      
      const headers = getSupabaseHeaders();
      
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(submissionData)
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        throw new Error(errorData.message || 'Network response was not ok');
      }
      
      handleSuccess();
    } catch (error) {
      console.error('Error submitting form:', error);
      handleError();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-heading mb-3">Request a Free Consultation</h2>
            <p className="text-lg text-brand-text">
              Have questions about your project? Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="Your email address"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
                placeholder="Tell us about your project or questions"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>
            
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="privacy" 
                checked={formData.privacy}
                onCheckedChange={handleCheckboxChange}
                className={errors.privacy ? 'border-red-500' : ''}
              />
              <div>
                <Label 
                  htmlFor="privacy" 
                  className="text-sm font-normal leading-tight cursor-pointer"
                >
                  I agree to the processing of my data as outlined in the privacy policy.
                </Label>
                {errors.privacy && <p className="text-red-500 text-sm">{errors.privacy}</p>}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-brand-primary hover:bg-brand-primaryDark"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>
          </form>
          
          <div className="mt-10 text-center">
            <p className="text-brand-text mb-4">
              Prefer to schedule a call directly?
            </p>
            <Button 
              variant="outline" 
              className="group"
              asChild
            >
              <a href="https://calendly.com/ooliv/30min" target="_blank" rel="noopener noreferrer">
                Book a 30-minute call
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationRequestSection;
