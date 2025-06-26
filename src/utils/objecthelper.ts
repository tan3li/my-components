export const isArray = Array.isArray;

export function isUndefined(obj: unknown): obj is undefined {
    // eslint-disable-next-line no-void
    return obj === void 0;
}

export function isNullOrUndefined(obj: unknown): obj is null | undefined {
    return obj === null || isUndefined(obj);
}

export function isEmptyString(obj: unknown): obj is '' | null | undefined {
    return isNullOrUndefined(obj) || obj === '';
}

export function isEmptyArray(obj: unknown) {
    return isNullOrUndefined(obj) || (isArray(obj) && obj.length === 0);
}

export function isNumber(num: unknown): num is number {
    return typeof num === 'number';
}

export function isObject(obj: unknown): obj is object {
    return typeof obj === 'object';
}
