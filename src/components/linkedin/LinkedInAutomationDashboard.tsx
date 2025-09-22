import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Play, Pause, BarChart3, Users, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LinkedInConnectButton } from './LinkedInConnectButton';

interface LinkedInAccount {
  id: string;
  linkedin_user_id: string;
  profile_data: any;
  is_active: boolean;
  created_at: string;
}

interface LinkedInCampaign {
  id: string;
  name: string;
  description: string;
  status: string;
  automation_settings: any;
  created_at: string;
}

export const LinkedInAutomationDashboard: React.FC = () => {
  const [accounts, setAccounts] = useState<LinkedInAccount[]>([]);
  const [campaigns, setCampaigns] = useState<LinkedInCampaign[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Load LinkedIn accounts
      const { data: accountsData, error: accountsError } = await supabase
        .from('linkedin_accounts')
        .select('*')
        .eq('user_id', user.id)
        .eq('is_active', true);

      if (accountsError) {
        console.error('Error loading accounts:', accountsError);
      } else {
        setAccounts(accountsData || []);
      }

      // Load campaigns
      const { data: campaignsData, error: campaignsError } = await supabase
        .from('linkedin_campaigns')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (campaignsError) {
        console.error('Error loading campaigns:', campaignsError);
      } else {
        setCampaigns(campaignsData || []);
      }

    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccountConnected = (profile: any) => {
    loadData();
  };

  const handleCampaignStatusChange = async (campaignId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('linkedin_campaigns')
        .update({ 
          status: newStatus,
          ...(newStatus === 'active' ? { start_date: new Date().toISOString() } : {})
        })
        .eq('id', campaignId);

      if (error) {
        console.error('Error updating campaign:', error);
        toast({
          title: "Fehler",
          description: "Kampagne konnte nicht aktualisiert werden.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erfolgreich",
          description: `Kampagne wurde ${newStatus === 'active' ? 'gestartet' : 'pausiert'}.`,
        });
        loadData();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'active': return 'default';
      case 'paused': return 'secondary';
      case 'completed': return 'outline';
      default: return 'secondary';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Aktiv';
      case 'paused': return 'Pausiert';
      case 'completed': return 'Abgeschlossen';
      case 'draft': return 'Entwurf';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Lädt LinkedIn-Automatisierung...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">LinkedIn Automatisierung</h1>
        <p className="text-muted-foreground mt-2">
          Verwalten Sie Ihre LinkedIn-Kampagnen und automatisieren Sie Ihre Outreach-Aktivitäten.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Übersicht</TabsTrigger>
          <TabsTrigger value="campaigns">Kampagnen</TabsTrigger>
          <TabsTrigger value="accounts">Konten</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Verbundene Konten</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{accounts.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aktive Kampagnen</CardTitle>
                <Play className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {campaigns.filter(c => c.status === 'active').length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Gesamt Kampagnen</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{campaigns.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nachrichten heute</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">0</div>
              </CardContent>
            </Card>
          </div>

          {accounts.length === 0 && (
            <Card>
              <CardHeader>
                <CardTitle>LinkedIn-Konto verbinden</CardTitle>
                <CardDescription>
                  Verbinden Sie Ihr LinkedIn-Konto, um mit der Automatisierung zu beginnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <LinkedInConnectButton onConnected={handleAccountConnected} />
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Kampagnen</h2>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Neue Kampagne
            </Button>
          </div>

          {campaigns.length === 0 ? (
            <Card>
              <CardContent className="text-center py-8">
                <p className="text-muted-foreground">Noch keine Kampagnen erstellt.</p>
                <Button className="mt-4">
                  <Plus className="mr-2 h-4 w-4" />
                  Erste Kampagne erstellen
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{campaign.name}</CardTitle>
                        {campaign.description && (
                          <CardDescription>{campaign.description}</CardDescription>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusBadgeVariant(campaign.status)}>
                          {getStatusText(campaign.status)}
                        </Badge>
                        {campaign.status === 'draft' || campaign.status === 'paused' ? (
                          <Button 
                            size="sm"
                            onClick={() => handleCampaignStatusChange(campaign.id, 'active')}
                          >
                            <Play className="h-4 w-4" />
                          </Button>
                        ) : campaign.status === 'active' ? (
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleCampaignStatusChange(campaign.id, 'paused')}
                          >
                            <Pause className="h-4 w-4" />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="accounts" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">LinkedIn-Konten</h2>
            <LinkedInConnectButton onConnected={handleAccountConnected} />
          </div>

          <div className="space-y-4">
            {accounts.map((account) => (
              <Card key={account.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#0077B5] rounded-full flex items-center justify-center text-white font-semibold">
                        {account.profile_data?.firstName?.[0] || 'L'}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {account.profile_data?.firstName} {account.profile_data?.lastName}
                        </CardTitle>
                        <CardDescription>
                          Verbunden am {new Date(account.created_at).toLocaleDateString('de-DE')}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant={account.is_active ? 'default' : 'secondary'}>
                      {account.is_active ? 'Aktiv' : 'Inaktiv'}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <h2 className="text-2xl font-semibold">Analytics</h2>
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">Analytics-Funktionen werden bald verfügbar sein.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};