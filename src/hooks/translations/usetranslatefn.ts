import {useTranslation} from 'react-i18next';
import {useCallback} from 'react';

export type TranslateFn = (phrase: string, keys?: Record<string, unknown>) => string;

export function useTranslateFn(prefix: string): TranslateFn {
    const {t} = useTranslation();

    return useCallback((phrase: string, keys?: Record<string, unknown>) => t(`${prefix}.${phrase}`, keys), [t, prefix]);
}
