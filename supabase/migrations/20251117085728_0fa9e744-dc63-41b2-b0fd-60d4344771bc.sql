-- Phase 1: Clean up broken triggers and functions
-- Remove conflicting triggers that call non-existent webhooks

-- Drop all three conflicting triggers on content_posts
DROP TRIGGER IF EXISTS trigger_sitemap_webhook ON public.content_posts;
DROP TRIGGER IF EXISTS "dynamic-sitemap" ON public.content_posts;
DROP TRIGGER IF EXISTS content_posts_webhook_trigger ON public.content_posts;

-- Drop the broken webhook function
DROP FUNCTION IF EXISTS public.notify_sitemap_webhook();

-- Keep log_content_change() function (it's harmless for debugging)
-- Keep the log_content_change trigger (it just logs, doesn't call external webhooks)