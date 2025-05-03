
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  
  // Detect language from URL path for better language handling
  useEffect(() => {
    const isEnglishPath = location.pathname.startsWith('/en');
    if (isEnglishPath && language !== 'en') {
      setLanguage('en');
    } else if (!isEnglishPath && language !== 'de') {
      setLanguage('de');
    }
  }, [location.pathname, language, setLanguage]);
  
  // Determine language for content
  const isEnglish = language === 'en' || location.pathname.startsWith('/en');
  
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  // Animation variants
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
        <title>{isEnglish ? "Page Not Found | ooliv" : "Seite nicht gefunden | ooliv"}</title>
        <meta 
          name="description" 
          content={isEnglish ? "The page you are looking for does not exist." : "Die von Ihnen gesuchte Seite existiert nicht."} 
        />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center bg-gradient-to-br from-white to-brand-backgroundAlt py-16">
        <div className="container px-4">
          <motion.div 
            className="max-w-md mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-7xl font-bold mb-6 text-brand-heading" variants={itemVariants}>
              404
            </motion.div>
            
            <motion.h1 className="text-2xl md:text-3xl font-bold mb-4 text-brand-heading" variants={itemVariants}>
              {isEnglish ? "Page Not Found" : "Seite nicht gefunden"}
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-brand-text" variants={itemVariants}>
              {isEnglish 
                ? "The page you are looking for doesn't exist or has been moved." 
                : "Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben."}
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                className="bg-brand-primary hover:bg-brand-primary/90 text-white flex items-center gap-2"
              >
                <Link to={isEnglish ? "/en" : "/"}>
                  <Home className="h-4 w-4" />
                  {isEnglish ? "Back to Homepage" : "Zurück zur Startseite"}
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
