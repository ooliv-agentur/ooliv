
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Helmet } from 'react-helmet-async';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from 'lucide-react';
import ConfettiCelebration from '@/components/ConfettiCelebration';
import { motion } from "framer-motion";

const EnglishThankYou = () => {
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
        <title>Thank You for Your Enquiry | ooliv</title>
        <meta name="description" content="Thank you for your message! We'll get back to you shortly – your advertising agency ooliv from Mainz." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      {/* Add the confetti animation */}
      <ConfettiCelebration />
      
      <div className="h-[calc(100vh-6rem)] flex items-center justify-center bg-white">
        <div className="container px-4">
          <motion.div 
            className="max-w-[720px] mx-auto text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="flex justify-center mb-8" variants={itemVariants}>
              <div className="h-16 w-16 rounded-full bg-[#004d51]/10 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-[#004d51]" />
              </div>
            </motion.div>
            
            <motion.h1 className="text-3xl md:text-4xl font-bold mb-6 text-brand-heading" variants={itemVariants}>
              Thank You for Your Enquiry!
            </motion.h1>
            
            <motion.p className="text-lg mb-8 text-brand-text" variants={itemVariants}>
              We have received your information and will get back to you as soon as possible.
              If you have any questions in the meantime, please email us at{' '}
              <a 
                href="mailto:info@ooliv.de" 
                className="text-[#004d51] hover:underline"
              >
                info@ooliv.de
              </a>.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              <Button 
                asChild
                className="bg-[#004d51] hover:bg-[#003d41]"
              >
                <Link to="/en">
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

export default EnglishThankYou;
