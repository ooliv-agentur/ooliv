-- Create leads table for contact form submissions
CREATE TABLE public.leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  
  -- Contact information
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  industry TEXT NOT NULL,
  
  -- Message and calculation data
  message TEXT,
  calculation_data JSONB,
  
  -- Meta information
  source TEXT DEFAULT 'calculator',
  status TEXT DEFAULT 'new'
);

-- Enable Row Level Security
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow public to insert leads
CREATE POLICY "Public can insert leads"
  ON public.leads
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Allow service role to manage all leads
CREATE POLICY "Service role can manage all leads"
  ON public.leads
  FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);