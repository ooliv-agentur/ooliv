
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const WebDesignHeroEN = () => {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-40 md:pb-24 bg-gradient-to-r from-[#f5f8f8] to-[#edf3f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-brand-heading">
              Web Design That <span className="text-[#004d51]">Converts Visitors into Customers</span>
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-brand-text">
              At ooliv advertising agency Mainz, we create websites that don't just look stunning but transform browsers into buyers with strategic design and user experience.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#004d51] hover:bg-[#003941] text-white rounded-md py-6 text-lg"
            >
              <Link to="/en/contact">
                Start Your Web Design Project
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-[#004d51] text-[#004d51] hover:bg-[#f0f5f5] rounded-md py-6 text-lg"
            >
              <Link to="/en/case-studies" className="flex items-center">
                See Our Portfolio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full max-w-3xl">
        <div className="absolute bottom-0 right-0 w-full h-full bg-contain bg-no-repeat bg-right-bottom opacity-30" style={{ backgroundImage: 'url(/lovable-uploads/46d00b56-ce4b-406e-be84-59f9cb3cd65c.png)' }}></div>
      </div>
    </section>
  );
};

export default WebDesignHeroEN;
