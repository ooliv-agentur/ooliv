-- Add encrypted token fields to linkedin_accounts table
ALTER TABLE public.linkedin_accounts 
ADD COLUMN access_token_encrypted TEXT,
ADD COLUMN refresh_token_encrypted TEXT;

-- Create function for safe token migration (if needed later)
CREATE OR REPLACE FUNCTION public.migrate_linkedin_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- This function will be used to migrate existing plaintext tokens
  -- It will be called from the edge function with proper encryption
  RAISE NOTICE 'Token migration function created - call from edge function with encryption';
END;
$$;

-- Add index for better performance on encrypted fields
CREATE INDEX idx_linkedin_accounts_encrypted_tokens ON public.linkedin_accounts(id) 
WHERE access_token_encrypted IS NOT NULL;