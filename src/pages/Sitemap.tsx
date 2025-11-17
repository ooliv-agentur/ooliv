import { useEffect } from 'react';

export default function Sitemap() {
  useEffect(() => {
    // Redirect to Edge Function for dynamic sitemap
    window.location.href = 'https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/generateSitemap';
  }, []);
  
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <p>Redirecting to sitemap...</p>
    </div>
  );
}
