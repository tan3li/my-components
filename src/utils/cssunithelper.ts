import {multiply} from './math.js';

const ROOT_FONT_SIZE = 16; // browser default, should sync with CSS

export function emToPx(em: number, fontSize: number): number {
    return multiply(em, fontSize);
}

export function remToPx(rem: number): number {
    return multiply(rem, ROOT_FONT_SIZE);
}

export function parsePixelValue(value: string, fontSize?: string): number {
    const numericValue = parseFloat(value);

    if (value.endsWith('rem')) {
        return remToPx(numericValue);
    } else if (value.endsWith('em') && fontSize) {
        return emToPx(numericValue, parsePixelValue(fontSize));
    }

    return numericValue;
}
