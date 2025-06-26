import {keymirror} from '../../src/utils/keymirror.js';

describe('keymirror', () => {
    it('Should mirror the keys as string to value', () => {
        expect(keymirror({a: 1, b: null, c: ''})).toEqual({a: 'a', b: 'b', c: 'c'});
    });
});
