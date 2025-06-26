import {TranslateFn, useTranslateFn} from './usetranslatefn.js';

export function useTranslateProject(): TranslateFn {
    return useTranslateFn('project');
}
