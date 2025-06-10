
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const EnglishThankYou = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
  }, [setLanguage]);

  return (
    <PageLayout>
      <Helmet>
        <title>Thank You | ooliv Marketing Agency Mainz</title>
        <meta name="description" content="Thank you for your inquiry! We have received your message and will get back to you shortly." />
        <meta name="keywords" content="Thank you message ooliv Mainz, Inquiry received marketing agency, Contact confirmation Mainz, ooliv response Mainz" />
      </Helmet>

      <section className="bg-white py-24 font-satoshi">
        <ConfettiCelebration />
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto border-none shadow-xl rounded-lg overflow-hidden">
            <CardContent className="p-8 text-center">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank you for your inquiry!</h2>
              <p className="text-gray-600 mb-6">
                We have received your message and will get back to you as soon as possible.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <Phone className="h-8 w-8 text-blue-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Call directly</h3>
                    <p className="text-gray-500 mb-4">For urgent matters</p>
                    <Button asChild variant="default" className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                      <a href="tel:+4961316367801" className="flex items-center gap-2">
                        Call now <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="shadow-md border-none hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center justify-center">
                    <Mail className="h-8 w-8 text-orange-500 mb-3" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Send email</h3>
                    <p className="text-gray-500 mb-4">For detailed inquiries</p>
                    <Button asChild variant="default" className="bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                      <a href="mailto:info@ooliv.de" className="flex items-center gap-2">
                        Send email <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
              
              <Button asChild className="mt-8 bg-medico-turquoise hover:bg-medico-turquoise/90 text-white">
                <Link to="/en" className="flex items-center gap-2">
                  Back to homepage <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default EnglishThankYou;
