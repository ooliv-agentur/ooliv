-- Fix content_posts.id to be auto-generated (BIGSERIAL)
-- This fixes the "null value in column id violates not-null constraint" error

-- Drop the existing PRIMARY KEY constraint first
ALTER TABLE public.content_posts DROP CONSTRAINT IF EXISTS content_posts_pkey;

-- Create a sequence for the id column
CREATE SEQUENCE IF NOT EXISTS public.content_posts_id_seq;

-- Alter the id column to use the sequence as default
ALTER TABLE public.content_posts 
  ALTER COLUMN id SET DEFAULT nextval('public.content_posts_id_seq'::regclass);

-- Update the sequence to start from the current max id + 1
SELECT setval('public.content_posts_id_seq', COALESCE((SELECT MAX(id) FROM public.content_posts), 0) + 1, false);

-- Re-add the PRIMARY KEY constraint
ALTER TABLE public.content_posts ADD PRIMARY KEY (id);

-- Ensure the sequence is owned by the column (for proper cleanup on DROP TABLE)
ALTER SEQUENCE public.content_posts_id_seq OWNED BY public.content_posts.id;