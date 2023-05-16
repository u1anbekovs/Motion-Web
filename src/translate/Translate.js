    import i18n from 'i18next'
    import Backend from 'i18next-http-backend'
    import LanguageDetector from 'i18next-browser-languagedetector'
    import {initReactI18next, useTranslation} from 'react-i18next'
    import React from "react";


    i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
        fallbackLng: 'ru',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie']
        },
        interpolation: {
            escapeValue: false
        }
    })

    const j = () => {
        const { t, i18n } = useTranslation;


        const changeLanguage = (language) => {
            i18n.changeLanguage(language);
        };

        return(
            <div>
                <button onClick={() => changeLanguage("en")}>EN</button>
                <button onClick={() => changeLanguage("ru")}>RU</button>
                <div>{t("text")}</div>
                <div>{t("hello")}</div>
            </div>
        )
    }

    export default i18n