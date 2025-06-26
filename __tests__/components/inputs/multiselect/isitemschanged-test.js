import {isItemsChanged} from '../../../../src/components/inputs/multiselect/isitemschanged.js';

describe('isItemsChanged', function () {
    it('Should return false if same array reference', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];

        expect(isItemsChanged(items, items)).toBeFalsy();
    });

    it('Should return true if oldItems not given', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];

        expect(isItemsChanged(items)).toBeTruthy();
    });

    it('Should return true if array lengths differ', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];
        const oldItems = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ];

        expect(isItemsChanged(items, oldItems)).toBeTruthy();
    });

    it('Should return true if array lengths differ #2', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ];
        const oldItems = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];

        expect(isItemsChanged(items, oldItems)).toBeTruthy();
    });

    it('Should return false if same items, same order', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];
        const oldItems = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];

        expect(isItemsChanged(items, oldItems)).toBeFalsy();
    });

    it('Should return false if same items, different order', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];
        const oldItems = [
            {value: '3', text: 'Option 3'},
            {value: '2', text: 'Option 2'},
            {value: '1', text: 'Option 1'}
        ];

        expect(isItemsChanged(items, oldItems)).toBeFalsy();
    });

    it('Should return true if different items', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];
        const oldItems = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '4', text: 'Option 4'}
        ];

        expect(isItemsChanged(items, oldItems)).toBeTruthy();
    });
});
