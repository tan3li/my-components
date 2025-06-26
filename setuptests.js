import Highcharts from 'highcharts';

Highcharts.setOptions({
    lang: {
        locale: 'fi-FI'
    }
});

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (phrase, keys) => phrase + (keys ? ` ${JSON.stringify(keys)}` : '')
    }),
    initReactI18next: {
        type: '3rdParty',
        // eslint-disable-next-line no-empty-function
        init: () => {}
    },
    I18nextProvider: ({children}) => children
}));
