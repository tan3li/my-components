import {emToPx, parsePixelValue, remToPx} from '../../src/utils/cssunithelper.js';

describe('CSS unit helper tests', () => {
    describe('emToPx', () => {
        it('Should convert em value to pixels', () => {
            expect(emToPx(0.5, 16)).toBe(8);
            expect(emToPx(0.5, 12)).toBe(6);
            expect(emToPx(1, 16)).toBe(16);
            expect(emToPx(2, 16)).toBe(32);
        });
    });

    describe('remToPx', () => {
        it('Should convert rem value to pixels', () => {
            expect(remToPx(0.5)).toBe(8);
            expect(remToPx(1)).toBe(16);
            expect(remToPx(2)).toBe(32);
        });
    });

    describe('parsePixelValue', () => {
        it('Should parse pixel string', () => {
            expect(parsePixelValue('5px')).toBe(5);
            expect(parsePixelValue('5.75px')).toBe(5.75);
        });

        it('Should parse rem string', () => {
            expect(parsePixelValue('1rem')).toBe(16);
            expect(parsePixelValue('1.4rem')).toBe(22.4);
        });

        it('Should parse em string', () => {
            expect(parsePixelValue('1em', '12px')).toBe(12);
            expect(parsePixelValue('1.4em', '12px')).toBe(16.8);
        });

        it('Should output NaN for invalid string inputs', () => {
            expect(parsePixelValue('foo')).toBe(NaN);
            expect(parsePixelValue('foorem')).toBe(NaN);
            expect(parsePixelValue('fooem')).toBe(NaN);
            expect(parsePixelValue('fooem', 'bar')).toBe(NaN);
        });
    });
});
