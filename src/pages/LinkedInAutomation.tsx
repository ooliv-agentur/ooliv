import React from 'react';
import PageLayout from '@/components/PageLayout';
import { LinkedInAutomationDashboard } from '@/components/linkedin/LinkedInAutomationDashboard';

const LinkedInAutomation = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <LinkedInAutomationDashboard />
      </div>
    </PageLayout>
  );
};

export default LinkedInAutomation;