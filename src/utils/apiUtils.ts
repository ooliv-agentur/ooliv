
/**
 * Zentrale Header-Konfiguration für alle API-Aufrufe an Supabase-Funktionen
 */
export const getSupabaseHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4",
    "apikey": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4"
  };
  
  console.log("apiUtils.getSupabaseHeaders returning:", headers);
  return headers;
};

/**
 * URL der sendProjectForm-Funktion
 */
export const SEND_PROJECT_FORM_URL = "https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/sendProjectForm";
