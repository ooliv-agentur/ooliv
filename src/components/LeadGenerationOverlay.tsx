
import React, { useState } from 'react';
import { 
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "@/components/ui/sheet";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Define form schema with Zod
const formSchema = z.object({
  // Step 1
  projectType: z.string().min(1, { message: "Please select a project type" }),
  projectTypeOther: z.string().optional(),
  
  // Step 2
  companyName: z.string().optional(),
  industry: z.string().optional(),
  website: z.string().optional(),
  location: z.string().optional(),
  
  // Step 3
  goal: z.string().min(1, { message: "Please select your main goal" }),
  goalOther: z.string().optional(),
  
  // Step 4
  name: z.string().min(2, { message: "Please enter your name" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  
  const totalSteps = 4;
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      companyName: "",
      industry: "",
      website: "",
      location: "",
      goal: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      projectTypeOther: "",
      goalOther: "",
    },
    mode: "onChange"
  });

  const nextStep = async () => {
    // Validate current step before proceeding
    let isValid = false;
    
    if (step === 1) {
      isValid = await form.trigger('projectType');
      if (form.getValues('projectType') === 'other' && !form.getValues('projectTypeOther')) {
        form.setError('projectTypeOther', { message: 'Please specify your project type' });
        return;
      }
    } else if (step === 2) {
      // Company info step is optional, so always valid
      isValid = true;
    } else if (step === 3) {
      isValid = await form.trigger('goal');
      if (form.getValues('goal') === 'other' && !form.getValues('goalOther')) {
        form.setError('goalOther', { message: 'Please specify your goal' });
        return;
      }
    }
    
    if (isValid && step < totalSteps) {
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    console.log("Form data:", data);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: "Inquiry received!",
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
      });
      
      // Reset form after submission
      setTimeout(() => {
        form.reset();
        setStep(1);
        setSubmitted(false);
        onOpenChange(false);
      }, 3000);
    }, 1500);
  };

  const resetForm = () => {
    form.reset();
    setStep(1);
    setSubmitted(false);
  };

  const closeForm = () => {
    resetForm();
    onOpenChange(false);
  };

  // Step content components
  const StepOne = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium">What are you planning with us?</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="website-relaunch">Website Relaunch</SelectItem>
                  <SelectItem value="new-website">New Website</SelectItem>
                  <SelectItem value="seo-optimization">SEO Optimization</SelectItem>
                  <SelectItem value="lead-generation">Lead Generation / Google Ads</SelectItem>
                  <SelectItem value="ai-content">AI-Powered Content / ChatGPT Integration</SelectItem>
                  <SelectItem value="other">Something Else</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {form.watch("projectType") === "other" && (
          <FormField
            control={form.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Tell us what you need" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </motion.div>
  );

  const StepTwo = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Tell us a bit about your business</h3>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your company name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="technology">Technology / Software</SelectItem>
                  <SelectItem value="retail">Retail / E-commerce</SelectItem>
                  <SelectItem value="finance">Finance / Banking</SelectItem>
                  <SelectItem value="healthcare">Healthcare / Medical</SelectItem>
                  <SelectItem value="education">Education / Training</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing / Industrial</SelectItem>
                  <SelectItem value="hospitality">Hospitality / Tourism</SelectItem>
                  <SelectItem value="construction">Construction / Real Estate</SelectItem>
                  <SelectItem value="food">Food / Restaurant</SelectItem>
                  <SelectItem value="professional">Professional Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website URL</FormLabel>
              <FormControl>
                <Input {...field} placeholder="www.example.com" type="url" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input {...field} placeholder="City, Country" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  );

  const StepThree = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg font-medium">What's your main goal with this project?</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your main goal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="generate-leads">Generate Leads</SelectItem>
                  <SelectItem value="improve-design">Improve Design</SelectItem>
                  <SelectItem value="improve-rankings">Improve Google Rankings</SelectItem>
                  <SelectItem value="launch-brand">Launch a New Brand</SelectItem>
                  <SelectItem value="mobile-ready">Make It Faster / Mobile-Ready</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {form.watch("goal") === "other" && (
          <FormField
            control={form.control}
            name="goalOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Please specify:</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Tell us your goal" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </motion.div>
  );

  const StepFour = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-4"
    >
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Where can we reach you?</h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} placeholder="Your name" required />
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
              <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
              <FormControl>
                <Input {...field} placeholder="your.email@example.com" type="email" required />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input {...field} placeholder="+49 123 456 789" type="tel" />
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
              <FormLabel>Message / Notes</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder="Any additional information about your project"
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </motion.div>
  );

  const ThankYouScreen = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-8 text-center space-y-4"
    >
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
        <CheckCircle className="h-10 w-10 text-green-600" />
      </div>
      <h3 className="text-xl font-bold">Thank you for your inquiry!</h3>
      <p className="text-gray-600 max-w-md">
        We'll be in touch within 24 hours. Want a quicker reply? Call us directly at +49 176 80 16 76 41.
      </p>
      <div className="pt-4">
        <Button onClick={closeForm} variant="outline" className="mt-4">
          Back to Site
        </Button>
      </div>
    </motion.div>
  );

  const renderStepContent = () => {
    if (submitted) {
      return <ThankYouScreen />;
    }
    
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      default:
        return <StepOne />;
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="sm:max-w-md overflow-y-auto" side="right">
        <SheetHeader className="text-left pb-4">
          <SheetTitle className="text-xl font-bold text-brand-primary">
            {submitted ? "Thank You!" : "Let's Start Your Project"}
          </SheetTitle>
          <SheetDescription>
            {submitted ? "We've received your inquiry" : `Step ${step} of ${totalSteps}`}
          </SheetDescription>
        </SheetHeader>
        
        {!submitted && (
          <div className="flex justify-between mb-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index} 
                className={`h-1 flex-1 mx-1 rounded-full ${
                  index + 1 <= step ? "bg-brand-primary" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        )}
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="min-h-[350px]">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>
            
            {!submitted && (
              <SheetFooter className="flex sm:justify-between gap-2 pt-4 border-t">
                {step > 1 && (
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                
                {step < totalSteps ? (
                  <Button 
                    type="button"
                    onClick={nextStep}
                    className="flex-1"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="flex-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </span>
                    ) : (
                      'Finish & Send'
                    )}
                  </Button>
                )}
              </SheetFooter>
            )}
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
};

export default LeadGenerationOverlay;
