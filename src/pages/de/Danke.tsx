
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';
import { H1, Paragraph } from '@/components/ui/typography';
import { getSectionClasses, getContainerClasses } from '@/styles/spacing';

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
      
      <ConfettiCelebration />
      
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-white">
        <div className={getContainerClasses('default')}>
          <motion.div 
            className={`${getContainerClasses('narrow')} text-center thank-you-content`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex justify-center mb-8" variants={itemVariants}>
              <div className="h-16 w-16 rounded-full bg-medico-turquoise/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-medico-turquoise" aria-hidden="true" />
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <H1 alignment="center" className="mb-6">
                Vielen Dank für Ihre Anfrage!
              </H1>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Paragraph alignment="center" className="mb-8 text-medico-darkGreen/80">
                Wir haben Ihre Angaben erhalten und melden uns schnellstmöglich bei Ihnen. 
                Wenn Sie in der Zwischenzeit Fragen haben, schreiben Sie uns gerne an{' '}
                <a 
                  href="mailto:info@ooliv.de" 
                  className="text-medico-turquoise hover:text-medico-turquoise/80 underline"
                  aria-label="E-Mail an info@ooliv.de senden"
                >
                  info@ooliv.de
                </a>.
              </Paragraph>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                variant="primary"
                size="lg"
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
