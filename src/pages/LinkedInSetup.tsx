import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Linkedin, AlertCircle, Info } from 'lucide-react';
import { LinkedInConnectButton } from '@/components/linkedin/LinkedInConnectButton';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

interface LinkedInAccount {
  id: string;
  linkedin_user_id: string;
  profile_data: any;
  is_active: boolean;
  created_at: string;
}

const LinkedInSetup = () => {
  const [accounts, setAccounts] = useState<LinkedInAccount[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const { user, loading: authLoading, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadAccounts();
    }
  }, [user]);

  const loadAccounts = async () => {
    if (!user) return;
    
    try {
      // Query using authenticated user ID
      const { data, error } = await supabase
        .from('linkedin_accounts')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (error) {
        console.error('Error loading accounts:', error);
      } else {
        setAccounts(data || []);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccountConnected = (profile: any) => {
    toast({
      title: "LinkedIn erfolgreich verbunden!",
      description: "Neue Artikel werden nun automatisch auf LinkedIn geteilt.",
    });
    loadAccounts();
  };

  if (loading) {
    return (
      <PageLayout>
        <EnhancedSEOHead
          title="LinkedIn Integration Setup | ooliv"
          description="LinkedIn-Integration für automatisches Artikel-Posting einrichten."
          canonicalUrl="https://ooliv.de/linkedin-setup"
        />
        <meta name="robots" content="noindex, follow" />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Lädt...</div>
        </div>
      </PageLayout>
    );
  }

  const isSetupComplete = accounts.length > 0;

  return (
    <PageLayout>
      <EnhancedSEOHead
        title="LinkedIn Integration Setup | ooliv"
        description="LinkedIn-Integration für automatisches Artikel-Posting einrichten."
        canonicalUrl="https://ooliv.de/linkedin-setup"
      />
      <meta name="robots" content="noindex, follow" />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">LinkedIn Integration für Artikel-Posting</h1>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-blue-700">
              <strong>Warum LinkedIn OAuth?</strong><br/>
              • Sie empfangen bereits Artikel über Webhook ✅<br/>
              • Um diese automatisch auf LinkedIn zu posten, brauchen Sie LinkedIn's API<br/>
              • Dafür sind LinkedIn OAuth-Tokens erforderlich (separate von Supabase)
            </p>
          </div>
          <p className="text-muted-foreground">
            Verbinden Sie Ihr LinkedIn-Unternehmenskonto für automatische Artikel-Posts
          </p>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Linkedin className="h-8 w-8 text-[#0077B5]" />
              <div>
                <CardTitle>LinkedIn Unternehmensseite</CardTitle>
                <CardDescription>
                  Automatisches Teilen neuer Blog-Artikel
                </CardDescription>
              </div>
              {isSetupComplete && (
                <Badge variant="default" className="ml-auto">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Aktiv
                </Badge>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {isSetupComplete ? (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">LinkedIn-Integration aktiv</span>
                </div>
                
                {accounts.map((account) => (
                  <div key={account.id} className="bg-muted p-4 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-semibold">
                        {account.profile_data?.firstName?.[0] || 'L'}
                      </div>
                      <div>
                        <p className="font-medium">
                          {account.profile_data?.firstName} {account.profile_data?.lastName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Verbunden am {new Date(account.created_at).toLocaleDateString('de-DE')}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-blue-900 mb-1">
                        ✅ Automatisierung läuft!
                      </p>
                      <p className="text-blue-700">
                        Neue Artikel von BabyLove Growth werden automatisch auf Ihrer 
                        LinkedIn-Unternehmensseite geteilt. Keine weitere Aktion erforderlich.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-amber-600">
                  <AlertCircle className="h-5 w-5" />
                  <span className="font-medium">LinkedIn-Konto nicht verbunden</span>
                </div>
                
                <p className="text-muted-foreground">
                  Verbinden Sie Ihr LinkedIn-Konto, um automatische Artikel-Posts zu aktivieren.
                </p>
                
                <LinkedInConnectButton onConnected={handleAccountConnected} />
                
                <div className="bg-amber-50 p-4 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="h-5 w-5 text-amber-500 mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-amber-900 mb-1">
                        Was passiert nach der Verbindung?
                      </p>
                      <ul className="text-amber-700 space-y-1">
                        <li>• Neue Artikel werden automatisch auf LinkedIn geteilt</li>
                        <li>• Posts erscheinen auf Ihrer Unternehmensseite</li>
                        <li>• Keine manuelle Aktion erforderlich</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Workflow Übersicht</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <p className="font-medium">BabyLove Growth erstellt Artikel</p>
                  <p className="text-sm text-muted-foreground">Automatisch über Webhook</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <p className="font-medium">Artikel erscheint auf OOLIV.de</p>
                  <p className="text-sm text-muted-foreground">Unter /artikel/[artikel-name]</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 ${isSetupComplete ? 'bg-green-500' : 'bg-muted'} text-white rounded-full flex items-center justify-center text-sm font-bold`}>
                  3
                </div>
                <div>
                  <p className="font-medium">Automatisch auf LinkedIn teilen</p>
                  <p className="text-sm text-muted-foreground">
                    {isSetupComplete ? 'Aktiv ✅' : 'Benötigt LinkedIn-Verbindung'}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default LinkedInSetup;
