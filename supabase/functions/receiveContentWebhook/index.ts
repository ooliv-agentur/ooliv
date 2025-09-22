
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { decryptTokens } from '../_shared/tokenEncryption.ts';

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

    // Generate slug using database function for consistency
    const { data: slugData, error: slugError } = await supabase
      .rpc('generate_slug', { title_text: payload.title });
    
    let slug = slugData;
    
    if (slugError || !slug) {
      console.error('Error generating slug or empty result:', slugError);
      // Fallback to simple slug generation
      slug = payload.title
        .toLowerCase()
        .trim()
        .replace(/[üÜäÄöÖß]/g, (match) => {
          const replacements: { [key: string]: string } = {
            'ü': 'ue', 'Ü': 'ue', 'ä': 'ae', 'Ä': 'ae', 
            'ö': 'oe', 'Ö': 'oe', 'ß': 'ss'
          };
          return replacements[match] || match;
        })
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '') || 'fallback-slug';
    }

    console.log(`Generated slug "${slug}" for title "${payload.title}"`);

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
    
    // 🚀 AUTOMATICALLY SHARE NEW ARTICLE ON LINKEDIN
    try {
      await shareArticleOnLinkedIn(supabase, payload, slug);
    } catch (linkedinError) {
      console.error('LinkedIn sharing failed (non-critical):', linkedinError);
      // Don't fail the entire webhook if LinkedIn fails
    }
    
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

// 🚀 AUTOMATIC LINKEDIN SHARING FUNCTION
async function shareArticleOnLinkedIn(supabase: any, payload: any, slug: string) {
  console.log('🔗 Starting automatic LinkedIn sharing for new article...');
  
  // Get active LinkedIn company account
  const { data: linkedinAccount, error: accountError } = await supabase
    .from('linkedin_accounts')
    .select('*')
    .eq('is_active', true)
    .limit(1)
    .single();
    
  if (accountError || !linkedinAccount) {
    console.log('No active LinkedIn account found - skipping LinkedIn sharing');
    return;
  }
  
  // Decrypt tokens
  const tokens = await decryptTokens(linkedinAccount);
  const accessToken = tokens.access_token;
  
  // Get company information from profile
  const companies = linkedinAccount.profile_data?.companies || [];
  if (companies.length === 0) {
    console.log('No company pages found - skipping LinkedIn sharing');
    return;
  }
  
  // Use first available company (usually OOLIV)
  const company = companies[0];
  const companyId = company.organizationalTarget?.split(':')[3];
  
  if (!companyId) {
    console.log('No valid company ID found - skipping LinkedIn sharing');
    return;
  }
  
  // Create engaging LinkedIn post content
  const articleUrl = `https://ooliv.de/artikel/${slug}`;
  const postContent = `🚀 Neuer Artikel veröffentlicht!

${payload.title}

${payload.metaDescription || 'Entdecken Sie unsere neuesten Insights und Strategien für digitales Marketing.'}

Jetzt lesen: ${articleUrl}

#DigitalMarketing #ContentMarketing #OOLIV #SEO #Marketing`;

  // Create LinkedIn company post
  const postData = {
    author: `urn:li:organization:${companyId}`,
    lifecycleState: 'PUBLISHED',
    specificContent: {
      'com.linkedin.ugc.ShareContent': {
        shareCommentary: {
          text: postContent
        },
        shareMediaCategory: 'ARTICLE',
        media: [{
          status: 'READY',
          description: {
            text: payload.metaDescription || 'OOLIV Digital Marketing - Neue Insights'
          },
          originalUrl: articleUrl,
          title: {
            text: payload.title
          }
        }]
      }
    },
    visibility: {
      'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
    }
  };

  console.log('🔗 Posting to LinkedIn company page...');
  
  const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
      'X-Restli-Protocol-Version': '2.0.0'
    },
    body: JSON.stringify(postData),
  });

  if (response.ok) {
    const result = await response.json();
    console.log('✅ Successfully shared article on LinkedIn:', result.id);
  } else {
    const error = await response.text();
    console.error('❌ LinkedIn sharing failed:', error);
    throw new Error(`LinkedIn API error: ${error}`);
  }
}
