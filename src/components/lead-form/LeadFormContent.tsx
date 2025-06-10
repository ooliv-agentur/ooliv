
import React from 'react';
import LeadFormContainer from './LeadFormContainer';

interface LeadFormContentProps {
  onClose: () => void;
}

const LeadFormContent: React.FC<LeadFormContentProps> = ({ onClose }) => {
  return <LeadFormContainer onClose={onClose} />;
};

export default React.memo(LeadFormContent);
