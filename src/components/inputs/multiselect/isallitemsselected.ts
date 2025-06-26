import {SelectItemBase} from '../select/index.js';

export function isAllItemsSelected<TItem extends SelectItemBase<TItem>>(
    items: TItem[],
    selectedItemsMap: Map<TItem['value'], TItem>
) {
    let isAllSelected = true;

    for (let i = 0, len = items.length; i < len; i++) {
        const {children, value} = items[i];

        if (!selectedItemsMap.has(value) || (children && !isAllItemsSelected(children, selectedItemsMap))) {
            isAllSelected = false;
            break;
        }
    }

    return isAllSelected;
}
