-- Create sitemap_cache table for persistent sitemap storage
CREATE TABLE IF NOT EXISTS public.sitemap_cache (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    sitemap_xml TEXT NOT NULL,
    url_count INTEGER NOT NULL DEFAULT 0,
    generated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    cache_key TEXT NOT NULL DEFAULT 'main_sitemap',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Enable RLS on sitemap_cache table
ALTER TABLE public.sitemap_cache ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to sitemap cache
CREATE POLICY "Public read access to sitemap cache" 
ON public.sitemap_cache 
FOR SELECT 
USING (true);

-- Create policy to allow service role to insert/update sitemap cache
CREATE POLICY "Service role can manage sitemap cache" 
ON public.sitemap_cache 
FOR ALL 
USING (true)
WITH CHECK (true);

-- Create index on cache_key for faster lookups
CREATE INDEX IF NOT EXISTS idx_sitemap_cache_key ON public.sitemap_cache(cache_key);

-- Create index on generated_at for cleanup and freshness checks
CREATE INDEX IF NOT EXISTS idx_sitemap_cache_generated_at ON public.sitemap_cache(generated_at DESC);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_sitemap_cache_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = 'public';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_sitemap_cache_updated_at
    BEFORE UPDATE ON public.sitemap_cache
    FOR EACH ROW
    EXECUTE FUNCTION public.update_sitemap_cache_updated_at();

-- Create function to clean old sitemap cache entries (keep only latest 5)
CREATE OR REPLACE FUNCTION public.cleanup_old_sitemap_cache()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    -- Delete all but the 5 most recent entries for each cache_key
    WITH ranked_cache AS (
        SELECT id, 
               ROW_NUMBER() OVER (PARTITION BY cache_key ORDER BY generated_at DESC) as rn
        FROM public.sitemap_cache
    )
    DELETE FROM public.sitemap_cache
    WHERE id IN (
        SELECT id FROM ranked_cache WHERE rn > 5
    );
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql SET search_path = 'public';