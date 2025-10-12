-- Check and create user_roles table if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'user');
  END IF;
END$$;

CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at timestamp with time zone DEFAULT now() NOT NULL,
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT exists (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own roles" ON public.user_roles;
DROP POLICY IF EXISTS "Service role can manage all roles" ON public.user_roles;
DROP POLICY IF EXISTS "Users can view their own LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Users can insert their own LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Users can update their own LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Users can delete their own LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Admins and owners can view LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Admins and owners can insert LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Admins and owners can update LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Admins and owners can delete LinkedIn accounts" ON public.linkedin_accounts;
DROP POLICY IF EXISTS "Users can view their own LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Users can insert their own LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Users can update their own LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Users can delete their own LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Admins and owners can view LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Admins and owners can insert LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Admins and owners can update LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Admins and owners can delete LinkedIn campaigns" ON public.linkedin_campaigns;
DROP POLICY IF EXISTS "Users can view LinkedIn actions for their campaigns" ON public.linkedin_actions;
DROP POLICY IF EXISTS "Users can insert actions for their own campaigns" ON public.linkedin_actions;
DROP POLICY IF EXISTS "Service role can manage all actions" ON public.linkedin_actions;
DROP POLICY IF EXISTS "Campaign owners and admins can view actions" ON public.linkedin_actions;
DROP POLICY IF EXISTS "Campaign owners and admins can insert actions" ON public.linkedin_actions;
DROP POLICY IF EXISTS "Campaign owners and admins can update actions" ON public.linkedin_actions;

-- Policy: Users can view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Policy: Only service role can manage roles
CREATE POLICY "Service role can manage all roles"
ON public.user_roles
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Update linkedin_accounts RLS policies
CREATE POLICY "Admins and owners can view LinkedIn accounts"
ON public.linkedin_accounts
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can insert LinkedIn accounts"
ON public.linkedin_accounts
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can update LinkedIn accounts"
ON public.linkedin_accounts
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can delete LinkedIn accounts"
ON public.linkedin_accounts
FOR DELETE
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

-- Update linkedin_campaigns RLS policies
CREATE POLICY "Admins and owners can view LinkedIn campaigns"
ON public.linkedin_campaigns
FOR SELECT
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can insert LinkedIn campaigns"
ON public.linkedin_campaigns
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can update LinkedIn campaigns"
ON public.linkedin_campaigns
FOR UPDATE
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins and owners can delete LinkedIn campaigns"
ON public.linkedin_campaigns
FOR DELETE
TO authenticated
USING (
  auth.uid() = user_id OR 
  public.has_role(auth.uid(), 'admin')
);

-- Update linkedin_actions RLS policies with proper campaign ownership checks
CREATE POLICY "Campaign owners and admins can view actions"
ON public.linkedin_actions
FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.linkedin_campaigns
    WHERE linkedin_campaigns.id = linkedin_actions.campaign_id
    AND (
      linkedin_campaigns.user_id = auth.uid() OR 
      public.has_role(auth.uid(), 'admin')
    )
  )
);

CREATE POLICY "Campaign owners and admins can insert actions"
ON public.linkedin_actions
FOR INSERT
TO authenticated
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.linkedin_campaigns
    WHERE linkedin_campaigns.id = linkedin_actions.campaign_id
    AND (
      linkedin_campaigns.user_id = auth.uid() OR 
      public.has_role(auth.uid(), 'admin')
    )
  )
);

CREATE POLICY "Campaign owners and admins can update actions"
ON public.linkedin_actions
FOR UPDATE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.linkedin_campaigns
    WHERE linkedin_campaigns.id = linkedin_actions.campaign_id
    AND (
      linkedin_campaigns.user_id = auth.uid() OR 
      public.has_role(auth.uid(), 'admin')
    )
  )
);

-- Service role can still manage all actions for automation
CREATE POLICY "Service role can manage all actions"
ON public.linkedin_actions
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);