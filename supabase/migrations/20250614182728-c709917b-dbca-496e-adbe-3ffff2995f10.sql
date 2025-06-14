
-- Create table for content posts from BabyLoveGrowth.ai
CREATE TABLE public.content_posts (
  id BIGINT PRIMARY KEY,
  title TEXT NOT NULL,
  meta_description TEXT,
  content_html TEXT,
  content_md TEXT,
  language_code TEXT,
  public_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public readable for now
ALTER TABLE public.content_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Public read access for content posts" 
  ON public.content_posts 
  FOR SELECT 
  USING (true);

-- Create policy to allow insert via webhook (using service role)
CREATE POLICY "Allow insert for service role" 
  ON public.content_posts 
  FOR INSERT 
  WITH CHECK (true);

-- Create index for performance when querying latest posts
CREATE INDEX idx_content_posts_created_at ON public.content_posts(created_at DESC);
