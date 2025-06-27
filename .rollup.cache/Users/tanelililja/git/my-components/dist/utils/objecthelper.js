export var isArray = Array.isArray;
export function isUndefined(obj) {
    // eslint-disable-next-line no-void
    return obj === void 0;
}
export function isNullOrUndefined(obj) {
    return obj === null || isUndefined(obj);
}
export function isEmptyString(obj) {
    return isNullOrUndefined(obj) || obj === '';
}
export function isEmptyArray(obj) {
    return isNullOrUndefined(obj) || (isArray(obj) && obj.length === 0);
}
export function isNumber(num) {
    return typeof num === 'number';
}
export function isObject(obj) {
    return typeof obj === 'object';
}
//# sourceMappingURL=objecthelper.js.map