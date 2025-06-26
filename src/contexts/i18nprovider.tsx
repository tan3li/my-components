import {createContext, ReactNode, useContext, useMemo} from 'react';
import {getLocalTimeZone} from '@internationalized/date';
import {I18nProvider as ReactAriaI18nProvider} from 'react-aria';

export type LocaleCode =
    | 'en-IE'
    | 'en-GB'
    | 'en-US'
    | 'nb-NO'
    | 'fi-FI'
    | 'da-DK'
    | 'nl-NL'
    | 'de-DE'
    | 'sv-SE'
    | 'et-EE'
    | 'fr-FR'
    | 'it-IT'
    | 'pl-PL'
    | 'pt-PT'
    | 'ru-RU'
    | 'es-ES';

interface Locales {
    cultureLocale: LocaleCode;
    languageLocale: LocaleCode;
    timeZone: string;
}

export const I18nContext = createContext<Locales>({
    cultureLocale: 'en-GB',
    languageLocale: 'en-GB',
    timeZone: getLocalTimeZone()
});

interface I18nProviderProps {
    children: ReactNode;
    /**
     * BCP47 code (en-GB, fi-FI...)
     */
    cultureLocale: LocaleCode;
    /**
     * BCP47 code (en-GB, fi-FI...)
     */
    languageLocale: LocaleCode;
    /**
     * IANA timezone (Europe/London, Europe/Helsinki...)
     */
    timeZone: string;
}

export function useLocales() {
    return useContext(I18nContext);
}

export function I18nProvider({children, cultureLocale, languageLocale, timeZone}: I18nProviderProps) {
    const value = useMemo(() => ({cultureLocale, languageLocale, timeZone}), [cultureLocale, languageLocale, timeZone]);

    return (
        <ReactAriaI18nProvider locale={languageLocale}>
            <I18nContext value={value}>{children}</I18nContext>
        </ReactAriaI18nProvider>
    );
}
