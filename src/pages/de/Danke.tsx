
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import { CheckCircle } from 'lucide-react';

const Danke = () => {
  return (
    <PageLayout>
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen bg-white pt-24 pb-16">
        <div className="container mx-auto px-4">
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
                href="mailto:hello@ooliv.de" 
                className="text-[#004d51] hover:underline"
              >
                hello@ooliv.de
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
