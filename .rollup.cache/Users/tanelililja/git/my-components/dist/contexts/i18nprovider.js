import { __assign } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from 'react';
import { getLocalTimeZone } from '@internationalized/date';
import { I18nProvider as ReactAriaI18nProvider } from 'react-aria';
export var I18nContext = createContext({
    cultureLocale: 'en-GB',
    languageLocale: 'en-GB',
    timeZone: getLocalTimeZone()
});
export function useLocales() {
    return useContext(I18nContext);
}
export function I18nProvider(_a) {
    var children = _a.children, cultureLocale = _a.cultureLocale, languageLocale = _a.languageLocale, timeZone = _a.timeZone;
    var value = useMemo(function () { return ({ cultureLocale: cultureLocale, languageLocale: languageLocale, timeZone: timeZone }); }, [cultureLocale, languageLocale, timeZone]);
    return (_jsx(ReactAriaI18nProvider, __assign({ locale: languageLocale }, { children: _jsx(I18nContext, __assign({ value: value }, { children: children })) })));
}
//# sourceMappingURL=i18nprovider.js.map