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
      companySize: 'xs',
      multilingual: false,
      modules: {
        concept: true,
        design: true,
        implementation: true,
        seo: true,
        adsSetup: false,
        branding: false,
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
      if (data.companySize && data.modules) {
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
    <section className="py-20 sm:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#0D0D0D]">
            Ihre Investition in digitale Klarheit
          </h2>
          <p className="text-lg sm:text-xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
            Transparente Richtwerte für Ihr Projekt. Finales Angebot nach kostenlosem 15-Minuten-Gespräch.
          </p>
        </div>

        {/* Calculator Container with grey background */}
        <div className="bg-[#F7F8FC] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-[#E5E5E5]">
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
      </div>
    </section>
  );
};

export default CostCalculator;
