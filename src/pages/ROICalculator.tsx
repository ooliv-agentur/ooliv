import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import ROICalculatorForm from '@/components/roi/ROICalculatorForm';
import ROIResults from '@/components/roi/ROIResults';
import InvestmentRecommendation from '@/components/roi/InvestmentRecommendation';
import { roiCalculatorSchema, ROICalculatorFormValues } from '@/components/roi/ROICalculatorSchema';
import { calculateROI, ROICalculationResult } from '@/components/roi/ROICalculatorLogic';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calculator, TrendingUp, Target } from 'lucide-react';

const ROICalculator = () => {
  const { setLanguage } = useLanguage();
  const [result, setResult] = useState<ROICalculationResult | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);

  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const form = useForm<ROICalculatorFormValues>({
    resolver: zodResolver(roiCalculatorSchema),
    defaultValues: {
      monthlyTraffic: 10000,
      conversionRate: 2.5,
      bounceRate: 65,
      customerAcquisitionCost: 150,
      averageOrderValue: 500,
      engagementModel: 'discovery',
    },
  });

  const onSubmit = (data: ROICalculatorFormValues) => {
    const calculationResult = calculateROI(data);
    setResult(calculationResult);
    setHasCalculated(true);
    
    // Scroll to results
    setTimeout(() => {
      document.getElementById('roi-results')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const breadcrumbs = [
    { name: "Home", url: "https://ooliv.de/" },
    { name: "ROI Calculator", url: "https://ooliv.de/roi-rechner" }
  ];

  return (
    <PageLayout className="overflow-x-hidden">
      <EnhancedSEOHead
        title="ROI Calculator – Strategic Investment Simulation | ooliv"
        description="Berechnen Sie den ROI Ihrer Digital Transformation: Simulieren Sie Business Outcomes basierend auf Ihren aktuellen Metriken und unserem Track Record (+240% Conversion, +180% Lead Quality)."
        canonicalUrl="https://ooliv.de/roi-rechner"
        keywords="ROI Calculator, Digital Transformation ROI, Conversion Optimization ROI, UX Strategy ROI, Investment Simulation"
        breadcrumbs={breadcrumbs}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="floating-circle slow w-32 h-32 top-20 left-10"></div>
          <div className="floating-circle delayed w-40 h-40 top-40 right-20"></div>
          <div className="floating-circle reverse w-24 h-24 bottom-40 left-1/4"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Calculator className="h-8 w-8 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              ROI Calculator
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Berechnen Sie den Return on Investment Ihrer Digital Transformation – basierend auf Ihren aktuellen Metriken und unserem Track Record aus 100+ erfolgreichen Projekten.
            </p>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-card p-4 rounded-xl border border-border">
                <TrendingUp className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">+240%</div>
                <div className="text-xs text-muted-foreground">Avg. Conversion</div>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <Target className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">-45%</div>
                <div className="text-xs text-muted-foreground">CAC Reduction</div>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border">
                <Calculator className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-lg font-bold text-foreground">3-6 Monate</div>
                <div className="text-xs text-muted-foreground">Break-Even</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Form Column */}
                <div>
                  <div className="bg-card p-8 rounded-2xl border border-border sticky top-24">
                    <ROICalculatorForm form={form} />
                    
                    <div className="mt-8 pt-8 border-t border-border">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full group"
                      >
                        ROI berechnen
                        <TrendingUp className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Results Column */}
                <div id="roi-results">
                  {hasCalculated && result ? (
                    <div className="space-y-8">
                      <div className="bg-card p-8 rounded-2xl border border-border">
                        <ROIResults result={result} />
                      </div>
                      
                      <div className="bg-card p-8 rounded-2xl border border-border">
                        <InvestmentRecommendation result={result} />
                      </div>
                    </div>
                  ) : (
                    <div className="bg-muted/30 p-12 rounded-2xl border border-dashed border-border text-center">
                      <Calculator className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Bereit für Ihre ROI-Projektion?
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Geben Sie links Ihre aktuellen Metriken ein und wählen Sie ein Engagement-Modell. 
                        Wir berechnen dann Ihre personalisierte ROI-Projektion basierend auf unserem Track Record.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </Form>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Wie präzise sind diese Projektionen?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Diese Berechnungen basieren auf unserem Track Record aus 100+ Transformationsprojekten mit nachweisbaren Business Outcomes. 
            Die gezeigten Verbesserungsfaktoren (+240% Conversion, -45% CAC) entsprechen realen Case Studies. 
            Tatsächliche Ergebnisse hängen von vielen Faktoren ab – im kostenlosen Strategiegespräch erstellen wir eine detaillierte Analyse Ihrer spezifischen Situation.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Track Record: 16+ Jahre Digital Strategy Leadership · 100+ Transformationen · Messbare Business Outcomes bei B2B-Unternehmen im DACH-Raum
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default ROICalculator;
