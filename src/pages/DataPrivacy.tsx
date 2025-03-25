
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DataPrivacy = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the privacy policy page
    navigate('/privacy-policy');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Privacy Policy...</p>
    </div>
  );
};

export default DataPrivacy;
