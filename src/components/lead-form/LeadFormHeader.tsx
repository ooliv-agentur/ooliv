import React from 'react';

interface LeadFormHeaderProps {
  title: string;
  description: string;
}

const LeadFormHeader: React.FC<LeadFormHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-left pb-6 pr-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: '#ffffff' }}>
        {title}
      </h2>
      <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
        {description}
      </p>
    </div>
  );
};

export default React.memo(LeadFormHeader);
