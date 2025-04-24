import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';

const Danke = () => {
  return (
    <PageLayout>
      <Helmet>
        <title>Danke für Ihre Anfrage | ooliv</title>
        <meta name="description" content="Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen – Ihre Werbeagentur ooliv aus Mainz." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-white">
        <div className="container px-4">
          <div className="max-w-[720px] mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="h-16 w-16 rounded-full bg-[#004d51]/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#004d51]" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading">
              Vielen Dank für Ihre Anfrage!
            </h1>
            
            <p className="text-lg mb-8 text-brand-text">
              Wir haben Ihre Angaben erhalten und melden uns schnellstmöglich bei Ihnen. 
              Wenn Sie in der Zwischenzeit Fragen haben, schreiben Sie uns gerne an{' '}
              <a 
                href="mailto:info@ooliv.de" 
                className="text-[#004d51] hover:underline"
              >
                info@ooliv.de
              </a>.
            </p>
            
            <Button 
              asChild
              className="bg-[#004d51] hover:bg-[#003d41]"
            >
              <Link to="/">
                Zurück zur Startseite
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Danke;
