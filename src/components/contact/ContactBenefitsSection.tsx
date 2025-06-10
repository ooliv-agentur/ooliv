
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-medico-turquoise/50 transition-all hover:shadow-md">
      <div className="flex items-start mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-3 text-medico-darkGreen">{title}</h3>
      </div>
      <p className="text-medico-darkGreen/80">{description}</p>
    </div>
  );
};

const ContactBenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-6">
              Bereit für den Website-Relaunch?
            </h2>
            <p className="text-lg md:text-xl text-medico-darkGreen/80 max-w-3xl mx-auto">
              Lassen Sie uns gemeinsam klären, wie Ihre Website zukünftig messbare Ergebnisse liefern kann.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<CheckCircle className="text-medico-turquoise h-6 w-6" />}
              title="Strategischer Fokus"
              description="Fokus auf Geschäftsergebnisse, nicht nur auf Design"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-medico-turquoise h-6 w-6" />}
              title="Persönliche Betreuung"
              description="Direkter Zugang zum Gründerteam ohne Umwege"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-medico-turquoise h-6 w-6" />}
              title="Schnelle Umsetzung"
              description="Schlanke Prozesse für effiziente Projektumsetzung"
            />
            
            <FeatureCard 
              icon={<CheckCircle className="text-medico-turquoise h-6 w-6" />}
              title="Messbare Erfolge"
              description="Transparente Kommunikation und nachvollziehbare Resultate"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBenefitsSection;
