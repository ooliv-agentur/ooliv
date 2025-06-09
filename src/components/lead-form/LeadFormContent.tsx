
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Form } from "@/components/ui/form";
import { SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSchema, FormValues } from './FormSchema';
import { useFormSubmission } from './FormSubmission';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';

interface LeadFormContentProps {
  onClose: () => void;
}

const LeadFormContent: React.FC<LeadFormContentProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useLanguage();
  const { formSchema } = useFormSchema();
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
    mode: "onTouched",
  });

  const watchProjectType = form.watch("projectType");
  const watchGoal = form.watch("goal");

  const onSuccessfulSubmission = useCallback(() => {
    // No need to set submitted state as we'll redirect to the thank you page
    // Just perform any cleanup necessary
    form.reset();
  }, [form]);

  const { submitForm } = useFormSubmission(onSuccessfulSubmission, setIsSubmitting);

  const resetForm = useCallback(() => {
    form.reset();
    setStep(1);
  }, [form]);

  const closeForm = useCallback(() => {
    resetForm();
    onClose();
  }, [resetForm, onClose]);

  const nextStep = useCallback(async () => {
    let isValid = false;
    
    if (step === 1) {
      isValid = await form.trigger('projectType');
      if (watchProjectType === 'other' && !form.getValues('projectTypeOther')) {
        form.setError('projectTypeOther', { 
          message: language === 'de' 
            ? "Bitte geben Sie Ihren Projekttyp an" 
            : "Please specify your project type" 
        });
        return;
      }
    } else if (step === 2) {
      isValid = await form.trigger('industry');
    } else if (step === 3) {
      isValid = await form.trigger('goal');
      if (watchGoal === 'other' && !form.getValues('goalOther')) {
        form.setError('goalOther', { 
          message: language === 'de' 
            ? "Bitte geben Sie Ihr Ziel an" 
            : "Please specify your goal"
        });
        return;
      }
    }
    
    if (isValid && step < totalSteps) {
      setStep(prev => prev + 1);
    }
  }, [step, form, language, watchProjectType, watchGoal, totalSteps]);

  const prevStep = useCallback(() => {
    if (step > 1) {
      setStep(prev => prev - 1);
    }
  }, [step]);

  const renderStepContent = useCallback(() => {
    switch (step) {
      case 1:
        return <StepOne form={form} />;
      case 2:
        return <StepTwo form={form} />;
      case 3:
        return <StepThree form={form} />;
      case 4:
        return <StepFour form={form} />;
      default:
        return <StepOne form={form} />;
    }
  }, [step, form]);

  const stepTitle = language === 'de' ? "Schritt" : "Step";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-6">
        {/* Step indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    stepNumber === step 
                      ? 'bg-medico-turquoise text-white' 
                      : stepNumber < step 
                        ? 'bg-medico-mint text-medico-darkGreen' 
                        : 'bg-white/20 text-white/70'
                  }`}
                >
                  {stepNumber}
                </div>
                {stepNumber < 4 && (
                  <div 
                    className={`w-8 h-0.5 ${
                      stepNumber < step ? 'bg-medico-mint' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-6">
          <p className="text-medico-mint text-sm font-medium">
            {stepTitle} {step} {language === 'de' ? 'von' : 'of'} {totalSteps}
          </p>
        </div>
        
        <div dangerouslySetInnerHTML={{ 
          __html: `
            <style>
              .text-destructive {
                color: #ff6b6b !important;
              }
              .text-destructive-foreground {
                color: #ff6b6b !important;
              }
              .bg-destructive, .bg-red-900\/20 {
                background-color: rgba(255, 107, 107, 0.15) !important;
                border: 1px solid #ff6b6b !important;
                color: #ff6b6b !important;
                padding: 0.5rem;
                border-radius: 0.375rem;
              }
            </style>
          `
        }} />
        
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            {renderStepContent()}
          </AnimatePresence>
        </div>
        
        <SheetFooter className="flex sm:justify-between gap-3 pt-6 border-t border-medico-turquoise/20">
          {step > 1 && (
            <Button 
              type="button"
              variant="outline"
              onClick={prevStep}
              className="flex-1 border-medico-mint text-medico-mint hover:bg-medico-mint hover:text-medico-darkGreen"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              {language === 'de' ? "Zurück" : "Back"}
            </Button>
          )}
          
          {step < totalSteps ? (
            <Button 
              type="button"
              onClick={nextStep}
              className="flex-1 bg-medico-turquoise hover:bg-medico-turquoise/90 text-white font-semibold h-12"
            >
              {language === 'de' ? "Weiter" : "Next"}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          ) : (
            <Button 
              type="submit"
              className="flex-1 bg-medico-turquoise hover:bg-medico-turquoise/90 text-white font-semibold h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  {language === 'de' ? "Wird gesendet..." : "Sending..."}
                </span>
              ) : (
                language === 'de' ? 'Abschließen & Senden' : 'Finish & Send'
              )}
            </Button>
          )}
        </SheetFooter>
      </form>
    </Form>
  );
};

export default React.memo(LeadFormContent);
