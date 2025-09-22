import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

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
    const supabaseServiceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey);

    const { action, campaignId, actionType, targetProfile, message } = await req.json();

    if (action === 'executePendingActions') {
      // Get pending actions from all active campaigns
      const { data: pendingActions, error: actionsError } = await supabase
        .from('linkedin_actions')
        .select(`
          *,
          linkedin_campaigns!inner(
            *,
            linkedin_accounts!inner(*)
          )
        `)
        .eq('status', 'pending')
        .lte('scheduled_at', new Date().toISOString())
        .limit(10);

      if (actionsError) {
        console.error('Error fetching pending actions:', actionsError);
        return new Response(JSON.stringify({ error: 'Failed to fetch actions' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      const results = [];

      for (const action of pendingActions || []) {
        try {
          const accessToken = action.linkedin_campaigns.linkedin_accounts.access_token;
          let result = null;

          switch (action.action_type) {
            case 'connection_request':
              result = await sendConnectionRequest(accessToken, action.target_profile_id, action.message_content);
              break;
            case 'message':
              result = await sendMessage(accessToken, action.target_profile_id, action.message_content);
              break;
            case 'like':
              result = await likePost(accessToken, action.target_profile_id);
              break;
            case 'view_profile':
              result = await viewProfile(accessToken, action.target_profile_id);
              break;
            default:
              throw new Error(`Unsupported action type: ${action.action_type}`);
          }

          // Update action status
          await supabase
            .from('linkedin_actions')
            .update({
              status: 'completed',
              executed_at: new Date().toISOString(),
              response_data: result,
            })
            .eq('id', action.id);

          results.push({ actionId: action.id, status: 'completed', result });

          // Add delay between actions to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (error) {
          console.error(`Error executing action ${action.id}:`, error);
          
          // Update action status to failed
          await supabase
            .from('linkedin_actions')
            .update({
              status: 'failed',
              executed_at: new Date().toISOString(),
              error_message: error.message,
            })
            .eq('id', action.id);

          results.push({ actionId: action.id, status: 'failed', error: error.message });
        }
      }

      return new Response(JSON.stringify({ results }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    if (action === 'scheduleAction') {
      // Schedule a new action
      const { data, error } = await supabase
        .from('linkedin_actions')
        .insert({
          campaign_id: campaignId,
          action_type: actionType,
          target_profile_id: targetProfile?.id,
          target_profile_data: targetProfile,
          message_content: message,
          scheduled_at: new Date().toISOString(),
          status: 'pending',
        });

      if (error) {
        console.error('Error scheduling action:', error);
        return new Response(JSON.stringify({ error: 'Failed to schedule action' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true, data }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ error: 'Invalid action' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('LinkedIn automation error:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Helper functions for LinkedIn API interactions
async function sendConnectionRequest(accessToken: string, profileId: string, message?: string) {
  const response = await fetch(`https://api.linkedin.com/v2/invitations`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      invitee: {
        'com.linkedin.voyager.growth.invitation.InviteeProfile': {
          profileId: profileId,
        },
      },
      message: message || 'Würde mich freuen, mich mit Ihnen zu vernetzen!',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LinkedIn connection request failed: ${error}`);
  }

  return await response.json();
}

async function sendMessage(accessToken: string, profileId: string, message: string) {
  const response = await fetch(`https://api.linkedin.com/v2/messages`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipients: [profileId],
      subject: 'Nachricht von OOLIV',
      body: message,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LinkedIn message failed: ${error}`);
  }

  return await response.json();
}

async function likePost(accessToken: string, postId: string) {
  const response = await fetch(`https://api.linkedin.com/v2/reactions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      object: postId,
      reactionType: 'LIKE',
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LinkedIn like failed: ${error}`);
  }

  return await response.json();
}

async function viewProfile(accessToken: string, profileId: string) {
  const response = await fetch(`https://api.linkedin.com/v2/people/(id:${profileId})`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`LinkedIn profile view failed: ${error}`);
  }

  return await response.json();
}