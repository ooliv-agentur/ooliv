import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CalculatorFormValues, companySizeLabels, projectTypeLabels, cmsTypeLabels, languageLabels } from './CostCalculatorSchema';
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

      {/* Project Type */}
      <FormField
        control={form.control}
        name="projectType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold leading-none mb-3 block">Projektart</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-2"
              >
                {Object.entries(projectTypeLabels).map(([value, label]) => (
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

      {/* CMS Type */}
      <FormField
        control={form.control}
        name="cmsType"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-base font-semibold leading-none mb-3 block">Technische Umsetzung</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-2"
              >
                {Object.entries(cmsTypeLabels).map(([value, label]) => (
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

      {/* Languages */}
      <FormField
        control={form.control}
        name="selectedLanguages"
        render={() => (
          <FormItem>
            <FormLabel className="text-base font-semibold leading-none mb-3 block">Sprachen</FormLabel>
            <div className="space-y-2">
              {Object.entries(languageLabels).map(([langKey, label]) => (
                <FormField
                  key={langKey}
                  control={form.control}
                  name={`selectedLanguages.${langKey}` as any}
                  render={({ field }) => (
                    <FormItem className={`flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 transition-colors ${langKey === 'de' ? 'bg-muted/30' : 'hover:bg-muted/5'}`}>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={langKey === 'de'}
                        />
                      </FormControl>
                      <FormLabel className={`text-base font-medium leading-none ${langKey === 'de' ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
                        {label}
                        {langKey === 'de' && <span className="text-muted-foreground ml-2">(Standard)</span>}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
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
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Konzeption & Strategie
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.design"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  UX/UI Design
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.implementation"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Technische Umsetzung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.seo"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  SEO-Optimierung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.golive"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  GoLive & Deployment
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.adsSetup"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Ads-Setup (Google/Meta)
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
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
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
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-medium cursor-pointer leading-none">
                  Ads-Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.maintenance"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border border-border p-3 hover:bg-muted/5 transition-colors">
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
