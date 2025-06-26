import {updateSelectedItems} from '../../../../src/components/inputs/multiselect/updateselecteditems.js';

describe('updateSelectedItems', function () {
    let selectedItems;

    beforeEach(function () {
        selectedItems = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];
    });

    it('Should add item to selected items', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {value: '4', text: 'Option 4'});

        expect(newSelectedItems).toEqual([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'}
        ]);
    });

    it('Should add item and its children to selected items', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {
            value: '4',
            text: 'Option 4',
            children: [
                {value: '4-1', text: 'Option 4-1'},
                {value: '4-2', text: 'Option 4-2'}
            ]
        });

        expect(newSelectedItems).toEqual([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {
                value: '4',
                text: 'Option 4',
                children: [
                    {value: '4-1', text: 'Option 4-1'},
                    {value: '4-2', text: 'Option 4-2'}
                ]
            },
            {value: '4-1', text: 'Option 4-1'},
            {value: '4-2', text: 'Option 4-2'}
        ]);
    });

    it('Should remove item from selected items', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {value: '3', text: 'Option 3'});

        expect(newSelectedItems).toEqual([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'}
        ]);
    });

    it('Should add group items to selected items', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {
            value: 'g1',
            text: 'Group 1',
            items: [
                {
                    value: '4',
                    text: 'Option 4',
                    children: [
                        {value: '4-1', text: 'Option 4-1'},
                        {value: '4-2', text: 'Option 4-2'}
                    ]
                },
                {value: '5', text: 'Option 5'}
            ]
        });

        expect(newSelectedItems).toEqual([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {
                value: '4',
                text: 'Option 4',
                children: [
                    {value: '4-1', text: 'Option 4-1'},
                    {value: '4-2', text: 'Option 4-2'}
                ]
            },
            {value: '4-1', text: 'Option 4-1'},
            {value: '4-2', text: 'Option 4-2'},
            {value: '5', text: 'Option 5'}
        ]);
    });

    it('Should add group items to selected items #2', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {
            value: 'g1',
            text: 'Group 1',
            items: [
                {value: '1', text: 'Option 1'},
                {
                    value: '2',
                    text: 'Option 2',
                    children: [
                        {value: '3', text: 'Option 3'},
                        {value: '4', text: 'Option 4'}
                    ]
                }
            ]
        });

        expect(newSelectedItems).toEqual([
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'},
            {value: '4', text: 'Option 4'}
        ]);
    });

    it('Should remove group items from selected items', function () {
        const newSelectedItems = updateSelectedItems(selectedItems, {
            value: 'g1',
            text: 'Group 1',
            items: [
                {value: '1', text: 'Option 1'},
                {value: '2', text: 'Option 2', children: [{value: '3', text: 'Option 3'}]}
            ]
        });

        expect(newSelectedItems).toEqual([]);
    });
});
