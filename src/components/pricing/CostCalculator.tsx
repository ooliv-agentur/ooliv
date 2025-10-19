import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import CostCalculatorForm from './CostCalculatorForm';
import CostCalculatorResult from './CostCalculatorResult';
import { calculatorSchema, CalculatorFormValues } from './CostCalculatorSchema';
import { calculateCost, CalculationResult } from './CostCalculatorLogic';

const CostCalculator: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      companySize: 'small',
      projectType: 'new',
      cmsType: 'with-cms',
      selectedLanguages: {
        de: true,
        en: false,
        fr: false,
        es: false,
      },
      modules: {
        concept: true,
        design: true,
        implementation: true,
        seo: false,
        golive: false,
        ongoingSeo: false,
        adsSetup: false,
        ongoingAds: false,
        maintenance: false,
      },
    },
  });

  // Live calculation - recalculate whenever form values change
  useEffect(() => {
    const subscription = form.watch((value) => {
      const data = value as CalculatorFormValues;
      // Only calculate if required fields are present
      if (data.companySize && data.projectType && data.cmsType && data.selectedLanguages && data.modules) {
        const calculationResult = calculateCost(data);
        setResult(calculationResult);
      }
    });
    
    // Initial calculation
    const data = form.getValues();
    const calculationResult = calculateCost(data);
    setResult(calculationResult);
    
    return () => subscription.unsubscribe();
  }, [form]);

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Transparenter Kosten-Kalkulator
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            In wenigen Schritten zu Ihrer realistischen Budget-Spanne – ohne Theater.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Richtwerte. Finale Angebote nach kurzem Gespräch (15 Min).
          </p>
        </div>

        <Form {...form}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <CostCalculatorForm form={form} />
            </div>

            <div>
              <CostCalculatorResult 
                result={result} 
                formData={form.getValues()}
              />
            </div>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default CostCalculator;
