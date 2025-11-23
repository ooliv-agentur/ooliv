import React from 'react';
import { Code, Building2, Briefcase, Hammer, Heart, ShoppingCart, Home, MapPin } from 'lucide-react';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

const TargetIndustries = () => {
  const industries = [
    { icon: Code, label: "Technologie" },
    { icon: Code, label: "SaaS" },
    { icon: Briefcase, label: "Beratung" },
    { icon: Building2, label: "Bau & Industrie" },
    { icon: Heart, label: "Gesundheit & MedTech" },
    { icon: ShoppingCart, label: "Handel & E-Commerce" },
    { icon: Home, label: "Immobilien" },
    { icon: MapPin, label: "Lokale Dienstleister" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Für wen wir arbeiten
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Wir unterstützen Unternehmen, die klare Strukturen, digitale Sichtbarkeit und effiziente Workflows benötigen.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:bg-turquoise/5 hover:shadow-md transition-all">
              <industry.icon className="w-8 h-8 text-turquoise mx-auto mb-3" />
              <p className="text-text-primary font-medium text-sm">{industry.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;
