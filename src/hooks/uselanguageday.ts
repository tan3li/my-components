import {day, DayFn} from '../utils/day.js';
import {useCallback} from 'react';
import {useLocales} from '../contexts/index.js';

export function useLanguageDay(): DayFn {
    const {languageLocale} = useLocales();

    return useCallback((...args) => day(...args).locale(languageLocale), [languageLocale]);
}
