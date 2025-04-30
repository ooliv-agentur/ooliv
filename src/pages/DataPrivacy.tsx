
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Privacy Policy | Redirecting...</title>
        <meta name="description" content="Redirecting to the privacy policy page." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <p>Redirecting to Privacy Policy...</p>
    </div>
  );
};

export default DataPrivacy;
