import React from 'react';

interface LeadFormHeaderProps {
  title: string;
  description: string;
}

const LeadFormHeader: React.FC<LeadFormHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-left pb-4 pr-12">
      <h2 className="text-xl font-bold text-white mb-2">
        {title}
      </h2>
      <p className="text-white/70 text-sm">
        {description}
      </p>
    </div>
  );
};

export default React.memo(LeadFormHeader);
