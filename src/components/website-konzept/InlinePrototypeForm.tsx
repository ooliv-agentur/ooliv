import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const InlinePrototypeForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !name) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
      });
      return;
    }

    if (!privacy) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mvgblkeg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          companyName,
          website,
          formType: 'website-konzept-landing',
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Erfolgreich gesendet!",
          description: "Wir melden uns innerhalb von 48 Stunden bei Ihnen.",
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Fehler",
        description: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Danke! Ihr Website-Konzept wird erstellt.
        </h3>
        <p className="text-lg text-muted-foreground mb-8">
          Sie erhalten innerhalb von 48 Stunden Ihr persönliches Konzept per E-Mail.
        </p>
        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-muted-foreground">
            Bei Fragen: <a href="mailto:info@ooliv.de" className="text-accent hover:underline">info@ooliv.de</a>
            <br />
            oder <a href="tel:+4961316367801" className="text-accent hover:underline">06131 – 63 67 801</a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
            placeholder="Ihr Name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
            placeholder="ihre@email.de"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
            Firma (optional)
          </label>
          <input
            id="company"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
            placeholder="Ihre Firma"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-semibold text-foreground mb-2">
            Website-URL (optional)
          </label>
          <input
            id="website"
            type="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
            placeholder="Ihre aktuelle Website (falls vorhanden)"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <input
              id="privacy"
              type="checkbox"
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              required
              className="mt-1 w-5 h-5 border-2 border-gray-200 rounded focus:ring-accent accent-accent"
            />
            <label htmlFor="privacy" className="text-sm text-muted-foreground">
              Ich akzeptiere die{' '}
              <a href="/datenschutz" target="_blank" className="text-accent underline hover:text-accent/80">
                Datenschutzbestimmungen
              </a>
              .
            </label>
          </div>
          <p className="text-sm text-muted-foreground pl-8">
            Sie erhalten keine Werbemails – nur Ihr persönliches Konzept.
          </p>
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold shadow-lg hover:shadow-xl transition-all"
        >
          {isSubmitting ? 'Wird gesendet...' : 'Jetzt kostenloses Konzept starten'}
        </Button>
      </div>
    </form>
  );
};

export default InlinePrototypeForm;
