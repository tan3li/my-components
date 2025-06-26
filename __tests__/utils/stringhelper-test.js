import {capitalizeFirstLetter, isString, mergeStrings} from '../../src/utils/stringhelper.js';

describe('String helper tests', function () {
    describe('isString', function () {
        it('Should return true if string', function () {
            expect(isString('foobar')).toBeTruthy();
        });

        it('Should return false if not string', function () {
            expect(isString(12345)).toBeFalsy();
            expect(isString({foo: 'bar'})).toBeFalsy();
            expect(isString(null)).toBeFalsy();
            expect(isString(undefined)).toBeFalsy();
            expect(isString()).toBeFalsy();
            expect(isString([1, 2, 3])).toBeFalsy();
            expect(isString(NaN)).toBeFalsy();
        });
    });

    describe('capitalizeFirstLetter', function () {
        it('Should capitalize first letter from given string', function () {
            expect(capitalizeFirstLetter('foobar')).toBe('Foobar');
            expect(capitalizeFirstLetter('test foobar')).toBe('Test foobar');
            expect(capitalizeFirstLetter('tesT FooBar')).toBe('TesT FooBar');
            expect(capitalizeFirstLetter('')).toBe('');
        });
    });

    describe('mergeStrings', function () {
        it('Should merge given strings using given separator', function () {
            expect(mergeStrings(' ', 'foo', 'bar', 'test')).toBe('foo bar test');
        });

        it('Should ignore non-defined values', function () {
            expect(mergeStrings(' ', 'foo', null, 'bar', undefined, 'test', '')).toBe('foo bar test');
        });

        it('Should work with any separator', function () {
            expect(mergeStrings(',', 'foo', null, 'bar', undefined, 'test', '')).toBe('foo,bar,test');
        });

        it('Should return empty string if no strings given', function () {
            expect(mergeStrings(' ')).toBe('');
        });

        it('Should return single string as is', function () {
            expect(mergeStrings(' ', 'foo')).toBe('foo');
        });
    });
});
