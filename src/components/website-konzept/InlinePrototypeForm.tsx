import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const InlinePrototypeForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, privacy: false });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    const newErrors = { name: false, email: false, privacy: false };

    // Validate fields
    if (!name.trim()) {
      newErrors.name = true;
    }
    
    if (!email.trim()) {
      newErrors.email = true;
    }
    
    if (!privacy) {
      newErrors.privacy = true;
    }

    setErrors(newErrors);

    // If there are any errors, show toast and stop
    if (newErrors.name || newErrors.email || newErrors.privacy) {
      if (!privacy) {
        toast({
          variant: "destructive",
          title: "Fehler",
          description: "Bitte akzeptieren Sie die Datenschutzbestimmungen.",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Fehler",
          description: "Bitte füllen Sie alle Pflichtfelder aus.",
        });
      }
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
        // Redirect to thank you page with conversion parameter for Google Ads tracking
        try {
          navigate('/danke?conversion=true');
        } catch (error) {
          console.error('Navigation error, using fallback:', error);
          window.location.href = '/danke?conversion=true';
        }
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
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors({ ...errors, name: false });
            }}
            className={`w-full h-14 px-4 border-2 rounded-lg focus:outline-none transition-colors text-foreground ${
              errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-accent'
            }`}
            placeholder="Ihr Name"
            aria-invalid={errors.name}
            aria-required="true"
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
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors({ ...errors, email: false });
            }}
            className={`w-full h-14 px-4 border-2 rounded-lg focus:outline-none transition-colors text-foreground ${
              errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-accent'
            }`}
            placeholder="ihre@email.de"
            aria-invalid={errors.email}
            aria-required="true"
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
            type="text"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="w-full h-14 px-4 border-2 border-gray-200 rounded-lg focus:border-accent focus:outline-none transition-colors text-foreground"
            placeholder="z.B. example.com, www.example.com oder https://example.com"
          />
        </div>

        <div className="space-y-3">
          <div className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
            errors.privacy ? 'bg-red-50 border-2 border-red-500' : ''
          }`}>
            <input
              id="privacy"
              type="checkbox"
              checked={privacy}
              onChange={(e) => {
                setPrivacy(e.target.checked);
                if (errors.privacy) setErrors({ ...errors, privacy: false });
              }}
              className={`mt-1 w-5 h-5 border-2 rounded focus:ring-accent ${
                errors.privacy ? 'border-red-500 accent-red-500' : 'border-gray-200 accent-accent'
              }`}
              aria-invalid={errors.privacy}
              aria-required="true"
            />
            <label htmlFor="privacy" className={`text-sm ${errors.privacy ? 'text-red-700 font-semibold' : 'text-muted-foreground'}`}>
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

        <p className="text-sm text-muted-foreground text-center mb-4">
          Ihre Daten werden ausschließlich zur Erstellung Ihres Website-Konzepts verwendet.
        </p>

        <Button
          type="submit" 
          disabled={isSubmitting}
          variant="primary"
          size="lg"
          className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
        >
          {isSubmitting ? 'Wird gesendet...' : (
            <>
              <span className="hidden sm:inline">Jetzt kostenloses Konzept erhalten</span>
              <span className="sm:hidden">Konzept erhalten</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default InlinePrototypeForm;
