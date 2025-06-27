import { isNullOrUndefined } from './objecthelper.js';
export function getIndexWithPropertyValue(propertyName, value, arrOfObjects) {
    var len = isNullOrUndefined(arrOfObjects) ? 0 : arrOfObjects.length;
    for (var i = 0; i < len; i++) {
        // Checked above that if arrOfObjects is null or undefined, len is 0. So if we get here, arrOfObjects is not null or undefined.
        if (arrOfObjects[i][propertyName] === value) {
            return i;
        }
    }
    return -1;
}
export function getIndexWithPropertyTextValue(propertyName, value, arrOfObjects, matchCase) {
    if (matchCase) {
        return getIndexWithPropertyValue(propertyName, value, arrOfObjects);
    }
    var len = isNullOrUndefined(arrOfObjects) ? 0 : arrOfObjects.length;
    var val = value.toLowerCase();
    for (var i = 0; i < len; i++) {
        if (arrOfObjects[i][propertyName].toLowerCase() === val) {
            return i;
        }
    }
    return -1;
}
//# sourceMappingURL=collectionhelper.js.map