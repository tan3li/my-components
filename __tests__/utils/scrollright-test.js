import {scrollRight} from '../../src/utils/scrollright.js';

describe('scrollRight', function () {
    it('Should set scroll left to max', function () {
        const fakeEl = {scrollLeft: 0, scrollWidth: 100};

        scrollRight(fakeEl);
        expect(fakeEl.scrollLeft).toBe(100);
    });

    it('Should not crash if element not defined', function () {
        scrollRight(null);
    });
});
