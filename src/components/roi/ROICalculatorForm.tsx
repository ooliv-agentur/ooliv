import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ROICalculatorFormValues } from './ROICalculatorSchema';
import { TrendingUp, Users, MousePointer, Euro, ShoppingCart } from 'lucide-react';

interface ROICalculatorFormProps {
  form: UseFormReturn<ROICalculatorFormValues>;
}

const ROICalculatorForm: React.FC<ROICalculatorFormProps> = ({ form }) => {
  return (
    <div className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Ihre aktuellen Metriken
        </h3>

        <FormField
          control={form.control}
          name="monthlyTraffic"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                Monatlicher Website-Traffic
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="z.B. 10000"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Anzahl der Besucher pro Monat
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="conversionRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <MousePointer className="h-4 w-4 text-muted-foreground" />
                Conversion Rate (%)
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="z.B. 2.5"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Prozentsatz der Besucher, die konvertieren
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bounceRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bounce Rate (%)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.1"
                  placeholder="z.B. 65"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Prozentsatz der Besucher, die sofort wieder abspringen
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="customerAcquisitionCost"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <Euro className="h-4 w-4 text-muted-foreground" />
                Customer Acquisition Cost (CAC)
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="z.B. 150"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Kosten pro gewonnenem Kunden in Euro
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="averageOrderValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2">
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                Durchschnittlicher Bestellwert
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="z.B. 500"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Durchschnittlicher Umsatz pro Conversion in Euro
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="pt-6 border-t border-border">
        <FormField
          control={form.control}
          name="engagementModel"
          render={({ field }) => (
            <FormItem className="space-y-4">
              <FormLabel className="text-xl font-bold">
                Gewünschtes Engagement-Modell
              </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="space-y-4"
                >
                  <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="discovery" id="discovery" className="mt-1" />
                    <label htmlFor="discovery" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-foreground mb-1">
                        Strategic Discovery Package
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        €15k–€25k · 4–6 Wochen
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Strategic Discovery, UX Audit & Quick Wins – moderate Verbesserungen mit schnellem ROI
                      </div>
                    </label>
                  </div>

                  <div className="flex items-start space-x-3 p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                    <RadioGroupItem value="transformation" id="transformation" className="mt-1" />
                    <label htmlFor="transformation" className="flex-1 cursor-pointer">
                      <div className="font-semibold text-foreground mb-1">
                        End-to-End Product & UX Transformation
                      </div>
                      <div className="text-sm text-muted-foreground mb-2">
                        €40k–€80k · 8–16 Wochen
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Komplette Transformation – signifikante KPI-Verbesserungen basierend auf Track Record
                      </div>
                    </label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ROICalculatorForm;
