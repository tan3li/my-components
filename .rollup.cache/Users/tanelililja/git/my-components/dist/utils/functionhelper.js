// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(obj) {
    return typeof obj === 'function';
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function emptyFn() {
    var _args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        _args[_i] = arguments[_i];
    }
    /* Nothing to do here... */
}
export function safeCall(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (isFunction(fn)) {
        return fn.apply(void 0, args);
    }
    return undefined;
}
//# sourceMappingURL=functionhelper.js.map