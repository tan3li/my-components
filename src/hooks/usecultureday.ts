import {day, DayFn} from '../utils/day.js';
import {useCallback} from 'react';
import {useLocales} from '../contexts/index.js';

export function useCultureDay(): DayFn {
    const {cultureLocale} = useLocales();

    return useCallback((...args) => day(...args).locale(cultureLocale), [cultureLocale]);
}
