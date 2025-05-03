
import React from 'react';
import { Database, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDevCmsVsStatic = () => {
  const { language } = useLanguage();
  const isGerman = language === 'de';
  
  return (
    <section className="py-16 bg-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-heading mb-4">
            {isGerman 
              ? "Flexibel oder ultraschnell – wir entwickeln, was zu Ihrem Setup passt"
              : "Flexible or ultra-fast – we develop what fits your setup"}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Database className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">
                {isGerman ? "WordPress-Website" : "WordPress Website"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                {isGerman
                  ? "Inhalte können Sie ganz einfach selbst pflegen. Ideal, wenn Sie regelmäßig Texte, News oder Angebote aktualisieren möchten – ohne Entwickler."
                  : "You can easily maintain content yourself. Ideal if you want to regularly update texts, news or offers – without a developer."}
                <p className="mt-2">
                  {isGerman
                    ? "Empfohlen für redaktionelle Teams oder Marketingabteilungen."
                    : "Recommended for editorial teams or marketing departments."}
                </p>
              </CardDescription>
            </CardContent>
          </Card>
          
          <Card className="shadow-sm border border-gray-100 h-full">
            <CardHeader className="pb-2">
              <div className="mb-2 flex justify-center md:justify-start">
                <Zap className="h-8 w-8 text-brand-primary" />
              </div>
              <CardTitle className="text-xl">
                {isGerman ? "Statische Website (HTML/CSS/JS)" : "Static Website (HTML/CSS/JS)"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base text-brand-text">
                {isGerman
                  ? "Extrem schnell, wartungsarm und sicher. Perfekt, wenn Inhalte sich selten ändern und Performance im Fokus steht."
                  : "Extremely fast, low-maintenance and secure. Perfect when content rarely changes and performance is the focus."}
                <p className="mt-2">
                  {isGerman
                    ? "Änderungen übernehmen wir für Sie."
                    : "We'll handle changes for you."}
                </p>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-100 text-center mt-6">
          <p className="text-brand-text">
            {isGerman
              ? "Wir beraten Sie ehrlich und technologieoffen – damit Ihre Website technisch zu Ihren Zielen, internen Abläufen und SEO-Anforderungen passt."
              : "We advise you honestly and technology-agnostic – ensuring your website technically matches your goals, internal workflows, and SEO requirements."}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevCmsVsStatic;
