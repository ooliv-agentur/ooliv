
import React from 'react';
import { FileText, Image, PenTool, Video } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: FileText,
    title: 'Text & Messaging',
    description: 'Suchmaschinenoptimierte, überzeugende Texte für alle Seitentypen – erstellt mit GPT-basierten Workflows und geschärft durch erfahrene Copywriter.',
    features: [
      'Startseitentexte, Leistungsseiten, FAQs',
      'Conversionstarke Headlines & CTAs',
      'SEO-optimierte Landingpages',
      'UX Microcopy'
    ]
  },
  {
    icon: Image,
    title: 'Foto & Bildwelten',
    description: 'Custom-Fotowelten, generiert mit Midjourney und veredelt durch manuelle Retusche – perfekt abgestimmt auf Markenstil & Website-Layout.',
    features: [
      'Markenbezogene Bildästhetik',
      'Bildkonzepte für Start- und Unterseiten',
      'Auflösung & Format direkt passend für Web'
    ]
  },
  {
    icon: PenTool,
    title: 'Illustration & Logo-Design',
    description: 'Unsere Illustrator:innen & Designer entwickeln Icons, visuelle Assets und Logos für unverwechselbare Markenauftritte.',
    features: [
      'Vektorgrafiken & UI-Icons',
      'Website-Illustrationen',
      'Logo-Redesigns & -Entwicklung'
    ]
  },
  {
    icon: Video,
    title: 'Video & Animation',
    description: 'Kurze Erklärvideos, Background Visuals oder hero section Videos – per Sora oder integriertem Partnernetzwerk.',
    features: [
      'Storyboard + Umsetzung',
      'Passend zu Website und Zielgruppe',
      'SEO-freundliche Videostruktur'
    ]
  }
];

const ContentServices = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-brand-background via-white to-brand-backgroundAlt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-brand-heading">
          What We Deliver
        </h2>
        
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto text-brand-text">
          Comprehensive content solutions tailored to your brand voice and business objectives.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="p-3 rounded-full bg-brand-backgroundAlt inline-flex mb-3">
                  <service.icon className="h-6 w-6 text-brand-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-brand-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-brand-text mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-baseline">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-2 mt-1.5 flex-shrink-0"></span>
                      <span className="text-sm text-brand-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <p className="text-brand-primary italic">
            Not sure what content you need? Let's talk strategy →
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentServices;
