import {isNullOrUndefined} from './objecthelper.js';

export function getIndexWithPropertyValue<T>(
    propertyName: keyof T,
    value: unknown,
    arrOfObjects: T[] | null | undefined
): number {
    const len = isNullOrUndefined(arrOfObjects) ? 0 : arrOfObjects.length;

    for (let i = 0; i < len; i++) {
        // Checked above that if arrOfObjects is null or undefined, len is 0. So if we get here, arrOfObjects is not null or undefined.
        if (arrOfObjects![i][propertyName] === value) {
            return i;
        }
    }

    return -1;
}

export function getIndexWithPropertyTextValue<
    T extends Record<string, {toLowerCase: <A extends string>() => Lowercase<A>}>
>(propertyName: keyof T, value: string, arrOfObjects: T[] | null, matchCase: boolean): number {
    if (matchCase) {
        return getIndexWithPropertyValue(propertyName, value, arrOfObjects);
    }

    const len = isNullOrUndefined(arrOfObjects) ? 0 : arrOfObjects.length;
    const val = value.toLowerCase();

    for (let i = 0; i < len; i++) {
        if (arrOfObjects![i][propertyName].toLowerCase() === val) {
            return i;
        }
    }

    return -1;
}
