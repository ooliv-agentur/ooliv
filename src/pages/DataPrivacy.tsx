
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const DataPrivacy = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  useEffect(() => {
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
