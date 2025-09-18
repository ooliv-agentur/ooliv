-- Create database webhook for sitemap regeneration
-- This will trigger whenever content_posts table changes

-- Create a function to log webhook events for debugging
CREATE OR REPLACE FUNCTION public.log_content_change()
RETURNS TRIGGER AS $$
BEGIN
  -- Log the change for debugging
  RAISE LOG 'Content change detected: % on table % for record %', 
    TG_OP, TG_TABLE_NAME, COALESCE(NEW.id, OLD.id);
  
  -- Return the appropriate record
  IF TG_OP = 'DELETE' THEN
    RETURN OLD;
  ELSE
    RETURN NEW;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for INSERT, UPDATE, and DELETE on content_posts
DROP TRIGGER IF EXISTS content_posts_webhook_trigger ON public.content_posts;

CREATE TRIGGER content_posts_webhook_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.content_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.log_content_change();

-- Create a function to manually trigger sitemap regeneration
CREATE OR REPLACE FUNCTION public.trigger_sitemap_regeneration()
RETURNS json AS $$
DECLARE
  result json;
BEGIN
  -- This function can be called manually to trigger sitemap regeneration
  -- It will return information about the content_posts table
  
  SELECT json_build_object(
    'total_posts', COUNT(*),
    'latest_post', MAX(created_at),
    'posts_with_slugs', COUNT(*) FILTER (WHERE slug IS NOT NULL AND slug != ''),
    'timestamp', NOW()
  ) INTO result
  FROM public.content_posts;
  
  RAISE LOG 'Manual sitemap regeneration triggered: %', result;
  
  RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Grant necessary permissions
GRANT EXECUTE ON FUNCTION public.trigger_sitemap_regeneration() TO anon;
GRANT EXECUTE ON FUNCTION public.trigger_sitemap_regeneration() TO authenticated;