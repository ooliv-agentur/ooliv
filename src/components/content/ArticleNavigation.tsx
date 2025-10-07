
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleNavigation = () => {
  return (
    <div className="mb-12">
      <Button 
        variant="outline" 
        asChild 
        className="border-accent-primary/30 hover:bg-accent-primary/10 font-satoshi font-semibold"
      >
        <Link to="/artikel">
          <ArrowLeft className="w-5 h-5 mr-3" />
          Zurück zu den Artikeln
        </Link>
      </Button>
    </div>
  );
};

export default ArticleNavigation;
