import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Shield, Lock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const LinkedInSetupAuth = () => {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple password check - in production this should be more secure
    const adminPassword = 'ooliv-linkedin-2025';
    
    if (password === adminPassword) {
      // Store auth token in session storage (expires when browser closes)
      sessionStorage.setItem('linkedin-admin-auth', 'authenticated');
      toast({
        title: "Erfolgreich authentifiziert",
        description: "Sie werden zur LinkedIn-Setup-Seite weitergeleitet.",
      });
      navigate('/linkedin-setup');
    } else {
      toast({
        title: "Ungültiges Passwort",
        description: "Bitte überprüfen Sie Ihr Passwort.",
        variant: "destructive"
      });
    }
    
    setIsLoading(false);
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <CardTitle className="text-2xl">Admin-Zugang</CardTitle>
            <p className="text-muted-foreground">
              LinkedIn-Setup erfordert Admin-Berechtigung
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAuth} className="space-y-4">
              <div>
                <Label htmlFor="password">Admin-Passwort</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passwort eingeben"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || !password}
              >
                {isLoading ? 'Überprüfe...' : 'Zugang gewähren'}
              </Button>
            </form>
            
            <div className="mt-6 p-3 bg-amber-50 rounded-lg">
              <p className="text-sm text-amber-700">
                <strong>Sicherheitshinweis:</strong> Dieser Bereich ist nur für 
                autorisierte Administratoren zugänglich.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default LinkedInSetupAuth;