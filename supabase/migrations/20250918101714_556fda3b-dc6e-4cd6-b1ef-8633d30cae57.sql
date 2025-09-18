-- Update all existing articles that have null slugs
UPDATE content_posts 
SET slug = generate_slug(title) 
WHERE slug IS NULL AND title IS NOT NULL;