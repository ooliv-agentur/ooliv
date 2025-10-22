import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CalculationResult } from "./CostCalculatorLogic";
import { CalculatorFormValues } from "./CostCalculatorSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name erforderlich"),
  email: z.string().email("Gültige E-Mail erforderlich"),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: "Datenschutz muss akzeptiert werden",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface CostCalculatorContactFormProps {
  calculationResult: CalculationResult;
  formData: CalculatorFormValues;
}

export const CostCalculatorContactForm: React.FC<CostCalculatorContactFormProps> = ({
  calculationResult,
  formData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const generateMessage = () => {
    const { rangeMin, rangeMax, monthlyTotal, breakdown } = calculationResult;
    const { multilingual, modules } = formData;

    let selectedServices = [];
    if (modules.adsSetup) selectedServices.push('Google Ads Setup');
    if (modules.ongoingSeo) selectedServices.push('SEO-Betreuung');
    if (modules.ongoingAds) selectedServices.push('Google Ads Betreuung');
    if (modules.maintenance) selectedServices.push('Wartung & Support');

    return `Geschätzte Investition: ${rangeMin.toLocaleString('de-DE')} € - ${rangeMax.toLocaleString('de-DE')} € (netto)
${monthlyTotal > 0 ? `Monatlich: ${monthlyTotal.toLocaleString('de-DE')} €\n` : ''}Sprachen: ${multilingual ? 'Mehrsprachig' : 'Einsprachig'}
${selectedServices.length > 0 ? `Zusätzliche Services: ${selectedServices.join(', ')}\n` : ''}
Ich interessiere mich für ein detailliertes Angebot.`;
  };

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      acceptPrivacy: false,
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('message', generateMessage());

      const response = await fetch('https://formspree.io/f/xblzbyje', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (!response.ok) throw new Error('Fehler beim Senden');

      toast.success("Anfrage erfolgreich gesendet!");
      form.reset();
      
      // Redirect to thank you page after short delay
      setTimeout(() => {
        navigate('/danke');
      }, 1000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Fehler beim Senden. Bitte erneut versuchen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background border rounded-xl p-6">
      <h3 className="text-lg font-bold mb-4">Angebot anfragen</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Name *</FormLabel>
                  <FormControl>
                    <Input className="h-10" placeholder="Ihr Name" {...field} />
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
                  <FormLabel className="text-sm">E-Mail *</FormLabel>
                  <FormControl>
                    <Input className="h-10" type="email" placeholder="ihre@email.de" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="acceptPrivacy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-border p-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="text-sm font-normal">
                    Ich akzeptiere die{" "}
                    <a
                      href="/datenschutz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Datenschutzerklärung
                    </a>
                    {" "}*
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <div className="space-y-3">
            <p className="text-sm text-center text-muted-foreground">
              Sie erhalten Ihr individuelles Angebot innerhalb von 24 Stunden
            </p>
            
            <Button 
              type="submit" 
              size="default"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
            </Button>

            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                ✓ SSL-verschlüsselt
              </span>
              <span className="flex items-center gap-1">
                ✓ Unverbindlich
              </span>
              <span className="flex items-center gap-1">
                ✓ Kostenlose Beratung
              </span>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
