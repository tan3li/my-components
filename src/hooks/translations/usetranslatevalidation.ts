import {TranslateFn, useTranslateFn} from './usetranslatefn.js';

export function useTranslateValidation(): TranslateFn {
    return useTranslateFn('validation');
}
