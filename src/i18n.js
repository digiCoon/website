import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
    de: {
        translation : {
            hero: {
                jobTitle: 'fachinformatikerin\nanwendungsentwicklung',
            },
            projects: {
                heading: '#projekte', // en: '#projects'
                digicoon: {
                    description: 'portfolio-seite, gebaut mit react & vite. eigenes design, responsive, mit interaktiven elementen wie diesem terminal.',
                },
                measy: {
                    description: 'app zum unkomplizierten verabreden mit freunden. teamprojekt aus der umschulung, meine rolle: datenbank & backend-logik.',
                },
                'todo-list': {
                    description: 'to-do-app mit wiederkehrenden aufgaben. aktuell phase 1 von 7 (cli fertig, persistenz & api als nächstes).',
                },
                lottoziehung: {
                    description: 'konsolenprogramm, das eine lottoziehung simuliert. 6 zahlen ziehen, vergleichen, treffer auswerten.',
                },
            },
            experience: {
                heading: '#erfahrung',
                damago: {
                    title: 'fachinformatikerin anwendungsentwicklung',
                    company: '//umschulung @damago gmbh',
                    period: 'jul 25 - heute',
                    details: ['in progress -> ihk-abschluss 27 ', 'java, python, webentwicklung, datenbanken, linux & it-security', 'abschlussprojekt & praktikum @ihk berlin']
                },
                wbs: {
                    title: 'fullstack web & app development',
                    company: '//bootcamp @wbs coding school',
                    period: 'mai 24 - sep 24',
                    details: ['17-wöchiges intensiv-bootcamp w/ zertifikat', 'javascript/react, node.js, sql/nosql, restful apis, git & agile methoden']
                },
                marketing: {
                    title: 'digital marketing & adtech',
                    company: '@[retresco, weventure, roobeo, viafon]: gmbh',
                    period: 'aug 17 - feb 24',
                    details: ['seo- & sea-strategie (inhouse & agenturseitig)', 'tracking-implementierung & reporting', 'kundenbetreuung & workshops']
                },
                arktis: {
                    title: 'it-system kauffrau',
                    company: '//ausbildung @arktis gmbh',
                    period: 'sep 15 - jul 17',
                    details: ['verkürzt: 2 jahre w/ ihk-abschluss', 'it-vertrieb & it-systemlösungen (tk-anlagen)']
                },
            },
            contact: {
                heading: '#kontakt',
                subject: 'betreff',
                message: 'nachricht',
                sending: 'wird gesendet...',
                send: 'abschicken',
                success: 'nachricht gesendet, danke!',
                error: 'etwas ist schiefgelaufen, bitte versuch es später nochmal.',
            },
            footer: {
                legal: 'impressum & datenschutz',
            },
            notFound: {
                text: 'diese seite hat sich in den mülleimer verkrochen.',
                link: 'zurück zur startseite',
            },
            legal: {
                heading: 'Impressum & Datenschutz',
            },
            common: {
                backHome: 'zurück zur startseite',
            },
        },
    },
    en: {
        translation: {
            hero: {
                jobTitle: 'software developer',
            },
            projects: {
                heading: '#projects',
                digicoon: {
                    description: 'portfolio website, built with react & vite. custom design, responsive, with interactive elements like this terminal.',
                },
                measy: {
                    description: 'app for effortless meetups with friends. team project from my bootcamp, my role: database & backend logic.',
                },
                'todo-list': {
                    description: 'to-do app with recurring tasks. currently phase 1 of 7 (cli done, persistence & api next).',
                },
                lottoziehung: {
                    description: 'console program that simulates a lottery draw. draws 6 numbers, compares them, evaluates matches.',
                },
            },
            experience: {
                heading: '#experience',
                damago: {
                    title: 'software developer',
                    company: '//retraining @damago gmbh',
                    period: 'jul 25 - present',
                    details: ["in progress -> cci qualification expected '27", 'java, python, web development, databases, linux & it security', 'final project & internship @ihk berlin']
                },
                wbs: {
                    title: 'fullstack web & app development',
                    company: '//bootcamp @wbs coding school',
                    period: 'may 24 - sep 24',
                    details: ['17-week intensive bootcamp w/ certificate', 'javascript/react, node.js, sql/nosql, restful apis, git & agile methods']
                },
                marketing: {
                    title: 'digital marketing & adtech',
                    company: '@[retresco, weventure, roobeo, viafon]: gmbh',
                    period: 'aug 17 - feb 24',
                    details: ['seo & sea strategy (in-house & agency-side)', 'tracking implementation & reporting', 'client management & workshops']
                },
                arktis: {
                    title: 'it systems sales specialist (cci)',
                    company: '//apprenticeship @arktis gmbh',
                    period: 'sep 15 - jul 17',
                    details: ['shortened: 2 years w/ cci qualification', 'it sales & it system solutions (telecom systems)']
                },
            },
            contact: {
                heading: '#contact',
                subject: 'subject',
                message: 'message',
                sending: 'sending...',
                send: 'send',
                success: 'message sent, thank you!',
                error: 'something went wrong, please try again later.',
            },
            footer: {
                legal: 'impressum & privacy policy',
            },
            notFound: {
                text: 'this page has crawled into the trash can.',
                link: 'back to homepage',
            },
            legal: {
                heading: 'Impressum & Privacy Policy',
            },
            common: {
                backHome: 'back to homepage',
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