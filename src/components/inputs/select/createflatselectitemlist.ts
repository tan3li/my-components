import {SelectItemBase} from './selectitem.js';

export function createFlatSelectItemList<TItem extends SelectItemBase<TItem>>(
    selectItems: TItem[],
    includeHeaders?: boolean,
    expandedKeys?: Set<TItem['value']>
) {
    const len = selectItems.length;

    if (len === 0) {
        return selectItems;
    }

    const flatItems: TItem[] = [];

    for (let i = 0; i < len; i++) {
        const selectItem = selectItems[i];
        const {children, items, value} = selectItem;

        if (!items || includeHeaders) {
            flatItems.push(selectItem);
        }

        if (items) {
            flatItems.push(...createFlatSelectItemList(items, includeHeaders, expandedKeys));
        } else if (children && expandedKeys?.has(value) !== false) {
            flatItems.push(...createFlatSelectItemList(children, includeHeaders, expandedKeys));
        }
    }

    return flatItems;
}
