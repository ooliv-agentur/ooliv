
import React, { useEffect } from 'react';
import PageLayout from "@/components/PageLayout";
import { Helmet } from 'react-helmet-async';
import PageHero from "@/components/PageHero";
import ConfettiCelebration from '@/components/ConfettiCelebration';
import CTA from '@/components/CTA';
import { Link } from 'react-router-dom';

const Danke = () => {
  // Start confetti celebration when component mounts
  useEffect(() => {
    // Any tracking code would go here
    console.log('Thank you page loaded - conversion tracked');
  }, []);

  return (
    <PageLayout>
      <Helmet>
        <title>Vielen Dank für Ihre Nachricht | ooliv Marketing Agentur</title>
        <meta name="description" content="Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <ConfettiCelebration />

      <PageHero 
        title="Vielen Dank für Ihre Nachricht!"
        subtitle="Wir haben Ihre Anfrage erhalten und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden."
      />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Was passiert als nächstes?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-4">
                <div className="h-12 w-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-primary">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Bestätigungs-Email</h3>
                <p className="text-sm text-gray-600">
                  Sie erhalten in wenigen Minuten eine Bestätigungs-Email von uns.
                </p>
              </div>
              
              <div className="p-4">
                <div className="h-12 w-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-primary">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Persönlicher Kontakt</h3>
                <p className="text-sm text-gray-600">
                  Ein Mitglied unseres Teams wird sich innerhalb von 24 Stunden bei Ihnen melden.
                </p>
              </div>
              
              <div className="p-4">
                <div className="h-12 w-12 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-brand-primary">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Beratungsgespräch</h3>
                <p className="text-sm text-gray-600">
                  Wir vereinbaren einen Termin für ein erstes Gespräch über Ihr Projekt.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <p className="mb-8">
                Haben Sie Fragen? Schreiben Sie uns eine E-Mail an{' '}
                <a href="mailto:hello@ooliv.de" className="text-brand-primary hover:underline">
                  hello@ooliv.de
                </a>{' '}
                oder rufen Sie uns an unter{' '}
                <a href="tel:+497219894536" className="text-brand-primary hover:underline">
                  +49 (0) 721 989 45 365
                </a>
              </p>
              
              <Link to="/" className="inline-block text-brand-primary hover:underline">
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA 
        title="In der Zwischenzeit..."
        subtitle="Entdecken Sie unsere Case Studies oder lesen Sie mehr über unsere Services."
        primaryCta="Case Studies ansehen"
        primaryCtaLink="/case-studies"
        secondaryCta="Services entdecken"
        secondaryCtaLink="/webdesign"
      />
    </PageLayout>
  );
};

export default Danke;
