
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { X, Settings, Cookie } from 'lucide-react';
import { useCookieConsent } from '@/contexts/CookieConsentContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import CookieSettings from './CookieSettings';

const CookieNotification = () => {
  // Always return null to hide the cookie banner
  return null;
};

export default CookieNotification;
