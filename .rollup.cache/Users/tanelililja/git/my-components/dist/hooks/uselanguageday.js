import { day } from '../utils/day.js';
import { useCallback } from 'react';
import { useLocales } from '../contexts/index.js';
export function useLanguageDay() {
    var languageLocale = useLocales().languageLocale;
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return day.apply(void 0, args).locale(languageLocale);
    }, [languageLocale]);
}
//# sourceMappingURL=uselanguageday.js.map