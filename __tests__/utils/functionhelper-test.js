import {emptyFn, isFunction, safeCall} from '../../src/utils/functionhelper.js';

describe('Function helper tests', function () {
    describe('isFunction', () => {
        it('Should return true for function', () => {
            expect(isFunction(() => 1)).toBe(true);
            expect(
                isFunction(function foo() {
                    return 1;
                })
            ).toBe(true);
        });

        it('Should return false for everything else', () => {
            expect(isFunction(-1)).toBe(false);
            expect(isFunction(null)).toBe(false);
            expect(isFunction(0)).toBe(false);
            expect(isFunction([])).toBe(false);
            expect(isFunction({})).toBe(false);
            expect(isFunction('beer')).toBe(false);
        });
    });

    describe('emptyFn', () => {
        it('Should do nothing', () => {
            emptyFn(1, 'foo', {});
        });
    });

    describe('safeCall', () => {
        function testFn(a, b) {
            return `Called with: ${a}, ${b}`;
        }

        it('Should call function with args', () => {
            expect(safeCall(testFn, 'a', 'b')).toBe('Called with: a, b');
        });

        it('Should not call anything', () => {
            expect(safeCall(undefined, 'a', 'b')).toBe(undefined);
        });
    });
});
