
import React from 'react';
import LeadFormContainer from './LeadFormContainer';

interface LeadFormContentProps {
  onClose: () => void;
  mode: 'project' | 'prototype';
  initialData?: any;
}

const LeadFormContent: React.FC<LeadFormContentProps> = ({ onClose, mode, initialData }) => {
  return <LeadFormContainer onClose={onClose} mode={mode} initialData={initialData} />;
};

export default React.memo(LeadFormContent);
