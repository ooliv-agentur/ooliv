import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface LPProblemSolutionProps {
  problems: string[];
  solutions: string[];
}

const LPProblemSolution: React.FC<LPProblemSolutionProps> = ({ problems, solutions }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-medico-turquoise/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-8">
              Kennen Sie das?
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mt-1">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-medico-darkGreen mb-8">
              So lösen wir es
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-medico-turquoise/20 flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-5 h-5 text-medico-turquoise" />
                  </div>
                  <p className="text-lg text-medico-darkGreen font-medium leading-relaxed">{solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LPProblemSolution;
