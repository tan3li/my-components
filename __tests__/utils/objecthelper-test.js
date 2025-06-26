import {
    isEmptyArray,
    isEmptyString,
    isNullOrUndefined,
    isNumber,
    isObject,
    isUndefined
} from '../../src/utils/objecthelper.js';

describe('Object helper tests', function () {
    describe('isUndefined', function () {
        it('Should return true if undefined', function () {
            expect(isUndefined(undefined)).toBeTruthy();
        });

        it('Should return false if not undefined', function () {
            expect(isUndefined(null)).toBeFalsy();
            expect(isUndefined(1)).toBeFalsy();
            expect(isUndefined('')).toBeFalsy();
            expect(isUndefined({})).toBeFalsy();
        });
    });

    describe('isNullOrUndefined', function () {
        it('Should return true if undefined or null', function () {
            expect(isNullOrUndefined(undefined)).toBeTruthy();
            expect(isNullOrUndefined(null)).toBeTruthy();
        });

        it('Should return false if not undefined or null', function () {
            expect(isNullOrUndefined(1)).toBeFalsy();
            expect(isNullOrUndefined('')).toBeFalsy();
            expect(isNullOrUndefined({})).toBeFalsy();
        });
    });

    describe('isEmptyString', function () {
        it('Should return true if empty string, null or undef', function () {
            expect(isEmptyString(undefined)).toBeTruthy();
            expect(isEmptyString(null)).toBeTruthy();
            expect(isEmptyString('')).toBeTruthy();
        });

        it('Should return false if no empty string, null or undef', function () {
            expect(isEmptyString(1)).toBeFalsy();
            expect(isEmptyString('foo')).toBeFalsy();
            expect(isEmptyString({})).toBeFalsy();
        });
    });

    describe('isEmptyArray', function () {
        it('Should return true if is empty array, null or undef', function () {
            expect(isEmptyArray([])).toBeTruthy();
            expect(isEmptyArray(null)).toBeTruthy();
            expect(isEmptyArray(undefined)).toBeTruthy();
        });

        it('Should return false if not empty array, null or undef', function () {
            expect(isEmptyArray([1, 2])).toBeFalsy();
            expect(isEmptyArray(1)).toBeFalsy();
            expect(isEmptyArray('foo')).toBeFalsy();
            expect(isEmptyArray({})).toBeFalsy();
        });
    });

    describe('isNumber', function () {
        it('Should return true if is number', function () {
            expect(isNumber(5)).toBeTruthy();
            expect(isNumber(-5)).toBeTruthy();
            expect(isNumber(0)).toBeTruthy();
            expect(isNumber(NaN)).toBeTruthy();
        });

        it('Should return false if not number', function () {
            expect(isNumber([1, 2])).toBeFalsy();
            expect(isNumber('123')).toBeFalsy();
            expect(isNumber({})).toBeFalsy();
            expect(isNumber(null)).toBeFalsy();
            expect(isNumber(undefined)).toBeFalsy();
        });
    });

    describe('isObject', function () {
        it('Should return true if is object', function () {
            expect(isObject({})).toBeTruthy();
            expect(isObject([])).toBeTruthy();
            expect(isObject(null)).toBeTruthy();
        });

        it('Should return false if not object', function () {
            expect(isObject(undefined)).toBeFalsy();
            expect(isObject('123')).toBeFalsy();
            expect(isObject(123)).toBeFalsy();
        });
    });
});
