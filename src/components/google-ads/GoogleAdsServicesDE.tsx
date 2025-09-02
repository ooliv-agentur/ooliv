import React from 'react';
import { Search, Target, TrendingUp, BarChart3, Settings, DollarSign } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const GoogleAdsServicesDE = () => {
  const getServiceClass = (title: string) => {
    if (title.toLowerCase().includes('ads') || title.toLowerCase().includes('anzeigen') || title.toLowerCase().includes('kampagnen')) return 'service-googleads';
    if (title.toLowerCase().includes('targeting')) return 'service-googleads';
    if (title.toLowerCase().includes('optimierung')) return 'service-seo';
    return 'service-googleads'; // default
  };

  const services = [
    {
      icon: Search,
      title: "Kampagnen-Setup",
      description: "Professionelle Einrichtung von Google Ads Kampagnen mit strategischem Keyword-Targeting."
    },
    {
      icon: Target,
      title: "Zielgruppen-Targeting", 
      description: "Präzise Ausrichtung auf Ihre idealen Kunden durch demografische und verhaltensbasierte Filter."
    },
    {
      icon: TrendingUp,
      title: "Performance-Optimierung",
      description: "Kontinuierliche Verbesserung der Anzeigenleistung für maximale Conversion-Raten."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detaillierte Berichte über Kampagnenleistung, ROI und Optimierungspotenziale."
    },
    {
      icon: Settings,
      title: "Bid Management",
      description: "Intelligente Gebotsstrategien für optimale Kosteneffizienz bei höchster Sichtbarkeit."
    },
    {
      icon: DollarSign,
      title: "Budget-Optimierung",
      description: "Maximale Ausschöpfung Ihres Werbebudgets durch datengetriebene Allokation."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-heading mb-6">
            Google Ads Services für nachhaltigen Erfolg
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Professionelle Google Ads Betreuung, die messbare Ergebnisse liefert und Ihre Sichtbarkeit gezielt erhöht.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`bg-white shadow-sm ${getServiceClass(service.title)}`}>
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

export default GoogleAdsServicesDE;