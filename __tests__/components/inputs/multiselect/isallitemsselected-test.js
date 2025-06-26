import {isAllItemsSelected} from '../../../../src/components/inputs/multiselect/isallitemsselected.js';

describe('isAllItemsSelected', function () {
    it('Should return whether all items are found from map', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {
                value: '3',
                text: 'Option 3',
                children: [{value: '3-1', text: 'Option 3-1', children: [{value: '3-1-1', text: 'Option 3-1-1'}]}]
            }
        ];
        const map = new Map();

        map.set('1', items[0]);
        expect(isAllItemsSelected(items, map)).toBeFalsy();

        map.set('2', items[1]);
        expect(isAllItemsSelected(items, map)).toBeFalsy();

        map.set('3', items[2]);
        expect(isAllItemsSelected(items, map)).toBeFalsy();

        map.set('3-1', items[2].children[0]);
        expect(isAllItemsSelected(items, map)).toBeFalsy();

        map.set('3-1-1', items[2].children[0].children[0]);
        expect(isAllItemsSelected(items, map)).toBeTruthy();
    });
});
