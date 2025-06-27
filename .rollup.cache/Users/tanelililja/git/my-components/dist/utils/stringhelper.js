export function isString(val) {
    return typeof val === 'string';
}
export function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
export function mergeStrings(separator) {
    var strings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        strings[_i - 1] = arguments[_i];
    }
    return strings.filter(Boolean).join(separator);
}
//# sourceMappingURL=stringhelper.js.map