import React from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { CalculatorFormValues, companySizeLabels, complexityLabels, timelineLabels } from './CostCalculatorSchema';
import { parseClampedInt, formatEUR } from './utils';

interface CostCalculatorFormProps {
  form: UseFormReturn<CalculatorFormValues>;
  onCalculate: () => void;
}

const CostCalculatorForm: React.FC<CostCalculatorFormProps> = ({ form, onCalculate }) => {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="companySize"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="company-size">Unternehmensgröße</FormLabel>
            <FormControl>
              <RadioGroup
                id="company-size"
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-2"
                aria-label="Wählen Sie Ihre Unternehmensgröße"
              >
                {(Object.keys(companySizeLabels) as Array<keyof typeof companySizeLabels>).map((key) => (
                  <div key={key} className="flex items-center space-x-2">
                    <RadioGroupItem value={key} id={`size-${key}`} />
                    <label htmlFor={`size-${key}`} className="text-sm cursor-pointer">
                      {companySizeLabels[key]}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="pages"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="pages">Anzahl Seiten</FormLabel>
            <FormControl>
              <Input 
                id="pages"
                type="number" 
                min="1" 
                max="100"
                {...field}
                value={field.value || ''}
                onChange={(e) => {
                  const value = parseClampedInt(e.target.value, 1, 100, 1);
                  field.onChange(value);
                }}
                aria-describedby="pages-description"
              />
            </FormControl>
            <FormDescription id="pages-description" className="text-xs text-muted-foreground">
              1 bis 100 Seiten
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="complexity"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="complexity">Design-Komplexität</FormLabel>
            <FormControl>
              <RadioGroup
                id="complexity"
                onValueChange={field.onChange}
                value={field.value}
                className="flex flex-col space-y-2"
                aria-label="Wählen Sie die Design-Komplexität"
              >
                {(Object.keys(complexityLabels) as Array<keyof typeof complexityLabels>).map((key) => (
                  <div key={key} className="flex items-center space-x-2">
                    <RadioGroupItem value={key} id={`complexity-${key}`} />
                    <label htmlFor={`complexity-${key}`} className="text-sm cursor-pointer">
                      {complexityLabels[key]}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="languages"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="languages">Anzahl Sprachen</FormLabel>
            <FormControl>
              <Input 
                id="languages"
                type="number" 
                min="1" 
                max="10"
                {...field}
                value={field.value || ''}
                onChange={(e) => {
                  const value = parseClampedInt(e.target.value, 1, 10, 1);
                  field.onChange(value);
                }}
                aria-describedby="languages-description"
              />
            </FormControl>
            <FormDescription id="languages-description" className="text-xs text-muted-foreground">
              1 bis 10 Sprachen
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="instances"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="instances">Separate Marken/Instanzen</FormLabel>
            <FormControl>
              <RadioGroup
                id="instances"
                onValueChange={field.onChange}
                value={field.value}
                className="flex space-x-4"
                aria-label="Anzahl separater Websites"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="1" id="instances-1" />
                  <label htmlFor="instances-1" className="text-sm cursor-pointer">1 Website</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="2" id="instances-2" />
                  <label htmlFor="instances-2" className="text-sm cursor-pointer">2 Websites</label>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Leistungsumfang</h3>
        
        <FormField
          control={form.control}
          name="modules.concept"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  id="module-concept"
                />
              </FormControl>
              <label htmlFor="module-concept" className="text-sm cursor-pointer leading-tight">
                Konzept & Strategie ({formatEUR(1500)})
              </label>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modules.design"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  id="module-design"
                />
              </FormControl>
              <label htmlFor="module-design" className="text-sm cursor-pointer leading-tight">
                Webdesign (UX/UI) (ab {formatEUR(2500)})
              </label>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modules.implementation"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  id="module-implementation"
                />
              </FormControl>
              <label htmlFor="module-implementation" className="text-sm cursor-pointer leading-tight">
                Technische Umsetzung (ab {formatEUR(3500)})
              </label>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modules.seo"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  id="module-seo"
                />
              </FormControl>
              <label htmlFor="module-seo" className="text-sm cursor-pointer leading-tight">
                Basis-SEO & 301-Redirects (+{formatEUR(500)})
              </label>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="modules.golive"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox 
                  checked={field.value} 
                  onCheckedChange={field.onChange}
                  id="module-golive"
                />
              </FormControl>
              <label htmlFor="module-golive" className="text-sm cursor-pointer leading-tight">
                GoLive & Schulung (+{formatEUR(500)})
              </label>
            </FormItem>
          )}
        />

        <div className="border-t pt-4 mt-4">
          <h4 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">Laufende Services</h4>
          
          <FormField
            control={form.control}
            name="modules.ongoingSeo"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2 mb-3">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    id="module-ongoing-seo"
                  />
                </FormControl>
                <label htmlFor="module-ongoing-seo" className="text-sm cursor-pointer leading-tight">
                  SEO-Betreuung (ab {formatEUR(400)}/Monat)
                </label>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.adsSetup"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2 mb-3">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    id="module-ads-setup"
                  />
                </FormControl>
                <label htmlFor="module-ads-setup" className="text-sm cursor-pointer leading-tight">
                  Google Ads Setup (+{formatEUR(500)} einmalig)
                </label>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.ongoingAds"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2 mb-3">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    id="module-ongoing-ads"
                  />
                </FormControl>
                <label htmlFor="module-ongoing-ads" className="text-sm cursor-pointer leading-tight">
                  Ads-Betreuung (ab {formatEUR(200)}/Monat)
                </label>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modules.maintenance"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-2">
                <FormControl>
                  <Checkbox 
                    checked={field.value} 
                    onCheckedChange={field.onChange}
                    id="module-maintenance"
                  />
                </FormControl>
                <label htmlFor="module-maintenance" className="text-sm cursor-pointer leading-tight">
                  Wartung & Support (ab {formatEUR(150)}/Monat)
                </label>
              </FormItem>
            )}
          />
        </div>
      </div>

      <FormField
        control={form.control}
        name="timeline"
        render={({ field }) => (
          <FormItem>
            <FormLabel htmlFor="timeline">Ihr Zeitplan (optional)</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger id="timeline" aria-label="Wählen Sie Ihren gewünschten Zeitplan">
                  <SelectValue placeholder="Bitte wählen" />
                </SelectTrigger>
                <SelectContent>
                  {(Object.keys(timelineLabels) as Array<keyof typeof timelineLabels>).map((key) => (
                    <SelectItem key={key} value={key}>
                      {timelineLabels[key]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormDescription className="text-xs text-muted-foreground">
              Ihre Präferenz hilft uns bei der Planung
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />

      <Button 
        type="button"
        onClick={onCalculate}
        size="lg"
        className="w-full"
      >
        Kalkulation berechnen
      </Button>
    </div>
  );
};

export default React.memo(CostCalculatorForm);
