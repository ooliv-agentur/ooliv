
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArticleNavigation = () => {
  return (
    <div className="mb-8">
      <Button 
        variant="outline" 
        asChild 
        className="border-medico-turquoise/30 hover:bg-medico-turquoise/10"
      >
        <Link to="/artikel">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zu den Artikeln
        </Link>
      </Button>
    </div>
  );
};

export default ArticleNavigation;
