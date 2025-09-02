import React from 'react';
import { FileText, Image, Video, Edit3, Palette, Search } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ContentServicesDE = () => {
  const getServiceClass = (title: string) => {
    if (title.toLowerCase().includes('seo') || title.toLowerCase().includes('keywords')) return 'service-seo';
    if (title.toLowerCase().includes('design') || title.toLowerCase().includes('visuell')) return 'service-webdesign';
    if (title.toLowerCase().includes('video') || title.toLowerCase().includes('multimedia')) return 'service-ai';
    return 'service-content'; // default
  };

  const services = [
    {
      icon: FileText,
      title: "SEO-Content & Texte",
      description: "Suchmaschinenoptimierte Texte, die Ihre Zielgruppe überzeugen und bei Google gefunden werden."
    },
    {
      icon: Image,
      title: "Visueller Content", 
      description: "Professionelle Bilder, Grafiken und visuelle Elemente für maximale Aufmerksamkeit."
    },
    {
      icon: Video,
      title: "Video & Multimedia",
      description: "Bewegtbild-Content und interaktive Elemente, die Ihre Botschaft lebendig vermitteln."
    },
    {
      icon: Edit3,
      title: "Content-Strategie",
      description: "Durchdachte Content-Planung, die Ihre Geschäftsziele unterstützt und Kunden bindet."
    },
    {
      icon: Palette,
      title: "Brand Storytelling",
      description: "Authentische Markengeschichten, die emotional bewegen und Vertrauen schaffen."
    },
    {
      icon: Search,
      title: "Keyword-Optimierung",
      description: "Strategische Integration relevanter Suchbegriffe für bessere Auffindbarkeit."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Content Creation, der wirkt
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Von der Strategie bis zur Umsetzung – Content, der Ihre Zielgruppe erreicht, überzeugt und zu Kunden macht.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`shadow-sm ${getServiceClass(service.title)}`}>
              <CardHeader>
                <div className="mb-4 service-icon">
                  <service.icon className="h-10 w-10" />
                </div>
                <CardTitle className="text-xl text-brand-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentServicesDE;