-- Create database webhook to trigger sitemap regeneration on content changes
-- This will call the webhook-sitemap-update.js endpoint whenever content_posts is modified

-- First, let's create a function that will make the HTTP request to our webhook
CREATE OR REPLACE FUNCTION notify_sitemap_webhook()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  webhook_url text := 'https://ooliv.de/webhook/sitemap-update';
  payload json;
BEGIN
  -- Build the webhook payload
  payload := json_build_object(
    'type', TG_OP,
    'table', TG_TABLE_NAME,
    'record', CASE WHEN TG_OP = 'DELETE' THEN NULL ELSE row_to_json(NEW) END,
    'old_record', CASE WHEN TG_OP = 'INSERT' THEN NULL ELSE row_to_json(OLD) END
  );

  -- Log the webhook trigger for debugging
  RAISE LOG 'Sitemap webhook triggered: % on % for record %', 
    TG_OP, TG_TABLE_NAME, COALESCE(NEW.id, OLD.id);

  -- Make async HTTP request to webhook endpoint
  PERFORM net.http_post(
    url := webhook_url,
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'User-Agent', 'Supabase-Webhook/1.0'
    ),
    body := payload::jsonb
  );

  -- Return the appropriate record
  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  ELSE
    RETURN NEW;
  END IF;
END;
$$;

-- Create trigger on content_posts table for INSERT, UPDATE, DELETE
DROP TRIGGER IF EXISTS trigger_sitemap_webhook ON public.content_posts;

CREATE TRIGGER trigger_sitemap_webhook
  AFTER INSERT OR UPDATE OR DELETE
  ON public.content_posts
  FOR EACH ROW
  EXECUTE FUNCTION notify_sitemap_webhook();

-- Log that the webhook system is set up
SELECT 'Sitemap webhook trigger created successfully' as status;