-- Fix the search path security issue
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
$$ LANGUAGE plpgsql SET search_path = public;