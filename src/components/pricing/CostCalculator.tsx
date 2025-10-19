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
      cmsType: 'with-cms',
      multilingual: false,
      modules: {
        concept: false,
        design: true,
        implementation: true,
        seo: false,
        adsSetup: false,
        ongoingSeo: false,
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
      if (data.companySize && data.cmsType !== undefined && data.modules) {
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
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Kosten-Kalkulator
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Transparente Richtwerte. Finales Angebot nach 15-Min-Gespräch.
          </p>
        </div>

        <Form {...form}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
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
