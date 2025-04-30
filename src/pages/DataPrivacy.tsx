
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DataPrivacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Always redirect to the German privacy policy page
    navigate('/datenschutz');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet>
        <title>Datenschutz | Weiterleitung...</title>
        <meta name="description" content="Weiterleitung zur Datenschutzerklärung." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <p>Weiterleitung zur Datenschutzerklärung...</p>
    </div>
  );
};

export default DataPrivacy;
