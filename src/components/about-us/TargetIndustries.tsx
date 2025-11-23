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
    <section className={getSectionClasses('large', 'mint')}>
      <div className={getContainerClasses('default')}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-heading mb-4">
            Für wen wir arbeiten
          </h2>
          <p className="text-lg text-brand-text max-w-3xl mx-auto">
            Wir unterstützen Unternehmen, die klare Strukturen, digitale Sichtbarkeit und effiziente Workflows benötigen.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <industry.icon className="w-8 h-8 text-turquoise mx-auto mb-3" />
              <p className="text-brand-text font-medium text-sm">{industry.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetIndustries;
