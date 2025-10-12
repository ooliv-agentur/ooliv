import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Lock } from 'lucide-react';
import EnhancedSEOHead from '@/components/seo/EnhancedSEOHead';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already logged in
    if (user) {
      navigate('/linkedin-setup');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Fehler",
        description: "Bitte E-Mail und Passwort eingeben.",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);
    
    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: "Anmeldung fehlgeschlagen",
        description: "Ungültige E-Mail oder Passwort.",
        variant: "destructive"
      });
    } else {
      toast({
        title: "Erfolgreich angemeldet",
        description: "Sie werden weitergeleitet...",
      });
      navigate('/linkedin-setup');
    }
    
    setLoading(false);
  };

  return (
    <>
      <EnhancedSEOHead
        title="Admin Login | ooliv"
        description="Admin-Login für OOLIV LinkedIn Integration"
        canonicalUrl="https://ooliv.de/admin-login"
      />
      <meta name="robots" content="noindex, nofollow" />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <Lock className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-2xl">Admin-Bereich</CardTitle>
            <CardDescription>
              Melden Sie sich an, um auf LinkedIn-Integration zuzugreifen
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">E-Mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@ooliv.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Passwort</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Anmeldung läuft...
                  </>
                ) : (
                  'Anmelden'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AdminLogin;