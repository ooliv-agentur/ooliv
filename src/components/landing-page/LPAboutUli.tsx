import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Briefcase, TrendingUp } from 'lucide-react';

const LPAboutUli: React.FC = () => {
  const credentials = [
    {
      icon: Briefcase,
      stat: "15+ Jahre",
      label: "Digitale Transformation"
    },
    {
      icon: Users,
      stat: "100+",
      label: "Erfolgreiche Projekte"
    },
    {
      icon: Award,
      stat: "Google Partner",
      label: "Zertifiziert"
    },
    {
      icon: TrendingUp,
      stat: "5-20x",
      label: "Durchschn. ROI"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medico-darkGreen via-medico-darkGreen to-medico-darkGreen/90 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-medico-turquoise/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-32 h-32 bg-medico-turquoise/30 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white">U</span>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">Uli Armbruster</h3>
                  <p className="text-medico-turquoise text-center font-semibold">
                    Senior Digital Strategist & Founder
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Warum direkt mit Uli arbeiten?
              </h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Kein Junior-Team, keine Agentur-Hierarchien, keine langwierigen Abstimmungen. 
                Sie arbeiten direkt mit einem erfahrenen Strategieberater, der Ihre Ziele versteht 
                und umsetzbare Lösungen liefert.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {credentials.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-medico-turquoise/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-medico-turquoise" />
                    </div>
                    <div className="text-2xl font-bold mb-1">{item.stat}</div>
                    <div className="text-sm text-white/80">{item.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPAboutUli;
