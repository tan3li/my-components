import { multiply } from './math.js';
var ROOT_FONT_SIZE = 16; // browser default, should sync with CSS
export function emToPx(em, fontSize) {
    return multiply(em, fontSize);
}
export function remToPx(rem) {
    return multiply(rem, ROOT_FONT_SIZE);
}
export function parsePixelValue(value, fontSize) {
    var numericValue = parseFloat(value);
    if (value.endsWith('rem')) {
        return remToPx(numericValue);
    }
    else if (value.endsWith('em') && fontSize) {
        return emToPx(numericValue, parsePixelValue(fontSize));
    }
    return numericValue;
}
//# sourceMappingURL=cssunithelper.js.map