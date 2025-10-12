-- Fix CRITICAL: linkedin_actions unrestricted write access
-- Remove overly permissive policies
DROP POLICY IF EXISTS "System can insert LinkedIn actions" ON public.linkedin_actions;
DROP POLICY IF EXISTS "System can update LinkedIn actions" ON public.linkedin_actions;

-- Add proper policies that restrict access to campaign owners
CREATE POLICY "Users can insert actions for their own campaigns"
ON public.linkedin_actions
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.linkedin_campaigns
    WHERE linkedin_campaigns.id = linkedin_actions.campaign_id
    AND linkedin_campaigns.user_id = auth.uid()
  )
);

CREATE POLICY "Service role can manage all actions"
ON public.linkedin_actions
FOR ALL
USING (auth.jwt()->>'role' = 'service_role');

-- Fix IMPORTANT: cookie_consents unrestricted inserts
-- Add rate limiting and validation
CREATE TABLE IF NOT EXISTS public.cookie_consent_rate_limit (
  session_id text PRIMARY KEY,
  consent_count integer DEFAULT 1,
  first_consent_at timestamp with time zone DEFAULT now(),
  last_consent_at timestamp with time zone DEFAULT now()
);

ALTER TABLE public.cookie_consent_rate_limit ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view own rate limits"
ON public.cookie_consent_rate_limit
FOR SELECT
USING (true);

CREATE POLICY "Public can insert rate limits"
ON public.cookie_consent_rate_limit
FOR INSERT
WITH CHECK (true);

-- Add validation function for cookie consents
CREATE OR REPLACE FUNCTION public.validate_cookie_consent()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  consent_count integer;
  first_consent timestamp with time zone;
BEGIN
  -- Check rate limiting (max 10 consents per session per hour)
  SELECT 
    cookie_consent_rate_limit.consent_count,
    cookie_consent_rate_limit.first_consent_at
  INTO consent_count, first_consent
  FROM public.cookie_consent_rate_limit
  WHERE session_id = NEW.session_id;
  
  IF consent_count IS NOT NULL THEN
    -- Reset if more than 1 hour has passed
    IF first_consent < now() - interval '1 hour' THEN
      UPDATE public.cookie_consent_rate_limit
      SET consent_count = 1,
          first_consent_at = now(),
          last_consent_at = now()
      WHERE session_id = NEW.session_id;
    ELSIF consent_count >= 10 THEN
      RAISE EXCEPTION 'Rate limit exceeded for cookie consents';
    ELSE
      UPDATE public.cookie_consent_rate_limit
      SET consent_count = consent_count + 1,
          last_consent_at = now()
      WHERE session_id = NEW.session_id;
    END IF;
  ELSE
    INSERT INTO public.cookie_consent_rate_limit (session_id)
    VALUES (NEW.session_id);
  END IF;
  
  -- Validate session_id format (prevent injection)
  IF NEW.session_id !~ '^[a-zA-Z0-9_-]{10,128}$' THEN
    RAISE EXCEPTION 'Invalid session_id format';
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER validate_cookie_consent_trigger
BEFORE INSERT ON public.cookie_consents
FOR EACH ROW
EXECUTE FUNCTION public.validate_cookie_consent();