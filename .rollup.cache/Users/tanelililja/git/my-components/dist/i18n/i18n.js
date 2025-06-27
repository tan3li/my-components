import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import isChromatic from 'chromatic/isChromatic';
i18n.use(Backend)
    .use(initReactI18next)
    .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    },
    backend: {
        loadPath: "".concat(isChromatic() ? '/' : window.parent.location.pathname, "locales/{{lng}}/{{ns}}.json")
    }
});
export default i18n;
//# sourceMappingURL=i18n.js.map