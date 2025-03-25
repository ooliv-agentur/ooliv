
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanContact = () => {
  const { toast } = useToast();
  const { setLanguage } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    message: '',
    budget: '',
    timeline: '',
    source: '',
    privacy: false
  });
  const [showAuditForm, setShowAuditForm] = useState(false);
  const [showCallForm, setShowCallForm] = useState(false);
  const [showWorkForm, setShowWorkForm] = useState(false);

  // Set language to German when this page is loaded
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, privacy: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.privacy) {
      toast({
        title: "Fehlende Informationen",
        description: "Bitte füllen Sie alle erforderlichen Felder aus und akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowThankYou(true);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        website: '',
        message: '',
        budget: '',
        timeline: '',
        source: '',
        privacy: false
      });
    }, 1000);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHero
        title="Kontaktieren Sie ooliv für Ihr nächstes Website-Projekt"
        subtitle="Lassen Sie uns über Ihre Ziele sprechen. Ob Sie einen Relaunch planen oder professionelle Unterstützung benötigen, um schneller voranzukommen – wir helfen Ihnen, Ideen in Ergebnisse umzusetzen."
        primaryCta={{
          text: "Projekt starten",
          link: "#contact-form"
        }}
        secondaryCta={{
          text: "Strategiegespräch buchen",
          link: "#"
        }}
      />

      {/* Contact Form Section */}
      <section className="section-standard">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Direct Contact Details Section */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Direkter Kontakt bevorzugt?</h2>
              <p className="text-lg mb-8">
                Alle Kommunikation wird direkt von unserem CEO bearbeitet — schnell, strategisch und persönlich.
              </p>
              
              <div className="space-y-8">
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">ooliv GmbH</h3>
                        <p className="text-gray-600">
                          Mombacher Str. 25<br />
                          55122 Mainz, Deutschland
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Rufen Sie uns an</h3>
                        <p className="text-gray-600">06131 – 63 67 801</p>
                        <p className="text-gray-600">+49 176 80 16 76 41</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="card-layout group hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="icon-background text-brand-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">E-Mail</h3>
                        <p className="text-gray-600">info@ooliv.de</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div id="contact-form">
              {!showThankYou ? (
                <>
                  <h2 className="text-3xl font-bold mb-6">Erzählen Sie uns von Ihrem Projekt</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName} 
                          onChange={handleChange} 
                          required 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Nachname *</Label>
                        <Input 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName} 
                          onChange={handleChange} 
                          required 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Unternehmen</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          value={formData.company} 
                          onChange={handleChange} 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="website">Website (optional)</Label>
                        <Input 
                          id="website" 
                          name="website" 
                          value={formData.website} 
                          onChange={handleChange} 
                          className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budgetrahmen</Label>
                        <Select 
                          value={formData.budget} 
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                            <SelectValue placeholder="Budgetrahmen auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5k-10k">€5.000 - €10.000</SelectItem>
                            <SelectItem value="10k-20k">€10.000 - €20.000</SelectItem>
                            <SelectItem value="20k-50k">€20.000 - €50.000</SelectItem>
                            <SelectItem value="50k+">€50.000+</SelectItem>
                            <SelectItem value="not-sure">Noch nicht sicher</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="timeline">Zeitrahmen</Label>
                        <Select 
                          value={formData.timeline} 
                          onValueChange={(value) => handleSelectChange('timeline', value)}
                        >
                          <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                            <SelectValue placeholder="Zeitrahmen auswählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">Schnellstmöglich</SelectItem>
                            <SelectItem value="4-6-weeks">4-6 Wochen</SelectItem>
                            <SelectItem value="2-3-months">2-3 Monate</SelectItem>
                            <SelectItem value="later">Später</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="source">Wie haben Sie von uns erfahren?</Label>
                      <Select 
                        value={formData.source} 
                        onValueChange={(value) => handleSelectChange('source', value)}
                      >
                        <SelectTrigger className="bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary">
                          <SelectValue placeholder="Option auswählen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="google">Google-Suche</SelectItem>
                          <SelectItem value="referral">Empfehlung</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="other">Sonstiges</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Ihre Nachricht / Projektidee</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        className="min-h-[150px] bg-brand-background/50 border-brand-primary/20 focus:border-brand-primary" 
                      />
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox 
                        id="privacy" 
                        checked={formData.privacy} 
                        onCheckedChange={handleCheckboxChange} 
                        required 
                      />
                      <Label 
                        htmlFor="privacy" 
                        className="text-sm leading-normal cursor-pointer"
                      >
                        Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass wir Ihre Daten speichern und verarbeiten, um auf Ihre Anfrage zu antworten. Sie können Ihre Einwilligung jederzeit widerrufen.
                      </Label>
                    </div>
                    
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full md:w-auto" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Wird gesendet...
                        </span>
                      ) : 'Absenden & Starten'}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <h2 className="text-2xl font-bold text-green-700 mb-4">Vielen Dank für Ihre Nachricht!</h2>
                  <p className="text-lg mb-6">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                  <Button 
                    onClick={() => setShowThankYou(false)} 
                    variant="outline"
                  >
                    Weitere Nachricht senden
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-alt">
        <div className="section-container">
          <h2 className="section-title">Kontakt-FAQ</h2>
          
          <div className="max-w-3xl mx-auto mt-8">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Mit wem spreche ich bei ooliv?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Sie sprechen direkt mit unserem Gründer und CEO — keine Übergaben, keine Projektmanager.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Wie schnell erhalte ich eine Antwort?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Wir antworten auf alle Projektanfragen innerhalb von 24 Stunden.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium text-lg">
                  Arbeiten Sie auch mit Unternehmen außerhalb Deutschlands?
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  Ja. Wir unterstützen B2B-Kunden in ganz Europa und darüber hinaus — vollständig remote und schnell.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-standard">
        <div className="section-container text-center">
          <h2 className="section-title">Lassen Sie uns über die nächsten Schritte sprechen</h2>
          <p className="section-subtitle">
            Starten Sie ein Projekt mit einem Team, das schnell arbeitet, klar kommuniziert und Ergebnisse liefert. Sie sprechen immer direkt mit der Person, die Ihr Projekt leitet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => setShowWorkForm(true)}
            >
              Website-Projekt starten
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => setShowCallForm(true)}
            >
              Strategiegespräch buchen
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Dialogs */}
      <ContactForm 
        open={showAuditForm} 
        onOpenChange={setShowAuditForm} 
        formType="audit" 
      />
      
      <ContactForm 
        open={showCallForm} 
        onOpenChange={setShowCallForm} 
        formType="call" 
      />
      
      <ContactForm 
        open={showWorkForm} 
        onOpenChange={setShowWorkForm} 
        formType="work" 
      />
    </PageLayout>
  );
};

export default GermanContact;
