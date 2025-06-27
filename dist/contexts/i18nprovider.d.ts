import { ReactNode } from 'react';
export type LocaleCode = 'en-IE' | 'en-GB' | 'en-US' | 'nb-NO' | 'fi-FI' | 'da-DK' | 'nl-NL' | 'de-DE' | 'sv-SE' | 'et-EE' | 'fr-FR' | 'it-IT' | 'pl-PL' | 'pt-PT' | 'ru-RU' | 'es-ES';
interface Locales {
    cultureLocale: LocaleCode;
    languageLocale: LocaleCode;
    timeZone: string;
}
export declare const I18nContext: import("react").Context<Locales>;
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
export declare function useLocales(): Locales;
export declare function I18nProvider({ children, cultureLocale, languageLocale, timeZone }: I18nProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=i18nprovider.d.ts.map