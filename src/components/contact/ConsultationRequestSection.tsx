
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail } from 'lucide-react';

// Form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ConsultationRequestSectionProps {
  requestAudit?: () => void;
}

const ConsultationRequestSection = ({ requestAudit }: ConsultationRequestSectionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const functionUrl = `https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/sendProjectForm`;
      
      // Format the data to match what the function expects
      const formData = {
        projectType: "consultation",
        companyName: data.company || '',
        industry: '',
        name: data.name,
        email: data.email,
        message: data.message || ''
      };
      
      const response = await fetch(functionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit consultation request');
      }
      
      toast({
        title: "Request sent!",
        description: "We'll get back to you soon to schedule your consultation.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to relaunch your website?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Book a free consultation and let's talk about your business goals, digital presence, and how we can help.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-brand-backgroundAlt p-8 rounded-lg shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Your company" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project or goals" 
                            className="resize-none h-32 bg-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : 'Request consultation'}
                  </Button>
                </form>
              </Form>
              
              {requestAudit && (
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-3">Want us to review your current site first?</p>
                  <Button 
                    variant="outline" 
                    onClick={requestAudit}
                  >
                    Request website audit
                  </Button>
                </div>
              )}
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Prefer email?</h3>
                  <div className="flex items-center gap-3 text-lg">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <span>Reach out directly at <strong>info@ooliv.de</strong></span>
                  </div>
                  <p className="mt-3 text-gray-600">
                    All communication is handled personally by our founder and CEO.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Why work with us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Direct communication with our CEO</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Fast response times and decisive action</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Strategic thinking, not just implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Focus on business results, not just design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationRequestSection;
