import {useMemo} from 'react';
import {SelectItemBase} from '../select/index.js';

export function useSelectedItemsMap<TItem extends SelectItemBase<TItem>>(selectedItems: TItem[]) {
    return useMemo(() => {
        const map: Map<TItem['value'], TItem> = new Map();

        for (let i = 0, len = selectedItems.length; i < len; i++) {
            const item = selectedItems[i];

            map.set(item.value, item);
        }

        return map;
    }, [selectedItems]);
}
