
-- Add a slug field to the content_posts table
ALTER TABLE public.content_posts 
ADD COLUMN slug TEXT;

-- Create an index on the slug field for better performance
CREATE INDEX idx_content_posts_slug ON public.content_posts(slug);

-- Update existing records to extract slug from public_url
UPDATE public.content_posts 
SET slug = CASE 
  WHEN public_url IS NOT NULL THEN
    CASE 
      -- If it's a full URL, extract the last segment
      WHEN public_url ~ '^https?://' THEN
        regexp_replace(
          regexp_replace(public_url, '^https?://[^/]+/?', ''),
          '^.*/', ''
        )
      -- If it's just a path, get the last segment
      ELSE
        regexp_replace(public_url, '^.*/', '')
    END
  ELSE NULL
END
WHERE public_url IS NOT NULL;
