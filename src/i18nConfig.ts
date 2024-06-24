import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './trans/en.json';
import deTranslations from './trans/de.json';
import frTranslations from './trans/fr.json';


i18n
    .use(initReactI18next)
    .init({
        react: {
            useSuspense: false,
            transSupportBasicHtmlNodes: true,
            transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span']
        },
        resources: {
            en: {
                translation: enTranslations
            },
            de: {
                translation: deTranslations
            },
            fr: {
                translation: frTranslations
            },


        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
