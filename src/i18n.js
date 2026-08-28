import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    de: {
        translation : {
            hero: {
                jobTitle: 'fachinformatikerin\nanwendungsentwicklung',
            },
        },
    },
    en: {
        translation: {
            hero: {
                jobTitle: 'software developer',
            },
        },
    },
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'de',
        interpolation: {
            escapeValue: false
        }
    })

export default i18n