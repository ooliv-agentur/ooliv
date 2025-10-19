import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CalculatorFormValues, companySizeLabels } from './CostCalculatorSchema';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface CostCalculatorFormProps {
  form: UseFormReturn<CalculatorFormValues>;
}

const CostCalculatorForm: React.FC<CostCalculatorFormProps> = ({ form }) => {
  return (
    <div className="space-y-6">
      {/* Company Size */}
      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold leading-none mb-3 block">Unternehmensgröße</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-2"
              >
                {Object.entries(companySizeLabels).map(([value, label]) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="text-base font-medium cursor-pointer leading-none">
                      {label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Multilingual */}
      <FormField
        control={form.control}
        name="multilingual"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold leading-none mb-3 block">Sprachen</FormLabel>
            <div className="space-y-2">
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background">
                <Checkbox checked={true} disabled />
                <FormLabel className="text-base font-medium cursor-not-allowed leading-none">
                  Einsprachig (Deutsch)
                </FormLabel>
              </FormItem>
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Mehrsprachig
                </FormLabel>
              </FormItem>
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Modules - One-time Services */}
      <div>
        <FormLabel className="text-base font-semibold leading-none mb-3 block">Leistungsumfang</FormLabel>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="modules.concept"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background">
                <Checkbox checked={field.value} disabled />
                <FormLabel className="text-base font-medium cursor-not-allowed leading-none">
                  Konzeption & Strategie
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.design"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background">
                <Checkbox checked={field.value} disabled />
                <FormLabel className="text-base font-medium cursor-not-allowed leading-none">
                  UX/UI Design
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.implementation"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background">
                <Checkbox checked={field.value} disabled />
                <FormLabel className="text-base font-medium cursor-not-allowed leading-none">
                  Technische Umsetzung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.seo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background">
                <Checkbox checked={field.value} disabled />
                <FormLabel className="text-base font-medium cursor-not-allowed leading-none">
                  Onpage SEO, Redirects & Go-Live
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.adsSetup"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Google Ads Setup
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Ongoing Services */}
      <div>
        <FormLabel className="text-base font-semibold leading-none mb-3 block">Laufende Services (monatlich)</FormLabel>
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="modules.ongoingSeo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  SEO-Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.ongoingAds"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Google Ads Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.maintenance"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 bg-background hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Wartung & Support
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(CostCalculatorForm);
