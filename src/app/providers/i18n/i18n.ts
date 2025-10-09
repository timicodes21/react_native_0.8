import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';
import { StoreKeys } from '@/app/constants/store';

export const AVAILABLE_LANGS = ['en', 'fr', 'es'] as const;
export type AppLanguage = (typeof AVAILABLE_LANGS)[number];

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  es: { translation: es },
};

const DEFAULT_LANGUAGE: AppLanguage = 'es';

/**
 * Initialize i18n
 * Called once at app startup
 */
export async function initI18n(): Promise<typeof i18n> {
  try {
    const persisted = await AsyncStorage.getItem(StoreKeys.APP_LANGUAGE);
    const initial = (persisted ?? DEFAULT_LANGUAGE) as AppLanguage;

    const options: InitOptions = {
      resources,
      lng: initial,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      compatibilityJSON: 'v4', // ✅ latest version
    };

    await i18n.use(initReactI18next).init(options);

    return i18n;
  } catch (error) {
    console.warn('⚠️ i18n initialization error:', error);
    // fallback gracefully
    await i18n.use(initReactI18next).init({
      resources,
      lng: DEFAULT_LANGUAGE,
      fallbackLng: DEFAULT_LANGUAGE,
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
      compatibilityJSON: 'v4',
    });
    return i18n;
  }
}

/**
 * Change and persist app language
 */
export async function setAppLanguage(lang: AppLanguage) {
  await AsyncStorage.setItem(StoreKeys.APP_LANGUAGE, lang);
  await i18n.changeLanguage(lang);
}

/**
 * Reset app language to default (English)
 */
export async function resetToDefaultLanguage() {
  await AsyncStorage.removeItem(StoreKeys.APP_LANGUAGE);
  await i18n.changeLanguage(DEFAULT_LANGUAGE);
}

/**
 * Get the current active language synchronously
 */
export function getCurrentLanguage(): AppLanguage {
  return (i18n.language || DEFAULT_LANGUAGE).split('-')[0] as AppLanguage;
}

export default i18n;
