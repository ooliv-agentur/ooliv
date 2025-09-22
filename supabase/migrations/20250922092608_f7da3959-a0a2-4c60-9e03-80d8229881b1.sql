-- Enable pg_cron extension for scheduling
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Schedule LinkedIn automation to run every 5 minutes
SELECT cron.schedule(
  'linkedin-automation-executor',
  '*/5 * * * *', -- Run every 5 minutes
  $$
  SELECT
    net.http_post(
        url:='https://ycloufmcjjfvjxhmslbm.supabase.co/functions/v1/linkedinAutomation',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljbG91Zm1jampmdmp4aG1zbGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNTg0MjgsImV4cCI6MjA1ODczNDQyOH0.IGQR9IAllyoHfW_9w_js2KSZQTRXLxUU_aXFT0gCgN4"}'::jsonb,
        body:='{"action": "executePendingActions"}'::jsonb
    ) as request_id;
  $$
);