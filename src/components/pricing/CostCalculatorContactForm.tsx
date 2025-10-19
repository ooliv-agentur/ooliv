import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CalculationResult } from './CostCalculatorLogic';
import { CalculatorFormValues, projectTypeLabels, cmsTypeLabels, languageLabels, companySizeLabels } from './CostCalculatorSchema';
import { formatEUR } from './utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen lang sein'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  phone: z.string().optional(),
  website: z.string().optional(),
  industry: z.string().min(1, 'Bitte wählen Sie eine Branche'),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen lang sein'),
  privacy: z.boolean().refine((val) => val === true, {
    message: 'Sie müssen die Datenschutzerklärung akzeptieren',
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface CostCalculatorContactFormProps {
  calculationResult: CalculationResult;
  formData: CalculatorFormValues;
}

const industries = [
  'Technologie / Software',
  'Einzelhandel / E-Commerce',
  'Finanzen / Banking',
  'Gesundheit / Medizin',
  'Bildung / Training',
  'Produktion / Industrie',
  'Gastronomie / Tourismus',
  'Bau / Immobilien',
  'Lebensmittel / Restaurant',
  'Beratung / Dienstleistungen',
  'Andere Branche',
];

export const CostCalculatorContactForm: React.FC<CostCalculatorContactFormProps> = ({
  calculationResult,
  formData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Generate pre-filled message
  const generateMessage = () => {
    const selectedLanguages = Object.entries(formData.selectedLanguages)
      .filter(([_, isSelected]) => isSelected)
      .map(([lang, _]) => languageLabels[lang as keyof typeof languageLabels])
      .join(', ');

    const selectedModules = Object.entries(formData.modules)
      .filter(([_, isSelected]) => isSelected)
      .map(([key, _]) => {
        const labels: Record<string, string> = {
          concept: 'Konzeption',
          design: 'Design',
          implementation: 'Umsetzung',
          seo: 'SEO',
          golive: 'GoLive',
          adsSetup: 'Ads-Setup',
          ongoingSeo: 'SEO-Betreuung',
          ongoingAds: 'Ads-Betreuung',
          maintenance: 'Wartung',
        };
        return labels[key] || key;
      })
      .join(', ');

    let message = `Hallo, ich habe den Kosten-Kalkulator genutzt:\n\n`;
    message += `Projektart: ${projectTypeLabels[formData.projectType]}\n`;
    message += `Sprachen: ${selectedLanguages}\n`;
    message += `CMS: ${cmsTypeLabels[formData.cmsType]}\n`;
    message += `Unternehmensgröße: ${companySizeLabels[formData.companySize]}\n`;
    message += `Leistungen: ${selectedModules}\n`;
    message += `Geschätzte Investition: ${formatEUR(calculationResult.rangeMin)} - ${formatEUR(calculationResult.rangeMax)} (netto)\n`;
    
    if (calculationResult.monthlyTotal > 0) {
      message += `Monatlich: ${formatEUR(calculationResult.monthlyTotal)} (netto)\n`;
    }
    
    message += `\nIch interessiere mich für ein detailliertes Angebot.`;
    
    return message;
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      website: '',
      industry: '',
      message: generateMessage(),
      privacy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('leads').insert({
        name: data.name,
        email: data.email,
        phone: data.phone || null,
        company_website: data.website || null,
        industry: data.industry,
        message: data.message,
        source: 'cost_calculator',
        metadata: {
          calculation: calculationResult,
          formData: formData,
        },
      });

      if (error) throw error;

      toast({
        title: 'Vielen Dank!',
        description: 'Wir melden uns innerhalb von 24 Stunden bei Ihnen.',
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Fehler',
        description: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12 pt-12 border-t">
      <h3 className="text-2xl font-bold mb-2">Unverbindliches Angebot anfordern</h3>
      <p className="text-muted-foreground mb-8">
        Füllen Sie das Formular aus und wir erstellen Ihnen ein detailliertes Angebot basierend auf Ihren Anforderungen.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Name *</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Max Mustermann" className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">E-Mail *</FormLabel>
                  <FormControl>
                    <Input {...field} type="email" placeholder="max@beispiel.de" className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Telefon</FormLabel>
                  <FormControl>
                    <Input {...field} type="tel" placeholder="+49 123 456789" className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Unternehmens-Website</FormLabel>
                  <FormControl>
                    <Input {...field} type="url" placeholder="https://ihre-website.de" className="h-12" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Branche *</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Bitte wählen Sie Ihre Branche" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry} value={industry}>
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Ihre Nachricht *</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={8} className="resize-none" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <FormItem className="flex items-start space-x-3 space-y-0">
                <FormControl className="mt-1">
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-base font-normal cursor-pointer leading-relaxed">
                    Ich habe die{' '}
                    <a href="/datenschutz" className="text-primary underline" target="_blank" rel="noopener noreferrer">
                      Datenschutzerklärung
                    </a>{' '}
                    gelesen und akzeptiere diese. *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
            {isSubmitting ? 'Wird gesendet...' : 'Unverbindliches Angebot anfordern'}
          </Button>
        </form>
      </Form>
    </div>
  );
};
