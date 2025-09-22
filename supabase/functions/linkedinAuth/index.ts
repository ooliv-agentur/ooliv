import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';
import { encryptTokens } from '../_shared/tokenEncryption.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseAnonKey = Deno.env.get('SUPABASE_ANON_KEY')!;
    const linkedinClientId = Deno.env.get('LINKEDIN_CLIENT_ID')!;
    const linkedinClientSecret = Deno.env.get('LINKEDIN_CLIENT_SECRET')!;

    console.log('🔐 LinkedIn Auth: Using encrypted token storage');
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);

    // Handle LinkedIn OAuth redirect (GET request from LinkedIn)
    if (req.method === 'GET') {
      const url = new URL(req.url);
      const code = url.searchParams.get('code');
      const state = url.searchParams.get('state');
      const error = url.searchParams.get('error');

      console.log('🔗 LinkedIn OAuth redirect received:', { code: !!code, state, error });

      if (error) {
        console.error('LinkedIn OAuth error:', error);
        return new Response(`
          <html>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
              <h2 style="color: #d32f2f;">❌ OAuth Error</h2>
              <p>Error: ${error}</p>
              <p>Description: ${url.searchParams.get('error_description') || 'Unknown error'}</p>
              <p style="color: #666;">This window will close automatically...</p>
              <script>
                setTimeout(() => {
                  window.close();
                }, 3000);
              </script>
            </body>
          </html>
        `, {
          headers: { ...corsHeaders, 'Content-Type': 'text/html' },
        });
      }

      if (!code || !state) {
        console.error('Missing code or state in OAuth redirect');
        return new Response(`
          <html>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
              <h2 style="color: #d32f2f;">❌ OAuth Error</h2>
              <p>Missing authorization code or state parameter</p>
              <p style="color: #666;">This window will close automatically...</p>
              <script>
                setTimeout(() => {
                  window.close();
                }, 3000);
              </script>
            </body>
          </html>
        `, {
          headers: { ...corsHeaders, 'Content-Type': 'text/html' },
        });
      }

      // Exchange code for access token
      console.log('🔄 Exchanging LinkedIn authorization code for access token');
      
      const redirectUri = `${supabaseUrl}/functions/v1/linkedinAuth`;
      
      const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          client_id: linkedinClientId,
          client_secret: linkedinClientSecret,
          redirect_uri: redirectUri,
        }),
      });

      const tokenData = await tokenResponse.json();
      
      if (!tokenResponse.ok) {
        console.error('LinkedIn token exchange failed:', tokenData);
        return new Response(`
          <html>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
              <h2 style="color: #d32f2f;">❌ Token Exchange Error</h2>
              <p>Failed to exchange authorization code for access token</p>
              <p style="color: #666;">This window will close automatically...</p>
              <script>
                setTimeout(() => {
                  window.close();
                }, 3000);
              </script>
            </body>
          </html>
        `, {
          headers: { ...corsHeaders, 'Content-Type': 'text/html' },
        });
      }

      // Get user profile
      const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
        },
      });

      const profileData = await profileResponse.json();

      // Get user's companies
      let companiesData = null;
      try {
        const companiesResponse = await fetch('https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee', {
          headers: {
            'Authorization': `Bearer ${tokenData.access_token}`,
          },
        });
        if (companiesResponse.ok) {
          companiesData = await companiesResponse.json();
        }
      } catch (error) {
        console.log('Companies fetch failed (optional):', error);
      }

      if (!profileResponse.ok) {
        console.error('LinkedIn profile fetch failed:', profileData);
        return new Response(`
          <html>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
              <h2 style="color: #d32f2f;">❌ Profile Fetch Error</h2>
              <p>Failed to fetch LinkedIn profile</p>
              <p style="color: #666;">This window will close automatically...</p>
              <script>
                setTimeout(() => {
                  window.close();
                }, 3000);
              </script>
            </body>
          </html>
        `, {
          headers: { ...corsHeaders, 'Content-Type': 'text/html' },
        });
      }

      // Store LinkedIn account in database with encrypted tokens
      console.log('🔐 Encrypting LinkedIn tokens before storage');
      
      const encryptedTokens = await encryptTokens(tokenData.access_token, tokenData.refresh_token);

      const { data, error: dbError } = await supabase
        .from('linkedin_accounts')
        .upsert({
          user_id: state, // userId passed as state
          linkedin_user_id: profileData.id,
          ...encryptedTokens, // Encrypted tokens
          token_expires_at: new Date(Date.now() + tokenData.expires_in * 1000).toISOString(),
          profile_data: { 
            ...profileData, 
            companies: companiesData?.elements || [] 
          },
          is_active: true,
        }, {
          onConflict: 'linkedin_user_id',
        });

      if (dbError) {
        console.error('Database insert failed:', dbError);
        return new Response(`
          <html>
            <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
              <h2 style="color: #d32f2f;">❌ Database Error</h2>
              <p>Failed to store LinkedIn account information</p>
              <p style="color: #666;">This window will close automatically...</p>
              <script>
                setTimeout(() => {
                  window.close();
                }, 3000);
              </script>
            </body>
          </html>
        `, {
          headers: { ...corsHeaders, 'Content-Type': 'text/html' },
        });
      }

      console.log('✅ LinkedIn account stored with encrypted tokens');

      // Return success page that closes the popup
      return new Response(`
        <html>
          <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
            <div>
              <h2 style="color: #0077B5;">✅ Erfolgreich verbunden!</h2>
              <p>Ihr LinkedIn-Account wurde erfolgreich verbunden.</p>
              <p style="color: #666;">Dieses Fenster wird automatisch geschlossen...</p>
            </div>
            <script>
              setTimeout(() => {
                window.close();
              }, 2000);
            </script>
          </body>
        </html>
      `, {
        headers: { ...corsHeaders, 'Content-Type': 'text/html' },
      });
    }

    // Handle POST requests (programmatic API calls)
    const { action, code, state, userId } = await req.json();

    if (action === 'getAuthUrl') {
      // Generate LinkedIn OAuth URL with company permissions
      const redirectUri = `${supabaseUrl}/functions/v1/linkedinAuth`;
      const scope = 'r_liteprofile,r_emailaddress,w_member_social,r_organization_social,w_organization_social';
      const authUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${linkedinClientId}&redirect_uri=${encodeURIComponent(redirectUri)}&state=${userId}&scope=${encodeURIComponent(scope)}`;

      return new Response(JSON.stringify({ authUrl }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'exchangeCode') {
      // Check authentication for manual code exchange
      const authHeader = req.headers.get('Authorization');
      if (!authHeader) {
        return new Response(JSON.stringify({ error: 'Unauthorized: Missing authorization header' }), {
          status: 401,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Exchange code for access token (manual API call)
      const redirectUri = `${supabaseUrl}/functions/v1/linkedinAuth`;
      
      const tokenResponse = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          client_id: linkedinClientId,
          client_secret: linkedinClientSecret,
          redirect_uri: redirectUri,
        }),
      });

      const tokenData = await tokenResponse.json();
      
      if (!tokenResponse.ok) {
        console.error('LinkedIn token exchange failed:', tokenData);
        return new Response(JSON.stringify({ error: 'Token exchange failed' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Get user profile
      const profileResponse = await fetch('https://api.linkedin.com/v2/me', {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`,
        },
      });

      const profileData = await profileResponse.json();

      // Get user's companies
      let companiesData = null;
      try {
        const companiesResponse = await fetch('https://api.linkedin.com/v2/organizationalEntityAcls?q=roleAssignee', {
          headers: {
            'Authorization': `Bearer ${tokenData.access_token}`,
          },
        });
        if (companiesResponse.ok) {
          companiesData = await companiesResponse.json();
        }
      } catch (error) {
        console.log('Companies fetch failed (optional):', error);
      }

      if (!profileResponse.ok) {
        console.error('LinkedIn profile fetch failed:', profileData);
        return new Response(JSON.stringify({ error: 'Profile fetch failed' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Store LinkedIn account in database with encrypted tokens
      console.log('🔐 Encrypting LinkedIn tokens before storage');
      
      const encryptedTokens = await encryptTokens(tokenData.access_token, tokenData.refresh_token);

      const { data, error } = await supabase
        .from('linkedin_accounts')
        .upsert({
          user_id: state, // userId passed as state
          linkedin_user_id: profileData.id,
          ...encryptedTokens, // Encrypted tokens
          token_expires_at: new Date(Date.now() + tokenData.expires_in * 1000).toISOString(),
          profile_data: { 
            ...profileData, 
            companies: companiesData?.elements || [] 
          },
          is_active: true,
        }, {
          onConflict: 'linkedin_user_id',
        });

      if (error) {
        console.error('Database insert failed:', error);
        return new Response(JSON.stringify({ error: 'Database operation failed' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      console.log('✅ LinkedIn account stored with encrypted tokens');

      return new Response(JSON.stringify({ 
        success: true, 
        profile: profileData,
        account: data 
      }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('LinkedIn auth error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});