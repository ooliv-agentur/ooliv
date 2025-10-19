import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { CalculatorFormValues, companySizeLabels, projectTypeLabels, cmsTypeLabels, languageLabels } from './CostCalculatorSchema';
import {
  FormControl,
  FormDescription,
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
            <FormLabel className="text-base font-semibold">Unternehmensgröße</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-3"
              >
                {Object.entries(companySizeLabels).map(([value, label]) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
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
            <FormLabel className="text-base font-semibold">Projektart</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-3"
              >
                {Object.entries(projectTypeLabels).map(([value, label]) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                      {label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription className="text-sm">
              Relaunch spart ca. 15%, da Struktur/Content teilweise vorhanden
            </FormDescription>
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
            <FormLabel className="text-base font-semibold">Technische Umsetzung</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                value={field.value}
                className="space-y-3"
              >
                {Object.entries(cmsTypeLabels).map(([value, label]) => (
                  <FormItem key={value} className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                      {label}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormDescription className="text-sm">
              CMS ermöglicht eigenständige Content-Pflege (WordPress, Webflow, etc.)
            </FormDescription>
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
            <FormLabel className="text-base font-semibold">Sprachen</FormLabel>
            <FormDescription className="text-sm mb-3">
              Jede zusätzliche Sprache erhöht die Kosten um ca. 25%
            </FormDescription>
            <div className="space-y-3">
              {Object.entries(languageLabels).map(([langKey, label]) => (
                <FormField
                  key={langKey}
                  control={form.control}
                  name={`selectedLanguages.${langKey}` as any}
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 space-y-0">
                      <FormControl className="mt-1">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={langKey === 'de'}
                        />
                      </FormControl>
                      <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
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
        <FormLabel className="text-base font-semibold mb-4 block">Leistungsumfang</FormLabel>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="modules.concept"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  Konzeption & Strategie
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.design"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  UX/UI Design
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.implementation"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  Technische Umsetzung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.seo"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  SEO-Optimierung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.golive"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  GoLive & Deployment
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.adsSetup"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  Ads-Setup (Google/Meta)
                </FormLabel>
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Ongoing Services */}
      <div>
        <FormLabel className="text-base font-semibold mb-4 block">Laufende Services (monatlich)</FormLabel>
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="modules.ongoingSeo"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  SEO-Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.ongoingAds"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                  Ads-Betreuung
                </FormLabel>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.maintenance"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
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
