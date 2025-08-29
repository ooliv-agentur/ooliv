import React from 'react';

const PageSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="relative">
      <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      <div className="absolute inset-0 w-8 h-8 border-2 border-transparent border-r-primary/40 rounded-full animate-spin animation-delay-150"></div>
    </div>
  </div>
);

export default PageSpinner;