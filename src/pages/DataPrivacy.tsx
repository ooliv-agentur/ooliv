
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { useMetaTags } from '@/hooks/useMetaTags';

const DataPrivacy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  // Use our custom hook to set meta tags consistently
  useMetaTags({
    title: "Datenschutz | ooliv",
    description: "Informationen zum Datenschutz bei ooliv. Erfahren Sie, wie wir Ihre Daten schützen und verarbeiten.",
    canonicalPath: "/datenschutz"
  });

  React.useEffect(() => {
    // Redirect to the appropriate language privacy policy page
    if (language === 'de') {
      navigate('/datenschutz');
    } else {
      navigate('/privacy-policy');
    }
  }, [navigate, language]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Privacy Policy...</p>
    </div>
  );
};

export default DataPrivacy;
