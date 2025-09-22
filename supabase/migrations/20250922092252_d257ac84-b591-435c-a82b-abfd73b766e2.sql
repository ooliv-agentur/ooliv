-- Create LinkedIn automation tables
CREATE TABLE public.linkedin_accounts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  linkedin_user_id TEXT NOT NULL UNIQUE,
  access_token TEXT NOT NULL,
  refresh_token TEXT,
  token_expires_at TIMESTAMP WITH TIME ZONE,
  profile_data JSONB,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create LinkedIn automation campaigns table
CREATE TABLE public.linkedin_campaigns (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  linkedin_account_id UUID NOT NULL REFERENCES public.linkedin_accounts(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  target_audience JSONB,
  automation_settings JSONB,
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'active', 'paused', 'completed')),
  start_date TIMESTAMP WITH TIME ZONE,
  end_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create LinkedIn actions table for tracking automation activities
CREATE TABLE public.linkedin_actions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  campaign_id UUID NOT NULL REFERENCES public.linkedin_campaigns(id) ON DELETE CASCADE,
  action_type TEXT NOT NULL CHECK (action_type IN ('connection_request', 'message', 'like', 'comment', 'post', 'view_profile')),
  target_profile_id TEXT,
  target_profile_data JSONB,
  message_content TEXT,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed', 'skipped')),
  scheduled_at TIMESTAMP WITH TIME ZONE,
  executed_at TIMESTAMP WITH TIME ZONE,
  response_data JSONB,
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.linkedin_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.linkedin_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.linkedin_actions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for linkedin_accounts
CREATE POLICY "Users can view their own LinkedIn accounts" 
ON public.linkedin_accounts 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own LinkedIn accounts" 
ON public.linkedin_accounts 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own LinkedIn accounts" 
ON public.linkedin_accounts 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own LinkedIn accounts" 
ON public.linkedin_accounts 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create RLS policies for linkedin_campaigns
CREATE POLICY "Users can view their own LinkedIn campaigns" 
ON public.linkedin_campaigns 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own LinkedIn campaigns" 
ON public.linkedin_campaigns 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own LinkedIn campaigns" 
ON public.linkedin_campaigns 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own LinkedIn campaigns" 
ON public.linkedin_campaigns 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create RLS policies for linkedin_actions
CREATE POLICY "Users can view LinkedIn actions for their campaigns" 
ON public.linkedin_actions 
FOR SELECT 
USING (EXISTS (
  SELECT 1 FROM public.linkedin_campaigns 
  WHERE linkedin_campaigns.id = linkedin_actions.campaign_id 
  AND linkedin_campaigns.user_id = auth.uid()
));

CREATE POLICY "System can insert LinkedIn actions" 
ON public.linkedin_actions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "System can update LinkedIn actions" 
ON public.linkedin_actions 
FOR UPDATE 
USING (true);

-- Create indexes for better performance
CREATE INDEX idx_linkedin_accounts_user_id ON public.linkedin_accounts(user_id);
CREATE INDEX idx_linkedin_accounts_linkedin_user_id ON public.linkedin_accounts(linkedin_user_id);
CREATE INDEX idx_linkedin_campaigns_user_id ON public.linkedin_campaigns(user_id);
CREATE INDEX idx_linkedin_campaigns_status ON public.linkedin_campaigns(status);
CREATE INDEX idx_linkedin_actions_campaign_id ON public.linkedin_actions(campaign_id);
CREATE INDEX idx_linkedin_actions_status ON public.linkedin_actions(status);
CREATE INDEX idx_linkedin_actions_scheduled_at ON public.linkedin_actions(scheduled_at);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_linkedin_accounts_updated_at
    BEFORE UPDATE ON public.linkedin_accounts
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_linkedin_campaigns_updated_at
    BEFORE UPDATE ON public.linkedin_campaigns
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();