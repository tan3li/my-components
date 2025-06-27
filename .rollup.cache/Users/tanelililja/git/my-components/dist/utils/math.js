/*
Max precise number in JS is Number.MAX_SAFE_INTEGER = 2^53 which is about 9 x 10^15, until this number our calculations will be precise
We have max 4 fractional digits when showing qty, price values which is 10^-4. If we make precision 10^-6 that should give us adequate
results (1/100th per last digit). Maximum safe number is thus 10^15 * 10^-6 = 10^9, so we can calculate 1 billion with 4 digits rather precisely.
 */
var precision = 1e6;
export function multiply(a, b) {
    return Math.round(a * b * precision) / precision;
}
export function divide(a, b) {
    return Math.round((a / b) * precision) / precision;
}
export function subtract(a, b) {
    return Math.round((a - b) * precision) / precision;
}
export function add(a, b) {
    return Math.round((a + b) * precision) / precision;
}
export function percentage(a, b) {
    return b === 0 ? 0 : Math.round(divide(a, b) * 100);
}
//# sourceMappingURL=math.js.map