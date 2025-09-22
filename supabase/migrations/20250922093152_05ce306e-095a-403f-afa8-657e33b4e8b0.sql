-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.migrate_linkedin_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- This function will be used to migrate existing plaintext tokens
  -- It will be called from the edge function with proper encryption
  RAISE NOTICE 'Token migration function created - call from edge function with encryption';
END;
$$;