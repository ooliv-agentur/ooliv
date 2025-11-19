
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  
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
      <EnhancedSEOHead
        title="Seite nicht gefunden | ooliv Digitalagentur"
        description="Diese Seite existiert leider nicht. Entdecken Sie unsere Services: Digitale Strategie, Webdesign, Webentwicklung und KI-Integration."
        canonicalUrl="https://ooliv.de/404"
      />
      <meta name="robots" content="noindex, follow" />
      
      <div className="min-h-[calc(100vh-12rem)] flex items-center justify-center bg-gradient-to-br from-white to-brand-backgroundAlt py-16">
        <div className="container px-4">
          <motion.div 
            className="max-w-lg mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="text-7xl font-bold mb-6 text-brand-heading" variants={itemVariants}>
              404
            </motion.div>
            
            <motion.h1 className="text-2xl md:text-3xl font-bold mb-4 text-brand-heading" variants={itemVariants}>
              Diese Seite gibt es bei ooliv nicht
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-brand-text" variants={itemVariants}>
              Die Seite, die Sie suchen, existiert leider nicht. Aber keine Sorge – Uli und das ooliv-Team helfen Ihnen gerne weiter!
            </motion.p>
            
            <motion.div className="space-y-3 mb-8" variants={itemVariants}>
              <p className="text-sm font-semibold text-brand-heading mb-3">Beliebte Seiten:</p>
              <div className="flex flex-col gap-2">
                <Link to="/" className="text-brand-primary hover:underline text-sm">→ Startseite</Link>
                <Link to="/strategie" className="text-brand-primary hover:underline text-sm">→ Digitale Strategie</Link>
                <Link to="/webdesign" className="text-brand-primary hover:underline text-sm">→ Webdesign</Link>
                <Link to="/webentwicklung" className="text-brand-primary hover:underline text-sm">→ Webentwicklung</Link>
                <Link to="/ki-technologien" className="text-brand-primary hover:underline text-sm">→ KI-Integration</Link>
                <Link to="/referenzen" className="text-brand-primary hover:underline text-sm">→ Erfolgsgeschichten</Link>
                <Link to="/kontakt" className="text-brand-primary hover:underline text-sm">→ Kontakt</Link>
              </div>
            </motion.div>
            
            <motion.div className="flex flex-col sm:flex-row gap-3 justify-center" variants={itemVariants}>
              <Button 
                asChild
                className="bg-brand-primary hover:bg-brand-primary/90 text-white flex items-center gap-2"
              >
                <Link to="/">
                  <Home className="h-4 w-4" />
                  Zur Startseite
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="flex items-center gap-2"
                onClick={() => window.dispatchEvent(new Event('open-lead-form'))}
              >
                <button type="button">
                  Mit ooliv durchstarten
                </button>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
