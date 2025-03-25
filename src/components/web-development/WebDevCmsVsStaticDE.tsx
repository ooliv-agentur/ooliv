
import React from 'react';
import { Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebDevCmsVsStaticDE = () => {
  return (
    <section className="py-16 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            Flexibel oder ultraschnell – wir entwickeln, was zu Ihrem Setup passt
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Database className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">WordPress-Website</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                Inhalte können Sie ganz einfach selbst pflegen. Ideal, wenn Sie regelmäßig Texte, News oder Angebote aktualisieren möchten – ohne Entwickler.
                <p className="mt-2">Empfohlen für redaktionelle Teams oder Marketingabteilungen.</p>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">Statische Website (HTML/CSS/JS)</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                Extrem schnell, wartungsarm und sicher. Perfekt, wenn Inhalte sich selten ändern und Performance im Fokus steht.
                <p className="mt-2">Änderungen übernehmen wir für Sie.</p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-100 text-center mt-6">
          <p className="text-brand-text">
            Wir beraten Sie ehrlich und technologieoffen – damit Ihre Website technisch zu Ihren Zielen, internen Abläufen und SEO-Anforderungen passt.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevCmsVsStaticDE;
