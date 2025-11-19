import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, Target, Zap } from 'lucide-react';

const StrategicChallengesSection = () => {
  const handleStartProject = () => {
    window.dispatchEvent(new Event('open-lead-form'));
  };

  const challenges = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Digitale Transformation ohne klare Roadmap",
      description: "Investitionen in digitale Initiativen ohne strategischen Framework führen zu Silos, ineffizienten Prozessen und verpassten Business Outcomes."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Silos zwischen Product, UX und Tech",
      description: "Fehlende strategische Alignment zwischen Teams resultiert in suboptimalen User Experiences und verlängerten Time-to-Market Zyklen."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Integration ohne strategischen Framework",
      description: "Ad-hoc AI-Implementierungen ohne strategische Discovery führen zu isolierten Use Cases ohne echten Business Impact."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Strategische Herausforderungen in der Digital Transformation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            B2B-Unternehmen stehen vor komplexen strategischen Challenges, die operational Tactics nicht lösen können.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {challenge.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{challenge.title}</h3>
              <p className="text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-8 rounded-lg border border-border">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Die Lösung: Strategic Discovery & Transformation
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            16+ Jahre C-Level Advisory in <a href="/strategie" className="text-primary hover:underline">Digital Strategy</a>, <a href="/produkt-ux-strategie" className="text-primary hover:underline">Product & UX Strategy</a> und <a href="/ki-technologien" className="text-primary hover:underline">AI Integration</a> – mit messbaren Business Outcomes (+240% Conversion Rates, +180% Lead Quality).
          </p>
          <Button 
            onClick={handleStartProject}
            size="lg"
            className="text-lg px-8"
          >
            Strategic Discovery vereinbaren
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StrategicChallengesSection;
