import {getInvertedIconName} from '../../src/utils/getinvertediconname.js';
import {iconNames} from '../../src/index.js';

describe('getInvertedIconName', function () {
    describe('Unchanged', function () {
        it('Should return iconName if invert is false', function () {
            expect(getInvertedIconName(iconNames.Info)).toBe(iconNames.Info);
        });
    });

    describe('Inverted', () => {
        it('Should return filled version of iconName', function () {
            expect(getInvertedIconName(iconNames.Info, true)).toBe(iconNames.InfoFilled);
        });

        it('Should return unfilled version of iconName', function () {
            expect(getInvertedIconName(iconNames.InfoFilled, true)).toBe(iconNames.Info);
        });
    });

    describe('Missing icons', function () {
        it('Should return undefined if arguments are undefined', function () {
            expect(getInvertedIconName()).toBeUndefined();
        });
    });
});
