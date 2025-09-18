import React, { useEffect } from 'react';

const Sitemap = () => {
  useEffect(() => {
    // Redirect to the edge function that generates the sitemap
    window.location.href = 'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting to Sitemap...</h1>
        <p>If you are not redirected automatically, <a href="https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap" className="text-primary underline">click here</a>.</p>
      </div>
    </div>
  );
};

export default Sitemap;