
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { 
      status: 405,
      headers: corsHeaders 
    });
  }

  try {
    // Check for Bearer token authentication
    const authHeader = req.headers.get('Authorization');
    const expectedToken = 'Bearer lovable_secret_123';
    
    if (!authHeader || authHeader !== expectedToken) {
      console.log('Authentication failed. Expected token not provided.');
      return new Response('Unauthorized', { 
        status: 401,
        headers: corsHeaders 
      });
    }

    // Parse the JSON payload
    const payload = await req.json();
    console.log('Received webhook payload:', payload);

    // Initialize Supabase client with service role key for bypassing RLS
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Check if post with this ID already exists (idempotency)
    const { data: existingPost } = await supabase
      .from('content_posts')
      .select('id')
      .eq('id', payload.id)
      .single();

    if (existingPost) {
      console.log(`Post with ID ${payload.id} already exists. Skipping.`);
      return new Response('Post already exists', { 
        status: 200,
        headers: corsHeaders 
      });
    }

    // Generate slug from title
    const generateSlug = (title: string): string => {
      return title
        .toLowerCase()
        .trim()
        .replace(/[üÜ]/g, 'ue')
        .replace(/[äÄ]/g, 'ae')
        .replace(/[öÖ]/g, 'oe')
        .replace(/[ß]/g, 'ss')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    };

    const slug = generateSlug(payload.title);

    // Map the payload to our database schema
    // BabyLoveGrowth.ai uses camelCase, our DB uses snake_case
    const { data, error } = await supabase
      .from('content_posts')
      .insert({
        id: payload.id,
        title: payload.title,
        meta_description: payload.metaDescription,
        content_html: payload.content_html,
        content_md: payload.content_markdown,
        language_code: payload.languageCode,
        public_url: payload.publicUrl, // Map camelCase to snake_case
        slug: slug, // Add the generated slug
        created_at: payload.createdAt || new Date().toISOString()
      });

    if (error) {
      console.error('Error inserting content post:', error);
      return new Response('Internal server error', { 
        status: 500,
        headers: corsHeaders 
      });
    }

    console.log('Successfully inserted content post:', data);
    
    return new Response('Content post received and stored', { 
      status: 200,
      headers: corsHeaders 
    });

  } catch (error) {
    console.error('Error processing webhook:', error);
    return new Response('Internal server error', { 
      status: 500,
      headers: corsHeaders 
    });
  }
});
