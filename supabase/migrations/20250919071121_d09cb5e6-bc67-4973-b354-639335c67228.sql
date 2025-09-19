-- Create trigger to automatically call webhook function when content_posts changes
CREATE TRIGGER content_posts_webhook_trigger
  AFTER INSERT OR UPDATE OR DELETE ON public.content_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.notify_sitemap_webhook();