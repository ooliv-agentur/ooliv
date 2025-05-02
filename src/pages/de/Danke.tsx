
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { ConfettiCelebration } from "@/components/ConfettiCelebration";
import { useLanguage } from "@/contexts/LanguageContext";

const Danke = () => {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();
  
  // Set language to German when the component mounts
  useEffect(() => {
    setLanguage('de');
    
    // Setup automatic redirect after 8 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/', { replace: true });
    }, 8000);
    
    return () => clearTimeout(redirectTimer);
  }, [setLanguage, navigate]);

  return (
    <>
      <Helmet>
        <title>Vielen Dank für Ihre Anfrage | ooliv Werbeagentur Mainz</title>
        <meta name="description" content="Danke für Ihre Kontaktaufnahme mit ooliv. Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://ooliv.de/danke" />
      </Helmet>
      
      <ConfettiCelebration />
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0c2036] to-[#1a2630] px-4 py-16">
        <div className="max-w-md w-full bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-xl p-8 text-center text-white border border-white/10">
          <h1 className="text-3xl font-bold mb-6">Vielen Dank für Ihre Anfrage!</h1>
          
          <p className="text-lg text-white/90 mb-8">
            Wir haben Ihre Informationen erhalten und werden uns so schnell wie möglich bei Ihnen melden. 
            Falls Sie in der Zwischenzeit Fragen haben, können Sie uns gerne unter <a href="mailto:info@ooliv.de" className="text-[#4fd1ca] hover:underline">info@ooliv.de</a> kontaktieren.
          </p>
          
          <Button 
            onClick={() => navigate('/')} 
            className="bg-[#006064] hover:bg-[#004d51] text-white px-8 py-6 text-lg"
            size="lg"
          >
            Zurück zur Startseite
          </Button>
          
          <p className="text-white/60 mt-8">
            Weiterleitung zur Startseite in wenigen Sekunden...
          </p>
        </div>
      </div>
    </>
  );
};

export default Danke;
