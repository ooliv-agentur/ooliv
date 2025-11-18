import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { decryptTokens } from '../_shared/tokenEncryption.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  // Check authentication for LinkedIn functions
  const authHeader = req.headers.get('Authorization');
  if (!authHeader) {
    return new Response(JSON.stringify({ error: 'Unauthorized: Missing authorization header' }), {
      status: 401,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    console.log('🔐 LinkedIn Company Post: Using encrypted token storage');
    
    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { action, accountId, companyId, postContent, imageUrl } = await req.json();

    if (action === 'createCompanyPost') {
      // Get LinkedIn account and decrypt tokens
      const { data: account, error: accountError } = await supabase
        .from('linkedin_accounts')
        .select('*')
        .eq('id', accountId)
        .single();

      if (accountError || !account) {
        return new Response(JSON.stringify({ error: 'LinkedIn account not found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Decrypt tokens securely
      const tokens = await decryptTokens(account);
      const accessToken = tokens.access_token;

      console.log('🔐 Token decrypted successfully for company posting');

      // Create company post
      const postData = {
        author: `urn:li:organization:${companyId}`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
          'com.linkedin.ugc.ShareContent': {
            shareCommentary: {
              text: postContent
            },
            shareMediaCategory: imageUrl ? 'IMAGE' : 'NONE',
            ...(imageUrl && {
              media: [{
                status: 'READY',
                description: {
                  text: 'OOLIV Digital Marketing Post'
                },
                media: imageUrl,
                title: {
                  text: 'OOLIV Digital Marketing'
                }
              }]
            })
          }
        },
        visibility: {
          'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
        }
      };

      const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          'X-Restli-Protocol-Version': '2.0.0'
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Log detailed error server-side
        console.error('LinkedIn company post failed:', {
          status: response.status,
          result: result,
          accountId: accountId,
          timestamp: new Date().toISOString()
        });
        
        // Return generic error to client
        return new Response(JSON.stringify({ 
          error: 'Unable to create company post' 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ 
        success: true, 
        postId: result.id,
        result 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'getCompanies') {
      // Get LinkedIn account and decrypt tokens
      const { data: account, error: accountError } = await supabase
        .from('linkedin_accounts')
        .select('*')
        .eq('id', accountId)
        .single();

      if (accountError || !account) {
        return new Response(JSON.stringify({ error: 'LinkedIn account not found' }), {
          status: 404,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Decrypt tokens securely
      const tokens = await decryptTokens(account);
      const accessToken = tokens.access_token;
      
      // Get companies the user can post for
      const response = await fetch('https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        const error = await response.text();
        // Log detailed error server-side
        console.error('Failed to fetch LinkedIn companies:', {
          status: response.status,
          error: error,
          accountId: accountId,
          timestamp: new Date().toISOString()
        });
        
        // Return generic error to client
        return new Response(JSON.stringify({ 
          error: 'Unable to fetch companies' 
        }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const companiesData = await response.json();
      
      // Get detailed company information
      const companies = [];
      for (const acl of companiesData.elements || []) {
        if (acl.roleAssignee === `urn:li:person:${account.linkedin_user_id}`) {
          try {
            const orgResponse = await fetch(`https://api.linkedin.com/v2/organizations/${acl.organizationalTarget.split(':')[3]}`, {
              headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
            });
            
            if (orgResponse.ok) {
              const orgData = await orgResponse.json();
              companies.push({
                id: acl.organizationalTarget.split(':')[3],
                name: orgData.name,
                vanityName: orgData.vanityName,
                logoUrl: orgData.logoV2?.cropped?.com?.linkedin?.common?.VectorImage?.rootUrl,
                canPost: acl.state === 'APPROVED'
              });
            }
          } catch (error) {
            console.error('Error fetching company details:', error);
          }
        }
      }

      return new Response(JSON.stringify({ companies }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    // Log detailed error server-side
    console.error('LinkedIn company post error:', {
      error: error?.message,
      stack: error?.stack,
      timestamp: new Date().toISOString()
    });
    
    // Return generic error to client
    return new Response(JSON.stringify({ 
      error: 'Unable to complete operation' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});