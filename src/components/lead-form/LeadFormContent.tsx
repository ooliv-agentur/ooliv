
import React from 'react';
import LeadFormContainer from './LeadFormContainer';

interface LeadFormContentProps {
  onClose: () => void;
  mode: 'project' | 'prototype';
}

const LeadFormContent: React.FC<LeadFormContentProps> = ({ onClose, mode }) => {
  return <LeadFormContainer onClose={onClose} mode={mode} />;
};

export default React.memo(LeadFormContent);
