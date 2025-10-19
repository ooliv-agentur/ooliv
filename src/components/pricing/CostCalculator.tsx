import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import CostCalculatorForm from './CostCalculatorForm';
import CostCalculatorResult from './CostCalculatorResult';
import CostCalculatorFAQ from './CostCalculatorFAQ';
import { calculatorSchema, CalculatorFormValues, companySizeLabels, complexityLabels, timelineLabels } from './CostCalculatorSchema';
import { calculateCost, CalculationResult } from './CostCalculatorLogic';
import { formatEUR } from './utils';

const CostCalculator: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [includeVAT, setIncludeVAT] = useState(true);

  const form = useForm<CalculatorFormValues>({
    resolver: zodResolver(calculatorSchema),
    defaultValues: {
      companySize: 'small',
      pages: 8,
      complexity: 'mid',
      languages: 1,
      timeline: undefined,
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
      if (data.companySize && data.pages && data.complexity && data.languages && data.modules) {
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

  const handleRequestConsultation = () => {
    const data = form.getValues();
    const calculationResult = result || calculateCost(data);
    
    const timelineText = data.timeline ? timelineLabels[data.timeline as keyof typeof timelineLabels] : 'Nicht angegeben';
    
    const prefillMessage = `Hallo, ich habe den Kosten-Kalkulator genutzt:

• ${data.pages} Seiten
• ${data.languages} Sprache(n)
• Design-Komplexität: ${complexityLabels[data.complexity]}
• Unternehmensgröße: ${companySizeLabels[data.companySize]}
• Zeitplan: ${timelineText}
• Geschätzte Investition: ${formatEUR(calculationResult.rangeMin)} – ${formatEUR(calculationResult.rangeMax)} (${includeVAT ? 'inkl. USt.' : 'netto'})

Ich interessiere mich für ein detailliertes Angebot.`;

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-lead-form', { 
        detail: { 
          mode: 'project',
          initialData: {
            message: prefillMessage,
          }
        } 
      }));
    }
  };

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <CostCalculatorForm form={form} />
            </div>

            <div>
              <CostCalculatorResult 
                result={result} 
                includeVAT={includeVAT}
                onVATToggle={setIncludeVAT}
                onRequestConsultation={handleRequestConsultation} 
              />
            </div>
          </div>
        </Form>

        <CostCalculatorFAQ />
      </div>
    </section>
  );
};

export default CostCalculator;
