import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from 'lucide-react';

interface ConsultationRequestSectionDEProps {
  requestAudit?: () => void;
}

const ConsultationRequestSectionDE = ({ requestAudit }: ConsultationRequestSectionDEProps) => {

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
              <form action="https://formspree.io/f/mvgblkeg" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    id="name"
                    name="name" 
                    placeholder="Ihr Name" 
                    required 
                    className="bg-white" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
                  <Input 
                    id="email"
                    name="email" 
                    type="email"
                    placeholder="ihre.email@beispiel.de" 
                    required 
                    className="bg-white" 
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Firma (optional)</label>
                  <Input 
                    id="company"
                    name="company" 
                    placeholder="Ihre Firma" 
                    className="bg-white" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
                  <Textarea 
                    id="message"
                    name="message"
                    placeholder="Erzählen Sie uns von Ihrem Projekt oder Ihren Zielen" 
                    className="resize-none h-32 bg-white" 
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Beratungsgespräch anfragen
                </Button>
              </form>
              
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
