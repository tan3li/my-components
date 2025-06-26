import {scrollBottom} from '../../src/utils/scrollbottom.js';

describe('scrollBottom', function () {
    it('Should set scroll top to max', function () {
        const fakeEl = {scrollTop: 0, scrollHeight: 100};

        scrollBottom(fakeEl);
        expect(fakeEl.scrollTop).toBe(100);
    });

    it('Should not crash if element not defined', function () {
        scrollBottom(null);
    });
});
