"use client";

import { useState, useEffect } from 'react';
import { translations, getLocale, setLocale } from '@/lib/i18n';

export const useLanguage = () => {
  const [currentLocale, setCurrentLocale] = useState('en');
  const [dir, setDir] = useState("ltr")

  useEffect(() => {
    const savedLocale = getLocale();
    setCurrentLocale(savedLocale);
    setLocale(savedLocale);
  }, []);

  const changeLanguage = (newLocale) => {
    setCurrentLocale(newLocale);
    setLocale(newLocale);
    // Force re-render
    window.location.reload();
  };

  const t = (key) => {
    return translations[currentLocale][key] || translations.en[key] || key;
  };

  return {
    locale: currentLocale,
    changeLanguage,
    t,
    dir: currentLocale === 'ar' ? 'rtl' : 'ltr',
  };
}; 