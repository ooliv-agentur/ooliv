
import React from 'react';
import { Users, Target, Briefcase, Award, Sparkles } from 'lucide-react';
import { H2, H3, Paragraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses, getGridClasses } from '@/styles/spacing';

const AboutUsTeamCapabilities = () => {
  return (
    <section className={`${getSectionClasses('medium', 'mint')} font-satoshi`}>
      <div className={getContainerClasses('default')}>
        <H2 alignment="center" className="mb-6">
          Kleines Team. Volle Kompetenz.
        </H2>
        <Paragraph alignment="center" className={`mb-12 ${getContainerClasses('narrow')}`}>
          Sie arbeiten mit dem CEO – aber Ihr Projekt wird von einem dedizierten Team aus Spezialisten geprägt, die synchron in diesen Bereichen arbeiten:
        </Paragraph>
        <div className={getGridClasses(3, 'medium')}>
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
              <H3 className="mb-2">{role.title}</H3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsTeamCapabilities;
