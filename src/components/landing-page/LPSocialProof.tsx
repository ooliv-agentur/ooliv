import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface LPSocialProofProps {
  testimonial: Testimonial;
  logos?: string[];
}

const LPSocialProof: React.FC<LPSocialProofProps> = ({ testimonial, logos = [] }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        {logos.length > 0 && (
          <div className="mb-16">
            <p className="text-center text-sm text-muted-foreground mb-8 uppercase tracking-wide">
              Vertraut von führenden Unternehmen
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {logos.map((logo, index) => (
                <div key={index} className="h-12 grayscale hover:grayscale-0 transition-all">
                  <img src={logo} alt={`Client logo ${index + 1}`} className="h-full w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-medico-turquoise/5 to-medico-turquoise/10 rounded-2xl p-8 md:p-12 border border-medico-turquoise/20">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-medico-turquoise text-medico-turquoise" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-medico-darkGreen font-medium mb-6 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-medico-turquoise/20 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-medico-turquoise">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <div className="font-bold text-medico-darkGreen">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LPSocialProof;
