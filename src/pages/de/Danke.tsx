
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const GermanThankYou = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Vielen Dank | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Vielen Dank für Ihre Anfrage! Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen." />
        <meta name="keywords" content="Danke Nachricht ooliv Mainz, Anfrage erhalten Werbeagentur, Bestätigung Kontakt Mainz, ooliv Antwort Mainz" />
      </Helmet>

      <section className="bg-white py-24 font-satoshi">
        <ConfettiCelebration />
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto border-none shadow-xl rounded-lg overflow-hidden">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Vielen Dank für Ihre Anfrage!</h2>
              <p className="text-gray-600 mb-6">
                Wir haben Ihre Nachricht erhalten und werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Direkt anrufen</h3>
                    <p className="text-gray-500 mb-4">Für dringende Anliegen</p>
                    <Button asChild variant="default" className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                      <a href="tel:+4961316367801" className="flex items-center gap-2">
                        Jetzt anrufen <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <Mail className="h-8 w-8 text-orange-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">E-Mail schreiben</h3>
                    <p className="text-gray-500 mb-4">Für detaillierte Anfragen</p>
                    <Button asChild variant="default" className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                      <a href="mailto:info@ooliv.de" className="flex items-center gap-2">
                        E-Mail senden <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300 hidden">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-purple-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">WhatsApp</h3>
                    <p className="text-gray-500 mb-4">Schnelle Hilfe per Chat</p>
                    <Button asChild variant="default" className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                      <a href="https://wa.me/+4917680167641" className="flex items-center gap-2">
                        Chat starten <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Button asChild className="mt-8 bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                <Link to="/" className="flex items-center gap-2">
                  Zurück zur Startseite <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default GermanThankYou;
