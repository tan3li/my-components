import {useSelectedItemsMap} from '../../../../src/components/inputs/multiselect/useselecteditemsmap.js';
import {renderHook} from '@testing-library/react';

describe('useSelectedItemsMap', function () {
    it('Should create map from given items', function () {
        const items = [
            {value: '1', text: 'Option 1'},
            {value: '2', text: 'Option 2'},
            {value: '3', text: 'Option 3'}
        ];

        const {result} = renderHook(() => useSelectedItemsMap(items));
        const map = result.current;

        expect(map.get('1')).toBe(items[0]);
        expect(map.get('2')).toBe(items[1]);
        expect(map.get('3')).toBe(items[2]);
    });
});
