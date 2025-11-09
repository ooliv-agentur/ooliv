
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-brand-primary/50 transition-all hover:shadow-md">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-3">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ContactBenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-3">Warum mit uns arbeiten?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Unsere Arbeitsweise unterscheidet sich von traditionellen Agenturen
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<CheckCircle className="text-turquoise" />}
              title="Direkte Kommunikation"
              description="Kein Projektmanager als Zwischenperson"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-turquoise" />}
              title="Schnelle Reaktionszeiten"
              description="Transparente Prozesse und schnelle Entscheidungen"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-turquoise" />}
              title="Schlanke Prozesse"
              description="Kein Projekt-Management-Overhead"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-turquoise" />}
              title="Ergebnisorientiert"
              description="Fokus auf messbare Resultate, nicht nur Design"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBenefitsSection;
