
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ConfettiCelebration } from "@/components/ConfettiCelebration";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYouPage = () => {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  
  // Set language to English when the component mounts
  useEffect(() => {
    setLanguage('en');
    
    // Setup automatic redirect after 8 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/en', { replace: true });
    }, 8000);
    
    return () => clearTimeout(redirectTimer);
  }, [setLanguage, navigate]);
  
  return (
    <>
      <Helmet>
        <title>Thank you for your inquiry | ooliv digital agency Mainz</title>
        <meta name="description" content="Thanks for contacting ooliv. We've received your message and will get back to you shortly." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ooliv.de/en/thank-you" />
      </Helmet>
      
      <ConfettiCelebration />
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0c2036] to-[#1a2630] px-4 py-16">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-8 text-center text-white border border-white/10">
          <h1 className="text-3xl font-bold mb-6">Thank you for your inquiry!</h1>
          
          <p className="text-lg text-white/90 mb-8">
            We have received your information and will get back to you as soon as possible. 
            If you have any questions in the meantime, feel free to contact us at <a href="mailto:info@ooliv.de" className="text-[#4fd1ca] hover:underline">info@ooliv.de</a>.
          </p>
          
          <Button 
            onClick={() => navigate('/en')} 
            className="bg-[#006064] hover:bg-[#004d51] text-white px-8 py-6 text-lg"
            size="lg"
          >
            Back to Homepage
          </Button>
          
          <p className="text-white/60 mt-8">
            Redirecting to homepage in a few seconds...
          </p>
        </div>
      </div>
    </>
  );
};

export default ThankYouPage;
