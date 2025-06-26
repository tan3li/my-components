import {TranslateFn, useTranslateFn} from './usetranslatefn.js';

export function useTranslatePager(): TranslateFn {
    return useTranslateFn('pager');
}
