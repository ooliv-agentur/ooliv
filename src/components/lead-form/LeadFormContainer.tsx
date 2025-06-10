
import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Form } from "@/components/ui/form";
import { SheetFooter } from "@/components/ui/sheet";
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSchema, FormValues } from './FormSchema';
import { useFormSubmission } from './FormSubmission';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import LeadFormStepIndicator from './LeadFormStepIndicator';
import LeadFormNavigation from './LeadFormNavigation';

interface LeadFormContainerProps {
  onClose: () => void;
}

const LeadFormContainer: React.FC<LeadFormContainerProps> = ({ onClose }) => {
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

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submitForm)} className="space-y-6">
        <LeadFormStepIndicator currentStep={step} totalSteps={totalSteps} />
        
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
        
        <SheetFooter>
          <LeadFormNavigation 
            currentStep={step}
            totalSteps={totalSteps}
            isSubmitting={isSubmitting}
            onPrevStep={prevStep}
            onNextStep={nextStep}
          />
        </SheetFooter>
      </form>
    </Form>
  );
};

export default React.memo(LeadFormContainer);
