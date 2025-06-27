import { day } from '../utils/day.js';
import { useCallback } from 'react';
import { useLocales } from '../contexts/index.js';
export function useCultureDay() {
    var cultureLocale = useLocales().cultureLocale;
    return useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return day.apply(void 0, args).locale(cultureLocale);
    }, [cultureLocale]);
}
//# sourceMappingURL=usecultureday.js.map