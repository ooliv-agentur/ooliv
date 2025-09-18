-- Function to generate URL-friendly slugs from German titles
CREATE OR REPLACE FUNCTION generate_slug(title_text TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN LOWER(
    REGEXP_REPLACE(
      REGEXP_REPLACE(
        REGEXP_REPLACE(
          REGEXP_REPLACE(
            REGEXP_REPLACE(
              REGEXP_REPLACE(
                REGEXP_REPLACE(
                  REGEXP_REPLACE(
                    REPLACE(
                      REPLACE(
                        REPLACE(
                          REPLACE(TRIM(title_text), 'ü', 'ue'),
                          'ä', 'ae'
                        ),
                        'ö', 'oe'
                      ),
                      'ß', 'ss'
                    ),
                    '[^a-z0-9\s\-]', '', 'g'
                  ),
                  '\s+', '-', 'g'
                ),
                '\-+', '-', 'g'
              ),
              '^\-', '', 'g'
            ),
            '\-$', '', 'g'
          ),
          'ü', 'ue', 'g'
        ),
        'ä', 'ae', 'g'
      ),
      'ö', 'oe', 'g'
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Update all existing posts that don't have slugs
UPDATE content_posts 
SET slug = generate_slug(title)
WHERE slug IS NULL AND title IS NOT NULL;

-- Verify the update
SELECT COUNT(*) as updated_posts FROM content_posts WHERE slug IS NOT NULL;