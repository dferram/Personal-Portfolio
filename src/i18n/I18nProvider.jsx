import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { translations } from './translations';

const DEFAULT_LANGUAGE = 'es';

const I18nContext = createContext({
  language: DEFAULT_LANGUAGE,
  setLanguage: () => {},
  t: () => ({}),
});

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations[DEFAULT_LANGUAGE];

    const translate = (path) => {
      if (!path) return undefined;
      return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), dictionary);
    };

    return {
      language,
      setLanguage,
      dictionary,
      t: translate,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
