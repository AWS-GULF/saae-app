import locales from '@/locales';

export const translations = {
  en: locales.en,
  ar: locales.ar,
};

export const getLocale = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('locale') || 'en';
  }
  return 'en';
};

export const setLocale = (locale) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', locale);
    document.documentElement.lang = locale;
  }
}; 