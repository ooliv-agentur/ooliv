
import React from 'react';
import { Users, Target, Briefcase, Award, Sparkles } from 'lucide-react';

const AboutUsTeamCapabilities = () => {
  return (
    <section className="py-16 bg-medico-mint font-satoshi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-center text-medico-darkGreen leading-tight">
          Kleines Team. Volle Kompetenz.
        </h2>
        <p className="text-lg mb-12 text-center max-w-4xl mx-auto text-medico-darkGreen leading-relaxed">
          Sie arbeiten mit dem CEO – aber Ihr Projekt wird von einem dedizierten Team aus Spezialisten geprägt, die synchron in diesen Bereichen arbeiten:
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'UX & UI Design', icon: Users },
            { title: 'WordPress & Headless Development', icon: Briefcase },
            { title: 'SEO Optimierung', icon: Target },
            { title: 'Motion Design & Illustration', icon: Award },
            { title: 'KI-unterstütztes Copywriting', icon: Sparkles },
            { title: 'Branding & Visuelle Identität', icon: Award }
          ].map((role, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 border border-gray-100">
              <div className="mb-4 h-12 w-12 flex items-center justify-center bg-medico-turquoise/10 rounded-full">
                <role.icon className="h-6 w-6 text-medico-turquoise" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-medico-darkGreen">{role.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeamCapabilities;
