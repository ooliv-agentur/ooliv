-- Fix security warnings by setting proper search_path for functions

-- Update the log_content_change function with proper search_path
CREATE OR REPLACE FUNCTION public.log_content_change()
RETURNS TRIGGER 
LANGUAGE plpgsql
SET search_path = 'public'
AS $$
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
$$;

-- Update the trigger_sitemap_regeneration function with proper search_path
CREATE OR REPLACE FUNCTION public.trigger_sitemap_regeneration()
RETURNS json 
LANGUAGE plpgsql
SET search_path = 'public'
AS $$
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
$$;