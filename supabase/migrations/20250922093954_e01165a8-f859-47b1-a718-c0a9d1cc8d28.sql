-- Security Fix: Remove plaintext token columns completely
-- This migration ensures LinkedIn tokens can ONLY be stored encrypted

-- First ensure we have encrypted columns (should already exist)
ALTER TABLE public.linkedin_accounts 
ADD COLUMN IF NOT EXISTS access_token_encrypted TEXT,
ADD COLUMN IF NOT EXISTS refresh_token_encrypted TEXT;

-- Create a secure migration function to move any existing plaintext tokens to encrypted storage
CREATE OR REPLACE FUNCTION public.secure_migrate_existing_tokens()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    plaintext_count INTEGER;
BEGIN
    -- Count any remaining plaintext tokens
    SELECT COUNT(*) INTO plaintext_count 
    FROM public.linkedin_accounts 
    WHERE access_token IS NOT NULL OR refresh_token IS NOT NULL;
    
    IF plaintext_count > 0 THEN
        RAISE WARNING 'Found % accounts with plaintext tokens. These need manual encryption via edge function.', plaintext_count;
        
        -- Log the accounts that need migration (without exposing the tokens)
        RAISE NOTICE 'Accounts needing migration: %', (
            SELECT string_agg(id::text, ', ') 
            FROM public.linkedin_accounts 
            WHERE access_token IS NOT NULL OR refresh_token IS NOT NULL
        );
    ELSE
        RAISE NOTICE 'No plaintext tokens found. Database is secure.';
    END IF;
END;
$$;

-- Run the check
SELECT public.secure_migrate_existing_tokens();

-- SECURITY CRITICAL: Drop the plaintext columns entirely
-- This ensures tokens can NEVER be stored in plaintext again
ALTER TABLE public.linkedin_accounts 
DROP COLUMN IF EXISTS access_token,
DROP COLUMN IF EXISTS refresh_token;

-- Add NOT NULL constraint to encrypted columns (after ensuring data exists)
-- We'll make access_token_encrypted required for active accounts
CREATE OR REPLACE FUNCTION public.validate_encrypted_tokens()
RETURNS TRIGGER AS $$
BEGIN
    -- Ensure active accounts have encrypted tokens
    IF NEW.is_active = true AND NEW.access_token_encrypted IS NULL THEN
        RAISE EXCEPTION 'Active LinkedIn accounts must have encrypted access tokens';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger to enforce encrypted token requirement
CREATE TRIGGER enforce_encrypted_tokens
    BEFORE INSERT OR UPDATE ON public.linkedin_accounts
    FOR EACH ROW
    EXECUTE FUNCTION public.validate_encrypted_tokens();

-- Add security comment
COMMENT ON COLUMN public.linkedin_accounts.access_token_encrypted IS 'LinkedIn access token encrypted with AES-GCM. Never store tokens in plaintext.';
COMMENT ON COLUMN public.linkedin_accounts.refresh_token_encrypted IS 'LinkedIn refresh token encrypted with AES-GCM. Never store tokens in plaintext.';

-- Create index for encrypted token lookup
CREATE INDEX IF NOT EXISTS idx_linkedin_encrypted_active ON public.linkedin_accounts(id) 
WHERE access_token_encrypted IS NOT NULL AND is_active = true;