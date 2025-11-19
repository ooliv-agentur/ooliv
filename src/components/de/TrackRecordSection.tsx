import React from 'react';
import { TrendingUp, Users, Award, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackRecordSection = () => {
  const metrics = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "+240%",
      label: "Average Conversion Rate",
      description: "Durchschnittliche Steigerung nach Strategic Discovery & UX Optimization"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "+180%",
      label: "Lead Quality",
      description: "Höherqualifizierte Leads durch Strategic Positioning & Funnel Optimization"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "100+",
      label: "Transformationen",
      description: "Erfolgreich abgeschlossene Digital Strategy & Product Transformationen"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      value: "16+",
      label: "Jahre C-Level Advisory",
      description: "Digital Strategy Leadership für B2B-Unternehmen im DACH-Raum"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Messbare Business Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Track Record aus 16+ Jahren Digital Strategy Leadership – keine Vanity Metrics, sondern Business Impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                {metric.icon}
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{metric.label}</div>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/referenzen"
            className="text-primary hover:underline font-semibold text-lg"
          >
            Alle Transformationen ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
