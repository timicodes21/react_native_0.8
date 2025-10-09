import 'i18next';
import en from '@/app/providers/i18n/locales/en.json'; // adjust to your path

declare module 'i18next' {
  interface CustomTypeOptions {
    // Use your English file as the base for type safety
    defaultNS: 'translation';
    resources: {
      translation: typeof en;
    };
  }
}
