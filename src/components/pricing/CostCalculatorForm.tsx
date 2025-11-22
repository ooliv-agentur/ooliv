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
    <div className="space-y-8">
      {/* Company Size */}
      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-lg font-bold text-[#0D0D0D] mb-4 block">Unternehmensgröße</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {Object.entries(companySizeLabels).map(([value, label]) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
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

      {/* Leistungsumfang & Laufende Services in 2 columns on desktop */}
      <div className="grid grid-cols-1 gap-8">
        {/* Modules - One-time Services */}
        <div>
          <FormLabel className="text-lg font-bold text-[#0D0D0D] mb-4 block">Leistungsumfang</FormLabel>
          <div className="space-y-3">
            <FormField
              control={form.control}
              name="modules.concept"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4">
                  <Checkbox checked={field.value} disabled />
                  <FormLabel className="text-base font-medium cursor-not-allowed leading-tight text-[#666666]">
                    Konzeption & Strategie
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modules.design"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4">
                  <Checkbox checked={field.value} disabled />
                  <FormLabel className="text-base font-medium cursor-not-allowed leading-tight text-[#666666]">
                    UX/UI Design
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modules.implementation"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4">
                  <Checkbox checked={field.value} disabled />
                  <FormLabel className="text-base font-medium cursor-not-allowed leading-tight text-[#666666]">
                    Technische Umsetzung
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modules.seo"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4">
                  <Checkbox checked={field.value} disabled />
                  <FormLabel className="text-base font-medium cursor-not-allowed leading-tight text-[#666666]">
                    Onpage SEO, Redirects & Go-Live
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modules.adsSetup"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
                    Google Ads Setup
                  </FormLabel>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="modules.branding"
              render={({ field }) => (
                <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
                    Branding & Logo Design
                  </FormLabel>
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Ongoing Services */}
        <div>
          <FormLabel className="text-lg font-bold text-[#0D0D0D] mb-4 block">Laufende Services (monatlich)</FormLabel>
          <div className="space-y-3">
          <FormField
            control={form.control}
            name="modules.ongoingSeo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
                  SEO-Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.ongoingAds"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
                  Google Ads Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.maintenance"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-xl border-2 border-[#E5E5E5] bg-white p-4 hover:border-[#2DAEAA] hover:bg-[#2DAEAA]/5 transition-all cursor-pointer">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-tight text-[#0D0D0D]">
                  Wartung & Support
                </FormLabel>
              </FormItem>
            )}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CostCalculatorForm);
