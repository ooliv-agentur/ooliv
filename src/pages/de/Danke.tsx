
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const Danke = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    
    // Auto-redirect after 8 seconds
    const redirectTimeout = setTimeout(() => {
      // Apply fade-out effect to the content
      const content = document.querySelector('.thank-you-content');
      if (content) {
        content.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      }
      
      // Wait for the fade animation to complete before redirecting
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }, 8000);
    
    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [setLanguage]);

  // Create a nice entrance effect for the content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <PageLayout>
      <Helmet prioritizeSeoTags>
        <title>Danke für Ihre Anfrage | ooliv</title>
        <meta name="description" content="Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen – Ihre Werbeagentur ooliv aus Mainz." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ooliv.de/danke" />
      </Helmet>
      
      {/* Add the confetti animation */}
      <ConfettiCelebration />
      
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-white">
        <div className="container px-4">
          <motion.div 
            className="max-w-[720px] mx-auto text-center thank-you-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex justify-center mb-8" variants={itemVariants}>
              <div className="h-16 w-16 rounded-full bg-medico-turquoise/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-medico-turquoise" aria-hidden="true" />
              </div>
            </motion.div>
            
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-6 text-medico-darkGreen" variants={itemVariants}>
              Vielen Dank für Ihre Anfrage!
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-medico-darkGreen/80" variants={itemVariants}>
              Wir haben Ihre Angaben erhalten und melden uns schnellstmöglich bei Ihnen. 
              Wenn Sie in der Zwischenzeit Fragen haben, schreiben Sie uns gerne an{' '}
              <a 
                href="mailto:info@ooliv.de" 
                className="text-medico-turquoise hover:text-medico-turquoise/80 underline"
                aria-label="E-Mail an info@ooliv.de senden"
              >
                info@ooliv.de
              </a>.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                size="lg"
                className="font-semibold bg-medico-yellow text-medico-darkGreen border-none hover:bg-yellow-400"
              >
                <Link to="/" aria-label="Zurück zur Startseite">
                  Zurück zur Startseite
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Danke;
