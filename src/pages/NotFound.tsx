
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  
  // This path is used for the "Return to Home" link
  const homePath = language === 'de' ? '/de' : '/';

  useEffect(() => {
    // If the path starts with /de, set language to German
    if (location.pathname.startsWith('/de')) {
      setLanguage('de');
    }
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname, setLanguage]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          {language === 'de' ? 'Oops! Seite nicht gefunden' : 'Oops! Page not found'}
        </p>
        <Link 
          to={homePath} 
          className="text-blue-500 hover:text-blue-700 underline"
        >
          {language === 'de' ? 'Zurück zur Startseite' : 'Return to Home'}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
