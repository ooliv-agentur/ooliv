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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from '@/contexts/LanguageContext';

interface LeadGenerationOverlayProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadGenerationOverlay = ({ open, onOpenChange }: LeadGenerationOverlayProps) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const { language } = useLanguage();
  
  const totalSteps = 4;
  
  const validationMessages = {
    projectType: language === 'de' 
      ? "Bitte wählen Sie einen Projekttyp aus" 
      : "Please select a project type",
    name: language === 'de'
      ? "Bitte geben Sie Ihren Namen ein"
      : "Please enter your name",
    email: language === 'de'
      ? "Bitte geben Sie eine gültige E-Mail-Adresse ein"
      : "Please enter a valid email address",
    goal: language === 'de'
      ? "Bitte wählen Sie ein Ziel aus"
      : "Please select your main goal",
    otherProjectType: language === 'de'
      ? "Bitte geben Sie Ihren Projekttyp an"
      : "Please specify your project type",
    otherGoal: language === 'de'
      ? "Bitte geben Sie Ihr Ziel an"
      : "Please specify your goal",
    industry: language === 'de'
      ? "Bitte wählen Sie eine Branche aus"
      : "Please select an industry"
  };
  
  const formSchema = z.object({
    projectType: z.string().min(1, { message: validationMessages.projectType }),
    projectTypeOther: z.string().optional(),
    
    companyName: z.string().optional(),
    industry: z.string().min(1, { message: validationMessages.industry }),
    website: z.string().optional(),
    location: z.string().optional(),
    
    goal: z.string().min(1, { message: validationMessages.goal }),
    goalOther: z.string().optional(),
    
    name: z.string().min(2, { message: validationMessages.name }),
    email: z.string().email({ message: validationMessages.email }),
    phone: z.string().optional(),
    message: z.string().optional(),
  });

  type FormValues = z.infer<typeof formSchema>;
  
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
    mode: "onTouched"
  });

  const stepTitle = language === 'de' ? "Schritt" : "Step";
  const letsStartTitle = language === 'de' ? "Starten Sie Ihr Projekt" : "Let's Start Your Project";
  const whatArePlanning = language === 'de' ? "Was planen Sie mit uns?" : "What are you planning with us?";
  const selectProjectType = language === 'de' ? "Projekttyp auswählen" : "Select project type";
  const pleaseSpecify = language === 'de' ? "Bitte spezifizieren:" : "Please specify:";
  const tellUsWhat = language === 'de' ? "Erzählen Sie uns, was Sie benötigen" : "Tell us what you need";

  const nextStep = async () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = await form.trigger('projectType');
      if (form.getValues('projectType') === 'other' && !form.getValues('projectTypeOther')) {
        form.setError('projectTypeOther', { message: validationMessages.otherProjectType });
        return;
      }
    } else if (step === 2) {
      isValid = await form.trigger('industry');
    } else if (step === 3) {
      isValid = await form.trigger('goal');
      if (form.getValues('goal') === 'other' && !form.getValues('goalOther')) {
        form.setError('goalOther', { message: validationMessages.otherGoal });
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
    
    console.log("Form data:", data);
    
    fetch("https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/sendProjectForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(result => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      toast({
        title: language === 'de' ? "Anfrage erhalten!" : "Inquiry received!",
        description: language === 'de' ? "Wir melden uns innerhalb von 24 Stunden bei Ihnen." : "We'll get back to you within 24 hours.",
        duration: 5000,
      });
    })
    .catch(error => {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      
      toast({
        title: language === 'de' ? "Fehler" : "Error",
        description: language === 'de' 
          ? "Es gab ein Problem bei der Übermittlung Ihrer Anfrage. Bitte versuchen Sie es erneut." 
          : "There was a problem submitting your request. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    });
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

  const redirectToHome = () => {
    window.location.href = '/';
  };

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
              <FormLabel className="text-lg font-medium text-white">{whatArePlanning}</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder={selectProjectType} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  <SelectItem value="website-relaunch">
                    {language === 'de' ? "Relaunch einer bestehenden Website" : "Relaunch of an existing website"}
                  </SelectItem>
                  <SelectItem value="new-website">
                    {language === 'de' ? "Neue Website erstellen" : "Create a new website"}
                  </SelectItem>
                  <SelectItem value="seo-optimization">
                    {language === 'de' ? "SEO-Optimierung" : "SEO Optimization"}
                  </SelectItem>
                  <SelectItem value="lead-generation">
                    {language === 'de' ? "Lead-Generierung mit Google Ads" : "Lead Generation with Google Ads"}
                  </SelectItem>
                  <SelectItem value="ai-content">
                    {language === 'de' ? "KI-Inhalte & ChatGPT-Integration" : "AI Content & ChatGPT Integration"}
                  </SelectItem>
                  <SelectItem value="other">
                    {language === 'de' ? "Sonstiges / individuelles Anliegen" : "Other / Custom Request"}
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        {form.watch("projectType") === "other" && (
          <FormField
            control={form.control}
            name="projectTypeOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input {...field} placeholder={tellUsWhat} className="bg-white/10 border-white/20 text-white placeholder:text-white/60" />
                </FormControl>
                <FormMessage className="text-[#ff6b6b]" />
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
        <h3 className="text-lg font-medium text-white">
          {language === 'de' 
            ? "Erzählen Sie uns etwas über Ihr Unternehmen" 
            : "Tell us a bit about your business"}
        </h3>
        <FormField
          control={form.control}
          name="companyName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Unternehmensname" : "Company Name"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Name Ihres Unternehmens" 
                    : "Your company name"
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="industry"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Branche" : "Industry"}
              </FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white">
                    <SelectValue 
                      placeholder={language === 'de' 
                        ? "Branche auswählen" 
                        : "Select your industry"
                      } 
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  {language === 'de' ? (
                    <>
                      <SelectItem value="technology">Technologie / Software</SelectItem>
                      <SelectItem value="retail">Einzelhandel / E-Commerce</SelectItem>
                      <SelectItem value="finance">Finanzen / Banking</SelectItem>
                      <SelectItem value="healthcare">Gesundheit / Medizin</SelectItem>
                      <SelectItem value="education">Bildung / Training</SelectItem>
                      <SelectItem value="manufacturing">Produktion / Industrie</SelectItem>
                      <SelectItem value="hospitality">Gastronomie / Tourismus</SelectItem>
                      <SelectItem value="construction">Bau / Immobilien</SelectItem>
                      <SelectItem value="food">Lebensmittel / Restaurant</SelectItem>
                      <SelectItem value="professional">Beratung / Dienstleistungen</SelectItem>
                      <SelectItem value="other">Andere Branche</SelectItem>
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Website URL" : "Website URL"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder="www.example.com" 
                  type="url"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Standort" : "Location"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Stadt, Land" 
                    : "City, Country"
                  }
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
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
              <FormLabel className="text-lg font-medium text-white">
                {language === 'de' 
                  ? "Was ist das Hauptziel Ihres Projekts?" 
                  : "What's your main goal with this project?"}
              </FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="w-full bg-white/10 border-white/20 text-white">
                    <SelectValue 
                      placeholder={language === 'de' 
                        ? "Hauptziel auswählen" 
                        : "Select your main goal"} 
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1e2830] text-white border-white/20">
                  {language === 'de' ? (
                    <>
                      <SelectItem value="generate-leads">Leads generieren</SelectItem>
                      <SelectItem value="improve-design">Design verbessern</SelectItem>
                      <SelectItem value="improve-rankings">Google-Rankings steigern</SelectItem>
                      <SelectItem value="launch-brand">Neue Marke einführen</SelectItem>
                      <SelectItem value="mobile-ready">Schneller machen / Mobil optimieren</SelectItem>
                      <SelectItem value="other">Anderes Ziel</SelectItem>
                    </>
                  ) : (
                    <>
                      <SelectItem value="generate-leads">Generate Leads</SelectItem>
                      <SelectItem value="improve-design">Improve Design</SelectItem>
                      <SelectItem value="improve-rankings">Improve Google Rankings</SelectItem>
                      <SelectItem value="launch-brand">Launch a New Brand</SelectItem>
                      <SelectItem value="mobile-ready">Make It Faster / Mobile-Ready</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </>
                  )}
                </SelectContent>
              </Select>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        {form.watch("goal") === "other" && (
          <FormField
            control={form.control}
            name="goalOther"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">{pleaseSpecify}</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    placeholder={language === 'de' 
                      ? "Erzählen Sie uns Ihr Ziel" 
                      : "Tell us your goal"
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                  />
                </FormControl>
                <FormMessage className="text-[#ff6b6b]" />
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
        <h3 className="text-lg font-medium text-white">
          {language === 'de' ? "Wie können wir Sie erreichen?" : "Where can we reach you?"}
        </h3>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Name" : "Name"} <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "Ihr Name" : "Your name"} 
                  required 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "E-Mail-Adresse" : "Email"} <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "ihre@emailadresse.de" : "your.email@example.com"} 
                  type="email" 
                  required 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Telefonnummer" : "Phone"}
              </FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  placeholder={language === 'de' ? "z. B. +49 123 456 789" : "+49 123 456 789"} 
                  type="tel" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60" 
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">
                {language === 'de' ? "Nachricht oder Hinweise" : "Message / Notes"}
              </FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  placeholder={language === 'de' 
                    ? "Gibt es etwas, das wir vorab wissen sollten?" 
                    : "Any additional information about your project"
                  }
                  className="min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </FormControl>
              <FormMessage className="text-[#ff6b6b]" />
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
      <h3 className="text-xl font-bold">
        {language === 'de' ? "Vielen Dank!" : "Thank you!"}
      </h3>
      <p className="text-gray-200 max-w-md">
        {language === 'de'
          ? "Ihre Anfrage wurde erfolgreich übermittelt."
          : "Your request has been successfully submitted."
        }
      </p>
      <p className="text-gray-300 max-w-md">
        {language === 'de'
          ? "Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen. Für dringende Anfragen erreichen Sie uns direkt unter +49 176 80 16 76 41."
          : "We'll usually get back to you within 24 hours. For urgent inquiries, you can reach us directly at +49 176 80 16 76 41."
        }
      </p>
      <div className="pt-4">
        <Button onClick={redirectToHome} variant="outline" className="mt-4">
          {language === 'de' ? "Zurück zur Website" : "Back to Site"}
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
      <SheetContent className="sm:max-w-md overflow-y-auto bg-[#1a2630] text-white border-l border-white/10" side="right">
        <SheetHeader className="text-left pb-4">
          <SheetTitle className="text-xl font-bold text-white">
            {submitted ? (language === 'de' ? "Vielen Dank!" : "Thank You!") : letsStartTitle}
          </SheetTitle>
          <SheetDescription className="text-white/70">
            {submitted 
              ? (language === 'de' ? "Ihre Anfrage wurde erfolgreich übermittelt" : "Your request has been successfully submitted") 
              : `${stepTitle} ${step} ${language === 'de' ? 'von' : 'of'} ${totalSteps}`}
          </SheetDescription>
        </SheetHeader>
        
        {!submitted && (
          <div className="flex justify-between mb-6">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div 
                key={index} 
                className={`h-1 flex-1 mx-1 rounded-full ${
                  index + 1 <= step ? "bg-[#006064]" : "bg-gray-600"
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
              <SheetFooter className="flex sm:justify-between gap-2 pt-4 border-t border-white/10">
                {step > 1 && (
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    className="flex-1 border-white/20 text-white hover:bg-white/10 hover:text-white"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {language === 'de' ? "Zurück" : "Back"}
                  </Button>
                )}
                
                {step < totalSteps ? (
                  <Button 
                    type="button"
                    onClick={nextStep}
                    className="flex-1 bg-[#006064] hover:bg-[#004d51] text-white"
                  >
                    {language === 'de' ? "Weiter" : "Next"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button 
                    type="submit"
                    className="flex-1 bg-[#006064] hover:bg-[#004d51] text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        {language === 'de' ? "Wird gesendet..." : "Sending..."}
                      </span>
                    ) : (
                      language === 'de' ? 'Abschließen & Senden' : 'Finish & Send'
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
