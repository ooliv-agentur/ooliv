-- Improve cookie consent security (with proper cleanup)

-- Drop all existing policies on cookie_consents to start fresh
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Users can insert their own cookie consent" ON public.cookie_consents;
    DROP POLICY IF EXISTS "Users can insert validated consent" ON public.cookie_consents;
    DROP POLICY IF EXISTS "Disable public read access to cookie consents" ON public.cookie_consents;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Some policies may not exist, continuing...';
END $$;

-- Create restrictive INSERT policy with validation
CREATE POLICY "Users can insert validated consent"
ON public.cookie_consents
FOR INSERT
WITH CHECK (
  -- Validate session_id is present and has minimum length
  session_id IS NOT NULL 
  AND length(session_id) >= 32
  -- Validate consent_date is recent (within last hour to prevent backdating)
  AND consent_date >= (NOW() - INTERVAL '1 hour')
);

-- Ensure SELECT remains disabled
CREATE POLICY "Disable public read access to cookie consents"
ON public.cookie_consents
FOR SELECT
USING (false);

-- Drop all existing policies on cookie_consent_rate_limit
DO $$ 
BEGIN
    DROP POLICY IF EXISTS "Public can view own rate limits" ON public.cookie_consent_rate_limit;
    DROP POLICY IF EXISTS "Public can insert rate limits" ON public.cookie_consent_rate_limit;
    DROP POLICY IF EXISTS "No public read access to rate limits" ON public.cookie_consent_rate_limit;
    DROP POLICY IF EXISTS "Service role can manage rate limits" ON public.cookie_consent_rate_limit;
EXCEPTION WHEN OTHERS THEN
    RAISE NOTICE 'Some rate limit policies may not exist, continuing...';
END $$;

-- Create restrictive SELECT policy - users should not enumerate other sessions
CREATE POLICY "No public read access to rate limits"
ON public.cookie_consent_rate_limit
FOR SELECT
USING (false);

-- Service role can still manage for validation trigger
CREATE POLICY "Service role can manage rate limits"
ON public.cookie_consent_rate_limit
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Drop unused migration function to reduce attack surface
DROP FUNCTION IF EXISTS public.migrate_linkedin_tokens();

-- Add comment explaining the security model
COMMENT ON POLICY "Users can insert validated consent" ON public.cookie_consents IS 
'Allows cookie consent inserts with validation: session_id must be 32+ chars and consent_date within 1 hour. Rate limiting enforced by validate_cookie_consent trigger.';