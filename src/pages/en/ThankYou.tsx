
import React, { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

const ThankYou = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('en');
    
    // Auto-redirect after 8 seconds
    const redirectTimeout = setTimeout(() => {
      // Apply fade-out effect to the content
      const content = document.querySelector('.thank-you-content');
      if (content) {
        content.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      }
      
      // Wait for the fade animation to complete before redirecting
      setTimeout(() => {
        window.location.href = '/en';
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
      <Helmet>
        <title>Thank You for Your Inquiry | ooliv</title>
        <meta name="description" content="Thank you for your message! We will get back to you as soon as possible - your marketing agency ooliv from Mainz." />
        <meta name="robots" content="noindex, nofollow" />
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
              <div className="h-16 w-16 rounded-full bg-[#004d51]/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#004d51]" aria-hidden="true" />
              </div>
            </motion.div>
            
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading" variants={itemVariants}>
              Thank you for your inquiry!
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-brand-text" variants={itemVariants}>
              We have received your information and will contact you as soon as possible. 
              If you have any questions in the meantime, feel free to write to us at{' '}
              <a 
                href="mailto:info@ooliv.de" 
                className="text-[#004d51] hover:underline"
                aria-label="Send email to info@ooliv.de"
              >
                info@ooliv.de
              </a>.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                className="bg-[#004d51] hover:bg-[#003d41]"
              >
                <Link to="/en" aria-label="Back to Homepage">
                  Back to Homepage
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ThankYou;
