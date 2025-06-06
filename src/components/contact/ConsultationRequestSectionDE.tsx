import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Mail } from 'lucide-react';
import { getSupabaseHeaders, SEND_PROJECT_FORM_URL } from '@/utils/apiUtils';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
});

type FormValues = z.infer<typeof formSchema>;

interface ConsultationRequestSectionDEProps {
  requestAudit?: () => void;
}

const ConsultationRequestSectionDE = ({ requestAudit }: ConsultationRequestSectionDEProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    if (!data.name || !data.email || !data.message) {
      console.error("Formular-Übermittlung abgebrochen: Erforderliche Daten fehlen");
      return;
    }
    
    setIsSubmitting(true);
    console.log("Anfrage wird gesendet:", data);
    
    try {
      const formData = {
        projectType: "consultation",
        companyName: data.company || '',
        industry: '',
        name: data.name,
        email: data.email,
        message: data.message || '',
        websiteUrl: '',
        location: '',
        goal: 'website_consultation',
        phone: '',
        language: 'de' // This is the German component, so hardcode 'de'
      };
      
      const headers = getSupabaseHeaders();
      console.log("ConsultationRequestSectionDE - Headers being sent:", headers);
      
      const response = await fetch(SEND_PROJECT_FORM_URL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(formData)
      });
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Serverfehlerdaten:", errorData);
        throw new Error(errorData.message || 'Netzwerkantwort war nicht in Ordnung');
      }
      
      const responseData = await response.json();
      console.log("Formular erfolgreich gesendet:", responseData);
      
      toast({
        title: "Anfrage gesendet!",
        description: "Wir melden uns in Kürze bei Ihnen.",
        className: "bg-[#004d51] text-white border-[#006064]",
      });
      
      form.reset();
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        window.location.href = "/danke";
      }, 1000);
    } catch (error: any) {
      console.error("Fehler beim Senden des Formulars:", error);
      
      toast({
        title: "Fehler",
        description: "Es gab ein Problem bei der Übermittlung Ihrer Anfrage. Bitte versuchen Sie es erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für den Website-Relaunch?</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Lassen Sie uns in einem kostenfreien Gespräch klären, wie Ihre Website zukünftig messbare Ergebnisse liefern kann.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-backgroundAlt p-8 rounded-lg shadow-sm">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihr Name" {...field} className="bg-white" />
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
                        <FormLabel>E-Mail</FormLabel>
                        <FormControl>
                          <Input placeholder="ihre.email@beispiel.de" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Firma (optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Ihre Firma" {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nachricht</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihren Zielen" 
                            className="resize-none h-32 bg-white" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Wird gesendet...
                      </span>
                    ) : 'Beratungsgespräch anfragen'}
                  </Button>
                </form>
              </Form>
              
              {requestAudit && (
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-gray-600 mb-3">Möchten Sie vorab Ihre aktuelle Website prüfen lassen?</p>
                  <Button 
                    variant="outline" 
                    onClick={requestAudit}
                  >
                    Kostenlose Website-Prüfung anfordern
                  </Button>
                </div>
              )}
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Lieber per E-Mail?</h3>
                  <div className="flex items-center gap-3 text-lg">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    <span>Schreiben Sie direkt an <strong>info@ooliv.de</strong></span>
                  </div>
                  <p className="mt-3 text-gray-600">
                    Alle Anfragen werden persönlich vom Gründer bearbeitet.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Warum mit uns arbeiten?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Direkte Kommunikation mit dem Gründer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Schnelle Reaktionszeiten und entschlossenes Handeln</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Strategisches Denken, nicht nur Umsetzung</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-brand-primary font-bold">✓</span>
                      <span>Fokus auf Geschäftsergebnisse, nicht nur Design</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationRequestSectionDE;
