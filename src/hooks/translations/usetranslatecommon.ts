import {TranslateFn, useTranslateFn} from './usetranslatefn.js';

export function useTranslateCommon(): TranslateFn {
    return useTranslateFn('common');
}
