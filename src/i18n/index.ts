import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './locales/fr.json';
import en from './locales/en.json';
import HttpBackend from 'i18next-http-backend';
import ChainedBackend from 'i18next-chained-backend';
import resourcesToBackend from 'i18next-resources-to-backend';

const bundleResources = {
  en,
  fr
}

void i18n
  .use(initReactI18next)
  .use(ChainedBackend)
  .init({
    backend: {
      backends: [
        HttpBackend,
        resourcesToBackend(bundleResources)
      ]
    },
    preload: ['en', 'fr'],
    ns: ['translation'],
    fallbackLng: 'en',
    react: {}
  });

export default i18n;