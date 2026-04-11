import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { SEED_DATA } from '../data/seedData';
import { SEED_DATA_FR } from '../data/seedDataFr';
import { SEED_SOURCES } from '../data/seedSources';
import { CATALOG } from '../data/catalog';
import { CATALOG_FR } from '../data/catalogFr';
import { I18N } from '../data/i18n';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(() => localStorage.getItem('esg-lang') || 'en');
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('ob_esg_dark');
    return stored === null ? true : stored === 'true';
  });
  const [currentCompany, setCurrentCompany] = useState(null);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('ob_esg_apikey') || '');
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [view, setView] = useState('home'); // 'home' | 'profile'
  const [loadingOverlay, setLoadingOverlay] = useState(null); // null | { companyName, step, error }
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('ob_esg_history') || '[]'); } catch { return []; }
  });

  // Apply dark mode
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('ob_esg_dark', darkMode);
  }, [darkMode]);

  // Apply language
  useEffect(() => {
    document.documentElement.lang = currentLang;
    localStorage.setItem('esg-lang', currentLang);
  }, [currentLang]);

  // Save API key
  useEffect(() => {
    if (apiKey) localStorage.setItem('ob_esg_apikey', apiKey);
    else localStorage.removeItem('ob_esg_apikey');
  }, [apiKey]);

  // Save search history
  useEffect(() => {
    localStorage.setItem('ob_esg_history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  // Translation function
  const T = useCallback((key, replacements) => {
    const entry = I18N[key];
    if (!entry) return key;
    let text = entry[currentLang] || entry['en'] || key;
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(new RegExp('\\{' + k + '\\}', 'g'), v);
      }
    }
    return text;
  }, [currentLang]);

  // Localize company data
  const getLocalizedData = useCallback((d) => {
    if (currentLang !== 'fr' || !d) return d;
    for (const [key, val] of Object.entries(SEED_DATA)) {
      if (val === d || val.name === d.name) {
        const fr = SEED_DATA_FR[key];
        if (fr) {
          return { ...d, ...fr, tagClasses: fr.tagClasses || d.tagClasses };
        }
      }
    }
    return d;
  }, [currentLang]);

  // Localize catalog
  const getLocalizedCatalog = useCallback(() => {
    if (currentLang !== 'fr') return CATALOG;
    return CATALOG.map(item => {
      const fr = CATALOG_FR[item.id];
      if (!fr) return item;
      return { ...item, name: fr.name, desc: fr.desc, whyMatters: fr.whyMatters };
    });
  }, [currentLang]);

  // Source URL helpers
  const getSourceUrl = useCallback((d, field) => {
    if (!d) return null;
    for (const [key, val] of Object.entries(SEED_DATA)) {
      if (val === d || val.name === d.name) {
        return SEED_SOURCES[key]?.[field] || null;
      }
    }
    return null;
  }, []);

  const getSources = useCallback((d) => {
    if (!d) return [];
    for (const [key, val] of Object.entries(SEED_DATA)) {
      if (val === d || val.name === d.name) {
        return SEED_SOURCES[key]?.sources || [];
      }
    }
    return [];
  }, []);

  // Search history
  const addToHistory = useCallback((name) => {
    setSearchHistory(prev => {
      const filtered = prev.filter(n => n !== name);
      return [name, ...filtered].slice(0, 5);
    });
  }, []);

  const removeFromHistory = useCallback((name) => {
    setSearchHistory(prev => prev.filter(n => n !== name));
  }, []);

  // Locale string
  const locale = currentLang === 'fr' ? 'fr-FR' : 'en-GB';

  const value = {
    currentLang, setCurrentLang,
    darkMode, setDarkMode,
    currentCompany, setCurrentCompany,
    apiKey, setApiKey,
    chatbotOpen, setChatbotOpen,
    chatHistory, setChatHistory,
    view, setView,
    loadingOverlay, setLoadingOverlay,
    settingsOpen, setSettingsOpen,
    sidebarOpen, setSidebarOpen,
    searchHistory, addToHistory, removeFromHistory,
    T, getLocalizedData, getLocalizedCatalog,
    getSourceUrl, getSources, locale,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
