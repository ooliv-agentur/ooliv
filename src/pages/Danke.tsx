
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { motion } from "framer-motion";
import { useLanguage } from '@/contexts/LanguageContext';

// TypeScript declaration for gtag
declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

const Danke = () => {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('de');
    
    // Check if conversion parameter is present
    const urlParams = new URLSearchParams(window.location.search);
    const isConversion = urlParams.get('conversion') === 'true';
    
    // Fire Google Ads conversion event only when coming from form submission
    if (isConversion && typeof window !== 'undefined') {
      // Wait for gtag.js to be fully loaded
      const fireConversion = () => {
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-16783013359/eN08CKjNitkaEO_r4cI-'
          });
          console.log('✅ Google Ads Conversion Event fired:', 'AW-16783013359/eN08CKjNitkaEO_r4cI-');
        } else {
          // Retry if gtag is not ready yet
          setTimeout(fireConversion, 100);
        }
      };
      
      // Start firing conversion with a small delay to ensure script is loaded
      setTimeout(fireConversion, 500);
    }
    
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
      <EnhancedSEOHead
        title="Danke für Ihre Anfrage | ooliv"
        description="Vielen Dank für Ihre Nachricht! Wir melden uns zeitnah bei Ihnen – Ihre Werbeagentur ooliv aus Mainz."
        canonicalUrl="https://ooliv.de/danke"
        robotsContent="noindex, follow"
        keywords="Danke, Anfrage erhalten, ooliv Werbeagentur"
      />
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16783013359"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16783013359');
          `}
        </script>
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
              <div className="h-16 w-16 rounded-full bg-black/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-black" aria-hidden="true" />
              </div>
            </motion.div>
            
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-6 text-black" variants={itemVariants}>
              Vielen Dank für Ihre Anfrage!
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-black/80" variants={itemVariants}>
              Wir haben Ihre Angaben erhalten und melden uns schnellstmöglich bei Ihnen. 
              Wenn Sie in der Zwischenzeit Fragen haben, schreiben Sie uns gerne an{' '}
              <a 
                href="mailto:info@ooliv.de" 
                className="text-black hover:text-black/70 underline font-semibold"
                aria-label="E-Mail an info@ooliv.de senden"
              >
                info@ooliv.de
              </a>.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                size="lg"
                className="bg-black text-white hover:bg-black/90"
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
