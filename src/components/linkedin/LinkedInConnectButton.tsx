import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface LinkedInConnectButtonProps {
  onConnected?: (profile: any) => void;
  disabled?: boolean;
}

export const LinkedInConnectButton: React.FC<LinkedInConnectButtonProps> = ({
  onConnected,
  disabled = false
}) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    try {
      setLoading(true);
      
      // Get current user
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        toast({
          title: "Fehler",
          description: "Sie müssen angemeldet sein, um LinkedIn zu verbinden.",
          variant: "destructive"
        });
        return;
      }

      // Get LinkedIn auth URL
      const { data, error } = await supabase.functions.invoke('linkedinAuth', {
        body: { 
          action: 'getAuthUrl',
          userId: user.id 
        }
      });

      if (error) {
        console.error('LinkedIn auth URL error:', error);
        toast({
          title: "Fehler",
          description: "LinkedIn-Verbindung konnte nicht initialisiert werden.",
          variant: "destructive"
        });
        return;
      }

      // Open LinkedIn OAuth in new window
      const authWindow = window.open(
        data.authUrl, 
        'linkedin-auth', 
        'width=600,height=700,scrollbars=yes,resizable=yes'
      );

      // Listen for the auth completion
      const checkAuth = setInterval(async () => {
        try {
          if (authWindow?.closed) {
            clearInterval(checkAuth);
            setLoading(false);
            
            // Check if account was connected successfully
            const { data: accounts } = await supabase
              .from('linkedin_accounts')
              .select('*')
              .eq('user_id', user.id)
              .eq('is_active', true);

            if (accounts && accounts.length > 0) {
              toast({
                title: "Erfolgreich verbunden!",
                description: "Ihr LinkedIn-Account wurde erfolgreich verbunden.",
              });
              onConnected?.(accounts[0]);
            }
          }
        } catch (error) {
          console.error('Auth check error:', error);
        }
      }, 1000);

      // Cleanup if window is not closed after 5 minutes
      setTimeout(() => {
        clearInterval(checkAuth);
        if (!authWindow?.closed) {
          authWindow?.close();
        }
        setLoading(false);
      }, 300000);

    } catch (error) {
      console.error('LinkedIn connect error:', error);
      toast({
        title: "Fehler",
        description: "Ein unerwarteter Fehler ist aufgetreten.",
        variant: "destructive"
      });
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleConnect}
      disabled={disabled || loading}
      className="bg-[#0077B5] hover:bg-[#005885] text-white"
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Linkedin className="mr-2 h-4 w-4" />
      )}
      {loading ? 'Verbinde...' : 'LinkedIn verbinden'}
    </Button>
  );
};